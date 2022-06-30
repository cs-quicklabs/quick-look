
import { json } from "@remix-run/node";
import { db } from "~/database/connection.server";
import { SendMail } from "~/types/sendmail.type";
import { checkTokenValidation } from "./userVerification.service.server";

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_KEY)

export async function sendMail({ to, from, subject, text, html }: SendMail) {
    let emailStatus;
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
            emailStatus = response[0].statusCode
        })
        .catch((error: any) => {
            throw error
        })
}

export async function verifyEmail(token: string, userId: string) {
    const isTokenValid = await checkTokenValidation(userId, token);
    if (isTokenValid) {
        await db.user.update({
            where: {
                id: userId
            },
            data: {
                isVerified: true
            }
        })
        return true
    } else {
        throw json({
            success: false,
            message: 'Verification Token Invalid'
        })
    }
}