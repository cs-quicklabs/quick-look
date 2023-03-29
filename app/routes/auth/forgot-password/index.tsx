import type { ActionFunction } from '@remix-run/node'
import { LoaderFunction, redirect } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import logo from '../../../../assets/images/logos/quicklook-icon.svg'
import { validateEmail } from '~/utils/validator.server'
import { findUserByEmail } from '~/services/user.service.server'
import {
  sendAccountVerificationMail,
  sendResetPasswordMail,
} from '~/services/mail.service.server'
import { v4 as uuidv4 } from 'uuid'
import { createUserVerificationToken } from '~/services/userVerification.service.server'
import { requireUserId } from '~/services/auth.service.server'
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/solid'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email') as string

  let url = request.url

  const errors = {
    email: await validateEmail(email),
  }

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, fields: { email }, form: action }, { status: 400 })
  }

  let user = await findUserByEmail(email)

  const generatedToken = uuidv4() as string
  let createVerificationToken

  if (!user) {
    return redirect('/confirm/password')
  } else if (user?.profile?.isBlocked) {
    return json(
      {
        errors: {
          isBlocked:
            'Your profile is blocked, Please contact admin to continue.',
        },
      },
      { status: 400 }
    )
  } else if (user.profile['isVerified'] == true) {
    createVerificationToken = await createUserVerificationToken(
      user.id,
      generatedToken
    )
    await sendResetPasswordMail(email, url, generatedToken)
    return redirect('/confirm/password')
  } else if (user.profile['isVerified'] == false) {
    createVerificationToken = await createUserVerificationToken(
      user.id,
      generatedToken
    )
    await sendAccountVerificationMail(email, url, generatedToken)
    return redirect('/confirm/email')
  }
}

export default function Forgotpassword() {
  const actionData = useActionData()
  const [val, setVal] = useState('')

  return (
    <>
      <div className="h-[calc(100vh-3rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-sm bg-gray-50 font-inter">
        <div>
          {actionData?.errors?.isBlocked && (
            <div
              className="rounded-md bg-red-50 p-4 w-full max-w-md my-4"
              data-cy="alertError"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm font-medium text-red-800">
                  {actionData?.errors?.isBlocked}
                </p>
              </div>
            </div>
          )}

          <div className="max-w-md w-full space-y-8">
            <img src={logo} alt="" className="mx-auto h-20 w-20" />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Forgot Password?
            </h2>
          </div>
          <div className="max-w-md w-full space-y-8 font-inter">
            <div className="space-y-6">
              <p className="mt-4 flex  justify-start text-sm leading-5 font-normal text-gray-500">
                Please enter your email address to receive reset password link
              </p>
              <div className="rounded-md -space-y-px">
                <Form className="space-y-4" method="post" noValidate>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      value={val}
                      onChange={(event) => setVal(event.target.value)}
                      className={`${
                        actionData?.errors['email']
                          ? 'border border-red-400'
                          : ''
                      } appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3`}
                      name="email"
                      type="email"
                      style={{
                        borderColor: actionData?.errors['email'] && 'red',
                      }}
                    />
                    {actionData?.errors['email'] ? (
                      <div className="absolute inset-y-0 right-0 pr-3 pt-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon
                          className="h-4 w-4 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="text-red-600">
                      {actionData?.errors['email']}
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
                    >
                      Send Reset Password Instructions
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
