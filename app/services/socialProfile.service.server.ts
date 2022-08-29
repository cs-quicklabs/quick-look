import { User } from "@prisma/client";
import { db } from "~/database/connection.server";

export async function addUpdateSocialLink(socialProfile: string, link: string, user?: User) {
    try{
        const socialAccount = socialProfile.toLocaleLowerCase();
        if (socialAccount === 'facebook') {
            await db.socialMedia.update({
                where: {
                    userId: user?.id
                },
                data: {
                    facebookLink: link
                }
            })
        } else if (socialAccount === 'twitter') {
            await db.socialMedia.update({
                where: {
                    userId: user?.id
                },
                data: {
                    twitterLink: link
                }
            })
        } else if (socialAccount === 'youtube') {
            await db.socialMedia.update({
                where: {
                    userId: user?.id
                },
                data: {
                    youtubeLink: link
                }
            })
        }
        return true
        }
        catch(err){
            throw err
        }
    }
    
    export async function deleteSocialLink(socialProfile: string, user?: User) {
        if (socialProfile === '1') {
            await db.socialMedia.update({
                where: {
                    id: user?.id
                },
                data: {
                    facebookLink: ''
                }
            })
        } else if (socialProfile === '2') {
            await db.socialMedia.update({
                where: {
                    id: user?.id
                },
                data: {
                    twitterLink: ''
                }
            })
        } else if (socialProfile === '3') {
            await db.socialMedia.update({
                where: {
                    id: user?.id
                },
                data: {
                    youtubeLink: ''
                }
            })
        }
    }