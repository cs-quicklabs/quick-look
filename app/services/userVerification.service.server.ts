import { db } from "~/database/connection.server";
import { addHoursToDate } from "~/utils/date.server";
import bcrypt from 'bcryptjs'

export async function createUserVerificationToken(userId: string, token: string) {
    const hashedToken = await bcrypt.hash(token, 10)
    await db.userVerification.create({
        data: {
            userId,
            uniqueString: hashedToken,
            expiresAt: await addHoursToDate(new Date(Date.now()), 6)
        }
    })
}

export async function deleteUserVerificationToken(userId: string){
    await db.userVerification.delete({
        where: {
            userId
        }
    })
}