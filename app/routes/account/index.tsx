import type { LoaderFunction } from "@remix-run/node";

import DashboardHeader from "~/components/Common/DashboardHeader";

export const loader: LoaderFunction = async ({ request  }) => {


  return null
}

export default function Profile() {
  return (
    <>
      <DashboardHeader />
    </>
  )
}
