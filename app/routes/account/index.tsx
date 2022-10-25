import { json, LoaderFunction } from '@remix-run/node'
import { getUser, requireUserId } from '~/services/auth.service.server'
import DashboardHeader from '~/components/Common/DashboardHeader'
import { useActionData, useLoaderData } from '@remix-run/react'
import { commitSession, getSession } from '~/services/session.service.server'

import Template0 from '~/components/Templates/template0'
import { useEffect, useState } from 'react'
import { DesktopComputerIcon, DeviceMobileIcon } from '@heroicons/react/outline'
import AccountSidebar from '~/components/Common/AccountSidebar'
import Template2 from '~/components/Templates/template2'
import Template7 from '~/components/Templates/template7'
import Template8 from '~/components/Templates/template8'
import Template5 from '~/components/Templates/template5'
import Template10 from '~/components/Templates/template10'
import Template3 from '~/components/Templates/template3'
import Template4 from '~/components/Templates/template4'
import Template6 from '~/components/Templates/template6'

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  const user = await getUser(request)

  const session = await getSession(request.headers.get('Cookie'))
  const successMessage = session.get('successUpdateProfileMessage') || null
  const message = session.get('successUpdateSocialMedia') || null
  const bioMessage = session.get('successUpdateBioMessage') || null
  const additionalLinkUpdateMessage =
    session.get('successUpdateAdditionalLinkMessage') || null
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
  const Data = useLoaderData()

  const loaderData = Data?.user
  const [message, setMessage] = useState('')
  const [successUpdateMessage, setSuccessUpdateMessage] = useState('')
  const [additionalLinkUpdateMessage, setAdditionalLinkUpdateMessage] =
    useState('')

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
  const [show, setshow] = useState(loaderData?.profileInfo?.templateNumber)
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
  const primaryRestore = loaderData?.profileImage?.isUsingPrimaryDefault
  const secondaryRestore = loaderData?.profileImage?.isUsingSecondaryDefault
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

  const viewMode1 =
    typeof window !== 'undefined' && localStorage?.getItem('viewMode')

  useEffect(() => {
    viewMode1 && setmode(viewMode1)
    viewMode1 === 'mobile' && togglemobile()
  }, [])

  const toggledesktop = () => {
    setmode('desktop')
  }

  const [showUserSetting, setShowUserSetting] = useState(false)
  const togglemobile = () => {
    setmode('mobile')
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
  const disabledIcon =
    loaderData?.profileImage?.primaryImage || primaryRestore
      ? 'text-gray-700/20'
      : 'text-gray-700/40'
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
          className={`w-[0%] grow-0 md:w-0 lg:w-[20.1%] ${
            mode === 'mobile' ? 'lg:z-[50]' : 'lg:z-20'
          }`}
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
            primaryRestore={primaryRestore}
            secondaryRestore={secondaryRestore}
          />
        </div>

        {/* <div className={`flex-1 grow z-30  ${mode === 'mobile' ? 'lg:ml-[12rem] xl:ml-[24rem]' : 'lg:ml-[5rem] xl:ml-[0rem]'}`}> */}
        <div
          className={`z-30 flex-1 grow  
     ${
       mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '0'
         ? 'lg:ml-[48rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
         : loaderData?.profileInfo?.templateNumber == '0'
         ? 'lg:ml-[4.9rem] medium:ml-[3rem] largeLaptop:ml-[0rem]'
         : null
     }  
     ${
       mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '2'
         ? 'lg:ml-[47.8rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
         : loaderData?.profileInfo?.templateNumber == '2'
         ? 'lg:ml-[4.7rem] medium:ml-[3rem] largeLaptop:ml-[1px]'
         : null
     }
     ${
      mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '5'
        ? 'lg:ml-[29rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
        : loaderData?.profileInfo?.templateNumber == '5'
        ? 'lg:ml-[5rem] medium:ml-[3rem] mediumLaptop:ml-[8rem] largeLaptop:ml-[1px]'
        : null
    }
    ${
      mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '7'
        ? 'lg:ml-[47.9rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
        : loaderData?.profileInfo?.templateNumber == '7'
        ? 'lg:ml-[4.7rem] medium:ml-[3rem] largeLaptop:ml-[1px]'
        : null
    }
     ${
       mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '8'
         ? 'lg:ml-[48.8rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
         : loaderData?.profileInfo?.templateNumber == '8'
         ? 'lg:ml-[4.9rem] medium:ml-[3rem] largeLaptop:ml-[1px]'
         : null
     }
     ${
            mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '9'
              ? 'lg:ml-[32rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
              : loaderData?.profileInfo?.templateNumber == '9'
              ? 'lg:ml-[24.1rem] smRes:ml-[9.3rem] SmMedium:ml-[8.2rem] MdRes:ml-[6.1rem] medium:ml-[6.3rem] largeLaptop:ml-[2px]'
              : null
          } 
          ${
            mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '3'
              ? 'lg:ml-[28.8rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
              : loaderData?.profileInfo?.templateNumber == '3'
              ? 'lg:ml-[4.7rem] medium:ml-[3rem] largeLaptop:ml-[1px]'
              : null
          } 
          ${
            mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '4'
              ? 'lg:ml-[28.8rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
              : loaderData?.profileInfo?.templateNumber == '4'
              ? 'lg:ml-[4.7rem] medium:ml-[3rem] largeLaptop:ml-[1px]'
              : null
          } 
          ${
            mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '6'
              ? 'lg:ml-[47.8rem] medium:ml-[27rem] largeLaptop:ml-[24rem]'
              : loaderData?.profileInfo?.templateNumber == '6'
              ? 'lg:ml-[4.7rem] medium:ml-[3rem] largeLaptop:ml-[1px]'
              : null
          }`}
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
          ): loaderData?.profileInfo?.templateNumber == '8' ? (
            <Template8
              mode={mode}
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
            />
          ) : loaderData?.profileInfo?.templateNumber == '9' ? (
            <Template10
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
          ): loaderData?.profileInfo?.templateNumber == '4' ? (
            <Template4
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
              mode={mode}
            />
          ): loaderData?.profileInfo?.templateNumber == '6' ? (
            <Template6
              primaryRestore={primaryRestore}
              secondaryRestore={secondaryRestore}
              input={input}
              loaderData={loaderData}
            />
          ): null}
        </div>
      </div>

      <div
        className={`absolute top-[4.5rem] right-[2rem] hidden w-[80px] lg:flex ${
          !showUserSetting ? 'z-40' : 'z-[60]'
        }  rounded-l-md rounded-r-md ${
          loaderData?.profileImage?.primaryImage || primaryRestore
            ? ''
            : 'border border-gray-300'
        } ${
          loaderData?.profileInfo?.templateNumber == '1'
            ? 'border border-gray-300'
            : ''
        } ${loaderData?.supportBanner?.toggleBanner && 'mt-[3rem]'} `}
      >
        {/* <form action="" > */}
        <button
          id="desktopButton"
          className={`${
            mode === 'desktop' ? 'bg-white/90' : 'bg-white/70 text-white'
          } flex h-[2.5rem] w-[3rem] items-center justify-center rounded-l-md`}
          onClick={toggledesktop}
        >
          <DesktopComputerIcon
            className={`h-[1.25rem] w-auto  ${
              mode === 'desktop' ? 'text-black' : disabledIcon
            } `}
          />
        </button>

        <button
          id="mobileButton"
          className={`${
            mode === 'mobile' ? 'bg-white/90' : 'bg-white/70 text-white'
          } flex h-[2.5rem] w-[3rem] items-center justify-center rounded-r-md border-l`}
          onClick={togglemobile}
        >
          <DeviceMobileIcon
            className={`h-[1.25rem] w-auto  ${
              mode === 'mobile' ? 'text-black' : disabledIcon
            }`}
          />
        </button>
        {/* </form> */}
      </div>
    </div>
  )
}
