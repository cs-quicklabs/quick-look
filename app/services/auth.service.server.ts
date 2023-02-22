import { json, createCookieSessionStorage, redirect } from '@remix-run/node'
import { db } from '~/database/connection.server'
import { LoginForm } from '~/types/loginForm.server'
import { RegisterForm } from '~/types/regirsterForm.server'
import { createStripeCustomer, createUser } from './user.service.serevr'
import bcrypt from 'bcryptjs'
import { ServerResponse, ValidCouponServerResponse } from '~/types/response.server'

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
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


export async function validateCoupon(code: string): Promise<ValidCouponServerResponse> {
  const data = await db.coupon.findUnique({
    where : {
      code : code
    }
  })

  if(data?.id){
    const validEndDate = new Date(data?.endDate).setHours(0,0,0,0) >= new Date().setHours(0,0,0,0)
    const validStartDate = new Date(data?.startDate).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0)
    
    if(validEndDate && validStartDate)
    return {couponId: data?.id}
    
  }
  return { error: "This coupon code is invalid or has expired"}
}

export async function register(user: RegisterForm): Promise<ServerResponse> {
  let newUser; 
  try {
    newUser = await createUser(user)
  }
  catch(error){
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
    data: { userId: newUser.id }
  }
}

export async function login(loginForm: LoginForm) {
  const user = await db.user.findFirst({
    where: {
      email: loginForm.email,
    },
    include: {
      profile: true,
      paymentStatus: true
    }
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

  if(!user?.paymentStatus?.customerId){
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
    throw redirect(`/auth/login?${searchParams}`)
  }
  return userId
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

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (typeof userId !== 'string') {
    return null
  }
    const user = await db.user.findFirst({
      where: { 
        id: userId as string
      },
      include: {
        coupon_code : true,
        paymentStatus : true,
        profile : true,
        profileInfo : true,
        profileImage: true,
        socialMedia: true,
        marketingUpdates: true,
        spotlightButton: true,
        video: true,
        testimonial: true,
        portfolioImage: {
          orderBy: {createdAt: 'asc'}
        },
        supportBanner: true,
        additionalLinks: {
          orderBy: {createdAt: 'asc'}       
        }
      }
    })

    // to check if user's free trial expired
    if(user 
      && !user?.needPaymentToContinue 
      && !user?.allowed_free_access 
      && !user?.coupon_code?.id 
      && user?.paymentStatus?.paymentStatus !== "paid"
    ){
      const currentDate = new Date().getTime();
      const trialExpireDate = new Date(new Date(user?.createdAt).getTime()+(86400*1000*14)).getTime(); 

      if(currentDate > trialExpireDate){
        await db.user.update({
          where: {
            id: userId
          },
          data: {
            needPaymentToContinue : true
          }
        })

        await db.profile.update({
          where: {
            userId: userId
          },
          data: {
            isPublished: false
          }
        })
        
        return {...user, needPaymentToContinue: true, profile: {...user?.profile, isPublished: false}}
      }
    }

    if(user?.allowed_free_access || user?.coupon_code?.id || user?.paymentStatus?.paymentStatus === "paid"){      
      
      if(user?.needPaymentToContinue){
        await db.user.update({
          where: {
            id: userId
          },
          data: {
            needPaymentToContinue : false
          }
        })
        return {...user, needPaymentToContinue: false}
      }
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
