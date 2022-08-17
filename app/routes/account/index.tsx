import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { validate } from "uuid";

import { commitSession, getSession } from "~/services/session.service.server";
import { addUpdateSocialLink, updateUserBioDetails } from "~/services/user.service.serevr";
import { validateFacebookUrl, validateTwitterUrl, validateYoutubeUrl } from "~/utils/validator.server";

import Template1 from "~/components/Templates/template1";
import { useEffect, useState } from "react";
import Template2 from "~/components/Templates/template2";

import  { DesktopComputerIcon, DeviceMobileIcon } from "@heroicons/react/outline";
import AccountSidebar from "~/components/Common/AccountSidebar";
import { useRouteData } from "~/hooks/useRouteData";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  const session = await getSession(
    request.headers.get("Cookie")
  );
  const successUpdateSocialMedia = session.get("successUpdateSocialMedia") || null;
  const failedUdateSocialMedia = session.get("failedUpdateSocialMedia") || null;
  

  const message = successUpdateSocialMedia ?? failedUdateSocialMedia
  return { user, message } 
}

export default function Profile() {
  const [mode, setmode] = useState('desktop')
  const [showBio, setshowBio] = useState(mode === 'mobile' ? true : false);
  const loaderData = useLoaderData();
  const [show, setshow] = useState(loaderData.templateNumber)
  const [input, setinput] = useState({description:loaderData.bio ,location:loaderData.location,occupation:loaderData.occupation,company:loaderData.company,education:loaderData.education})
const primaryRestore = loaderData.isUsingPrimaryDefault
const secondaryRestore = loaderData.isUsingSecondaryDefault
const actionData=useActionData()



useEffect(() => {
  return () => {
    setinput({description:loaderData.bio ,location:loaderData.location,occupation:loaderData.occupation,company:loaderData.company,education:loaderData.education})
  };
}, [loaderData,showBio])


const toggledesktop = () =>{
setmode('desktop')
setshowBio(false)

}
const togglemobile = () =>{
setmode('mobile')
setshowBio(true)

}
const disabledIcon = loaderData.primaryImage || primaryRestore ? 'text-white' : 'text-gray-700/40'
  return (
    <div className='h-100vw '>
      <DashboardHeader username={ loaderData.username } loaderData={loaderData}/>
      <div className='flex relative'>
        <div className={`w-[0%] md:w-0 lg:w-[20.1%]  ${mode === 'mobile' ? 'lg:z-[50]' :'lg:z-20'}`}>
      <AccountSidebar actionData={actionData} loaderData={loaderData} setmode={setmode}  setshow={setshow} input={input} setinput={setinput} mode={mode} showBio={showBio} setshowBio={setshowBio} primaryRestore={primaryRestore} secondaryRestore={secondaryRestore}/></div>
     <div className={`flex-1 w-[70%] z-10 flex-wrap ${mode === 'mobile' ? 'lg:pl-[12rem] xl:pl-[20rem]' : ''}`}>
      { loaderData.templateNumber == '0' ?
      <Template1 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData.templateNumber == '1' ? <Template2 secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : null }</div>
        </div>
        
        <div className={`hidden w-[80px] lg:flex absolute top-[4.5rem] right-[2rem] z-[30]  rounded-l-md rounded-r-md ${loaderData.primaryImage || primaryRestore ? '' :'border border-gray-300'}`}>
          {/* <form action="" > */}
          <button className={`${mode === 'desktop' ? 'bg-white/90' : 'bg-white/70 text-white'} w-[3rem] h-[2.5rem] items-center justify-center flex rounded-l-md`} 
          onClick={toggledesktop} >
            <DesktopComputerIcon className={`h-[1.25rem] w-auto  ${mode === 'desktop' ? 'text-black' : disabledIcon }`}/>
            </button>
            
          <button className={`${mode === 'mobile' ? 'bg-white/90' : 'bg-white/70 text-white'} w-[3rem] h-[2.5rem] items-center justify-center flex rounded-r-md border-l`}
          onClick={togglemobile}><DeviceMobileIcon className={`h-[1.25rem] w-auto  ${mode === 'mobile' ? 'text-black' : disabledIcon }`}/></button>
          {/* </form> */}
        </div>
</div>
  
  )
}
