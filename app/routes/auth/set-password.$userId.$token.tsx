import { Form, useActionData } from '@remix-run/react'

import logo from '../../../assets/images/logos/quicklook-icon.svg'

export default function Password() {
  const actionData = useActionData()
  // @ts-ignore
  const errors = actionData?.errors || {}

  return (
    <>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-sm font-inter bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img src={logo} alt="" className="mx-auto h-20 w-auto" />
            <h2 className="mt-6 text-center text-3xl font-[750] text-gray-900">
              Set Your Password
            </h2>
          </div>

          <div>
            <div className="mt-8 space-y-6">
              <div className="rounded-md -space-y-px">
                <Form className="space-y-4" method="post">
                  <div className="relative">
                    <div className="relative">
                      <label className="text-gray-700 w-24 h-5 font-medium leading-5 text-sm">
                        Password
                        <input
                          className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                            errors?.['password'] ? 'border border-red-400' : ''
                          }`}
                          name="password"
                          type="password"
                          style={{
                            borderColor: errors?.['password'] && 'red',
                          }}
                        />
                      </label>

                      <div className="text-red-600">{errors?.['password']}</div>
                    </div>

                    <div className="mt-2 relative">
                      <label className="text-gray-700 w-24 h-5 relative font-medium leading-5 text-sm">
                        Confirm Password
                        <input
                          className={`relative box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                            errors?.['confirmPassword'] ? 'border border-red-400' : ''
                          }`}
                          name="confirmPassword"
                          type="password"
                          style={{
                            borderColor: errors?.['confirmPassword'] && 'red',
                          }}
                        />
                      </label>

                      <div className="text-red-600">{errors?.['confirmPassword']}</div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      type="submit"
                      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
                    >
                      Create Password
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
