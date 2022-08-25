import { RegisterForm } from "~/types/regirsterForm.server";
import bcrypt from 'bcryptjs'
import { db } from "~/database/connection.server";
import { nameCasing } from "~/utils/string.server";
import { json } from "stream/consumers";
import { UpdateProfileDetails } from "~/types/updateProfile.server";
import { UserPreferences } from "~/types/updateUserPreferences.server";
import { UpdateUserBioDetails } from "~/types/updateUserBioDetails.server";
import { User } from "@prisma/client";


export async function createUser(userRegister: RegisterForm) {
    const password = await bcrypt.hash(userRegister.password, 10)
    const user = await db.user.create({
        data: {
            firstname: nameCasing(userRegister.firstname),
            lastname: nameCasing(userRegister.lastname),
            username: userRegister.username.toLocaleLowerCase(),
            email: userRegister.email.toLocaleLowerCase(),
            password,
        }
    })
    const profile = await db.profile.create({
        data: {
            userId : user.id,
        }
    })
    const profileInfo = await db.profileInformation.create({
        data: {
            userId: user.id
        }
    })
    const profileImage = await db.profileImage.create({
        data: {
            userId: user.id
        }
    })
    const socialMedia = await db.socialMedia.create({
        data: {
            userId: user.id
        }
    })
    const marketingUpdate = await db.marketingUpdates.create({
        data: {
            userId: user.id
        }
    })
    return {
        id: user.id,
        email: user.email
    }
}

export async function findUserByEmail(email: string): Promise<any> {
    let lowercasedEmail = email.toLocaleLowerCase();
    const user = await db.user.findFirst({
        where: {
            email: lowercasedEmail
        },
        include:{
            profile: true
        }
    })
    return user ? user : false
}

export async function checkUserVerificationStatus(email: string) {
    let lowerCasedEmail = email.toLocaleLowerCase();
    const user = await db.user.findFirst({
        where: {
            email: lowerCasedEmail
        }
    })
    const profile = await db.profile.findFirst({
        where: {
            userId: user?.id
        }
    })
    if (profile?.isVerified == true) {
        return true
    }
    return false
}

export async function upateUserPassword(userId: string, password: string, user?: any) {
    await db.user.update({
        where: {
            id: userId
        },
        data: {
            password: await bcrypt.hash(password, 10),
        }
    })
    return true
}

export async function getUserById(id: string) {
    const user = await db.user.findFirst({
        where: {
            id
        },
        include:{
            profile: true,
            profileImage: true,
            profileInfo: true
        }
    })
    return user
}

export async function updateUsingOldPassword(user: any, newPassword: string) {
    try {
        await upateUserPassword(user.id, newPassword, user)
        return true
    }
    catch (error) {
        throw 'Something unexpected happend.'
    }
}

export async function updateUserProfileDetails({ firstname, lastname, profileId, user }: UpdateProfileDetails) {
    await db.user.update({
        where: {
            id: user.id
        },
        data: {
            firstname: firstname ?? user.firstname,
            lastname: lastname ?? user.lastname,
            username: profileId ?? user.profileId
        }
    })
    return true
}

export async function deleteUser(user?: any) {
    await db.profile.delete({
        where:{
            userId:user.id
        }}).then(async () => {
        await db.profileImage.delete({
            where: {
                userId: user.id
            }
        }).then(async () => {
            await db.profileInformation.delete({
                where: {
                    userId: user.id
                }
            }).then(async () => {
                await db.socialMedia.delete({
                    where: {
                        userId: user.id
                    }
                }).then(async () => {
                    await db.marketingUpdates.delete({
                        where: {
                            userId: user.id
                        }
                    }).then(async () => {
                        await db.user.delete({
                            where: {
                                id: user.id
                            }
                        })
                    })
                })
            })
        })
    })
}

export async function publishToggle(user?: any) {
    if (user.profile.isPublished === true) {
        await db.profile.update({
            where: {
                userId: user.id
            },
            data: {
                isPublished: false
            }
        })
    } else if (user.isPublished === false) {
        await db.profile.update({
            where: {
                userId: user.id
            },
            data: {
                isPublished: true
            }
        })
    }
    return 'Account unpublished successfully.'
}

export async function updateUserPreferences({ recieveMarketingUpdates, recieveProductUpdates, user }: UserPreferences) {
    let marketingFlag;
    let productFlag;
    if (user.recieveMarketingUpdates === false) {
        marketingFlag = true
    } else if (user.recieveMarketingUpdates === true) {
        marketingFlag = false
    }

    if (user.recieveProductUpdates === false) {
        productFlag = true
    } else if (user.recieveProductUpdates === true) {
        marketingFlag = false
    }

    await db.marketingUpdates.update({
        where: {
            userId: user.id
        },
        data: {
            recieveMarketingUpdates: marketingFlag,
            recieveProductUpdates: productFlag,
        }
    })
}

export async function updateUserBioDetails({ about, location, occupation, education, company, user }: UpdateUserBioDetails) {
    await db.profileInformation.update({
        where: {
            userId: user.id
        },
        data: {
            bio: about ?? user.profileInfo.bio,
            location: location ?? user.profileInfo.location,
            company: company ?? user.profileInfo.company,
            education: education ?? user.profileInfo.education,
            occupation: occupation ?? user.profileInfo.occupation
        }
    })
    return true;
}

export async function updateUserTemplate(templateId: string, user: any) {
    await db.profileInformation.update({
        where: {
            userId: user.id
        },
        data: {
            templateNumber : templateId
        }
    })
}

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

export async function addPrimaryImage(link: string, user: User){ 
    await db.profileImage.update({
        where: {
            userId: user.id
        },
        data: {
            primaryImage: link,
            isUsingPrimaryDefault: false
        }
    })
    return true;
} 

export async function addSecondaryImage(link: string, user: User){
    await db.profileImage.update({
        where: {
            userId: user.id
        },
        data: {
            secondaryImage: link,
            isUsingSecondaryDefault: false
        }
    })
    return true;
} 

export async function deleteImage(imageKey: string, user?: User) {
    if (imageKey === 'deletePrimary') {
        await db.profileImage.update({
            where: {
                id: user?.id
            },
            data: {
                primaryImage: '',
                isUsingPrimaryDefault: false
            }
        })
    } else if (imageKey === 'deleteSecondary') {
        await db.profileImage.update({
            where: {
                id: user?.id
            },
            data: {
                secondaryImage: '',
                isUsingSecondaryDefault: false
            }
        })
    } 
}

export async function restorePrimaryImage(user: User){
    await db.profileImage.update({
        where:{
            id: user.id
        },
        data: {
            isUsingPrimaryDefault: true
        }
    })
}

export async function restoreSecondaryImage(user: User){
    await db.profileImage.update({
        where:{
            id: user.id
        },
        data: {
            isUsingSecondaryDefault: true
        }
    })
}