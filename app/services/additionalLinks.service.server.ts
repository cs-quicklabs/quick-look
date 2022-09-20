import { db } from "~/database/connection.server";
import { AddAdditionalLink } from "~/types/additionalLink.server";


export async function addAdditionalLink({linkColor, linkText, linkUrl, linkHex, user}: AddAdditionalLink){
    await db.additionalLink.create({
        data: {
            userId: user.id,
            linkText,
            linkColor,
            linkUrl,
            linkHex
        },
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
    const userAdditionalLink  = await db.additionalLink.findFirst({
        where: {
            userId: user.id
        }
    })
    await db.additionalLink.upsert({
        where: {
            id: linkId,
        },
        create: {
            linkColor,
            linkText,
            linkUrl,
            user
        },
        update: {
            linkColor: linkColor?? userAdditionalLink?.linkColor,
            linkText: linkText ?? userAdditionalLink?.linkText,
            linkUrl: linkUrl ?? userAdditionalLink?. linkUrl
        }
    })
}