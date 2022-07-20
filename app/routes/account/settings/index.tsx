import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import DashboardHeader from "~/components/Common/DashboardHeader";
import Delete from "~/components/Common/deleteaccountModal";
import ProfileSetting from "~/components/Common/ProfileSetting";
import Unpublish from "~/components/Common/unpublishModal";
import { getUser, requireUserId } from "~/services/auth.service.server";

export const action: ActionFunction = async({request}) => {
  const formData = await request.formData()
  
  // const user = await getUser(request)
  let productUpdate = formData.getAll('productUpdate')
  let marketingUpdate = formData.getAll('marketingUpdate')
  console.log('Checkbox',productUpdate);
  // console.log('Checkbox2',marketingUpdate);
  

  
  
  
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  return user;
}

export default function Profile() {
  const [open, setopen] = useState(false)
  const [openModal, setopenModal] = useState(false)
  const loaderData = useLoaderData()
  // console.log(loaderData);



  
  const [check, setcheck] = useState(loaderData?.recieveMarketingUpdates)
  const [check1, setcheck1] = useState(loaderData?.recieveProductUpdates)

const recieveMarketingUpdates =(e:any)=>{
  check ? setcheck(loaderData.recieveMarketingUpdates = false) : setcheck(loaderData.recieveMarketingUpdates = true)
console.log(e.target.value);
console.log(loaderData);
}
const recieveProductUpdates =(e:any)=>{
  check1 ? setcheck1(loaderData.recieveProductUpdates = false) : setcheck1(loaderData.recieveProductUpdates = true)
console.log(e.target.value);
console.log(loaderData);
}
  return (
    <>
      <div>
        <div>
          <DashboardHeader username={loaderData.username}/>
        </div>
        <div className='grid grid-cols-12 gap-x-5'>
          <div>
            <ProfileSetting />
          </div>
          <div className="sm:px-6 lg:px-0 lg:col-span-9 ml-56 mt-2 font-inter max-w-3xl">
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
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <form method='POST'>
                      <input
                        id="productUpdate"
                        name="productUpdate"
                        type="checkbox"
                        // value={check}
                                              checked={loaderData.recieveProductUpdates ? true : false}
                        onChange={recieveProductUpdates}

                        className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      /></form>
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
                      <form action="">
                      <input
                        id="marketingUpdates"
                        name="marketingUpdate"
                        type="checkbox"
                        checked={loaderData.recieveMarketingUpdates}
                        onChange={recieveMarketingUpdates}
                        // value={loaderData.recieveMarketingUpdates}
                        className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        
                      /></form>
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="marketingUpdates" className="font-medium text-gray-700">
                        Marketing Updates
                      </label>
                      <p className="text-gray-500">Get notified when we share our marketing content such as blogs, announcements</p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="py-6 px-6 sm:p-6 bg-gray-50 mt-6 rounded-lg ml-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Unpublish your Account</h3>
              <p className="text-sm text-gray-500 max-w-lg">
              Unpublishing your account will hide your account temporarity and no one should be able to visit your profile from the link quicklook.me/
              . You can enable your profile anytime you want.
              </p>
              <div className="flex justify-start ml-1 items-center">
                <button onClick={()=>{setopenModal(true)}} className="mt-3.5 rounded-md bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 border border-gray-300">
                  Unpublish my account
                </button>
              </div>
            </div>

    
            <div className="ml-6 mt-6 mb-6">
              <div className=" ">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg ">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
                    <p className="text-sm text-gray-500 max-w-lg">
                    Once you delete your account, you will lose all data associated with it.
                    </p>
                    <div className="flex justify-start items-center">
                      <button onClick={()=>{setopen(true)}} className="mt-3.5 rounded-md bg-red-100 hover:bg-red-400 text-red-700 hover:text-white font-medium py-2 px-4">
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
<Unpublish open={openModal} onClose={() => setopenModal(false)}/>
    </>
  )
}