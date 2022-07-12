import { LoaderFunction } from "@remix-run/node";
import HeaderSecondary from "~/components/Common/Header";
import { requireUserId } from "~/services/auth.service.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  return null
}


export default function Dashboard() {

  return (
    <>
<HeaderSecondary/>
    </>
  )
}
