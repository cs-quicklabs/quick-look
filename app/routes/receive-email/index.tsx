import { ActionFunction, redirect } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import { sendResetPasswordLink } from '~/services/password.service.server'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { validateEmail } from '~/utils/validator.server'
import { findUserByEmail } from '~/services/user.service.serevr'
import { createUserSession } from '~/services/auth.service.server'

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
  const user = await findUserByEmail(email)

  if (user) {
    await sendResetPasswordLink(email, url)
  }
  return await createUserSession(user?.id, '/confirmforgotpassword')
}

export default function Forgotpassword() {
  const actionData = useActionData()
  const [val, setVal] = useState('')

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16 text-sm font-inter'>
        <div>
          <div className='max-w-md w-full space-y-8'>
            <img src={logo} alt='' className='mx-auto h-20 w-auto' />
            <h2 className='mt-6 text-center text-3xl font-[750] text-gray-900'>
              Receive Confirmation Email
            </h2>
          </div>
          <p className='mt-5 flex items-center justify-end text-base text-gray-400'>
            Please enter your email address to receive reset password link
          </p>
          <div className='max-w-md w-full space-y-8'>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm -space-y-px'>
                <Form className='space-y-4' method='post' noValidate>
                  <div>
                    <label>
                      Email address
                      <input
                        value={val}
                        onChange={(event) => setVal(event.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3'
                        name='email'
                        type='email'
                        style={{
                          borderColor: actionData?.errors['email'] && 'red',
                        }}
                      />
                    </label>
                    <div className='text-red-600'>
                      {actionData?.errors['email']}
                    </div>
                  </div>
                  <div className='mt-5'>
                    <button
                      type='submit'
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
