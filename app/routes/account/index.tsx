import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getUser, requireUserId } from '~/services/auth.service.server'
import DashboardHeader from '~/components/Common/DashboardHeader'
import { useActionData, useLoaderData } from '@remix-run/react'
import { commitSession, getSession } from '~/services/session.service.server'

import Template0 from '~/components/Templates/template0'
import { useEffect, useState } from 'react'
import AccountSidebar from '~/components/Sidebar/SidebarContainer'
import Template2 from '~/components/Templates/template2'
import Template7 from '~/components/Templates/template7'
import Template8 from '~/components/Templates/template8'
import Template5 from '~/components/Templates/template5'
import Template10 from '~/components/Templates/template10'
import Template3 from '~/components/Templates/template3'
import Template4 from '~/components/Templates/template4'
import Template6 from '~/components/Templates/template6'
import Template9 from '~/components/Templates/template9'
import Template13 from '~/components/Templates/template13'
import Template14 from '~/components/Templates/template14'
import Template16 from '~/components/Templates/template16'
import Template11 from '~/components/Templates/template11'
import Template17 from '~/components/Templates/template17'
import Template18 from '~/components/Templates/template18'
import Unpublish, { action as ModalAction } from '~/components/Common/unpublishModal'
import TrialExpired from '~/components/TrialExpired'

export const action = ModalAction

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  const user = await getUser(request)

  const session = await getSession(request.headers.get('Cookie'))
  const successMessage = session.get('successUpdateProfileMessage') || null
  const message = session.get('successUpdateSocialMedia') || null
  const bioMessage = session.get('successUpdateBioMessage') || null
  const additionalLinkUpdateMessage = session.get('successUpdateAdditionalLinkMessage') || null
  return json(
    { message, successMessage, bioMessage, additionalLinkUpdateMessage, user },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  )
}

export default function Profile() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSpotlight, setShowSpotlight] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showAddVideo, setShowAddVideo] = useState(false)
  const [showTestimonial, setShowTestimonial] = useState(false)
  const [showImages, setshowImages] = useState(false)
  const [showTemplate, setshowTemplate] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const Data = useLoaderData()

  const loaderData = Data?.user
  const [message, setMessage] = useState('')
  const [successUpdateMessage, setSuccessUpdateMessage] = useState('')
  const [additionalLinkUpdateMessage, setAdditionalLinkUpdateMessage] = useState('')

  useEffect(() => {
    setMessage(Data?.message)
    setSuccessUpdateMessage(Data?.successMessage)
    setAdditionalLinkUpdateMessage(Data?.additionalLinkUpdateMessage)
  }, [Data])

  // useEffect(() => {
  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 2000)
  }
  if (successUpdateMessage) {
    setTimeout(() => {
      setSuccessUpdateMessage('')
    }, 2000)
  }
  if (additionalLinkUpdateMessage) {
    setTimeout(() => {
      setAdditionalLinkUpdateMessage('')
    }, 2000)
  }

  const [bioMessage, setBioMessage] = useState('')
  useEffect(() => {
    setBioMessage(Data?.bioMessage)
  }, [Data])
  if (bioMessage) {
    setTimeout(() => {
      setBioMessage('')
    }, 2000)
  }

  const [showSocialLinks, setshowSocialLinks] = useState(
    message || successUpdateMessage ? true : false
  )
  const [mode, setmode] = useState('desktop')
  const [showBio, setshowBio] = useState(false)
  const [, setshow] = useState(loaderData?.profileInfo?.templateNumber)
  const [input, setinput] = useState({
    description: loaderData?.profileInfo?.bio,
    location: loaderData?.profileInfo?.location,
    occupation: loaderData?.profileInfo?.occupation,
    company: loaderData?.profileInfo?.company,
    education: loaderData?.profileInfo?.education,
  })
  const [initialInput, setInitialInput] = useState({
    description: loaderData?.profileInfo?.bio,
    location: loaderData?.profileInfo?.location,
    occupation: loaderData?.profileInfo?.occupation,
    company: loaderData?.profileInfo?.company,
    education: loaderData?.profileInfo?.education,
  })
  const [inputTestimonial, setInputTestimonial] = useState({
    testimonialText: loaderData?.testimonial?.testimonialText,
    testimonialBy: loaderData?.testimonial?.testimonialBy,
  })
  const [inputVideo, setInputVideo] = useState({
    videoLink: loaderData?.video?.videoLink,
  })
  const primaryRestore = loaderData?.profileImage?.primaryImage
    ? loaderData?.profileImage?.isUsingPrimaryDefault
    : true
  const secondaryRestore = loaderData?.profileImage?.secondaryImage
    ? loaderData?.profileImage?.isUsingSecondaryDefault
    : true
  const actionData = useActionData()

  useEffect(() => {
    localStorage.setItem('viewMode', mode)
  }, [mode])

  useEffect(() => {
    setInitialInput({
      description: loaderData?.profileInfo?.bio,
      location: loaderData?.profileInfo?.location,
      occupation: loaderData?.profileInfo?.occupation,
      company: loaderData?.profileInfo?.company,
      education: loaderData?.profileInfo?.education,
    })
  }, [loaderData])

  const viewMode1 = typeof window !== 'undefined' && localStorage?.getItem('viewMode')

  useEffect(() => {
    viewMode1 && setmode(viewMode1)
    viewMode1 === 'mobile' && togglemobile()
  }, [])

  const [showUserSetting] = useState(false)
  const togglemobile = () => {
    setmode('desktop')
    setshowTemplate(
      !showSocialLinks &&
        !showImages &&
        !showBio &&
        !showTestimonial &&
        !showAddVideo &&
        !showPortfolio &&
        !showSpotlight &&
        !showBanner
        ? true
        : false
    )
  }

  if (loaderData?.needPaymentToContinue)
    return (
      <div className="h-screen">
        <DashboardHeader
          username={loaderData?.username}
          loaderData={loaderData}
          noHamburger={true}
        />

        <div className="mt-24 md:mt-52">
          <TrialExpired trialStartDate={loaderData.createdAt} />
        </div>
      </div>
    )

  return (
    <div className="h-100vw ">
      <DashboardHeader
        showUserSetting
        setShowUserSetting
        username={loaderData?.username}
        loaderData={loaderData}
      />
      <div className="relative flex">
        <div
          className={`w-[0%] md:w-0 ${mode === 'mobile' ? 'lg:z-[50]' : 'lg:z-[21]'}
          `}
        >
          <AccountSidebar
            setAdditionalLinkUpdateMessage={setAdditionalLinkUpdateMessage}
            additionalLinkUpdateMessage={additionalLinkUpdateMessage}
            showBanner={showBanner}
            setShowBanner={setShowBanner}
            initialInput={initialInput}
            setMessage={setMessage}
            bioMessage={bioMessage}
            setBioMessage={setBioMessage}
            showSpotlight={showSpotlight}
            setShowSpotlight={setShowSpotlight}
            inputVideo={inputVideo}
            setInputVideo={setInputVideo}
            inputTestimonial={inputTestimonial}
            setInputTestimonial={setInputTestimonial}
            showPortfolio={showPortfolio}
            setShowPortfolio={setShowPortfolio}
            showAddVideo={showAddVideo}
            setShowAddVideo={setShowAddVideo}
            showTestimonial={showTestimonial}
            setShowTestimonial={setShowTestimonial}
            successUpdateMessage={successUpdateMessage}
            setshowSocialLinks={setshowSocialLinks}
            message={message}
            showSocialLinks={showSocialLinks}
            setshowTemplate={setshowTemplate}
            showTemplate={showTemplate}
            showImages={showImages}
            setshowImages={setshowImages}
            actionData={actionData}
            loaderData={loaderData}
            setmode={setmode}
            setshow={setshow}
            input={input}
            setinput={setinput}
            mode={mode}
            showBio={showBio}
            setshowBio={setshowBio}
            primaryRestore={loaderData?.profileImage?.isUsingPrimaryDefault}
            secondaryRestore={loaderData?.profileImage?.isUsingSecondaryDefault}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>

        {/* <div className={`flex-1 grow z-30  ${mode === 'mobile' ? 'lg:ml-[12rem] xl:ml-[24rem]' : 'lg:ml-[5rem] xl:ml-[0rem]'}`}> */}
        <div
          className={`z-20 grow basis-[78%] 
          ${
            mode === 'mobile'
              ? 'lg:ml-[32rem] xl:ml-[48rem]'
              : mode != 'mobile'
              ? 'lg:ml-[24rem]'
              : null
          }
     `}
        >
          {loaderData?.profileInfo?.templateNumber == '0' ? (
            <Template0
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '2' ? (
            <Template2
              mode={mode}
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
            />
          ) : loaderData?.profileInfo?.templateNumber == '5' ? (
            <Template5
              mode={mode}
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
            />
          ) : loaderData?.profileInfo?.templateNumber == '7' ? (
            <Template7
              mode={mode}
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
            />
          ) : loaderData?.profileInfo?.templateNumber == '8' ? (
            <Template8
              mode={mode}
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
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '9' ? (
            <Template9
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '3' ? (
            <Template3
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '4' ? (
            <Template4
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
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
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '13' ? (
            <Template13
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '14' ? (
            <Template14
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '16' ? (
            <Template16
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '17' ? (
            <Template17
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : loaderData?.profileInfo?.templateNumber == '18' ? (
            <Template18
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ) : null}
        </div>
      </div>

      <div
        className={`absolute top-[4.5rem] right-[2rem] hidden w-[80px] lg:flex ${
          !showUserSetting ? 'z-40' : 'z-[60]'
        }  rounded-l-md rounded-r-md ${
          loaderData?.profileImage?.primaryImage || loaderData?.profileImage?.isUsingPrimaryDefault
            ? ''
            : 'border border-gray-300'
        } ${loaderData?.profileInfo?.templateNumber == '1' ? 'border border-gray-300' : ''} ${
          loaderData?.supportBanner?.toggleBanner && 'mt-[3rem]'
        } `}
      ></div>
      <Unpublish
        isPublished={loaderData?.profile?.isPublished}
        open={showModal}
        setopenModal={setShowModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}
