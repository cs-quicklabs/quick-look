import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import Template0 from '~/components/Templates/template0'
import Template2 from '~/components/Templates/template2'
import Template8 from '~/components/Templates/template8'
import Template7 from '~/components/Templates/template7'
import Template5 from '~/components/Templates/template5'
import Template10 from '~/components/Templates/template10'
import { getUserByUsername } from "~/services/user.service.serevr";
import Template3 from "~/components/Templates/template3";
import Template4 from "~/components/Templates/template4";
import Template6 from "~/components/Templates/template6";
import Template9 from '~/components/Templates/template9'
import Template13 from '~/components/Templates/template13'
import Template14 from '~/components/Templates/template14'
import Template16 from '~/components/Templates/template16'
import Template11 from '~/components/Templates/template11'

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
        <Template0 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '2' ? <Template2 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/>  : loaderData?.profileInfo?.templateNumber == '5' ? <Template5 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '7' ? <Template7 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '8' ? <Template8 primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} input={input}  loaderData = {loaderData}/> : loaderData?.profileInfo?.templateNumber == '10' ? (
          <Template10
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '9' ? (
          <Template9
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ): loaderData?.profileInfo?.templateNumber == '3' ? (
          <Template3
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ): loaderData?.profileInfo?.templateNumber == '4' ? (
          <Template4
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ): loaderData?.profileInfo?.templateNumber == '6' ? (
          <Template6
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '11' ? (
          <Template11
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ): loaderData?.profileInfo?.templateNumber == '13' ? (
          <Template13
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '14' ? (
          <Template14
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        )
        : loaderData?.profileInfo?.templateNumber == '16' ? (
          <Template16
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        )  : null}
        </div>
    )
  }
