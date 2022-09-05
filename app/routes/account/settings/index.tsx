import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useState } from "react";
import DashboardHeader from "~/components/Common/DashboardHeader";
import Delete from "~/components/Common/deleteaccountModal";
import ProfileSetting from "~/components/Common/ProfileSetting";
import Unpublish from "~/components/Common/unpublishModal";
import { getUser, requireUserId } from "~/services/auth.service.server";
import { updateUserPreferences } from "~/services/user.service.serevr";


export const loader: LoaderFunction = async ({ request, params }) => {
  await requireUserId(request);
  const user = await getUser(request)
  const url = new URL(request.url)
  
  if(url.searchParams.get('checkedMarketingUpdate')){
    await updateUserPreferences({recieveMarketingUpdates: true, user})
  }
  if(url.searchParams.get('checkedProductUpdate')){
    await updateUserPreferences({recieveProductUpdates: true, user})
  }
  return user;
}

export default function Profile() {
  const [open, setopen] = useState(false)
  const [openModal, setopenModal] = useState(false)
  const loaderData = useLoaderData()

  const submit = useSubmit();

  function handleChange(event: any) {
    submit(event.currentTarget, { replace: true });
    
  }
  
  return (
    <>
      <div>
        <div>
          <DashboardHeader username={loaderData?.username} loaderData={loaderData}/>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-5 md:flex md:flex-wrap'>
          <div className='w-[20%] lg:w-2/5 '>
            <ProfileSetting />
          </div>
          <div className="sm:px-6 md:w-3/5 lg:px-0 lg:col-span-9 lg:ml-64 xl:ml-60 2xl:ml-44 mt-2 font-inter max-w-3xl">
            <div className="py-6 px-4 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
              <p className="text-sm text-gray-500 max-w-lg">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>
            </div>
            <div className="ml-6">
              <fieldset className="mt-0">
                <legend className="sr-only">By Email</legend>
                <div className="text-base font-medium text-gray-900" aria-hidden="true">
                  By Email
                </div>
                <form onChange={handleChange} method='get'>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      
                      <input
                        id="productUpdate"
                        name="checkedProductUpdate"
                        type="checkbox"
                         value= 'productUpdate'
                        className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="productUpdate" className="font-medium text-gray-700">
                        Product Update
                      </label>
                      <p className="text-gray-500">Get notified when new features are releases in the project</p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      
                      <input
                        id="marketingUpdates"
                        name="checkedMarketingUpdate"
                        type="checkbox"
                        value='marketingupdate'
                        className="mt-1 lg:mt-[0.5rem] xl:mt-[-1rem] h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        
                      />
                    <div className="ml-3 mt-[3.2rem] md:mt-[3.25rem] lg:mt-[3.2rem] xl:mt-[1.7rem] 2xl:mt-[1.5rem] text-sm w-[33rem]">
                      <label htmlFor="marketingUpdates" className="font-medium text-gray-700">
                        Marketing Updates
                      </label>
                      <p className="text-gray-500">Get notified when we share our marketing content such as blogs, announcements</p>
                    </div>
                  </div></div>
                </div>
                  </form>
              </fieldset>
            </div>
            <div className="py-6 px-6 sm:p-6 bg-gray-50 mt-20 md:mt-16 rounded-lg ml-6 w-[35rem]">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{loaderData?.isPublished ? 'Unpublish your Account' : 'Publish your Account'}</h3>
              <p className="text-sm font-normal leading-5 text-gray-500 max-w-lg">
                {loaderData?.isPublished ? <span> <span>Unpublishing your account will hide your account temporarity and no one should be able to visit your profile from the link </span> <span className='font-[800]'>quicklook.me/{loaderData?.username}</span>. <span>You can enable your profile anytime you want.</span></span> :<span> Publishing your account will show your account and anyone should be able to visit your profile from the link <span className='font-[800]'>quicklook.me/{loaderData?.username}</span> . You can disable your profile anytime you want.</span>}
              </p>
              <div className="flex justify-start ml-1 items-center">
                <button onClick={()=>{setopenModal(true)}} className="mt-3.5 rounded-md bg-white hover:bg-gray-100 text-gray-700 font-medium text-sm leading-5 py-2 px-4 border border-gray-300">
                  {loaderData?.isPublished ? 'Unpublish my account':'Publish my account'}
                </button>
              </div>
            </div>

    
            <div className="ml-6 mt-6 mb-6 w-[35rem]">
              <div className=" ">
                <div className="bg-white py-4 px-[1.8rem] shadow sm:rounded-lg ">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
                    <p className="text-sm text-gray-500 leading-5 max-w-lg">
                    Once you delete your account, you will lose all data associated with it.
                    </p>
                    <div className="flex justify-start items-center">
                      <button onClick={()=>{setopen(true)}} className="mt-5 rounded-md bg-red-100 hover:bg-red-600 text-red-700 hover:text-white font-medium py-2 px-4">
                        Delete account
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Delete open={open} onClose={() => setopen(false)} />
<Unpublish isPublished={loaderData?.isPublished} open={openModal} onClose={() => setopenModal(false)}/>
    </>
  )
}