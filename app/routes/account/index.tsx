import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import DashboardHeader from "~/components/Common/DashboardHeader";
import { useLoaderData } from "@remix-run/react";


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

</>
  )
}
