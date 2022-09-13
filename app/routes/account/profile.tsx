import { CheckCircleIcon, ExclamationCircleIcon, XIcon } from '@heroicons/react/solid';
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useTransition } from '@remix-run/react';
import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import DashboardHeader from '~/components/Common/DashboardHeader';
import ProfileSetting from '~/components/Common/ProfileSetting';
import { getUser, requireUserId } from '~/services/auth.service.server';
import { commitSession, getSession } from '~/services/session.service.server';
import { updateUserProfileDetails, updateUsingOldPassword } from '~/services/user.service.serevr';
import { updateValidatePassword, validateComfirmPassword, validateFirstName, validateLastName, validateOldPassword, validatePassword, validateUpdateUsername, validateUsername } from '~/utils/validator.server';

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request)

  const session = await getSession(
    request.headers.get("Cookie")
  );

  const formData = await request.formData();
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
        user
      })

      if(isUpdated){
        session.flash(
          "updateProfileMessage",
          `Your profile has been updated successfully.`
      );
      return redirect('/account/profile', {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      })
      } 
    }

  } else if (_action === 'updatePassword') {
    const oldPassword = formData.get('oldpassword') as string
    const newPassword = formData.get('newpassword') as string
    const confirmNewPassword = formData.get('confirmnewpassword') as string

    const errors = {
      isOldPasswordSame: await validateOldPassword(user, newPassword, oldPassword),
      password: await updateValidatePassword(newPassword, user),
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

      const isPasswordUpdated = await updateUsingOldPassword(user, newPassword)
      if(isPasswordUpdated){
        session.flash(
          "updatePasswordMessage",
          `Your password has been updated successfully.`
      );
      return redirect('/account/profile', {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      })
      }
    }
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  const session = await getSession(
    request.headers.get("Cookie")
  );
  const updateProfileMessage = session.get("updateProfileMessage") || null;
  const updatePasswordMessage = session.get("updatePasswordMessage") || null;
  return json(
    { updateProfileMessage, updatePasswordMessage, user },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export default function Profile() {
  const actionData = useActionData()
  const loaderData = useLoaderData()
  const transition = useTransition()

  const [selectSave, setSelectSave] = useState('')


  const [val, setVal] = useState({
    firstName: `${loaderData?.user?.firstname}`,
    lastName:  `${loaderData?.user?.lastname}`,
    profileId: `${loaderData?.user?.username}`,
  })

  const [profileMessage, setProfileMessage] = useState(loaderData?.updateProfileMessage)
  const [passwordMessasge, setPasswordMessage] = useState(loaderData?.updatePasswordMessage)

  useEffect(() => {
    setProfileMessage(loaderData?.updateProfileMessage);
    setPasswordMessage(loaderData?.updatePasswordMessage)
  },[loaderData])

  if(profileMessage){
    setTimeout(() => {
      setProfileMessage('')
    }, 2000);
    }

    if(passwordMessasge){
      setTimeout(() => {
        setPasswordMessage('')
      }, 2000);
      }

  return (
    <>
      <div>
        <DashboardHeader username={loaderData.user.username} loaderData={loaderData.user}/>
      </div>
      <div className='lg:grid lg:grid-cols-12 lg:gap-x-5 md:flex md:flex-wrap'>
        <div className='md:w-[25%] lg:w-2/5 '>
          <ProfileSetting />
        </div>
        
        <div className=" md:w-3/5 lg:px-0 lg:col-span-9 lg:ml-64 xl:ml-60 2xl:ml-44 mt-2 font-inter max-w-xl">
          
          <Form method="post"> 
     
            <div className="sm:rounded-md sm:overflow-hidde">
              <div className="flex ">
      </div>
              <div className="py-6 md:pl-[0.75rem] lg:px-4 space-y-6 sm:pt-6 max-w-3xl">
                 {profileMessage ?
          <div className="rounded-md bg-green-50 p-4  mt-[1.5rem] xl:mr-[1.5rem]">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm w-max font-medium text-green-800">{profileMessage}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" onClick={()=>{setProfileMessage('')}}/>
            </button>
          </div>
        </div>
      </div>
    </div>:''}
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
                <div className="grid grid-cols-1 max-w-lg  border-b border-gray-200">
                  <div className="col-span-3 sm:col-span-2">
                    <div className='relative'>
                      <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                        First Name
                      </label>
                      <input
                        className={`w-full flex items-center box-border appearance-none  h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors?.['firstname']
                          ? 'border border-red-400'
                          : 'first-line:'
                          }`}
                          
                        name="firstname"
                        id='firstname'
                        value={val.firstName}
                        onChange={(e:any) => setVal(e.target.value)}
                      />
                       {actionData?.errors['firstname'] ?
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                      </div>:''}
                      <div className='text-red-600 text-sm w-max'>
                        {actionData?.errors?.['firstname']}
                      </div>
                    </div>
                    <div className='mt-3.5 relative'>
                      <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                        Last Name
                      </label>
                      <input
                        className={`w-full flex items-center box-border appearance-none  h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors?.['lastname']
                          ? 'border border-red-400'
                          : 'first-line:'
                          }`}
                        name='lastname' 
                        id='lastname'
                        value ={val.lastName}
                        type="text"
                         onChange={(e:any) => setVal(e.target.value)}

                      />
                      {actionData?.errors['lastname'] ?
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                      </div>:''}
                      <div className='text-red-600 text-sm w-max'>
                        {actionData?.errors?.['lastname']}
                      </div>
                    </div>
                    <div className='w-full mt-3.5 relative'>
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Profile ID
                      </label>
                      <div className="mt-1 rounded-md shadow-sm flex">
                        <span className={`bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm ${actionData?.errors?.['username']
                            ? 'border-t border-b border-l border-r border-r-gray-300 border-red-400'
                            : 'first-line:'
                            }`}>
                          quicklook.me/
                        </span>
                        <input
                          type="text"
                          name="profileId"
                          value={val.profileId}
                           onChange={(e:any) => setVal(e.target.value)}
                          id="profileId"
                          className={`focus:ring-indigo-500 focus:border-indigo-500 flex-grow block min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 ${actionData?.errors?.['username']
                            ? 'border-t border-b border-r border-l-0 border-red-400'
                            : 'first-line:'
                            }`}
                        />
                         {actionData?.errors['username'] ?
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    </div>:''}
                      </div>
                      <div className='text-red-600 text-sm w-max'>
                        {actionData?.errors?.['username']}
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 mb-8 text-right">
                    <button
                      type="submit"
                      name='_action'
                      value='updateProfile'
                      className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-pointer"
                      onClick={(e: any) => { setSelectSave('profileSaveButton') }}
                      disabled={transition?.state != 'idle'}
                  >
                    {selectSave === 'profileSaveButton' && transition?.submission?.action == "/account/profile" ? <BeatLoader color="#ffffff" />
                    : "Save"} 
                    </button>
              </div>
                </div>
              </div>
              
            </div>
          </Form>
          
          <div className=''>
            
            <Form method="post">
              
              <div className="sm:rounded-md sm:overflow-hidden">
                <div className="md:px-4 sm:pt-6">
                  <div className='max-w-3xl'>
                    {passwordMessasge ?
          <div className="rounded-md bg-green-50 p-4  xl:mr-[1.5rem] mb-[2rem] mt-[-1rem]">
      <div className="flex justify-center items-center gap-4">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-4 w-4 text-green-400" aria-hidden="true" />
        </div>
        <div className="">
          <p className="text-sm font-medium text-green-800">{passwordMessasge}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" onClick={()=>{setPasswordMessage('')}}/>
            </button>
          </div>
        </div>
      </div>
    </div>:''}
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Change Password</h3>
                    <p className="mt-1 text-sm text-gray-500">Please fill in details if you wish to change your password</p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 max-w-lg mt-6">
                    <div className=''>
                      <label className='text-gray-700 w-24 h-5 relative font-medium leading-5 text-sm'>
                        Old Password
                        <input
                          className={`w-full flex items-center box-border appearance-none h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors?.['isOldPasswordSame']
                            ? 'border border-red-400'
                            : 'first-line:'
                            }`}
                          name='oldpassword'
                          type='password'
                        />
                        {actionData?.errors['isOldPasswordSame'] ?
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                      </div>:''}
                        <div className='text-red-600 text-sm w-max'>
                          {actionData?.errors?.['isOldPasswordSame']}
                        </div>
                      </label>
                      <div className='mt-3.5 relative'>
                        <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                          New Password
                          <input
                            className={`w-full flex items-center box-border appearance-none h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors?.['password']
                              ? 'border border-red-400'
                              : 'first-line:'
                              }`}
                            name='newpassword'
                            type="password"
                          />
                          {actionData?.errors['password'] ?
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                      </div>:''}
                          <div className='text-red-600 text-sm w-max'>
                            {actionData?.errors?.['password']}
                          </div>
                        </label>
                      </div>
                      <div className='mt-3.5 relative'>
                        <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                          Confirm New Password
                          <input
                            className={`w-full flex items-center box-border appearance-none h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${actionData?.errors?.['isPasswordSame']
                              ? 'border border-red-400'
                              : 'first-line:'
                              }`}
                            name='confirmnewpassword'
                            type="password"
                          />
                          {actionData?.errors['isPasswordSame'] ?
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                      </div>:''}
                          <div className='text-red-600 text-sm w-max'>
                            {actionData?.errors?.['isPasswordSame']}
                          </div>
                        </label>
                      </div>
                      <div className="py-9 text-right">
                  <button
                    type="submit"
                    name='_action'
                    value='updatePassword'
                    className='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-pointer'
                    onClick={(e: any) => { setSelectSave('passwordSaveButton') }}
                    disabled={transition?.state != 'idle'}
                  >
                    {selectSave === 'passwordSaveButton' && transition?.submission?.action == "/account/profile" ? <BeatLoader color="#ffffff" />
                    : "Save"} 
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