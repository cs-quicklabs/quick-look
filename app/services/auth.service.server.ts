import { json, createCookieSessionStorage, redirect } from '@remix-run/node'
import { db } from '~/database/connection.server'
import type { LoginForm } from '~/types/loginForm.server'
import type { RegisterForm } from '~/types/regirsterForm.server'
import { createStripeCustomer, createUser } from './user.service.server'
import bcrypt from 'bcryptjs'
import type { ServerResponse, ValidCouponServerResponse } from '~/types/response.server'
import CryptoJs from 'crypto-js'
import {
  validateConnectAppFirstName,
  validateConnectAppLastName,
  validateConnectAppEmail,
  validateConnectAppUserName,
} from '~/utils/validator.server'
import { v4 as uuidv4 } from 'uuid'
import { addHoursToDate } from '~/utils/date.server'
import { sendSetPasswordMail } from './mail.service.server'
import generateId from 'generate-api-key'

const sessionSecret = process.env.SESSION_SECRET
const apiSecret = process.env.CONNECT_APP_SECRET

if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

if (!apiSecret) {
  throw new Error('CONNECT_APP_SECRET must be set')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'quicklook-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') return null
  return userId
}

export async function getCurrentUser(request: Request) {
  let userId = await getUserId(request)
  if (!userId) return null
  return db.user.findUnique({ where: { id: userId } })
}

export async function validateCoupon(code: string): Promise<ValidCouponServerResponse> {
  const data = await db.coupon.findUnique({
    where: {
      code: code,
    },
  })

  if (data?.id) {
    const validEndDate =
      new Date(data?.endDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)
    const validStartDate =
      new Date(data?.startDate).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)

    if (validEndDate && validStartDate) return { couponId: data?.id }
  }
  return { error: 'This coupon code is invalid or has expired' }
}

export const isTrialExpired = (args: { startDate: Date; trialDays: number }) => {
  const { startDate, trialDays } = args

  const currentDate = new Date().getTime()
  const trialExpireDate = new Date(
    new Date(startDate).getTime() + 86400 * 1000 * trialDays
  ).getTime()

  if (currentDate > trialExpireDate) return true
  return false
}

export async function register(user: RegisterForm): Promise<ServerResponse> {
  let newUser
  try {
    newUser = await createUser(user)
  } catch (error) {
    throw json(
      {
        error: `Something went wrong trying to create a new user.`,
        fields: { email: user.email },
      },
      { status: 500 }
    )
  }
  return {
    success: true,
    message: 'User created Successfully',
    data: { userId: newUser.id },
  }
}

export async function login(loginForm: LoginForm) {
  const user = await db.user.findFirst({
    where: {
      email: loginForm.email.toLowerCase().trim(),
    },
    include: {
      profile: true,
      paymentStatus: true,
    },
  })

  if (!user || !(await bcrypt.compare(loginForm.password, user.password))) {
    throw json(
      {
        error: `Either email or password you entered was not correct. Please try again.`,
      },
      { status: 400 }
    )
  }

  if (user.profile?.isVerified == false) {
    throw json({ error: 'Account Not verified' }, { status: 401 })
  }

  if (!user?.paymentStatus?.customerId) {
    await createStripeCustomer(user?.id)
  }

  return { id: user.id, email: loginForm.email }
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/?${searchParams}`)
  }
  return userId
}

export async function getUsers() {
  try {
    const users = await db.user.findMany()
    return users
  } catch (err) {
    return
  }
}

export async function getUser(request: Request, appAccount?: boolean) {
  const userId = await getUserId(request)

  if (typeof userId !== 'string') {
    return null
  }

  const user = await db.user.findFirst({
    where: {
      id: userId as string,
    },
    include: {
      coupon_code: true,
      paymentStatus: true,
      profile: true,
      profileInfo: true,
      profileImage: true,
      socialMedia: true,
      marketingUpdates: true,
      spotlightButton: true,
      video: true,
      testimonial: true,
      portfolioImage: {
        orderBy: { createdAt: 'asc' },
      },
      supportBanner: true,
      additionalLinks: {
        orderBy: { createdAt: 'asc' },
      },
      ...(appAccount && {
        connectAppAccount: {
          include: {
            connectedApps: {
              include: {
                users: {
                  select: {
                    firstname: true,
                  },
                },
              },
            },
          },
        },
      }),
    },
  })

  // To check if free trial has expired
  if (
    user &&
    !user.needPaymentToContinue &&
    !user.allowed_free_access &&
    !user.coupon_code?.id &&
    user.paymentStatus?.paymentStatus !== 'paid' &&
    isTrialExpired({ startDate: user.createdAt, trialDays: 14 })
  ) {
    await db.user.update({
      where: {
        id: userId,
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

    return {
      ...user,
      needPaymentToContinue: true,
      profile: { ...user?.profile, isPublished: false },
    }
  }

  /*
  To check if user has already paid or has been given free access
  then update "needPaymentToContinue" to false
  **/
  if (
    user?.needPaymentToContinue &&
    (user.allowed_free_access ||
      user.coupon_code?.id ||
      user.paymentStatus?.paymentStatus === 'paid')
  ) {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        needPaymentToContinue: false,
      },
    })

    return { ...user, needPaymentToContinue: false }
  }

  return user
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}

export async function validateSecretKeyAndAppId(args: { secretKey: string; appId: string }) {
  const { secretKey, appId } = args

  if (!secretKey || !appId)
    throw json(
      {
        message: `Either app_Id or secret_key is missing.`,
        success: false,
      },
      { status: 400 }
    )

  const appData = await db.connectedApp
    .findUnique({
      where: {
        id: appId,
      },
      include: {
        account: true,
      },
    })
    .catch(() => {
      throw json(
        {
          message: `Internal Server Error`,
          success: false,
        },
        { status: 500 }
      )
    })

  if (!appData || decryptEncryptedKey(appData.account.secretKey) !== secretKey) {
    throw json(
      {
        message: `Either app_Id or secret_key is invalid.`,
        success: false,
      },
      { status: 401 }
    )
  }

  if (appData.isBlocked || appData.account.isBlocked)
    throw json(
      {
        message: 'This app is blocked. Please contact support for assistance.',
        success: false,
      },
      { status: 403 }
    )

  return true
}

// Encrypt
export const encryptSecretKey = (secretKey: string) => {
  return CryptoJs.AES.encrypt(secretKey, apiSecret).toString()
}

// Decrypt
export const decryptEncryptedKey = (encryptedKey: string) => {
  const bytes = CryptoJs.AES.decrypt(encryptedKey, apiSecret)
  return bytes.toString(CryptoJs.enc.Utf8)
}

export type connectAppSignUpType = {
  basics: {
    firstName: string
    lastName: string
    email: string
    userName?: string
  }
}

export const validateConnectAppSignUpRequest = async (args: connectAppSignUpType) => {
  const { basics } = args || {}

  const errors = {
    email: await validateConnectAppEmail(basics?.email || ''),
    firstName: validateConnectAppFirstName(basics?.firstName || ''),
    lastName: validateConnectAppLastName(basics?.lastName || ''),
  }

  if (Object.values(errors).some(Boolean)) return errors
  return
}

// Connect App Signup
export const connectAppSignUp = async (args: connectAppSignUpType, createdByAppId: string) => {
  const { basics } = args || {}

  try {
    let userName = basics.userName?.trim() || ''
    let isUserNameNotValid = await validateConnectAppUserName(userName)
    if (isUserNameNotValid) userName = await generateUserName(basics.firstName, basics.lastName)

    await db.$transaction(async (db) => {
      const user = await db.user.create({
        data: {
          firstname: basics.firstName.trim(),
          lastname: basics.lastName.trim(),
          email: basics.email.toLowerCase().trim(),
          password: 'password@123',
          createdByAppId,
          ...(userName
            ? null
            : {
                username: userName,
              }),
        },
        select: {
          id: true,
          email: true,
          firstname: true,
          lastname: true,
          createdBy: {
            select: {
              appName: true,
              defaultTemplate: true,
            },
          },
        },
      })

      const data = {
        userId: user.id,
      }

      await Promise.all([
        db.profile.create({
          data: { ...data, isVerified: true },
        }),

        db.profileInformation.create({
          data: { ...data, templateNumber: user.createdBy?.defaultTemplate },
        }),

        db.profileImage.create({
          data,
        }),

        db.marketingUpdates.create({
          data,
        }),

        db.testimonial.create({
          data,
        }),

        db.socialMedia.create({
          data,
        }),

        db.supportBanner.create({
          data,
        }),

        db.video.create({
          data,
        }),

        db.spotlightButton.create({
          data,
        }),
      ])

      // Generate verification token for setting-up new password
      const generatedToken = uuidv4()
      const hashedToken = await bcrypt.hash(generatedToken, 10)

      await db.userVerification.create({
        data: {
          ...data,
          uniqueString: hashedToken,
          expiresAt: await addHoursToDate(new Date(Date.now()), 720),
        },
      })

      // Send set-password email to created user
      const appName = user.createdBy?.appName
      await sendSetPasswordMail({
        userData: { ...user, createdBy: appName! },
        generatedToken,
      })

      return user
    })

    return true
  } catch (e) {
    throw json(
      {
        message: `Something went wrong, Please try again`,
        success: false,
      },
      { status: 500 }
    )
  }
}

// Verify Token
export const validateToken = async (args: { userId: string; token: string }) => {
  const { userId, token } = args

  const hashedToken = await db.userVerification.findFirst({
    where: {
      userId,
    },
    select: {
      uniqueString: true,
    },
  })

  if (!hashedToken) return false

  const tokenVerified = await bcrypt.compare(token, hashedToken.uniqueString)
  return tokenVerified
}

export const setNewPassword = async (args: { userId: string; password: string }) => {
  const { userId, password } = args

  const response = await db.$transaction(async (db) => {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        password: await bcrypt.hash(password, 10),
      },
    })

    await db.userVerification.delete({
      where: {
        userId,
      },
    })

    return true
  })

  return response
}

export const isExistingUser = async (email: string) => {
  email = email.toLowerCase().trim()

  const user = await db.user.findFirst({
    where: {
      email,
    },
    select: {
      email: true,
    },
  })

  return Boolean(user)
}

export const generateUniqueId = (prefix: string) =>
  `${prefix}-` + generateId({ method: 'uuidv4', length: 5 }).slice(0, 5)

export const generateUserName = async (firstName: string, lastName: string) => {
  firstName = firstName.trim()
  lastName = lastName.trim()
  let userName = `${firstName}-${lastName}`

  const userNames = await db.user.findMany({
    where: {
      OR: [
        { username: { contains: userName } },
        { username: { contains: userName.toLowerCase() } },
      ],
    },
    select: {
      username: true,
    },
  })

  if (userNames.length < 1) return userName

  let newUserName = generateUniqueId(userName)
  let i = true
  do {
    const isExisting = userNames.some(
      // eslint-disable-next-line no-loop-func
      (user) => user.username.toLowerCase() === newUserName.toLowerCase()
    )
    if (isExisting) newUserName = generateUniqueId(userName)
    else i = false
  } while (i)

  return newUserName
}
