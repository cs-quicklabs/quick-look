import { CheckCircleIcon } from '@heroicons/react/outline';
import { ActionFunction, json, LoaderFunction } from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import DashboardHeader from '~/components/Common/DashboardHeader';
import ProfileSetting from '~/components/Common/ProfileSetting';
import { getUser, requireUserId } from '~/services/auth.service.server';
import { getUserById, updateUserProfileDetails, updateUsingOldPassword } from '~/services/user.service.serevr';
import { validateComfirmPassword, validateFirstName, validateLastName, validateOldPassword, validatePassword, validateUsername } from '~/utils/validator.server';

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request)

  const formData = await request.formData();
  let { _action } = Object.fromEntries(formData)

  if (_action === 'updateProfile') {
    const firstName = formData.get('firstname') as string
    const lastName = formData.get('lastname') as string
    const profileId = formData.get('profileId') as string

    const errors = {
      firstname: await validateFirstName(firstName),
      lastname: await validateLastName(lastName),
      username: await validateUsername(profileId, true),
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

      await updateUserProfileDetails({
        firstname: firstName,
        lastname: lastName,
        profileId, user
      })

      return json(
        {
          success: true,
          message: 'Your profile has been updated successfully.'
        },
        { status: 200 }
      )
    }

  } else if (_action === 'updatePassword') {
    const oldPassword = formData.get('oldpassword') as string
    const newPassword = formData.get('newpassword') as string
    const confirmNewPassword = formData.get('confirmnewpassword') as string

    const errors = {
      isOldPasswordSame: await validateOldPassword(user, newPassword, oldPassword),
      password: await validatePassword(newPassword),
      isPasswordSame: await validateComfirmPassword(newPassword, confirmNewPassword),
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

      await updateUsingOldPassword(user, newPassword)
      return json(
        {
          success: true,
          message: 'Your password has been updated successfully.'
        }
      )
    }
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  return user;
}

export default function Profile() {
  const actionData = useActionData()
  const loaderData = useLoaderData()

  const [val, setVal] = useState({
    firstName: `${loaderData.firstname}`,
    lastName:  `${loaderData.lastname}`,
    profileId: `${loaderData.username}`,
  })

  return (
    <>
      <div>
        <DashboardHeader username={loaderData.username}/>
      </div>
      <div className='lg:grid lg:grid-cols-12 lg:gap-x-5'>
        <div>
          <ProfileSetting />
        </div>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 ml-56 mt-2 font-inter max-w-xl bg-white">
          <form method="POST">
            <div className="sm:rounded-md sm:overflow-hidden">
              <div className="flex ">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{actionData.message}</p>
        </div>
      </div>
              <div className="py-6 px-4 space-y-6 sm:p-6 max-w-3xl">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 max-w-lg">
                  <div className="col-span-3 sm:col-span-2">
                    <div>
                      <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                        First Name
                      </label>
                      <input
                        className={`w-full flex items-center box-border appearance-none  h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors['firstname']
                          ? 'border border-red-400'
                          : 'first-line:'
                          }`}
                          
                        name="firstname"
                        id='firstname'
                        value={val.firstName}
                        onChange={(e:any) => setVal(e.target.value)}
                      />
                      <div className='text-red-600 text-sm w-max'>
                        {actionData?.errors['firstname']}
                      </div>
                    </div>
                    <div className='mt-3.5'>
                      <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                        Last Name
                      </label>
                      <input
                        className={`w-full flex items-center box-border appearance-none  h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors['lastname']
                          ? 'border border-red-400'
                          : 'first-line:'
                          }`}
                        name='lastname' 
                        id='lastname'
                        value ={val.lastName}
                        type="text"
                         onChange={(e:any) => setVal(e.target.value)}

                      />
                      <div className='text-red-600 text-sm w-max'>
                        {actionData?.errors['lastname']}
                      </div>
                    </div>
                    <div className='w-full mt-3.5'>
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Profile ID
                      </label>
                      <div className="mt-1 rounded-md shadow-sm flex">
                        <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                          quicklook.me/
                        </span>
                        <input
                          type="text"
                          name="profileId"
                          value={val.profileId}
                           onChange={(e:any) => setVal(e.target.value)}
                          id="profileId"
                          className={`focus:ring-indigo-500 focus:border-indigo-500 flex-grow block min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 ${actionData?.errors['username']
                            ? 'border border-red-400'
                            : 'first-line:'
                            }`}
                        />
                        
                      </div>
                      <div className='text-red-600 text-sm w-max'>
                        {actionData?.errors['username']}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1.5 text-right sm:px-10 max-w-xl">
                <button
                  type="submit"
                  name='_action'
                  value='updateProfile'
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          <div className='mr-9 ml-5 border-t border-gray-200'>
          </div>
          <div className=''>
            <form method="POST">
              <div className="sm:rounded-md sm:overflow-hidden">
                <div className="px-4 sm:p-6">
                  <div className='max-w-3xl'>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Change Password</h3>
                    <p className="mt-1 text-sm text-gray-500">Please fill in details if you wish to change your password</p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 max-w-lg">
                    <div>
                      <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                        Old Password
                        <input
                          className={`w-full flex items-center box-border appearance-none h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors['isOldPasswordSame']
                            ? 'border border-red-400'
                            : 'first-line:'
                            }`}
                          name='oldpassword'
                          type='password'
                        />
                        <div className='text-red-600 text-sm w-max'>
                          {actionData?.errors['isOldPasswordSame']}
                        </div>
                      </label>
                      <div className='mt-3.5'>
                        <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                          New Password
                          <input
                            className={`w-full flex items-center box-border appearance-none h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors['password']
                              ? 'border border-red-400'
                              : 'first-line:'
                              }`}
                            name='newpassword'
                            type="password"
                          />
                          <div className='text-red-600 text-sm w-max'>
                            {actionData?.errors['password']}
                          </div>
                        </label>
                      </div>
                      <div className='mt-3.5'>
                        <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                          Confirm New Password
                          <input
                            className={`w-full flex items-center box-border appearance-none h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors['isPasswordSame']
                              ? 'border border-red-400'
                              : 'first-line:'
                              }`}
                            name='confirmnewpassword'
                            type="password"
                          />
                          <div className='text-red-600 text-sm w-max'>
                            {actionData?.errors['isPasswordSame']}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-10">
                  <button
                    type="submit"
                    name='_action'
                    value='updatePassword'
                    className='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}