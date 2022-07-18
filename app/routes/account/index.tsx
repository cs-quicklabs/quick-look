import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/services/auth.service.server";

import DashboardHeader from "~/components/Common/DashboardHeader";
import Delete from "~/components/Common/deleteaccountModal";

export const loader: LoaderFunction = async ({ request  }) => {
  await requireUserId(request)

  return null
}

export default function Profile() {
  return (
    <>
      <DashboardHeader />
      <div>
        <div>
        <div className='relative '>
          {/* Cover picture */}
          <img className='h-[18rem] w-full ' src="https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXIlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
        </div>
<div className='absolute top-72 left-40 '>
  <img className='w-24 border-4 border-white rounded-full shadow-lg shadow-white' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
</div>
</div>
<div className='m-auto px-[17rem] pt-1'> 
  <h1 className='text-2xl font-semibold'>
    Kunal
  </h1>
  <h3>
    I am A Frontend Developer
  </h3>
</div>
<div className='m-auto px-[10rem] pt-16'>
  <p>
    {/* bio */}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus, harum quod ipsam laborum nihil natus ratione doloremque voluptates repudiandae totam adipisci architecto neque minus nam dolor consequatur illo soluta!
  </p>
</div>
<div className='flex justify-between m-auto px-[10rem] pt-16'>
  <div className='flex flex-col'>
    <h2>WORK</h2>
    <h2>
      {/* workplace */}
      CrownStack
    </h2>
  </div>
  <div className='flex flex-col'>
    <h2>Education</h2>
    <h2>
      {/* Educationplace */}
      Kr Mangalam University
    </h2>
  </div>
</div>
<footer>
  {/* social links */}
</footer>
      
      </div>
    </>
  )
}
