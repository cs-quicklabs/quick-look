import type { RegisterForm } from '~/types/regirsterForm.server'
import bcrypt from 'bcryptjs'
import { db } from '~/database/connection.server'
import { nameCasing } from '~/utils/string.server'
import type { UpdateProfileDetails } from '~/types/updateProfile.server'
import type { UserPreferences } from '~/types/updateUserPreferences.server'
import type { UpdateUserBioDetails } from '~/types/updateUserBioDetails.server'
import { getUserId, isTrialExpired } from './auth.service.server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || '', { apiVersion: '2023-08-16' })

type PaymentStatus = {
  userId: string
  customerId: string
  paymentIntentId: string
  paymentStatus: string
}

export async function updatePaymentStatus(args: PaymentStatus) {
  try {
    const { customerId, paymentIntentId, paymentStatus } = args
    await db.payment.update({
      where: {
        customerId,
      },
      data: {
        paymentIntentId,
        paymentStatus,
      },
    })
  } catch (err) {
    throw 'Something went wrong, Please try again!'
  }
}

export async function createStripeCustomer(userId: string) {
  try {
    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        paymentStatus: true,
      },
    })

    if (!user) return null

    if (user.paymentStatus?.customerId) return

    const customer = await stripe.customers.create({
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      metadata: {
        userId,
        email: user.email || '',
      },
    })

    await db.payment.create({
      data: {
        userId,
        customerId: customer?.id,
      },
    })

    return true
  } catch (err) {
    return null
  }
}

export async function createUser(userRegister: RegisterForm) {
  const password = await bcrypt.hash(userRegister.password, 10)
  const user = await db.user.create({
    data: {
      firstname: nameCasing(userRegister.firstname),
      lastname: nameCasing(userRegister.lastname),
      username: userRegister.username.toLocaleLowerCase(),
      email: userRegister.email.toLocaleLowerCase(),
      password,
      couponId: userRegister?.couponId || null,
    },
  })

  await createStripeCustomer(user?.id)

  await db.profile
    .create({
      data: {
        userId: user.id,
      },
    })
    .then(async () => {
      await db.profileInformation
        .create({
          data: {
            userId: user.id,
          },
        })
        .then(async () => {
          await db.profileImage
            .create({
              data: {
                userId: user.id,
              },
            })
            .then(async () => {
              await db.marketingUpdates
                .create({
                  data: {
                    userId: user.id,
                  },
                })
                .then(async () => {
                  await db.testimonial
                    .create({
                      data: {
                        userId: user.id,
                      },
                    })
                    .then(async () => {
                      await db.socialMedia
                        .create({
                          data: {
                            userId: user.id,
                          },
                        })
                        .then(async () => {
                          await db.supportBanner.create({
                            data: {
                              userId: user.id,
                            },
                          })
                        })
                        .then(async () => {
                          await db.video
                            .create({
                              data: {
                                userId: user.id,
                              },
                            })
                            .then(async () => {
                              await db.spotlightButton.create({
                                data: {
                                  userId: user.id,
                                },
                              })
                            })
                        })
                    })
                })
            })
        })
    })

  return {
    id: user.id,
    email: user.email,
  }
}

export async function findUserByEmail(email: string): Promise<any> {
  let lowercasedEmail = email.toLocaleLowerCase()
  const user = await db.user.findFirst({
    where: {
      email: lowercasedEmail,
    },
    include: {
      profile: true,
    },
  })
  return user ? user : false
}

export async function checkUserVerificationStatus(email: string) {
  let lowerCasedEmail = email.toLocaleLowerCase()
  const user = await db.user.findFirst({
    where: {
      email: lowerCasedEmail,
    },
  })
  const profile = await db.profile.findFirst({
    where: {
      userId: user?.id,
    },
  })
  if (profile?.isVerified == true) {
    return true
  }
  return false
}

export async function upateUserPassword(userId: string, password: string, user?: any) {
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      password: await bcrypt.hash(password, 10),
    },
  })
  return true
}

export async function getUserById(id: string) {
  const user = await db.user.findFirst({
    where: {
      id,
    },
    include: {
      profile: true,
      profileImage: true,
      profileInfo: true,
    },
  })
  return user
}

export async function updateUsingOldPassword(user: any, newPassword: string) {
  try {
    await upateUserPassword(user.id, newPassword, user)
    return true
  } catch (error) {
    throw 'Something unexpected happened.' // spell fix
  }
}

export async function updateUserProfileDetails({
  firstname,
  lastname,
  profileId,
  user,
}: UpdateProfileDetails) {
  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstname: firstname ?? user.firstname,
      lastname: lastname ?? user.lastname,
      username: profileId ?? user.profileId,
    },
  })
  return true
}

export async function deleteUser(user?: any) {
  const deleteUserProfile = db.profile.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteProfileImage = db.profileImage.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteSupportBanner = db.supportBanner.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteAdditionalLinks = db.additionalLink.deleteMany({
    where: {
      userId: user.id,
    },
  })
  const deletePortfolioImage = db.portfolioImage.deleteMany({
    where: {
      userId: user.id,
    },
  })
  const deletespotlightButton = db.spotlightButton.delete({
    where: {
      userId: user.id,
    },
  })
  const deletetestimonial = db.testimonial.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteProfileInformation = db.profileInformation.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteSocialMedia = db.socialMedia.delete({
    where: {
      userId: user.id,
    },
  })
  const deletemarketingUpdates = db.marketingUpdates.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteVideo = db.video.delete({
    where: {
      userId: user.id,
    },
  })
  const deleteuser = db.user.delete({
    where: {
      id: user.id,
    },
  })

  const deletePayment = db.payment.delete({
    where: {
      userId: user.id,
    },
  })

  await db.$transaction([
    deleteUserProfile,
    deleteProfileImage,
    deletePortfolioImage,
    deleteAdditionalLinks,
    deleteProfileInformation,
    deleteSupportBanner,
    deleteSocialMedia,
    deletemarketingUpdates,
    deletespotlightButton,
    deletetestimonial,
    deleteVideo,
    deletePayment,
    deleteuser,
  ])
}

export async function publishToggle(request: Request) {
  let userId = await getUserId(request)
  if (!userId) return null

  let profile = await db.profile.findUnique({ where: { userId: userId } })
  if (!profile) return null

  return await db.profile.update({
    where: { userId: userId },
    data: { isPublished: !profile.isPublished },
  })
}

export async function updateUserPreferences({
  recieveMarketingUpdates,
  recieveProductUpdates,
  user,
}: UserPreferences) {
  let marketingFlag
  let productFlag
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
      userId: user.id,
    },
    data: {
      recieveMarketingUpdates: marketingFlag,
      recieveProductUpdates: productFlag,
    },
  })
}

export async function updateUserBioDetails({
  about,
  location,
  occupation,
  education,
  company,
  user,
}: UpdateUserBioDetails) {
  await db.profileInformation.update({
    where: {
      userId: user.id,
    },
    data: {
      bio: about ?? user.profileInfo.bio,
      location: location ?? user.profileInfo.location,
      company: company ?? user.profileInfo.company,
      education: education ?? user.profileInfo.education,
      occupation: occupation ?? user.profileInfo.occupation,
    },
  })
  return true
}

export async function updateUserTemplate(templateId: string, user: any) {
  await db.profileInformation.update({
    where: {
      userId: user.id,
    },
    data: {
      templateNumber: templateId,
    },
  })
}

export async function changePublishedStatus(profileId: string, data: boolean) {
  try {
    await db.profile.update({
      where: {
        id: profileId,
      },
      data: {
        isPublished: data,
      },
    })
    return true
  } catch (e) {
    return null
  }
}

export async function getUserByUsername(username: string) {
  const user = await db.user.findFirst({
    where: {
      username: username,
    },
    include: {
      profile: true,
      coupon_code: true,
      paymentStatus: true,
      profileInfo: true,
      profileImage: true,
      socialMedia: true,
      marketingUpdates: true,
      spotlightButton: true,
      video: true,
      testimonial: true,
      portfolioImage: true,
      supportBanner: true,
      additionalLinks: {
        orderBy: { createdAt: 'asc' },
      },
    },
  })

  if (!user) return null

  if (user.needPaymentToContinue || user.profile?.isBlocked || !user.profile?.isPublished)
    return null

  /*
  To check if free trial has expired
  and if the user has paid for this service or not
  **/
  if (
    !user.allowed_free_access &&
    !user.coupon_code?.id &&
    user.paymentStatus?.paymentStatus !== 'paid' &&
    isTrialExpired({ startDate: user.createdAt, trialDays: 14 })
  ) {
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        needPaymentToContinue: true,
        profile: {
          update: {
            isPublished: false,
          },
        },
      },
    })

    return null
  }

  return user
}
