import { v4 as uuidv4 } from "uuid";
import { db } from "~/database/connection.server";
import { addHoursToDate, differenceInHours } from "~/utils/date.server";
import { sendMail } from "./mail.service.server";

import bcrypt from 'bcryptjs'
import { json, redirect } from "@remix-run/node";

export async function sendResetPasswordLink(email: string, url: string) {
  const user = await db.user.findFirst({ where: { email } });

  if (!user) {
    return false;
  }

  const generatedToken = uuidv4() as string;
  try {
    await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: "Reset Password",
      text: `${url}/verification/${generatedToken}`,
      html: `<h1 style=" font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Click on the Link below to reset your password</h1>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; font-size: 22px; border:2px solid blue; border-radius:5px; padding:5px"> Reset Password</a>
      <div style="margin-top:40px">
      <h3>QuickLook.me</h3>
      <span>Describing you with just one link</span></div>`,
    });
    await createPasswordResetLink(user.id, generatedToken)
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
    if(linkSent) {
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

export async function deletePasswordResetLink(userId: string){
  
   const linkDeleted =  await db.resetPasswordLink.delete({
        where: {
            userId
        }
    });
    if(!linkDeleted) return false;
    return true;
}

export async function verifyResetPasswordLink(token: string, userId: string) {
  const resetPasswordLink = await db.resetPasswordLink.findFirst({
      where: {
          userId,
      }
  });
  const isSameToken = await bcrypt.compare(token, resetPasswordLink?.uniqueString as string);
  if(isSameToken){            
      if (resetPasswordLink && (await differenceInHours(new Date(Date.now()), resetPasswordLink?.expiresAt) <= 6)){
          return true;
      }
  }
  return false;
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

  if(!resetPassword) { 
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