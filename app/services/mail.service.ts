import { SendMail } from "~/types/sendmail.type";

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_KEY)

export async function sendMail({ to, from, subject, text, html }: SendMail) {
    let emailStatus ;
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