import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useLoaderData } from "@remix-run/react";

import Template1 from "~/components/Templates/template1";
import { useEffect, useState } from "react";
import Template2 from "~/components/Templates/template2";

import  { DesktopComputerIcon, DeviceMobileIcon } from "@heroicons/react/outline";
import AccountSidebar from "~/components/Common/AccountSidebar";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  return user
}

export default function Profile() {
  const [mode, setmode] = useState('desktop')

  const [showBio, setshowBio] = useState(mode === 'mobile' ? true : false);
  const loaderData = useLoaderData();
  const [show, setshow] = useState(loaderData.templateNumber)
  const [input, setinput] = useState({description:loaderData.bio ,location:loaderData.location,occupation:loaderData.occupation,company:loaderData.company,education:loaderData.education})

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
  return (
    <div className='h-100vw '>
      <DashboardHeader username={ loaderData.username } />
      <div className='flex relative'>
        <div className={`w-[0%] md:w-0 lg:w-[20.1%]  ${mode === 'mobile' ? 'lg:z-[999]' :'lg:z-20'}`}>
      <AccountSidebar loaderData={loaderData} setmode={setmode}  setshow={setshow} input={input} setinput={setinput} mode={mode} showBio={showBio} setshowBio={setshowBio}/></div>
     <div className={`flex-1 w-[70%] z-10 flex-wrap ${mode === 'mobile' ? 'lg:pl-[12rem] xl:pl-[20rem]' : ''}`}>
      { loaderData.templateNumber == '0' ?
      <Template1  input={input}  loaderData = {loaderData}/> : loaderData.templateNumber == '1' ? <Template2 input={input}  loaderData = {loaderData}/> : null }</div>
        </div>
        
        <div className='hidden w-[80px] lg:flex absolute top-[4.5rem] right-[2rem] z-[30]'>
          {/* <form action="" > */}
          <button className={`${mode === 'desktop' ? 'bg-white/90' : 'bg-white/70 text-white'} w-[3rem] h-[2.5rem] items-center justify-center flex rounded-l-md`} 
          onClick={toggledesktop} >
            <DesktopComputerIcon className="h-[1.25rem] w-auto"/>
            </button>
            
          <button className={`${mode === 'mobile' ? 'bg-white/90' : 'bg-white/70 text-white'} w-[3rem] h-[2.5rem] items-center justify-center flex rounded-r-md`}
          onClick={togglemobile}><DeviceMobileIcon className="h-[1.25rem] w-auto"/></button>
          {/* </form> */}
        </div>
</div>
  
  )
}
