import { User } from "@prisma/client";
import { db } from "~/database/connection.server";
import { getImageKeyFromUrl } from "~/utils/url.server";
import { removeFileFromSpace } from "./do.service.server";

export async function addPrimaryImage(link: string, user: User){ 
    const imageKey = await getImageKeyFromUrl(link)
    await db.profileImage.update({
        where: {
            userId: user.id
        },
        data: {
            primaryImage: link,
            isUsingPrimaryDefault: false,
            primaryImageKey: imageKey
        }
    })
    return true;
} 

export async function addSecondaryImage(link: string, user: User){
    const imageKey = await getImageKeyFromUrl(link)
    await db.profileImage.update({
        where: {
            userId: user.id
        },
        data: {
            secondaryImage: link,
            isUsingSecondaryDefault: false,
            secondaryImageKey: imageKey
        }
    })
    return true;
} 

export async function deleteImage(imageKey: string, user?: User) {
    const userProfileImagerecord = await db.profileImage.findFirst({
        where: { 
            userId : user?.id
        }
    })
    if (imageKey === 'deletePrimary') {
        await removeFileFromSpace(userProfileImagerecord?.primaryImageKey as string)
        await db.profileImage.update({
            where: {
                userId: user?.id
            },
            data: {
                primaryImage: '',
                isUsingPrimaryDefault: false,
                primaryImageKey: ''
            }
        })
    } else if (imageKey === 'deleteSecondary') {
        await removeFileFromSpace(userProfileImagerecord?.secondaryImageKey as string)
        await db.profileImage.update({
            where: {
                userId: user?.id
            },
            data: {
                secondaryImage: '',
                isUsingSecondaryDefault: false,
                secondaryImageKey: ''
            }
        })
    } 
}

export async function restorePrimaryImage(user: User){
    const userProfileImagerecord = await db.profileImage.findFirst({
        where: { 
            userId : user?.id
        }
    })
    await removeFileFromSpace(userProfileImagerecord?.primaryImageKey as string)
    await db.profileImage.update({
        where:{
            userId: user.id
        },
        data: {
            isUsingPrimaryDefault: true,
            primaryImage: '',
            primaryImageKey: ''
        }
    })
}

export async function restoreSecondaryImage(user: User){
    const userProfileImagerecord = await db.profileImage.findFirst({
        where: { 
            userId : user?.id
        }
    })
    await removeFileFromSpace(userProfileImagerecord?.secondaryImageKey as string)
    await db.profileImage.update({
        where:{
            userId: user.id
        },
        data: {
            isUsingSecondaryDefault: true,
            secondaryImage: '',
            secondaryImageKey: ''
        }
    })
}