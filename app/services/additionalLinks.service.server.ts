import { db } from "~/database/connection.server";
import { AddAdditionalLink } from "~/types/additionalLink.server";

export async function addAdditionalLink({linkColor, linkText, linkUrl, user}: AddAdditionalLink){
    await db.additionalLink.create({
        data: {
            userId: user.id,
            linkText,
            linkColor,
            linkUrl
        }
    })
}

export async function deleteAdditionalLink(linkId: string){
    await db.additionalLink.delete({
        where: {
            id: linkId
        }
    })
}

export async function updateAdditionalLink({linkColor, linkText, linkUrl, user}: AddAdditionalLink, linkId: string){
    await db.additionalLink.update({
        where: {
            id: linkId
        },
        data: {
            linkColor,
            linkText,
            linkUrl 
        }
    })
}