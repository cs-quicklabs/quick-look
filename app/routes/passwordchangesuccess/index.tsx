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
    await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: 'Email Verification',
      text: `${url}/verification/${generatedToken}`,
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

export default function passwordchangesuccess() {
  const actionData = useActionData()

  const [val, setVal] = useState({ email: '', password: '' })

  return (
    <>
      <div className='min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16'>
        {actionData?.errors['checkIncorrectCredentials'] ? (
          <div
            className={`gap-4 mb-8 w-[28.5rem] rounded-md py-2 flex items-center justify-center px-4 sm:px-6 lg:px-8  ${
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
        ) : (
          <div className='w-[28.5rem] flex gap-4 mb-8 items-center justify-center bg-green-50 rounded-md px-6 py-2 w-2/7'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z'
                fill='#34D399'
              />
            </svg>
            <p className='text-green-800 font-medium'>
              Your Password has been updated successfully.
            </p>
          </div>
        )}
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img src={logo} alt='' className='mx-auto h-20 w-auto' />
            <h2 className='mt-6 text-center text-3xl font-[750] text-gray-900'>
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
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                    <div className='flex items-center mt-3.5  gap-2'>
                      <input
                        type='checkbox'
                        name='rememberMe'
                        style={{
                          borderColor: actionData?.errors['name'] && 'red',
                        }}
                        className='h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm'
                      />
                      <label htmlFor='' className='text-sm'>
                        {' '}
                        Remember Me
                      </label>
                    </div>
                    <div className='text-sm mt-3.5'>
                      <Link
                        to='/forgot-password'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Forgot your password?
                      </Link>
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
