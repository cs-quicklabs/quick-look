import type { LoaderFunction } from "@remix-run/node";

import { getUser, requireUserId } from "~/services/auth.service.server";
import facebook from '../../../assets/images/logos/facebook_logo.png'
import twitter from '../../../assets/images/logos/twitter_logo.png'
import youtube from '../../../assets/images/logos/youtube_logo.png'
import bgimage from '../../../assets/images/background-template.jpg'
import DashboardHeader from "~/components/Common/DashboardHeader";
import { getUserById } from "~/services/user.service.serevr";
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async ({ request  }) => {
  const userInfo = await getUser(request)
  const user = await getUserById(userInfo?.id as string )
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
