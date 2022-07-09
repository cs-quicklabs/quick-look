import { LockClosedIcon } from '@heroicons/react/solid'
import { ActionFunction, json, redirect } from '@remix-run/node'
import { Link } from 'react-router-dom'
import { createUserSession, login } from '~/services/auth.service.server'

import {
  checkIncorrectCredentials,
  validateEmail,
  validatePassword,
} from '~/utils/validator.server'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
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
      <h3>Quicklook.me</h3>
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
      <div className='relative h-screen flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8 bg-gray-50 font-inter'>
        <div className='max-w-md w-full space-y-8 bg-gray-50'>
          <div
            className={` gap-4 mb-8 w-[28.5rem] rounded-md py-2 flex items-center flex-start justify-center px-4 sm:px-6 lg:px-8 text-sm ${
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-red-400 h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                    clip-rule='evenodd'
                  />
                </svg>
                <p className='text-red-800 font-medium '>
                  {actionData?.errors['checkIncorrectCredentials']}
                </p>
              </>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <img src={logo} alt='' className='ml-48 h-20 w-20' />
            <h2 className='w-full h-9 mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <div>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md -space-y-px'>
                <Form className='space-y-4' method='post'>
                  <div>
                    <div>
                      <input
                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                          actionData?.errors['email']
                            ? 'border border-red-400'
                            : ''
                        }`}
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
                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                          actionData?.errors['password']
                            ? 'border border-red-400'
                            : ''
                        }`}
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
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-sm text-gray-900'
                      >
                        {' '}
                        Remember me{' '}
                      </label>
                    </div>

                    <div className='text-sm'>
                      <a
                        href='forgot-password'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        {' '}
                        Forgot your password?{' '}
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 `}
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
                  <p className='mt-2 text-center text-sm'>
                    <Link
                      to='/receive-email'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
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
