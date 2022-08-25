import { db } from "~/database/connection.server";

export async function addPortfolioImage(imageLink: string, user: any){
    const allImagesCount = await getAllPortfolioImagesCount(user);
    if(allImagesCount >= 20){
        return 'Maximum portfolio Images added.'
    }
    await db.portfolioImage.create({
        where: {
            userId: user.id
        },
        data: {
            imageUrl: imageLink
        }
    })
}

export async function deletePortfolioImage(imageLink: string, user: any){
    await db.portfolioImage.delete({
        where: {
            userId: user.id, 
            imageLink 
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