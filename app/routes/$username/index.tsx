import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { lazy, Suspense, useMemo, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import { getUserByUsername } from '~/services/user.service.server'
import { REACT_APP_DOMAIN } from '~/utils/constants'

// const Template0 = lazy(()=>new Promise((res)=>setTimeout(res, 5000)).then(()=>import('~/components/Templates/template0')));
const Template0 = lazy(() => import('~/components/Templates/template0'))
const Template2 = lazy(() => import('~/components/Templates/template2'))
const Template8 = lazy(() => import('~/components/Templates/template8'))
const Template7 = lazy(() => import('~/components/Templates/template7'))
const Template5 = lazy(() => import('~/components/Templates/template5'))
const Template10 = lazy(() => import('~/components/Templates/template10'))
const Template3 = lazy(() => import('~/components/Templates/template3'))
const Template4 = lazy(() => import('~/components/Templates/template4'))
const Template6 = lazy(() => import('~/components/Templates/template6'))
const Template9 = lazy(() => import('~/components/Templates/template9'))
const Template13 = lazy(() => import('~/components/Templates/template13'))
const Template14 = lazy(() => import('~/components/Templates/template14'))
const Template16 = lazy(() => import('~/components/Templates/template16'))
const Template11 = lazy(() => import('~/components/Templates/template11'))
const Template17 = lazy(() => import('~/components/Templates/template17'))
const Template18 = lazy(() => import('~/components/Templates/template18'))

export const loader: LoaderFunction = async ({ params }) => {
  const user = await getUserByUsername(params?.username!)
  if (user?.profile?.isPublished && !user?.profile?.isBlocked) {
    return json(user)
  }
  return redirect('/auth/error')
}

export const meta: MetaFunction = ({ data }) => {
  const fullName = `${data?.firstname} ${data?.lastname}`

  return [
    { title: `${fullName} on QuickLook` },
    {
      name: 'description',
      content: `${fullName}'s profile on QuickLook. ${fullName}'s Introduction made simple with just one link.`,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${REACT_APP_DOMAIN}/${data?.username}` },
    { property: 'og:title', content: `${fullName} on QuickLook` },
    {
      property: 'og:description',
      content: `${fullName}'s Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.`,
    },
    {
      property: 'og:image',
      content:
        data?.profileImage?.secondaryImage ||
        `${REACT_APP_DOMAIN}/build/_assets/profile-HAI7W636.png`,
    },

    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: `${REACT_APP_DOMAIN}/${data?.username}` },
    { property: 'twitter:title', content: `${fullName} on QuickLook` },
    {
      property: 'twitter:description',
      content: `${fullName}'s Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together.`,
    },
    {
      property: 'twitter:image',
      content:
        data?.profileImage?.secondaryImage ||
        `${REACT_APP_DOMAIN}/build/_assets/profile-HAI7W636.png`,
    },
    {
      property: 'keywords',
      content: `twitter profile, linkTree, facebook profile, linkedIn profile, one link profile, social profile, quicklook, QuickLook.me, ${fullName}, ${data?.email}, ${data?.username}`,
    },
  ]
}

export default function ProfileView() {
  const loaderData = useLoaderData()

  const primaryRestore = useMemo(
    () =>
      loaderData?.profileImage?.primaryImage
        ? loaderData?.profileImage?.isUsingPrimaryDefault
        : true,
    [loaderData?.profileImage]
  )

  const secondaryRestore = useMemo(
    () =>
      loaderData?.profileImage?.secondaryImage
        ? loaderData?.profileImage?.isUsingSecondaryDefault
        : true,
    [loaderData?.profileImage]
  )

  const [input] = useState({
    description: loaderData?.profileInfo?.bio,
    location: loaderData?.profileInfo?.location,
    occupation: loaderData?.profileInfo?.occupation,
    company: loaderData?.profileInfo?.company,
    education: loaderData?.profileInfo?.education,
  })

  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <ScaleLoader color="rgb(79 70 229)" />
        </div>
      }
    >
      <div>
        {loaderData?.profileInfo?.templateNumber == '0' ? (
          <Template0
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '2' ? (
          <Template2
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '5' ? (
          <Template5
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '7' ? (
          <Template7
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '8' ? (
          <Template8
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '10' ? (
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
        ) : loaderData?.profileInfo?.templateNumber == '3' ? (
          <Template3
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '4' ? (
          <Template4
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '6' ? (
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
        ) : loaderData?.profileInfo?.templateNumber == '13' ? (
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
        ) : loaderData?.profileInfo?.templateNumber == '16' ? (
          <Template16
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '17' ? (
          <Template17
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : loaderData?.profileInfo?.templateNumber == '18' ? (
          <Template18
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
            input={input}
            loaderData={loaderData}
          />
        ) : null}
      </div>
    </Suspense>
  )
}
