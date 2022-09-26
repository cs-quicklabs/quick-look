import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { Link } from 'react-router-dom'
import { createUserSession, login } from '~/services/auth.service.server'
import {
  checkIncorrectCredentials,
  validateEmail,
  validatePassword,
} from '~/utils/validator.server'
import logo from '../../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData, useLoaderData, useTransition } from '@remix-run/react'
import { useState } from 'react'
import {
  checkUserVerificationStatus,
  findUserByEmail,
} from '~/services/user.service.serevr'
import { sendAccountVerificationMail} from '~/services/mail.service.server'
import { v4 as uuidv4 } from 'uuid'
import {
  createUserVerificationToken,
} from '~/services/userVerification.service.server'
import { commitSession, getSession } from '~/services/session.service.server'
import { BeatLoader } from 'react-spinners'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  let email = form.get('email') as string
  let password = form.get('password') as string

  let url = request.url

  const generatedToken = uuidv4() as string

  const errors = {
    email: await validateEmail(email),
    password: await validatePassword(password),
    checkIncorrectCredentials: await checkIncorrectCredentials(email, password),
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors,
        fields: { email, password, checkIncorrectCredentials },
        form: action,
      },
      { status: 400 }
    )
  }

  const isVerifiedUser = await checkUserVerificationStatus(email)
  if (!isVerifiedUser) {
    const user = await findUserByEmail(email)
    const createVerificationToken = await createUserVerificationToken(user.id, generatedToken)
    if(createVerificationToken.success){
      await sendAccountVerificationMail(email, url, generatedToken)
    }
    return redirect('/confirm/email')
  }
  
  const islogInData = await login({ email, password })
  if(islogInData){
    return createUserSession(islogInData.id, '/account')
  }
}

export const loader: LoaderFunction = async ({request}) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  const message = session.get("authMessage") || null;
 
  return json(
    { message },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export default function Login() {
  const transition = useTransition()
const actionData = useActionData()
  
const loaderData = useLoaderData();

  const [val, setVal] = useState({ email: '', password: '' })

   return (
    <>
    
      <div className="h-[calc(100vh-3rem)] overflow-hidden flex flex-col justify-center pb-12 bg-gray-50">
        <div className='mb-8 sm:mx-auto w-[25rem] ml-[2rem] '>
      {!actionData?.errors && loaderData?.message?  <div className="rounded-md bg-green-50 p-4 mt-20">
      <div className="flex ">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{loaderData?.message}</p>
        </div>
      </div>
    </div> : <div className={` rounded-md ${actionData?.errors['checkIncorrectCredentials'] && !actionData?.errors['email'] && !actionData?.errors['password'] ? 'bg-red-50 mt-20' : ''} p-4`}>
      <div className="flex">
        {actionData?.errors['checkIncorrectCredentials'] && !actionData?.errors['email'] && !actionData?.errors['password'] ?  <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div> : ''}
       
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">{actionData?.errors['checkIncorrectCredentials'] && !actionData?.errors['email'] && !actionData?.errors['password'] ? actionData?.errors['checkIncorrectCredentials'] : ''}</p>
          
        </div>
      </div>
    </div>}</div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <img src={logo} alt='' className='ml-48 h-20 w-20' />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-gray-50">
          <div className=" py-8 px-4   sm:rounded-lg sm:px-10 bg-gray-50">
            <Form className="space-y-6 bg-gray-50" method="post">
              <div className='relative'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className='mt-1'>
                <input
                  name='email'
                  type='email'
                  value={val.email}
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    actionData?.errors['email'] ? 'border border-red-400' : ''
                  }`}
                />
                {actionData?.errors['email'] ?
                <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
              </div>
              <div className={`text-red-600 text-sm`}>
                {actionData?.errors['email']}
              </div>
              </div>

              <div className='relative'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className='mt-1'>
                <input
                  type='password'
                  name='password'
                  value={val.password}
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    actionData?.errors['password'] ? 'border border-red-400' : ''
                  }`}
                />
                {actionData?.errors['password'] ?
                <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
              </div>
              <div className={`text-red-600 text-sm`}>
                {actionData?.errors['password']}
              </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/auth/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  data-cy="loginButton"
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md  -sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={transition?.state != "idle" ? true : false}
                  >
                    {transition?.state != "idle"  ? <BeatLoader color="#ffffff" /> :
                    "Sign in"}
                  
                </button>
              </div>
              <p className='mt-2 text-center text-sm'>
                    <Link
                      to='/auth/receive-email'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Did not receive confirmation email?
                    </Link>
                  </p>
            </Form>

            
          </div>
        </div>
      </div>
    </>
  )
}