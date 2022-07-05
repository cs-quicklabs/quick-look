import { RegisterForm } from "~/types/regirsterForm.server";
import bcrypt from 'bcryptjs'
import { db } from "~/database/connection.server";
import { User } from "@prisma/client";


export async function createUser(userRegister: RegisterForm){
    const password = await bcrypt.hash(userRegister.password, 10)
    const user = await db.user.create({
        data: {
            firstname: userRegister.firstname,
            lastname: userRegister.lastname,
            username: userRegister.username,
            email: userRegister.email,
            password
        }
    })
    return {id: user.id, email: user.email}
}

export async function findUserByEmail(email: string): Promise<any>{
    const user= await db.user.findFirst({
        where: {
            email: email
        }
    })
    return user? user : undefined
}

export async function checkUserVerificationStatus(email: string) {
    const user= await db.user.findFirst({
        where: {
            email: email
        }
    })
    if(user?.isVerified == true){
        return true
    }
    return false
}