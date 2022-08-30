import { User } from "@prisma/client";
import { db } from "~/database/connection.server";

export async function addPrimaryImage(link: string, user: User){ 
    await db.profileImage.update({
        where: {
            userId: user.id
        },
        data: {
            primaryImage: link,
            isUsingPrimaryDefault: false
        }
    })
    return true;
} 

export async function addSecondaryImage(link: string, user: User){
    await db.profileImage.update({
        where: {
            userId: user.id
        },
        data: {
            secondaryImage: link,
            isUsingSecondaryDefault: false
        }
    })
    return true;
} 

export async function deleteImage(imageKey: string, user?: User) {
    if (imageKey === 'deletePrimary') {
        await db.profileImage.update({
            where: {
                userId: user?.id
            },
            data: {
                primaryImage: '',
                isUsingPrimaryDefault: false
            }
        })
    } else if (imageKey === 'deleteSecondary') {
        await db.profileImage.update({
            where: {
                userId: user?.id
            },
            data: {
                secondaryImage: '',
                isUsingSecondaryDefault: false
            }
        })
    } 
}

export async function restorePrimaryImage(user: User){
    await db.profileImage.update({
        where:{
            userId: user.id
        },
        data: {
            isUsingPrimaryDefault: true
        }
    })
}

export async function restoreSecondaryImage(user: User){
    await db.profileImage.update({
        where:{
            userId: user.id
        },
        data: {
            isUsingSecondaryDefault: true
        }
    })
}