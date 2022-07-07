
import { json } from "@remix-run/node";
import { db } from "~/database/connection.server";
import { SendMail } from "~/types/sendmail.type";
import { checkTokenValidation } from "./userVerification.service.server";

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
                {success: false, message: 'Something unexpected happend!'}, 
                {status: 500})
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
    } else { // redirect to error page token invalid 
        throw json({
            success: false,
            message: 'Verification Token Invalid'
        })
    }
}


export async function sendAccountVerificationMail(to: string, url: string, generatedToken: string) {
    try{
        await sendMail({
            to,
            from: process.env.SENDGRID_EMAIL as string,
            subject: 'Email Verification',
            text: `${url}/verification/${generatedToken}`,
            html: `<h1 style=" font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Click on the Link below to Verify your mail</h1>
            <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; font-size: 22px; border:2px solid blue; border-radius:5px; padding:5px"> Click to Verify</a>
            <div style="margin-top:40px">
            <h3>QuickLook.me</h3>
            <span>Describing you with just one link</span></div>`,
        })
    }
    catch(error){
        throw json({success: false, message: error}, {status: 500 })
    }

}