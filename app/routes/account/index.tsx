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
  const bioMessage = session.get("successUpdateBioMessage") || null;
  return json(
    { message,successMessage,bioMessage, user },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export default function Profile() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [showImages, setshowImages] = useState(false);
  const [showTemplate, setshowTemplate] = useState(false);
  const Data = useLoaderData();
  
  
  const loaderData = Data?.user
  const [message,setMessage] = useState('')
  const [successUpdateMessage,setSuccessUpdateMessage] =useState('')

useEffect(() => {
  setMessage(Data?.message);
  setSuccessUpdateMessage(Data?.successMessage)
},[Data])

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

const [bioMessage, setBioMessage] = useState('')
useEffect(() => {
 setBioMessage(Data?.bioMessage)
}, [Data])
if(bioMessage){
  setTimeout(() => {
    setBioMessage('')
  }, 2000)}

  const [showSocialLinks, setshowSocialLinks] = useState(message || successUpdateMessage ? true : false);
  const [mode, setmode] = useState('desktop')
  const [showBio, setshowBio] = useState(false);
  const [show, setshow] = useState(loaderData?.profileInfo?.templateNumber)
  const [input, setinput] = useState({description:loaderData?.profileInfo?.bio ,location:loaderData?.profileInfo?.location,occupation:loaderData?.profileInfo?.occupation,company:loaderData?.profileInfo?.company,education:loaderData?.profileInfo?.education})
  const [initialInput, setInitialInput] = useState({description:loaderData?.profileInfo?.bio ,location:loaderData?.profileInfo?.location,occupation:loaderData?.profileInfo?.occupation,company:loaderData?.profileInfo?.company,education:loaderData?.profileInfo?.education})
  const [inputTestimonial, setInputTestimonial] = useState({testimonialText:loaderData?.testimonial?.testimonialText, testimonialBy:loaderData?.testimonial?.testimonialBy })
  const [inputVideo, setInputVideo] = useState({videoLink:loaderData?.video?.videoLink});
  const primaryRestore = loaderData?.profileImage?.isUsingPrimaryDefault
  const secondaryRestore = loaderData?.profileImage?.isUsingSecondaryDefault
  const actionData=useActionData()

useEffect(() => {
  localStorage.setItem("viewMode", mode)
}, [mode])

useEffect(() => {
  setInitialInput({description:loaderData?.profileInfo?.bio ,location:loaderData?.profileInfo?.location,occupation:loaderData?.profileInfo?.occupation,company:loaderData?.profileInfo?.company,education:loaderData?.profileInfo?.education})
}, [loaderData])

const viewMode1 = typeof window !== 'undefined' && localStorage?.getItem("viewMode");

useEffect(() => {
  viewMode1 && setmode(viewMode1);
  viewMode1 === "mobile" && togglemobile();
}, [])

const toggledesktop = () =>{
  setmode('desktop')
}

const [showUserSetting, setShowUserSetting] = useState(false);
const togglemobile = () =>{
setmode('mobile')
setshowTemplate(!showSocialLinks && !showImages && !showBio && !showTestimonial && !showAddVideo && !showPortfolio && !showSpotlight ? true : false)
}
const disabledIcon = loaderData?.profileImage?.primaryImage || primaryRestore ? 'text-gray-700/20' : 'text-gray-700/40'
  return (
    <div className='h-100vw '>
      <DashboardHeader showUserSetting setShowUserSetting username={ loaderData?.username } loaderData={loaderData}/>
      <div className='flex relative'>
        <div className={`w-[0%] md:w-0 lg:w-[20.1%]  ${mode === 'mobile' ? 'lg:z-[50]' :'lg:z-20'}`}>
      <AccountSidebar showBanner={showBanner} setShowBanner={setShowBanner} initialInput={initialInput} setMessage={setMessage} bioMessage={bioMessage} setBioMessage={setBioMessage} showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} inputVideo={inputVideo} setInputVideo={setInputVideo} inputTestimonial={inputTestimonial} setInputTestimonial={setInputTestimonial} showPortfolio={showPortfolio} setShowPortfolio={setShowPortfolio} showAddVideo={showAddVideo} setShowAddVideo={setShowAddVideo} showTestimonial={showTestimonial} setShowTestimonial={setShowTestimonial}  successUpdateMessage={successUpdateMessage} setshowSocialLinks={setshowSocialLinks} message={message} showSocialLinks={showSocialLinks} setshowTemplate={setshowTemplate} showTemplate={showTemplate} showImages={showImages} setshowImages={setshowImages}  actionData={actionData} loaderData={loaderData} setmode={setmode}  setshow={setshow} input={input} setinput={setinput} mode={mode} showBio={showBio} setshowBio={setshowBio} primaryRestore={primaryRestore} secondaryRestore={secondaryRestore}/></div>
     <div className={`flex-1 w-[70%] z-10 flex-grow ml-0 lg:ml-[5rem] xl:ml-[0rem] ${mode === 'mobile' ? 'lg:pl-[12rem] xl:pl-[20rem]' : ''}`}>
      { loaderData?.profileInfo?.templateNumber == '0' ?
      <Template1 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '1' ? <Template2 secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : null }</div>
        </div>
        
        <div className={`hidden w-[80px] lg:flex absolute top-[4.5rem] right-[2rem] ${!showUserSetting ? 'z-40':'z-[60]'}  rounded-l-md rounded-r-md ${loaderData?.profileImage?.primaryImage || primaryRestore ? '' :'border border-gray-300'} ${loaderData?.profileInfo?.templateNumber == '1' ? 'border border-gray-300' : ""} `}>
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
