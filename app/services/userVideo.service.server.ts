import { db } from "~/database/connection.server";

export async function addUpdateVideo(videoLink: string, sourceKey: string, user: any){
    await db.video.update({
        where: {
            userId: user.id
        },
        data: {
            videoLink: videoLink,
            videoSourceKey: sourceKey
        }
    })
}

export async function deleteVideo(user:any){
    await db.video.update({
        where: {
            userId: user.id
        },
        data: {
            videoLink: '',
            videoSourceKey: ''
        }
    })
}

