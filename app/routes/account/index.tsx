import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useLoaderData } from "@remix-run/react";
import AccountSidebar from "~/components/Common/AccountSidebar";
import Template1 from "~/components/Templates/template1";
import { useState } from "react";
import Template2 from "~/components/Templates/template2";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  return user
}

export default function Profile() {
  const loaderData = useLoaderData();
  const [show, setshow] = useState(loaderData.templateNumber)
  const [input, setinput] = useState({description:loaderData.bio ,location:loaderData.location,occupation:loaderData.occupation,company:loaderData.company,education:loaderData.education})

  return (
    <div className='h-100vw'>
      <DashboardHeader username={ loaderData.username } />
      <div className='flex'>
        <div className='w-[0%] md:w-0 lg:w-[20.1%] lg:z-20'>
      <AccountSidebar loaderData={loaderData}  setshow={setshow} input={input} setinput={setinput} /></div>
     <div className='flex-1 w-[70%] z-10'>
      { loaderData.templateNumber == '0' ?
      <Template1  input={input}  loaderData = {loaderData}/> : loaderData.templateNumber == '1' ? <Template2 input={input}  loaderData = {loaderData}/> : null }</div>
        </div>
</div>
  
  )
}
