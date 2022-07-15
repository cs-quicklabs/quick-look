import { LoaderFunction } from "@remix-run/node";

import { requireUserId } from "~/services/auth.service.server";
import { LoginHeader } from "~/components/LoginHeader";
import SideNav from "~/components/Sidenavbar";
import Profile from "~/components/profilename";

export const loader: LoaderFunction = async ({ request  }) => {
  await requireUserId(request)

  return null
}

export default function Dashboard() {


  return (
    <div>
    <LoginHeader/>
  <SideNav>
   <Profile/>
  </SideNav>
    </div>
  )
}
