import { json } from '@remix-run/node'
import { db } from '~/database/connection.server'
import type { SendMail } from '~/types/sendmail.type'
import { getHostUrl } from '~/utils/url.server'
import { findUserByEmail } from './user.service.server'
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
      return json({ success: false, message: 'Something unexpected happend!' }, { status: 500 })
    })
}

export async function verifyEmail(token: string, userId: string) {
  const isTokenValid = await checkTokenValidation(userId, token)
  if (isTokenValid) {
    await db.profile.update({
      where: {
        userId: userId,
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

export async function sendAccountVerificationMail(to: string, url: string, generatedToken: string) {
  let userData = await findUserByEmail(to)
  try {
    const verificationHostUrl = await getHostUrl(url)
    await sendMail({
      to,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Quick Bio: Email Verification',
      text: `${verificationHostUrl}verification/account/${userData.id}/${generatedToken}`,
      html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${
        userData?.firstname + ' ' + userData?.lastname
      },</p>
      <p>Please click on below link to verify your email.</p>
      <a href=${verificationHostUrl}verification/account/${
        userData.id
      }/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Verify my mail</a>
      <p>If you didn't request this, please ignore this email.</p>
      `,
    })
  } catch (error) {
    throw json({ success: false, message: error }, { status: 500 })
  }
}

export async function sendResetPasswordMail(to: string, url: string, generatedToken: string) {
  let userData = await findUserByEmail(to)
  const verificationHostUrl = await getHostUrl(url)
  try {
    await sendMail({
      to,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Quick Bio: Reset Password',
      text: `${verificationHostUrl}verification/reset-password/${userData.id}/${generatedToken}`,
      html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${
        userData?.firstname + ' ' + userData?.lastname
      },</p>
      <p>Someone has requested a link to change your password. You can do this through the link below.</p>
      <a href=${verificationHostUrl}verification/reset-password/${
        userData.id
      }/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Change my password</a>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Your password won't change until you access the link above and create a new one.</p>`,
    })
    return true
  } catch (error) {
    throw json(
      {
        success: false,
        message: { error },
      },
      { status: 500 }
    )
  }
}

export type userDataType = {
  id: string
  firstname: string
  lastname: string
  email: string
  createdBy: string
}

export async function sendSetPasswordMail(args: {
  userData: userDataType
  generatedToken: string
}) {
  const { userData, generatedToken } = args
  const verificationHostUrl = process.env.REACT_APP_DOMAIN

  await sendMail({
    to: userData.email,
    from: process.env.SENDGRID_EMAIL as string,
    subject: 'Quick Bio: Account Verification and Password Setup',
    text: `${verificationHostUrl}/auth/set-password/${userData.id}/${generatedToken}`,
    html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${
      userData?.firstname + ' ' + userData?.lastname
    },</p>
      <p>We are pleased to inform you that your account on QuickBio, created via ${
        userData.createdBy
      }, is now active and ready for use. To complete the setup process, please follow the link below to verify your account and set your password.</p>
      
      <a href=${verificationHostUrl}/auth/set-password/${
        userData.id
      }/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Verify my account</a>`,
  })

  return true
}
