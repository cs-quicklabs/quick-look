import { RegisterForm } from "~/types/regirsterForm.server";
import bcrypt from 'bcryptjs'
import { db } from "~/database/connection.server";
import { User } from "@prisma/client";
import { nameCasing } from "~/utils/string.server";


export async function createUser(userRegister: RegisterForm){
    const password = await bcrypt.hash(userRegister.password, 10)
    const user = await db.user.create({
        data: {
            firstname: nameCasing(userRegister.firstname),
            lastname: nameCasing(userRegister.lastname),
            username: userRegister.username.toLocaleLowerCase(),
            email: userRegister.email.toLocaleLowerCase(),
            password
        }
    })
    return {
        id: user.id,
        email: user.email
    }
}

export async function findUserByEmail(email: string): Promise<any>{
    let lowercasedEmail = email.toLocaleLowerCase();
    const user = await db.user.findFirst({
        where: {
            email: lowercasedEmail
        }
    })
    return user? user : false
}

export async function checkUserVerificationStatus(email: string) {
    let lowerCasedEmail = email.toLocaleLowerCase();
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

export async function changeUserPassword(userId: string, password:string){
    await db.user.update({
        where: {
            id: userId
        },
        data: {
            password: await bcrypt.hash(password, 10)
        }
    })
}

export async function getUserById(id: string){
    const user = await db.user.findFirst({
        where: {
            id
        }
    })
    return user 
}