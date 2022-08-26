import { db } from "~/database/connection.server";

export async function addPortfolioImage(imageLink: string, user: any){
    const allImagesCount = await getAllPortfolioImagesCount(user);
    if(allImagesCount >= 20){
        return 'Maximum portfolio Images added.'
    }
    await db.portfolioImage.create({
        data: {
            userId: user.id,
            imageUrl: imageLink
        },
    })
}

export async function deletePortfolioImage(id: string){
    await db.portfolioImage.delete({
        where: {
            id
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