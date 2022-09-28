import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Template1 from "~/components/Templates/template1";
import Template2 from "~/components/Templates/template2";
import Template3 from "~/components/Templates/template3";
import { getUserByUsername } from "~/services/user.service.serevr";



export const loader: LoaderFunction = async ({params}) => {

    const user = await getUserByUsername(params?.username!)
    return json(user)

  }

  export default function ProfileView() {

    const loaderData =  useLoaderData()
    const primaryRestore = loaderData?.profileImage?.isUsingPrimaryDefault
    const secondaryRestore = loaderData?.profileImage?.isUsingSecondaryDefault
    const [input, setinput] = useState({description:loaderData?.profileInfo?.bio ,location:loaderData?.profileInfo?.location,occupation:loaderData?.profileInfo?.occupation,company:loaderData?.profileInfo?.company,education:loaderData?.profileInfo?.education})
    return (
        <div >
        { loaderData?.profileInfo?.templateNumber == '0' ?
        <Template1 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '1' ? <Template2 secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '2' ? <Template3 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : null }</div>
    )
  }