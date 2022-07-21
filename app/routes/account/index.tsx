import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useLoaderData } from "@remix-run/react";
import AccountSidebar from "~/components/Common/AccountSidebar";
import Template1 from "~/components/Templates/template1";
import { useState } from "react";


export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request)
  return user
}

export default function Profile() {

  const loaderData = useLoaderData();
  const [show, setshow] = useState(0)
  console.log('state',show)

  return (
    <>
      <DashboardHeader username={loaderData.username} />
      <div className='flex'>
      <AccountSidebar firstname={loaderData.firstname} lastname={loaderData.lastname} setshow={setshow}/>
      {show === 0 ?
      <Template1 
      firstname={loaderData.firstname}
      lastname={loaderData.lastname}
      occupation = {loaderData.occupation}
      location = {loaderData.location}
      company = {loaderData.company}
      education= {loaderData.company}
      bio = {loaderData.bio}
       /> : null}
        </div>
</>
  
  )
}
