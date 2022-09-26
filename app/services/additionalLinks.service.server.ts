import { db } from "~/database/connection.server";
import { AddAdditionalLink } from "~/types/additionalLink.server";


export async function addAdditionalLink({ linkText, linkUrl, user}: AddAdditionalLink){
        await db.additionalLink.create({
            data: {
                userId: user.id,
                linkText,
                linkUrl
            },
        })
        return true
}

export async function deleteAdditionalLink(linkId: string){
    await db.additionalLink.delete({
        where: {
            id: linkId
        }
    })
}

export async function updateAdditionalLink({ linkText, linkUrl, user}: AddAdditionalLink, linkId: string){
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
                linkText: linkText ?? userAdditionalLink?.linkText,
                linkUrl: linkUrl ?? userAdditionalLink?. linkUrl
            }
        })
        return true
    }
    return false
}

export async function updateHexColorForAllAdditionalLink(hexColor: string, user: any){
    const links = await db.additionalLink.findMany({
        where: {
            userId: user?.id
        }
    })
    links.forEach(async (link) => {
        await db.additionalLink.update({
            where: {
                id : link?.id
            },
            data: {
                linkHex: hexColor,
                linkColor: ''
            }
        })
    })
}

export async function updatecolorForAllAdditionalLink(color: string, user: any){
    const links = await db.additionalLink.findMany({
        where: {
            userId: user?.id
        }
    })
    links.forEach(async (link) => {
        await db.additionalLink.update({
            where: {
                id : link?.id
            },
            data: {
                linkColor: color,
                linkHex: ''
            }
        })
    })
}