import { json, LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useActionData, useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "~/services/session.service.server";

import Template1 from "~/components/Templates/template1";
import { useEffect, useState } from "react";
import Template2 from "~/components/Templates/template2";
import  { DesktopComputerIcon, DeviceMobileIcon } from "@heroicons/react/outline";
import AccountSidebar from "~/components/Common/AccountSidebar";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)

  const session = await getSession(
    request.headers.get("Cookie")
  );
const successMessage = session.get("successUpdateProfileMessage") || null;
  const message = session.get("successUpdateSocialMedia") || null;
  return json(
    { message,successMessage, user },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export default function Profile() {
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [showImages, setshowImages] = useState(false);
  const [showTemplate, setshowTemplate] = useState(false);
  const Data = useLoaderData();
  const loaderData = Data?.user
  const [message,setMessage] = useState(Data?.message)
const [successUpdateMessage,setSuccessUpdateMessage] =useState(Data?.successMessage)

// useEffect(() => {
  if(message){
setTimeout(() => {
  setMessage('')
}, 2000);
}
if(successUpdateMessage){
setTimeout(() => {
  setSuccessUpdateMessage('')
 

}, 2000);
}
// }, [message,successUpdateMessage])

  const [showSocialLinks, setshowSocialLinks] = useState(message || successUpdateMessage ? true : false);
  const [mode, setmode] = useState('desktop')
  const [showBio, setshowBio] = useState(false);
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
// setshowBio(showBio ? true :false)

}


const togglemobile = () =>{
setmode('mobile')

setshowTemplate(!showSocialLinks && !showImages && !showBio ? true : false)

}
const disabledIcon = loaderData.primaryImage || primaryRestore ? 'text-gray-700/20' : 'text-gray-700/40'
  return (
    <div className='h-100vw '>
      <DashboardHeader username={ loaderData.username } loaderData={loaderData}/>
      <div className='flex relative'>
        <div className={`w-[0%] md:w-0 lg:w-[20.1%]  ${mode === 'mobile' ? 'lg:z-[50]' :'lg:z-20'}`}>
      <AccountSidebar showTestimonial={showTestimonial} setShowTestimonial={setShowTestimonial}  successUpdateMessage={successUpdateMessage} setshowSocialLinks={setshowSocialLinks} message={message} showSocialLinks={showSocialLinks} setshowTemplate={setshowTemplate} showTemplate={showTemplate} showImages={showImages} setshowImages={setshowImages}  actionData={actionData} loaderData={loaderData} setmode={setmode}  setshow={setshow} input={input} setinput={setinput} mode={mode} showBio={showBio} setshowBio={setshowBio} primaryRestore={primaryRestore} secondaryRestore={secondaryRestore}/></div>
     <div className={`flex-1 w-[70%] z-10 flex-wrap ${mode === 'mobile' ? 'lg:pl-[12rem] xl:pl-[20rem]' : ''}`}>
      { loaderData.templateNumber == '0' ?
      <Template1 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData.templateNumber == '1' ? <Template2 secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : null }</div>
        </div>
        
        <div className={`hidden w-[80px] lg:flex absolute top-[4.5rem] right-[2rem] z-40  rounded-l-md rounded-r-md ${loaderData.primaryImage || primaryRestore ? '' :'border border-gray-300'} ${loaderData.templateNumber == '1' ? 'border border-gray-300' : ""} `}>
          {/* <form action="" > */}
          <button id="desktopButton"  className={`${mode === 'desktop' ? 'bg-white/90' : 'bg-white/70 text-white'} w-[3rem] h-[2.5rem] items-center justify-center flex rounded-l-md`} 
          onClick={toggledesktop} >
            <DesktopComputerIcon className={`h-[1.25rem] w-auto  ${mode === 'desktop' ? 'text-black' : disabledIcon } `}/>
            </button>
            
          <button id="mobileButton"  className={`${mode === 'mobile' ? 'bg-white/90' : 'bg-white/70 text-white'} w-[3rem] h-[2.5rem] items-center justify-center flex rounded-r-md border-l`}
          onClick={togglemobile}><DeviceMobileIcon className={`h-[1.25rem] w-auto  ${mode === 'mobile' ? 'text-black' : disabledIcon }`}/></button>
          {/* </form> */}
        </div>
</div>
  
  )
}
