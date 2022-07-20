import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/services/auth.service.server";
import facebook from '../../../assets/images/logos/facebook_logo.png'
import twitter from '../../../assets/images/logos/twitter_logo.png'
import youtube from '../../../assets/images/logos/youtube_logo.png'
import bgimage from '../../../assets/images/background-template.jpg'
import DashboardHeader from "~/components/Common/DashboardHeader";
import Delete from "~/components/Common/deleteaccountModal";
import ProfileSetting from "~/components/Common/ProfileSetting";
import AccountSidebar from "~/components/Common/AccountSidebar";

export const loader: LoaderFunction = async ({ request  }) => {
  await requireUserId(request)

  return null
}

export default function Profile() {
  return (
    <>
      <DashboardHeader />
      <div className='flex'>
      <AccountSidebar />


       <div className='flex pl-0 md:pl-[129px]'>
     
      <div >
        <div>
        <div className='relative '>
          {/* Cover picture */}
          <img className='h-[16rem] w-screen object-cover' src={bgimage} alt="" />
        </div>
<div className='absolute top-[15rem] left-[6rem] md:left-[29.5rem] lg:left-[36.5rem]'>
  <img className='w-32 border-4 border-white rounded-full shadow-lg shadow-white' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
</div>
</div>
{/* <div className='px-[11rem] md:px-[14rem] lg:px-[21rem]'> */}
<div className='m-auto  pt-1 px-[11rem] md:px-[14rem] lg:px-[21rem]'> 
  <h1 className='text-2xl font-semibold text-gray-900'>
    Kunal Verma
  </h1>
  <h3 className="text-gray-500 w-max">
    I am A Frontend React.js Developer
  </h3>
</div>
<div className='px-[5rem] md:px-[8rem] lg:px-[14rem]'>
<div className='m-auto  pt-16'>
  <p className="text-gray-500">
    {/* bio */}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus, harum quod ipsam laborum nihil natus ratione doloremque voluptates repudiandae totam adipisci architecto neque minus nam dolor consequatur illo soluta!
  </p>
  <br/>
  

  <p>suscipit vel vero recusandae mollitia eum amet eligendi persdfendis. Vero!</p>
</div>
<div className='flex flex-col gap-20'>
<div className='flex  pt-16'>
  <div className='flex flex-col w-[50%]'>
    <h2 className="text-gray-500 w-max">WORK</h2>
    <h2 className="text-gray-900 w-max">
      {/* workplace */}
      CrownStack
    </h2>
  </div>
  <div className='flex flex-col'>
    <h2 className="text-gray-500 w-max">Education</h2>
    <h2 className="text-gray-900 w-max">
      {/* Educationplace */}
      Kr Mangalam University
    </h2>
  </div></div>
</div>
<footer className='flex pt-[2rem] md:pt-[5rem] gap-4 md:gap-8 w-[40%] justify-center mx-[4.6rem]  md:mx-[6rem]'>
  <a href="http://www.facebook.com"><img src={facebook} alt="" className="w-9 md:w-11 h-auto"/></a>
  <a href="http://www.twitter.com"> 
  <img src={twitter} alt="" className="w-9 md:w-11 h-auto"/>
  </a>
  <a href="http://www.youtube.com">
  <img src={youtube} alt="" className="w-9 md:w-11 h-auto"/>

  </a>
</footer>
</div>

</div>
{/* </div> */}
</div> </div>
</>
  
  )
}
