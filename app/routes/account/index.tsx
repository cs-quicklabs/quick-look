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
  console.log(loaderData)
  const [show, setshow] = useState(loaderData.templateNumber)
  const [input, setinput] = useState({description:loaderData.bio ,location:loaderData.location,occupation:loaderData.occupation,company:loaderData.company,education:loaderData.education})

  return (
    <>
      <DashboardHeader username={ loaderData.username } />
      <div className='flex'>
      <AccountSidebar loaderData={loaderData}  setshow={setshow} input={input} setinput={setinput} />
      {

      }
      { loaderData.templateNumber == '0' ?
      <Template1  input={input}  loaderData = {loaderData}/> : loaderData.templateNumber == '1' ? <Template2 input={input}  loaderData = {loaderData}/> : null }
        </div>
</>
  
  )
}
