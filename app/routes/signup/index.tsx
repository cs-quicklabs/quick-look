import { LockClosedIcon } from '@heroicons/react/solid'

import { ActionFunction, json } from '@remix-run/node'
import { Link } from 'react-router-dom'
import { createUserSession, register } from '~/services/auth.service.server'
import { sendAccountVerificationMail } from '~/services/mail.service.server'
import { createUserVerificationToken } from '~/services/userVerification.service.server'
import {
  validateComfirmPassword,
  validateFirstName,
  validateLastName,
  validatePassword,
  validateSignupEmail,
  validateUsername,
} from '~/utils/validator.server'
import { v4 as uuidv4 } from 'uuid'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import { ServerResponse } from '~/types/response.server'
import { SignUpFormGenerator } from '~/utils/form/signupForm.server'

export const action: ActionFunction = async ({ request }) => {
  const {firstname, lastname, email, password, username, confirmPassword, url} = await SignUpFormGenerator(request)

  const errors = {
    email: await validateSignupEmail(email),
    password: await validatePassword(password),
    firstname: await validateFirstName(firstname),
    lastname: await validateLastName(lastname),
    username: await validateUsername(username),
    isPasswordSame: await validateComfirmPassword(password, confirmPassword),
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors,
        form: action,
      },
      { status: 400 }
    )
  }

  const registeredResponse : ServerResponse = await register({
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
  })

  const generatedToken = uuidv4() as string
  let createVerificationToken =  await createUserVerificationToken(registeredResponse.data.userId as string, generatedToken)
  if(createVerificationToken.success && registeredResponse.success){
    await sendAccountVerificationMail(email, url, generatedToken)
  }
  return createUserSession(registeredResponse.data.userId as string, '/confirmemail')
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
      <div className='h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 font-inter'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md bg-gray-50'>
          <img src={logo} alt='' className='mx-auto h-20 w-auto' />
          <h2 className='mt-4 text-center text-3xl font-[750] text-gray-900'>
            Create new account
          </h2>
          <p className='mt-2 text-center text-sm'>
            <Link
              to='#'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              No credit card required. Starting with free plan.
            </Link>
          </p>
        </div>
        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-md bg-gray-50'>
          <div className=' py-8 px-4 sm:rounded-lg sm:px-10 bg-gray-50'>
            <Form className='space-y-4 bg-gray-50' method='post' noValidate>
              <div className='mt-1 grid grid-cols-2 gap-2'>
                <div>
                  <label>First Name</label>
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
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
                  <label>Last Name</label>
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
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
                <label>Choose your Profile ID</label>
                <div className='flex  appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'>
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
                <label>Email address</label>
                <input
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
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
                <label>Password</label>
                <input
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
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
                <label>Confirm Password</label>
                <input
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
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
              <div className='mt-5'>
                <button
                  className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
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
