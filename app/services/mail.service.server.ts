import { json, redirect } from '@remix-run/node'
import { db } from '~/database/connection.server'
import { SendMail } from '~/types/sendmail.type'
import { getHostUrl } from '~/utils/url.server'
import { findUserByEmail } from './user.service.serevr'
import { checkTokenValidation } from './userVerification.service.server'

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_KEY)

export async function sendMail({ to, from, subject, text, html }: SendMail) {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  }
  await sgMail
    .send(msg)
    .then((response: any) => {
      return true
    })
    .catch((error: any) => {
      return json(
        { success: false, message: 'Something unexpected happend!' },
        { status: 500 }
      )
    })
}

export async function verifyEmail(token: string, userId: string) {
  const isTokenValid = await checkTokenValidation(userId, token)
  if (isTokenValid) {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        isVerified: true,
      },
    })
    return true
  } else {
    return false
  }
}

export async function sendAccountVerificationMail(
  to: string,
  url: string,
  generatedToken: string
) {
  let userData = await findUserByEmail(to)
  try {
    const verificationHostUrl = await getHostUrl(url);
    console.log(verificationHostUrl)
    await sendMail({
      to,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Email Verification',
      text: `${verificationHostUrl}verification/account/${userData.id}/${generatedToken}`,
      html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${
        userData?.firstname + ' ' + userData?.lastname
      },</p>
      <p>Please click on below link to verify your email.</p>
      <a href=${verificationHostUrl}verification/account/${userData.id}/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Verify my mail</a>
      <p>If you didn't request this, please ignore this email.</p>
      `,
    })
  } catch (error) {
    throw json({ success: false, message: error }, { status: 500 })
  }
}

export async function sendResetPasswordMail(to: string, url: string, generatedToken: string) {
  let userData = await findUserByEmail(to)
  const verificationHostUrl = await getHostUrl(url);
  try {
    await sendMail({
      to,
      from: process.env.SENDGRID_EMAIL as string,
      subject: "Reset Password",
      text: `${verificationHostUrl}verification/reset-password/${userData.id}/${generatedToken}`,
      html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${userData?.firstname + ' ' + userData?.lastname
        },</p>
      <p>Someone has requested a link to change your password. You can do this through the link below.</p>
      <a href=${verificationHostUrl}verification/reset-password/${userData.id}/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Change my password</a>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Your password won't change until you access the link above and create a new one.</p>`,
    });
    return true;
  } catch(error) {
    throw json(
      {
        success: false,
        message: { error },
      },
      { status: 500 },
    )
  }
}