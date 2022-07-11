import { json, redirect } from '@remix-run/node'
import { db } from '~/database/connection.server'
import { SendMail } from '~/types/sendmail.type'
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
    return redirect('tokenerror')
  }
}

export async function sendAccountVerificationMail(
  to: string,
  url: string,
  generatedToken: string
) {
  let userData = await findUserByEmail(to)
  try {
    await sendMail({
      to,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Email Verification',
      text: `${url}/verification/${generatedToken}`,
      html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${
        userData?.firstname + ' ' + userData?.lastname
      },</p>
      <p>Please click on below link to verify your email.</p>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Verify my mail</a>
      <p>If you didn't request this, please ignore this email.</p>
      `,
    })
  } catch (error) {
    throw json({ success: false, message: error }, { status: 500 })
  }
}
