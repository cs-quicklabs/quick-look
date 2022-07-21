import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useLoaderData } from "@remix-run/react";
import AccountSidebar from "~/components/Common/AccountSidebar";
import Template1 from "~/components/Templates/template1";


export const loader: LoaderFunction = async ({ request  }) => {
  await requireUserId(request);
  const user = await getUser(request)
  return user
}

export default function Profile() {
  const loaderData = useLoaderData();

  return (
    <>
      <DashboardHeader username={loaderData.username}/>
      <div className='flex'>
      <AccountSidebar />
<Template1 firstname={loaderData.firstname} lastname={loaderData.lastname}/>

        </div>
</>
  
  )
}
