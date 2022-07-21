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
  const [input, setinput] = useState({description:'',projectname:'',occupation:'',company:'',education:''})
  // console.log('state',show)
console.log('input',input);

  return (
    <>
      <DashboardHeader username={loaderData.username} />
      <div className='flex'>
      <AccountSidebar  occupation = {loaderData.occupation}
      location = {loaderData.location} firstname = {loaderData.firstname} lastname = {loaderData.lastname}
      company = {loaderData.company}
      education= {loaderData.company}
      bio = {loaderData.bio}  setshow={setshow} input={input} setinput={setinput}/>
      {show === 0 ?
      <Template1  input={input} 
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
