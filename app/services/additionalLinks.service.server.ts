import { db } from "~/database/connection.server";
import { AddAdditionalLink } from "~/types/additionalLink.server";


export async function addAdditionalLink({linkColor, linkText, linkUrl, linkHex, user}: AddAdditionalLink){
    const additionlLinkCount = await db.additionalLink.count({
        where:{
            userId: user.id
        }
    })

    if(additionlLinkCount <= 7){
        await db.additionalLink.create({
            data: {
                userId: user.id,
                linkText,
                linkColor,
                linkUrl,
                linkHex
            },
        })
        return true
    }
    else {
        return false
    }

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
            id: linkId
        }
    })
    if(userAdditionalLink){
        await db.additionalLink.update({
            where: {
                id: linkId,
            },
            data: {
                linkColor: linkColor?? userAdditionalLink?.linkColor,
                linkText: linkText ?? userAdditionalLink?.linkText,
                linkUrl: linkUrl ?? userAdditionalLink?. linkUrl
            }
        })
        return true
    }
    return false
}