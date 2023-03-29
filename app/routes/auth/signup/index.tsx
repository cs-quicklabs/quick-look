import { ExclamationCircleIcon, LockClosedIcon } from '@heroicons/react/solid'
import type { ActionFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { getUser, register, validateCoupon } from '~/services/auth.service.server'
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
import { Form, useActionData, useTransition } from '@remix-run/react'
import { useState } from 'react'
import type { ServerResponse } from '~/types/response.server'
import { SignUpFormGenerator } from '~/utils/form/signupForm.server'
import { BeatLoader } from 'react-spinners'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import axios from 'axios'
import { useLoaderData } from '@remix-run/react'

export const action: ActionFunction = async ({ request }) => {
  const {
    firstname,
    lastname,
    email,
    password,
    username,
    confirmPassword,
    url,
    captchaToken,
    coupon_code,
  } = await SignUpFormGenerator(request)

  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${captchaToken}`
  )

  let coupon_code_error = ''
  let couponId = ''

  if (coupon_code) {
    const response = await validateCoupon(coupon_code)
    couponId = response?.couponId || ''
    coupon_code_error = response?.error || ''
  }

  const errors = {
    email: await validateSignupEmail(email),
    password: await validatePassword(password),
    firstname: await validateFirstName(firstname),
    lastname: await validateLastName(lastname),
    username: await validateUsername(username, false),
    isPasswordSame: await validateComfirmPassword(password, confirmPassword),
    captchaTokenError: captchaToken ? undefined : 'Incorrect Captcha',
    captchaError: res.status == 200 ? undefined : 'Incorrect Captcha',
    coupon_code: coupon_code_error,
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
    couponId,
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

export const loader: LoaderFunction = async ({ request, context }) => {
  const user = await getUser(request)
  if (user) {
    return redirect('/account')
  }
  return json({
    ENV: {
      REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY,
    },
  })
}

export const meta: MetaFunction = () => {
  return {
    title: 'QuickLook.me - Log In or Sign Up',
    description:
      'Create an account or log into QuickLook. Describe yourself with just one link which connects all your social profiles together.',
    'og:type': 'website',
    'og:url': 'https://www.quicklook.me/',
    'og:title': 'QuickLook.me — Introduction made simple with just one link.',
    'og:description':
      'Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.',
    'og:image': 'https://www.quicklook.me/build/_assets/Menus-NEYOTUUT.png',

    'twitter:card': 'summary_large_image',
    'twitter:url': 'https://www.quicklook.me/',
    'twitter:title': 'QuickLook.me — Introduction made simple with just one link.',
    'twitter:description':
      'Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.',
    'twitter:image': 'https://www.quicklook.me/build/_assets/Menus-NEYOTUUT.png',
    keywords: `twitter profile, linkTree, facebook profile, linkedIn profile, one link profile, social profile quicklook, quicklook sign in, quicklook login, quicklook signup, QuickLook.me`,
  }
}

export default function SignUp() {
  const captchaRef = useRef(null)
  const transition = useTransition()
  const Data = useLoaderData()

  const actionData = useActionData()
  const [token, setToken] = useState('')

  const handleSubmit = async (e: any) => {
    //@ts-ignore
    setToken(captchaRef.current.getValue())
    //@ts-ignore
    captchaRef.current.execute()
  }

  const [val, setVal] = useState({
    firstName: '',
    lastName: '',
    profileId: '',
    email: '',
    password: '',
    confirmPassword: '',
    coupon_code: '',
  })
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full max-w-md space-y-8">
          <div className="mx-auto flex flex-col items-center justify-center">
            <img src={logo} alt="" className="h-20 w-20" />
            <div className="flex flex-col items-center justify-center">
              <h2 className="w-full h-9 mt-6 font-[800] text-center sm:text-3xl text-2xl leading-9 text-gray-900">
                Create new Account
              </h2>
              <p className="mt-2 text-center text-sm font-inter font-medium">
                No credit card required. Starting with free plan.
              </p>
            </div>
          </div>
          <div className="mt-5 mx-auto font-inter">
            <div className="bg-gray-50 ">
              <Form replace={false} className="space-y-4" method="post" noValidate>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <label className="text-gray-700 w-24 h-5 font-medium leading-5 text-sm">
                      First Name
                    </label>
                    <input
                      data-cy="firstName"
                      className={`flex items-center box-border appearance-none w-44 h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                        actionData?.errors['firstname'] ? 'border border-red-400' : 'first-line:'
                      }`}
                      type="firstName"
                      name="firstName"
                      value={val.firstName}
                      onChange={(event) => {
                        setVal({
                          ...val,
                          [event.target.name]: event.target.value,
                        })
                      }}
                    />
                    {actionData?.errors['firstname'] ? (
                      <div
                        className={`absolute  pr-3 right-0 pt-1.5 flex items-center pointer-events-none inset-y-0 `}
                      >
                        <ExclamationCircleIcon
                          className="h-4 w-4 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      ''
                    )}

                    {actionData?.errors['firstname'] ? (
                      <div className="text-red-600 text-sm w-44 h-[1.8rem]">
                        {actionData?.errors['firstname']}
                      </div>
                    ) : null}
                  </div>
                  <div className="relative">
                    <label className="text-gray-700 w-24 h-5 font-medium leading-5 text-sm">
                      Last Name
                    </label>
                    <input
                      data-cy="lastName"
                      className={`flex items-center box-border appearance-none w-44 h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                        actionData?.errors['lastname'] ? 'border border-red-400' : 'first-line:'
                      }`}
                      type="lastName"
                      name="lastName"
                      value={val.lastName}
                      onChange={(event) => {
                        setVal({
                          ...val,
                          [event.target.name]: event.target.value,
                        })
                      }}
                    />
                    {actionData?.errors['lastname'] ? (
                      <div
                        className={`absolute  pr-3 right-0 pt-1.5 flex items-center pointer-events-none inset-y-0`}
                      >
                        <ExclamationCircleIcon
                          className="h-4 w-4 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      ''
                    )}
                    {/* <div className='text-red-600 text-sm w-44 h-[2rem]'>
                    {actionData?.errors['lastname']}
                  </div> */}
                    {actionData?.errors['lastname'] ? (
                      <div className="text-red-600 text-sm w-44 h-[1.8rem]">
                        {actionData?.errors['lastname']}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm">
                    Choose your Profile ID
                  </label>
                  <div className={`mt-2 sm:col-span-2 relative rounded-md shadow-sm`}>
                    <div className={`max-w-lg flex rounded-md`}>
                      <span
                        className={`inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm ${
                          actionData?.errors['username']
                            ? 'border-t border-b border-l border-r border-r-gray-300 border-red-400'
                            : 'first-line:'
                        }`}
                      >
                        quicklook.me/
                      </span>
                      <input
                        data-cy="profileId"
                        type="text"
                        name="profileId"
                        value={val.profileId}
                        onChange={(event) => {
                          setVal({
                            ...val,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        className={`flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border  ${
                          actionData?.errors['username']
                            ? 'border-t border-b border-r border-l-0 border-red-400'
                            : 'first-line:'
                        }`}
                      />
                    </div>
                    {actionData?.errors['username'] ? (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon
                          className="h-4 w-4 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="text-red-600 text-sm">{actionData?.errors['username']}</div>
                </div>

                <div className="relative">
                  <label className="text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm">
                    Email address
                  </label>
                  <input
                    data-cy="email"
                    className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                      actionData?.errors['email'] ? 'border border-red-400' : ''
                    }`}
                    type="email"
                    name="email"
                    value={val.email}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                  />
                  {actionData?.errors['email'] ? (
                    <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                      <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="text-red-600 text-sm ">{actionData?.errors['email']}</div>
                </div>
                <div className="relative">
                  <label className="text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm">
                    Password
                  </label>
                  <input
                    data-cy="password"
                    className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                      actionData?.errors['password'] ? 'border border-red-400' : ''
                    }`}
                    type="password"
                    name="password"
                    value={val.password}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                  />
                  {actionData?.errors['password'] ? (
                    <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                      <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="text-red-600 text-sm ">{actionData?.errors['password']}</div>
                </div>
                <div className="relative">
                  <label className="text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm">
                    Confirm Password
                  </label>
                  <input
                    data-cy="confirmPassword"
                    className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                      actionData?.errors['isPasswordSame'] ? 'border border-red-400' : ''
                    }`}
                    type="password"
                    name="confirmPassword"
                    value={val.confirmPassword}
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                  />
                  {actionData?.errors['isPasswordSame'] ? (
                    <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                      <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="text-red-600 text-sm ">
                    {actionData?.errors['isPasswordSame']}
                  </div>
                </div>

                <div className="relative">
                  <label
                    className="text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm"
                    htmlFor="coupon_code"
                  >
                    Coupon Code (Optional)
                  </label>

                  <input
                    data-cy="coupon_code"
                    id="coupon_code"
                    className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                      actionData?.errors['coupon_code'] ? 'border border-red-400' : ''
                    }`}
                    type="text"
                    name="coupon_code"
                    value={val.coupon_code}
                    onChange={(e) => {
                      const { name, value } = e?.target
                      setVal({
                        ...val,
                        [name]: value?.toUpperCase()?.trim(),
                      })
                    }}
                  />

                  {actionData?.errors['coupon_code'] ? (
                    <div className="absolute inset-y-0 right-0 pr-3 pt-1.5 flex items-center pointer-events-none ">
                      <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="text-red-600 text-sm ">{actionData?.errors['coupon_code']}</div>
                </div>

                <div className="flex flex-col justify-end">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={Data.ENV.REACT_APP_SITE_KEY}
                    onChange={handleSubmit}
                  />
                  <div className="text-red-600 text-sm">{actionData?.errors['captchaError']}</div>
                  <div className="text-red-600 text-sm">
                    {actionData?.errors['captchaTokenError']}
                  </div>
                  <input type="text" hidden name="captcha" value={token} />
                  <button
                    data-cy="createNewAccountButton"
                    type="submit"
                    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white leading-5 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8`}
                    disabled={transition?.state != 'idle' ? true : false}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className={`h-5 w-5 text-indigo-500 group-hover:text-indigo-400 `}
                        aria-hidden="true"
                      />
                    </span>
                    {transition?.state != 'idle' ? (
                      <BeatLoader color="#ffffff" />
                    ) : (
                      'Create New Account'
                    )}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
