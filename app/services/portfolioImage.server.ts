import { db } from "~/database/connection.server";
import { getImageKeyFromUrl } from "~/utils/url.server";
import { removeFileFromSpace } from "./do.service.server";

export async function addPortfolioImage(imageLink: string, user: any){
    const imageKey = await getImageKeyFromUrl(imageLink)
    await db.portfolioImage.create({
        data: {
            userId: user.id,
            imageUrl: imageLink,
            imageKey
        },
    })
}

export async function deletePortfolioImage(id: string){
    const imageToDelete = await db.portfolioImage.findFirst({
        where: {
            id : id
        }
    })
    await removeFileFromSpace(imageToDelete?.imageKey as string)
    await db.portfolioImage.delete({
        where: {
            id: imageToDelete?.id
        }
    })
}

export async function getAllPortfolioImagesCount(user: any){
    return await db.portfolioImage.count({
        where: {
            userId: user.id
        }
    })
}

export async function updatePortfolioImage(url: string, imageId: string) {
    await db.portfolioImage.update({
        where: {
            id: imageId
        },
        data: {
            imageUrl: url
        }
    })
}