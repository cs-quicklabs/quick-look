import { LockClosedIcon } from '@heroicons/react/solid'
import { ActionFunction, json, redirect } from '@remix-run/node'
import { Link } from 'react-router-dom'
import {
  createUserSession,
  getUser,
  login,
} from '~/services/auth.service.server'

import {
  checkIncorrectCredentials,
  validateEmail,
  validatePassword,
} from '~/utils/validator.server'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import crossimg from '../../../assets/images/remove.png'
import {
  checkUserVerificationStatus,
  findUserByEmail,
} from '~/services/user.service.serevr'
import { sendMail } from '~/services/mail.service.server'
import { v4 as uuidv4 } from 'uuid'
import {
  createUserVerificationToken,
  deleteUserVerificationToken,
} from '~/services/userVerification.service.server'
import { db } from '~/database/connection.server'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  let email = form.get('email') as string
  let password = form.get('password') as string
  let userData = await findUserByEmail(email)
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
    await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Email Verification',
      text: `Hi ${userData.name}`,
      html: `<h1 style=" font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Click on the Link below to Verify your mail</h1>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; font-size: 22px; border:2px solid blue; border-radius:5px; padding:5px"> Click to Verify</a>
      <div style="margin-top:40px">
      <h3>QuickLook.me</h3>
      <span>Describing you with just one link</span></div>`,
    })
    const user = await findUserByEmail(email)
    await deleteUserVerificationToken(user.id)
    await createUserVerificationToken(user.id, generatedToken)
    return redirect('/confirmemail')
  }
  const user = await login({ email, password })
  try {
    return createUserSession(user.id, '/dashboard')
  } catch (errors) {
    return { errors }
  }
}

export default function Login() {
  const actionData = useActionData()

  const [val, setVal] = useState({ email: '', password: '' })

  return (
    <>
      <div className='min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-sm bg-gray-50'>
        <div
          className={` gap-4 mb-8 w-[28.5rem] rounded-md py-2 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-sm ${
            (actionData?.errors['checkIncorrectCredentials'] &&
              actionData?.errors['email'] == null) ||
            undefined
              ? 'bg-red-50'
              : ''
          }`}
        >
          {(actionData?.errors['checkIncorrectCredentials'] &&
            actionData?.errors['email'] == null) ||
          undefined ? (
            <>
              <img src={crossimg} alt='' className='h-4 w-4' />
              <p className='text-red-800 font-medium '>
                {actionData?.errors['checkIncorrectCredentials']}
              </p>
            </>
          ) : (
            <span></span>
          )}
        </div>
        <div className='max-w-md w-full space-y-8 bg-gray-50 '>
          <div>
            <img src={logo} alt='' className='ml-48 h-20 w-20 mt-32' />
            <h2 className='w-full h-9 mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <div>
            <div className='mt-8 space-y-6 font-inter'>
              <div className='rounded-md -space-y-px'>
                <Form className='space-y-4' method='post'>
                  <div>
                    <div>
                      <input
                        className='flex items-center h-11 mt-16 shadow-sm rounded-b-none self-stretch appearance-none rounded-t-md text-gray-900 relative w-full px-2.5 py-3.5 border placeholder-gray-500 placeholder:w-28 placeholder:h-6 placeholder:leading-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        name='email'
                        placeholder='Email address'
                      />

                      <div
                        className={`text-red-600 text-sm ${
                          actionData?.errors['email'] ? 'my-2' : ''
                        }`}
                      >
                        {actionData?.errors['email']}
                      </div>
                    </div>
                    <div>
                      <input
                        className='box-border flex items-center h-11 shadow-sm rounded-b-md self-stretch rounded-t-none appearance-none text-gray-900 relative w-full px-2.5 py-3.5 border placeholder-gray-500 placeholder:w-28 placeholder:h-6 placeholder:leading-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        type='password'
                        name='password'
                        value={val.password}
                        onChange={(event) => {
                          setVal({
                            ...val,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        placeholder='Password'
                      />

                      <div
                        className={`text-red-600 text-sm ${
                          actionData?.errors['password'] ? 'mt-1' : ''
                        }`}
                      >
                        {actionData?.errors['password']}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-3.5 gap-2'>
                      <input
                        type='checkbox'
                        name='rememberMe'
                        style={{
                          borderColor: actionData?.errors['name'] && 'red',
                        }}
                        className='h-4 w-4 text-gray-900 top-0.5 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm'
                      />
                      <label htmlFor=''> Remember Me</label>
                    </div>
                    <div>
                      <Link
                        to='/forgot-password'
                        className='w-40 h-5 text-right leading-5 text-sm mt-3.5 font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className={`shadow-sm h-10 group relative w-full self-stretch order-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 `}
                    >
                      <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        <LockClosedIcon
                          className={`h-5 w-5 text-indigo-500 group-hover:text-indigo-400 
                          `}
                          aria-hidden='true'
                        />
                      </span>
                      Sign in
                    </button>
                  </div>
                  <p className='text-center text-sm'>
                    <Link
                      to='/receive-email'
                      className='mt-9 w-60 h-5 leading-5 font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Did not receive confirmation email?
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
