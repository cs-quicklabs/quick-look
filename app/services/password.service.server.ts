import { v4 as uuidv4 } from "uuid";
import { db } from "~/database/connection.server";
import { addHoursToDate, differenceInHours } from "~/utils/date.server";
import { sendMail } from "./mail.service.server";

import bcrypt from 'bcryptjs'
import { json, redirect } from "@remix-run/node";
import { findUserByEmail } from "./user.service.serevr";
import { createUserSession } from "./auth.service.server";

export async function sendResetPasswordLink(email: string, url: string) {
  let userData = await findUserByEmail(email)

  if (!userData) {
    return false;
  }
  
  const generatedToken = uuidv4() as string;
  try {
    await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: "Reset Password",
      text: `${url}/verification/${generatedToken}`,
      html: `<p style=" font-family: Arial, Helvetica, sans-serif; ">Hello  ${userData?.firstname + ' ' + userData?.lastname
        },</p>
      <p>Someone has requested a link to change your password. You can do this through the link below.</p>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; color:blue; "> Change my password</a>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Your password won't change until you access the link above and create a new one.</p>`,
    });
    await createPasswordResetLink(userData.id, generatedToken)
    await createUserSession(userData?.id, '/confirmforgotpassword')
    return true;
  } catch {
    throw json(
      {
        error: `Something went wrong while resetting password.`,
        fields: { email },
      },
      { status: 400 },
    )
  }
}

export async function createPasswordResetLink(userId: string, token: string) {
  const hashedToken = await bcrypt.hash(token, 10)
  const linkSent = await db.resetPasswordLink.findFirst({
    where: { userId }
  })
  if (linkSent) {
    await db.resetPasswordLink.update({
      where: { userId },
      data: {
        uniqueString: hashedToken,
        expiresAt: await addHoursToDate(new Date(Date.now()), 6)
      }
    })
  } else {
    await db.resetPasswordLink.create({
      data: {
        userId,
        uniqueString: hashedToken,
        expiresAt: await addHoursToDate(new Date(Date.now()), 6)
      }
    })
  }
}

export async function deletePasswordResetLink(userId: string) {

  const existsResetPasswordToken = await db.resetPasswordLink.findFirst({
    where: {
      userId
    }
  });

  if (existsResetPasswordToken) {
    await db.resetPasswordLink.delete({
      where: {
        userId
      }
    })
    return true
  }
  return redirect('/login ')
}

export async function verifyResetPasswordLink(token: string, userId: string) {

  const resetPasswordLink = await db.resetPasswordLink.findFirst({
    where: {
      userId,
    }
  });
  if (!resetPasswordLink) {
    return redirect('/tokenerror');
  }
  const isSameToken = await bcrypt.compare(token, resetPasswordLink?.uniqueString as string);
  if (isSameToken) {
    if (resetPasswordLink && (await differenceInHours(new Date(Date.now()), resetPasswordLink?.expiresAt) <= 6)) {
      return true;
    }
  }
  return redirect('/tokenerror');
}

export async function resetPassword(userId: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const resetPassword = await db.user.update({
    data: {
      password: hashedPassword
    },
    where: {
      id: userId
    }
  });

  if (!resetPassword) {
    throw json(
      {
        error: `Something went wrong while resetting password.`,
        fields: { password },
      },
      { status: 400 },
    )
  }
  return true;
}