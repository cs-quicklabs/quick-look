import { LockClosedIcon } from '@heroicons/react/solid'
import { User } from '@prisma/client'
import { ActionFunction, json } from '@remix-run/node'
import { Formik } from 'formik'

import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { createUserSession, register } from '~/services/auth.service.server'
import { sendMail } from '~/services/mail.service.server'
import { findUserByEmail } from '~/services/user.service.serevr'
import { createUserVerificationToken } from '~/services/userVerification.service.server'
import {
  validateComfirmPassword,
  validateEmail,
  validateLastName,
  validateName,
  validatePassword,
  validateSignupEmail,
  validateUsername,
} from '~/utils/validator.server'
import { v4 as uuidv4 } from 'uuid'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'

export const action: ActionFunction = async ({ request }) => {
  let sentMail

  const form = await request.formData()
  let firstname = form.get('firstName') as string
  let lastname = form.get('lastName') as string
  let email = form.get('email') as string
  let password = form.get('password') as string
  let username = form.get('profileId') as string
  let confirmPassword = form.get('confirmPassword') as string

  let url = request.url

  const errors = {
    email: await validateSignupEmail(email),
    password: await validatePassword(password),
    firstname: await validateName(firstname),
    lastname: await validateLastName(lastname),
    username: await validateUsername(username),
    isPasswordSame: await validateComfirmPassword(password, confirmPassword),
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors,
        fields: {
          email,
          password,
          firstname,
          lastname,
          username,
          confirmPassword,
        },
        form: action,
      },
      { status: 400 }
    )
  }

  const registered = await register({
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
  })
  const generatedToken = uuidv4() as string
  if (registered) {
    sentMail = await sendMail({
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
  }

  const user: User = await findUserByEmail(email)
  await createUserVerificationToken(user.id, generatedToken)

  try {
    return createUserSession(user.id, '/confirmemail')
  } catch (errors) {
    return { errors }
  }
}

export default function SignUp() {
  const actionData = useActionData()

  const [val, setVal] = useState({
    firstName: '',
    lastName: '',
    profileId: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  return (
    <>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-sm bg-gray-50'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img src={logo} alt='' className='ml-48 h-20 w-20 mt-20' />
          <h2 className='w-full h-9 mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900'>
            Create new account
          </h2>
          <p className='mt-2 text-center text-sm font-inter'>
            <Link
              to='#'
              className='font-medium text-indigo-600 font-inter leading-5 w-80 h-5 hover:text-indigo-500'
            >
              No credit card required. Starting with free plan.
            </Link>
          </p>
        </div>
        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-md font-inter'>
          <div className='bg-gray-50 sm:px-10'>
            <Form className='space-y-4' method='post' noValidate>
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>First Name</label>
                  <input
                    className='flex items-center box-border appearance-none w-44 h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5'
                    type='firstName'
                    name='firstName'
                    value={val.firstName}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                  />
                  <div className='text-red-600 text-sm '>
                    {actionData?.errors['firstname']}
                  </div>
                </div>
                <div>
                  <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>Last Name</label>
                  <input
                    className='flex items-center box-border appearance-none w-44 h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5'
                    type='lastName'
                    name='lastName'
                    value={val.lastName}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                  />
                  <div className='text-red-600 text-sm '>
                    {actionData?.errors['lastname']}
                  </div>
                </div>
              </div>
              <div>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>Choose your Profile ID</label>
                <div className='flex appearance-none w-full h-10 px-1 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5'>
                  <input
                    type='text'
                    value='quicklook.me/'
                    disabled
                    className='w-24'
                  />
                  <input
                    className='outline-none appearance-none w-full '
                    type='text'
                    name='profileId'
                    value={val.profileId}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                  />
                </div>
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['username']}
                </div>
              </div>
              <div>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>Email address</label>
                <input
                  className='box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5'
                  type='email'
                  name='email'
                  value={val.email}
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}
                />
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['email']}
                </div>
              </div>
              <div>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>Password</label>
                <input
                  className='box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5'
                  type='password'
                  name='password'
                  value={val.password}
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}
                />
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['password']}
                </div>
              </div>
              <div>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>Confirm Password</label>
                <input
                  className='box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5'
                  type='password'
                  name='confirmPassword'
                  value={val.confirmPassword}
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}
                />
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['isPasswordSame']}
                </div>
              </div>
              <div className=''>
                <button
                  className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white leading-5 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8`}
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <LockClosedIcon
                      className={`h-5 w-5 text-indigo-500 group-hover:text-indigo-400 `}
                      aria-hidden='true'
                    />
                  </span>
                  Create New Account
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
