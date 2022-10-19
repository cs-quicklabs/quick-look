import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Template0 from "~/components/Templates/template0";
import Template2 from "~/components/Templates/template2";
import Template8 from "~/components/Templates/template8";
import Template7 from "~/components/Templates/template7";
import Template5 from "~/components/Templates/template5";
import Template9 from '~/components/Templates/template9'
import { getUserByUsername } from "~/services/user.service.serevr";


export const loader: LoaderFunction = async ({ params }) => {
  const user = await getUserByUsername(params?.username!)
  if (user?.profile?.isPublished) {
    return json(user)
  }
  return redirect('/auth/unpublishedAccountError')
}

  export default function ProfileView() {

    const loaderData =  useLoaderData()
    const primaryRestore = loaderData?.profileImage?.isUsingPrimaryDefault
    const secondaryRestore = loaderData?.profileImage?.isUsingSecondaryDefault
    const [input, setinput] = useState({description:loaderData?.profileInfo?.bio ,location:loaderData?.profileInfo?.location,occupation:loaderData?.profileInfo?.occupation,company:loaderData?.profileInfo?.company,education:loaderData?.profileInfo?.education})
    return (
        <div>
        { loaderData?.profileInfo?.templateNumber == '0' ?
        <Template0 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '2' ? <Template2 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/>  : loaderData?.profileInfo?.templateNumber == '5' ? <Template5 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '7' ? <Template7 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '8' ? <Template8 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '9' ? (
          <Template9
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : null}
        </div>
    )
  }
