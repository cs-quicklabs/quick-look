import { ExclamationCircleIcon, LockClosedIcon } from '@heroicons/react/solid'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { getUser, register } from '~/services/auth.service.server'
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
import logo from '../../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import { ServerResponse } from '~/types/response.server'
import { SignUpFormGenerator } from '~/utils/form/signupForm.server'

export const action: ActionFunction = async ({ request }) => {
  const {
    firstname,
    lastname,
    email,
    password,
    username,
    confirmPassword,
    url,
  } = await SignUpFormGenerator(request)

  const errors = {
    email: await validateSignupEmail(email),
    password: await validatePassword(password),
    firstname: await validateFirstName(firstname),
    lastname: await validateLastName(lastname),
    username: await validateUsername(username, false),
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

  const registeredResponse: ServerResponse = await register({
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
  })

  const generatedToken = uuidv4() as string
  let createVerificationToken = await createUserVerificationToken(
    registeredResponse.data.userId as string,
    generatedToken
  )
  if (createVerificationToken.success && registeredResponse.success) {
    await sendAccountVerificationMail(email, url, generatedToken)
  }
  return redirect('/confirm/email')
}

export const loader: LoaderFunction = async ({request}) => {
  const user = await getUser(request)
  if(user){
    return redirect('/account')
    
  }
  return null
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
      <div className=' h-screen flex flex-col  text-sm font-inter bg-gray-50 my-0 py-0 overflow-y-auto'>
        <div className='mx-auto flex flex-col items-center justify-center mt-20'>
          <img src={logo} alt='' className='h-20 w-20' />
          <div className='flex flex-col items-center justify-center'>
          <h2 className='w-full h-9 mt-6 font-[800] text-center text-3xl  leading-9 text-gray-900'>
            Create new Account
          </h2>
          <p className='mt-2 text-center text-sm font-inter font-medium'>
            
              No credit card required. Starting with free plan.
            
          </p></div>
        </div>
        <div className='mt-5 mx-auto font-inter'>
          <div className='bg-gray-50 '>
            <Form className='space-y-4' method='post' noValidate>
              <div className='grid grid-cols-2 gap-2'>
                <div className='relative'>
                  <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                    First Name
                  </label>
                  <input
                    data-cy="firstName"
                    className={`flex items-center box-border appearance-none w-44 h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                      actionData?.errors['firstname']
                        ? 'border border-red-400'
                        : 'first-line:'
                    }`}
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
                  {actionData?.errors['firstname'] ?
                <div className={`absolute  pr-3 right-0 pt-1.5 flex items-center pointer-events-none inset-y-0 `} >
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
                  
{actionData?.errors['firstname'] ?
                  <div className='text-red-600 text-sm w-44 h-[1.8rem]'>
                    {actionData?.errors['firstname']}
                  </div> :null}
                </div>
                <div className='relative'>
                  <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                    Last Name
                  </label>
                  <input
                    data-cy="lastName"
                    className={`flex items-center box-border appearance-none w-44 h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                      actionData?.errors['lastname']
                        ? 'border border-red-400'
                        : 'first-line:'
                    }`}
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
                  {actionData?.errors['lastname'] ?
                <div className={`absolute  pr-3 right-0 pt-1.5 flex items-center pointer-events-none inset-y-0`} >
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
                  {/* <div className='text-red-600 text-sm w-44 h-[2rem]'>
                    {actionData?.errors['lastname']}
                  </div> */}
                     {actionData?.errors['lastname'] ?
                  <div className='text-red-600 text-sm w-44 h-[1.8rem]'>
                      {actionData?.errors['lastname']}
                  </div> :null}
                </div>
              </div>

            <div>
              <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>
                Choose your Profile ID
              </label>
              <div className={`mt-2 sm:mt-0 sm:col-span-2 relative rounded-md shadow-sm`}>
                <div className={`max-w-lg flex rounded-md`}>
                  <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm ${actionData?.errors['username']
                        ? 'border-t border-b border-l border-r border-r-gray-300 border-red-400'
                        : 'first-line:'
                    }`}>
                    quicklook.me/
                  </span>
                  <input
                    data-cy="profileId"
                    type='text'
                    name='profileId'
                    value={val.profileId}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                    className={`flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border  ${actionData?.errors['username']
                    ? 'border-t border-b border-r border-l-0 border-red-400'
                    : 'first-line:'
                }`}
                  />
                </div>
                {actionData?.errors['username'] ?
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
              </div>
              <div className='text-red-600 text-sm'>
                {actionData?.errors['username']}
              </div>
            </div>

            
              <div className='relative'>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>
                  Email address
                </label>
                <input
                  data-cy="email"
                  className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                    actionData?.errors['email'] ? 'border border-red-400' : ''
                  }`}
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
                {actionData?.errors['email'] ?
                <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['email']}
                </div>
              </div>
              <div className='relative'>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>
                  Password
                </label>
                <input
                  data-cy="password"
                  className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
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
                />
                {actionData?.errors['password'] ?
                <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['password']}
                </div>
              </div>
              <div className='relative'>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>
                  Confirm Password
                </label>
                <input
                  data-cy="confirmPassword"
                  className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                    actionData?.errors['isPasswordSame']
                      ? 'border border-red-400'
                      : ''
                  }`}
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
                {actionData?.errors['isPasswordSame'] ?
                <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                </div>:''}
                <div className='text-red-600 text-sm '>
                  {actionData?.errors['isPasswordSame']}
                </div>
              </div>
              <div className=''>
                <button
                  data-cy="createNewAccountButton"
                  type="submit"
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
