import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/services/auth.service.server";

import DashboardHeader from "~/components/Common/DashboardHeader";
import AccountSidebar from "~/components/Common/AccountSidebar";

// export const loader: LoaderFunction = async ({ request  }) => {
//   await requireUserId(request)

//   return null
// }

export default function Profile() {
  return (
    <>
      <DashboardHeader />
      <AccountSidebar />
    </>
  )
}
