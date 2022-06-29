import { json,  createCookieSessionStorage, redirect } from "@remix-run/node";
import { db } from "~/database/connection.server";
import { LoginForm } from "~/types/loginForm.server";
import { RegisterForm } from "~/types/regirsterForm.server";
import { createUser } from "./user.service.serevr";
import bcrypt from 'bcryptjs'

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

export async function register(user: RegisterForm){
    const exists = await db.user.count({
        where: {
            email: user.email
        }
    })
    if(exists) {
        throw json({success: false, message: 'User Already Exists'}, {status: 400})
    }
    const newUser = await createUser(user);
    if (!newUser) {
        throw json(
          {
            error: `Something went wrong trying to create a new user.`,
            fields: { email: user.email, password: user.password },
          },
          { status: 400 },
        )
    }
    return json({success: true, id: newUser.id})

}   

export async function login(loginForm: LoginForm){
    const user = await db.user.findFirst({
        where: {
            email: loginForm.email
        }
    })

    if(!user?.isVerified){
      throw json({error: 'Account Not verified'}, {status: 401})
    }

    if (!user || !(await bcrypt.compare(loginForm.password, user.password))){
            throw json({ error: `Incorrect login` }, { status: 400 })
    }

    return { id: user.id, email: loginForm.email }
}


export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
    const session = await getUserSession(request)
    const userId = session.get('userId')
    if (!userId || typeof userId !== 'string') {
      const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
      throw redirect(`/login?${searchParams}`)
    }
    return userId
  }
  
  function getUserSession(request: Request) {
    return storage.getSession(request.headers.get('Cookie'))
  }
  
  async function getUserId(request: Request) {
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
  
    try {
      const user = await db.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true },
      })
      return user
    } catch {
      throw logout(request)
    }
  }
  
  export async function logout(request: Request) {
    const session = await getUserSession(request)
    return redirect('/login', {
      headers: {
        'Set-Cookie': await storage.destroySession(session),
      },
    })
  }