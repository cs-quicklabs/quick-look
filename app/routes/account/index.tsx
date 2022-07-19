import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/services/auth.service.server";
import facebook from '../../../assets/images/logos/facebook_logo.png'
import twitter from '../../../assets/images/logos/twitter_logo.png'
import youtube from '../../../assets/images/logos/youtube_logo.png'

import DashboardHeader from "~/components/Common/DashboardHeader";
import Delete from "~/components/Common/deleteaccountModal";
import ProfileSetting from "~/components/Common/ProfileSetting";

export const loader: LoaderFunction = async ({ request  }) => {
  await requireUserId(request)

  return null
}

export default function Profile() {
  return (
    <>
      <DashboardHeader />
      <div className='flex'>
     
      <div >
        <div>
        <div className='relative '>
          {/* Cover picture */}
          <img className='h-[18rem] w-full ' src="https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXIlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
        </div>
<div className='absolute top-[17rem] left-[2.5rem] md:left-[5.5rem] lg:left-[12.5rem]'>
  <img className='w-32 border-4 border-white rounded-full shadow-lg shadow-white' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
</div>
</div>
<div className='px-[11rem] md:px-[14rem] lg:px-[21rem]'>
<div className='m-auto  pt-1'> 
  <h1 className='text-2xl font-semibold text-gray-900'>
    Kunal Verma
  </h1>
  <h3 className="text-gray-500">
    I am A Frontend React.js Developer
  </h3>
</div>
<div className='m-auto  pt-16'>
  <p className="text-gray-500">
    {/* bio */}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus, harum quod ipsam laborum nihil natus ratione doloremque voluptates repudiandae totam adipisci architecto neque minus nam dolor consequatur illo soluta!
  </p>
</div>
<div className='flex justify-between m-auto  pt-16'>
  <div className='flex flex-col'>
    <h2 className="text-gray-500">WORK</h2>
    <h2 className="text-gray-900">
      {/* workplace */}
      CrownStack
    </h2>
  </div>
  <div className='flex flex-col'>
    <h2 className="text-gray-500">Education</h2>
    <h2 className="text-gray-900">
      {/* Educationplace */}
      Kr Mangalam University
    </h2>
  </div>
</div>
<footer className='flex gap-8 pt-[5rem]'>
  <a href="http://www.facebook.com"><img src={facebook} alt="" className="w-11 h-auto"/></a>
  <a href="http://www.twitter.com"> 
  <img src={twitter} alt="" className="w-11 h-auto"/>
  </a>
  <a href="http://www.youtube.com">
  <img src={youtube} alt="" className="w-11 h-auto"/>

  </a>
</footer></div>
      
      </div></div>
    </>
  )
}
