import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XIcon,
} from '@heroicons/react/solid'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from '@remix-run/react'
import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import DashboardHeader from '~/components/Common/DashboardHeader'
import ProfileSetting from '~/components/Common/ProfileSetting'
import { getUser, requireUserId } from '~/services/auth.service.server'
import { commitSession, getSession } from '~/services/session.service.server'
import {
  updateUserProfileDetails,
  updateUsingOldPassword,
} from '~/services/user.service.serevr'
import {
  updateValidatePassword,
  validateComfirmPassword,
  validateFirstName,
  validateLastName,
  validateOldPassword,
  validatePassword,
  validateUpdateUsername,
  validateUsername,
} from '~/utils/validator.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request)

  const session = await getSession(request.headers.get('Cookie'))

  const formData = await request.formData()
  let { _action } = Object.fromEntries(formData)

  if (_action === 'updateProfile') {
    const firstName = formData.get('firstname') as string
    const lastName = formData.get('lastname') as string
    const profileId = formData.get('profileId') as string

    const errors = {
      firstname: await validateFirstName(firstName),
      lastname: await validateLastName(lastName),
      username: await validateUpdateUsername(profileId, user),
    }

    if (Object.values(errors).some(Boolean)) {
      return json(
        {
          errors,
          form: action,
        },
        { status: 400 }
      )
    } else {
      const isUpdated = await updateUserProfileDetails({
        firstname: firstName,
        lastname: lastName,
        profileId,
        user,
      })

      if (isUpdated) {
        session.flash(
          'updateSuccessProfileMessage',
          `Your profile has been updated successfully.`
        )
        return redirect('/account/profile', {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        })
      }
    }
  } else if (_action === 'updatePassword') {
    const oldPassword = formData.get('oldpassword') as string
    const newPassword = formData.get('newpassword') as string
    const confirmNewPassword = formData.get('confirmnewpassword') as string

    const errors = {
      isOldPasswordSame: await validateOldPassword(
        user,
        newPassword,
        oldPassword
      ),
      password: await updateValidatePassword(newPassword, user),
      isPasswordSame: await validateComfirmPassword(
        newPassword,
        confirmNewPassword
      ),
    }
    if (Object.values(errors).some(Boolean)) {
      return json(
        {
          errors,
          form: action,
        },
        { status: 400 }
      )
    } else {
      const isPasswordUpdated = await updateUsingOldPassword(user, newPassword)
      if (isPasswordUpdated) {
        session.flash(
          'updatePasswordMessage',
          `Your password has been updated successfully.`
        )
        return redirect('/account/profile', {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        })
      }
    }
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  const user = await getUser(request)
  const session = await getSession(request.headers.get('Cookie'))
  const updateSuccessProfileMessage =
    session.get('updateSuccessProfileMessage') || null
  const updatePasswordMessage = session.get('updatePasswordMessage') || null
  return json(
    { updateSuccessProfileMessage, updatePasswordMessage, user },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  )
}

export default function Profile() {
  const actionData = useActionData()
  const loaderData = useLoaderData()
  const transition = useTransition()
  console.log(transition, actionData?.errors)
  const [pass, SetPass] = useState({
    oldpassword: '',
    newpassword: '',
    confirmnewpassword: '',
  })
  const [selectSave, setSelectSave] = useState('')

  const [val, setVal] = useState({
    firstName: `${loaderData?.user?.firstname}`,
    lastName: `${loaderData?.user?.lastname}`,
    profileId: `${loaderData?.user?.username}`,
  })

  const [profileMessage, setProfileMessage] = useState(
    loaderData?.updateSuccessProfileMessage
  )
  const [passwordMessasge, setPasswordMessage] = useState(
    loaderData?.updatePasswordMessage
  )

  useEffect(() => {
    setProfileMessage(loaderData?.updateSuccessProfileMessage)
    setPasswordMessage(loaderData?.updatePasswordMessage)
  }, [loaderData])

  if (profileMessage) {
    setTimeout(() => {
      setProfileMessage('')
    }, 2000)
  }

  if (passwordMessasge) {
    setTimeout(() => {
      setPasswordMessage('')
    }, 2000)
  }
  useEffect(() => {
    transition.state == 'loading' 
      ? SetPass({
          oldpassword: '',
          newpassword: '',
          confirmnewpassword: '',
        })
      : null
  }, [transition, pass])
  return (
    <>
      <div>
        <DashboardHeader
          username={loaderData.user.username}
          loaderData={loaderData.user}
        />
      </div>
      <div className="md:flex md:flex-wrap lg:grid lg:grid-cols-12 lg:gap-x-5 px-[1rem] md:px-[0rem]">
        <div className="md:w-[25%] lg:w-2/5 ">
          <ProfileSetting />
        </div>

        <div className=" font-inter mt-2 max-w-xl md:w-3/5 lg:col-span-9 lg:ml-64 lg:px-0 px-4 xl:ml-60 2xl:ml-44">
          <Form method="post">
            <div className="sm:overflow-hidde sm:rounded-md">
              <div className="flex "></div>
              <div className="max-w-3xl space-y-6 py-6 sm:pt-6 md:pl-[0.75rem] lg:px-4">
                {profileMessage ? (
                  <div className="mt-[1.5rem] rounded-md bg-green-50  p-4 xl:mr-[1.5rem]">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="w-max text-sm font-medium text-green-800">
                          {profileMessage}
                        </p>
                      </div>
                      <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                          <button
                            type="button"
                            className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                          >
                            <span className="sr-only">Dismiss</span>
                            <XIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                              onClick={() => {
                                setProfileMessage('')
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div className="grid sm:max-w-[36rem] md:max-w-lg grid-cols-1  border-b border-gray-200">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="relative">
                      <label className="h-5 w-24 text-sm font-medium leading-5 text-gray-700">
                        First Name
                      </label>
                      <input
                        className={`mt-1.5 box-border flex h-10 w-full  appearance-none items-center rounded-md border border-gray-300 px-2.5 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                          actionData?.errors?.['firstname']
                            ? 'border border-red-400'
                            : 'first-line:'
                        }`}
                        name="firstname"
                        id="firstname"
                        value={val.firstName}
                        onChange={(e: any) => setVal(e.target.value)}
                      />
                      {actionData?.errors['firstname'] ? (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <ExclamationCircleIcon
                            className="h-4 w-4 text-red-500"
                            aria-hidden="true"
                          />
                        </div>
                      ) : (
                        ''
                      )}
                      <div className="w-max text-sm text-red-600">
                        {actionData?.errors?.['firstname']}
                      </div>
                    </div>
                    <div className="relative mt-3.5">
                      <label className="h-5 w-24 text-sm font-medium leading-5 text-gray-700">
                        Last Name
                      </label>
                      <input
                        className={`mt-1.5 box-border flex h-10 w-full  appearance-none items-center rounded-md border border-gray-300 px-2.5 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                          actionData?.errors?.['lastname']
                            ? 'border border-red-400'
                            : 'first-line:'
                        }`}
                        name="lastname"
                        id="lastname"
                        value={val.lastName}
                        type="text"
                        onChange={(e: any) => setVal(e.target.value)}
                      />
                      {actionData?.errors['lastname'] ? (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <ExclamationCircleIcon
                            className="h-4 w-4 text-red-500"
                            aria-hidden="true"
                          />
                        </div>
                      ) : (
                        ''
                      )}
                      <div className="w-max text-sm text-red-600">
                        {actionData?.errors?.['lastname']}
                      </div>
                    </div>
                    <div className="relative mt-3.5 w-full">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Profile ID
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span
                          className={`inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm ${
                            actionData?.errors?.['username']
                              ? 'border-t border-b border-l border-r border-red-400 border-r-gray-300'
                              : 'first-line:'
                          }`}
                        >
                          quicklook.me/
                        </span>
                        <input
                          type="text"
                          name="profileId"
                          value={val.profileId}
                          onChange={(e: any) => setVal(e.target.value)}
                          id="profileId"
                          className={`block min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                            actionData?.errors?.['username']
                              ? 'border-t border-b border-r border-l-0 border-red-400'
                              : 'first-line:'
                          }`}
                        />
                        {actionData?.errors['username'] ? (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ExclamationCircleIcon
                              className="h-4 w-4 text-red-500"
                              aria-hidden="true"
                            />
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="w-max text-sm text-red-600">
                        {actionData?.errors?.['username']}
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 pt-6 text-right">
                    <button
                      type="submit"
                      name="_action"
                      value="updateProfile"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-pointer"
                      onClick={(e: any) => {
                        setSelectSave('profileSaveButton')
                      }}
                      disabled={transition?.state != 'idle'}
                    >
                      {selectSave === 'profileSaveButton' &&
                      transition?.submission?.action == '/account/profile' ? (
                        <BeatLoader color="#ffffff" />
                      ) : (
                        'Save'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>

          <div className="">
            <Form method="post">
              <div className="sm:overflow-hidden sm:rounded-md">
                <div className="sm:pt-6 md:px-4">
                  <div className="max-w-3xl">
                    {passwordMessasge ? (
                      <div className="mb-[2rem] mt-[-1rem] rounded-md  bg-green-50 p-4 xl:mr-[1.5rem]">
                        <div className="flex items-center justify-center gap-4">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-4 w-4 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="">
                            <p className="text-sm font-medium text-green-800">
                              {passwordMessasge}
                            </p>
                          </div>
                          <div className="ml-auto pl-3">
                            <div className="-mx-1.5 -my-1.5">
                              <button
                                type="button"
                                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                              >
                                <span className="sr-only">Dismiss</span>
                                <XIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  onClick={() => {
                                    setPasswordMessage('')
                                  }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">
                      Change Password
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Please fill in details if you wish to change your password
                    </p>
                  </div>
                  <div className="mt-6 grid max-w-lg grid-cols-1 gap-6">
                    <div className="">
                      <label className="relative h-5 w-24 text-sm font-medium leading-5 text-gray-700">
                        Old Password
                        <input
                          className={`mt-1.5 box-border flex h-10 w-full appearance-none items-center rounded-md border border-gray-300 px-2.5 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                            actionData?.errors?.['isOldPasswordSame']
                              ? 'border border-red-400'
                              : 'first-line:'
                          }`}
                          name="oldpassword"
                          type="password"
                          value={pass.oldpassword}
                          onChange={(event) => {
                            SetPass({
                              ...pass,
                              [event.target.name]: event.target.value,
                            })
                          }}
                        />
                        {actionData?.errors['isOldPasswordSame'] ? (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ExclamationCircleIcon
                              className="h-4 w-4 text-red-500"
                              aria-hidden="true"
                            />
                          </div>
                        ) : (
                          ''
                        )}
                        <div className="w-max text-sm text-red-600">
                          {actionData?.errors?.['isOldPasswordSame']}
                        </div>
                      </label>
                      <div className="relative mt-3.5">
                        <label className="h-5 w-24 text-sm font-medium leading-5 text-gray-700">
                          New Password
                          <input
                            className={`mt-1.5 box-border flex h-10 w-full appearance-none items-center rounded-md border border-gray-300 px-2.5 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                              actionData?.errors?.['password']
                                ? 'border border-red-400'
                                : 'first-line:'
                            }`}
                            name="newpassword"
                            type="password"
                            value={pass.newpassword}
                            onChange={(event) => {
                              SetPass({
                                ...pass,
                                [event.target.name]: event.target.value,
                              })
                            }}
                          />
                          {actionData?.errors['password'] ? (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <ExclamationCircleIcon
                                className="h-4 w-4 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="w-max text-sm text-red-600">
                            {actionData?.errors?.['password']}
                          </div>
                        </label>
                      </div>
                      <div className="relative mt-3.5">
                        <label className="h-5 w-24 text-sm font-medium leading-5 text-gray-700">
                          Confirm New Password
                          <input
                            className={`mt-1.5 box-border flex h-10 w-full appearance-none items-center rounded-md border border-gray-300 px-2.5 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                              actionData?.errors?.['isPasswordSame']
                                ? 'border border-red-400'
                                : 'first-line:'
                            }`}
                            name="confirmnewpassword"
                            type="password"
                            value={pass.confirmnewpassword}
                            onChange={(event) => {
                              SetPass({
                                ...pass,
                                [event.target.name]: event.target.value,
                              })
                            }}
                          />
                          {actionData?.errors['isPasswordSame'] ? (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <ExclamationCircleIcon
                                className="h-4 w-4 text-red-500"
                                aria-hidden="true"
                              />
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="w-max text-sm text-red-600">
                            {actionData?.errors?.['isPasswordSame']}
                          </div>
                        </label>
                      </div>
                      <div className="py-9 text-right">
                        <button
                          type="submit"
                          name="_action"
                          value="updatePassword"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-pointer"
                          onClick={(e: any) => {
                            setSelectSave('passwordSaveButton')
                          }}
                          disabled={transition?.state != 'idle'}
                        >
                          {selectSave === 'passwordSaveButton' &&
                          transition?.submission?.action ==
                            '/account/profile' ? (
                            <BeatLoader color="#ffffff" />
                          ) : (
                            'Save'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}