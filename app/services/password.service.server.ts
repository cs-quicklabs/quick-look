import { v4 as uuidv4 } from "uuid";
import { db } from "~/database/connection.server";
import { addHoursToDate } from "~/utils/date.server";
import { sendMail } from "./mail.service.server";

import bcrypt from 'bcryptjs'
import { json } from "@remix-run/node";

export async function sendResetPasswordLink(email: string, url: string) {
  const user = await db.user.findFirst({ where: { email } });

  if (!user) {
    throw json({success: false, message: 'User not found'}, {status: 404})
  }

  const generatedToken = uuidv4() as string;
  try {
    await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: "Reset Password",
      text: `${url}/reset-password/${generatedToken}`,
    });
    await createPasswordResetLink(user.id, generatedToken)
    return true;
  } catch {
    throw new Error("Something went wrong");
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
    await db.resetPasswordLink.delete({
        where: {
            userId
        }
    })
}