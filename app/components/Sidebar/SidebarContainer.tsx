import { useEffect, useState } from 'react'
import { Bars2Icon } from '@heroicons/react/24/outline'
import AccountBio from '../AccountBio/AccountBioForm'
import AccountTemplate from '../AccountTemplates/AccountTemplate'
import UploadImages from '../ProfilePictures/UploadImages'
import SocialProfile from '../SocialLinks/AddMoreSocialLinks'
import NoTestimonial from '../AddTestimonial/NoTestimonial'
import NoVideo from '../AddVideos/NoVideo'
import Portfolio from '../AddPortfolio'
import SpotlightButton from '../SpotlightButton'
import Banner from '../SupportBanner'
import SidebarHeader from './SidebarHeader'
import SidebarSection from './SidebarSection'

const navigationFirst = [
  { name: 'Design Templates', subheading: 'Pick your design Template' },
  { name: 'Bio', subheading: 'Introduction, Work and Education Details' },
  { name: 'Social Links', subheading: 'Links to Social Profile' },
  { name: 'Profile Pictures', subheading: 'Update Images in your templates' },
  { name: 'Support Banner', subheading: 'Add a support banner on top of your profile' },
]

const navigationSecond = [
  { name: 'Spotlight Button', subheading: 'Add a call to action button on profile' },
  { name: 'Add Video', subheading: 'Add a video link to your profile' },
  { name: 'Add Testimonials', subheading: 'Add testimonials to your profile' },
  { name: 'Add Portfolio', subheading: 'Add Portfolio to your Profile' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AccountSideBar({
  setAdditionalLinkUpdateMessage,
  additionalLinkUpdateMessage,
  showBanner,
  setShowBanner,
  initialInput,
  setMessage,
  bioMessage,
  setBioMessage,
  showSpotlight,
  setShowSpotlight,
  inputVideo,
  setInputVideo,
  inputTestimonial,
  setInputTestimonial,
  showPortfolio,
  setShowPortfolio,
  showAddVideo,
  setShowAddVideo,
  setShowTestimonial,
  showTestimonial,
  successUpdateMessage,
  message,
  showSocialLinks,
  setshowSocialLinks,
  showTemplate,
  setshowTemplate,
  showImages,
  setshowImages,
  loaderData,
  setshow,
  input,
  setinput,
  mode,
  setshowBio,
  showBio,
  setmode,
  primaryRestore,
  secondaryRestore,
  showModal,
  setShowModal,
}: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  useEffect(() => {
    if (showImages) {
      setshowImages(true)
    }
  }, [mode, showImages])

  const closeAllSidebars = () => {
    setShowSpotlight(false)
    setShowPortfolio(false)
    setShowAddVideo(false)
    setShowTestimonial(false)
    setSidebarOpen(false)
    setshowImages(false)
    setshowSocialLinks(false)
    setshowTemplate(false)
    setshowBio(false)
    setShowBanner(false)
  }

  const openSidebar = (item: string) => {
    if (item === 'Bio') {
      setshowBio(true)
    }
    if (item === 'Design Templates') {
      setshowTemplate(true)
    }
    if (item === 'Social Links') {
      setshowSocialLinks(true)
    }
    if (item === 'Profile Pictures') {
      setshowImages(true)
    }
    if (item === 'Support Banner') {
      setShowBanner(true)
    }
    if (item === 'Spotlight Button') {
      setShowSpotlight(true)
    }
    if (item === 'Add Testimonials') {
      setShowTestimonial(true)
    }
    if (item === 'Add Video') {
      setShowAddVideo(true)
    }
    if (item === 'Add Portfolio') {
      setShowPortfolio(true)
    }
  }

  function renderSideBar() {
    return (
      <div className="flex flex-1 flex-col overflow-y-auto pt-3 pb-4">
        <SidebarHeader loaderData={loaderData} setShowModal={setShowModal} />

        <div>
          <SidebarSection
            title="Basic Features"
            sectionItems={navigationFirst}
            onClick={(name: string) => {
              closeAllSidebars()
              openSidebar(name)
            }}
          />
          <div>
            {showBio ? (
              <AccountBio
                initialInput={initialInput}
                bioMessage={bioMessage}
                setBioMessage={setBioMessage}
                setshowBio={setshowBio}
                occupation={loaderData?.profileInfo?.occupation}
                company={loaderData?.profileInfo?.company}
                education={loaderData?.profileInfo?.education}
                bio={loaderData?.profileInfo?.bio}
                location={loaderData?.profileInfo?.location}
                input={input}
                setinput={setinput}
                mode={mode}
                setmode={setmode}
              />
            ) : null}
            {showTemplate ? (
              <AccountTemplate
                setshowTemplate={setshowTemplate}
                setshow={setshow}
                mode={mode}
                setmode={setmode}
              />
            ) : null}
            {showSocialLinks ? (
              <SocialProfile
                setMessage={setMessage}
                successUpdateMessage={successUpdateMessage}
                message={message}
                setshowSocialLinks={setshowSocialLinks}
                loaderData={loaderData}
                mode={mode}
                setmode={setmode}
              />
            ) : null}
            {showImages ? (
              <UploadImages
                setshowImages={setshowImages}
                loaderData={loaderData}
                mode={mode}
                setmode={setmode}
                primaryRestore={primaryRestore}
                secondaryRestore={secondaryRestore}
              />
            ) : null}
            {showBanner ? (
              <Banner
                showBanner={showBanner}
                setShowBanner={setShowBanner}
                loaderData={loaderData}
                mode={mode}
                setmode={setmode}
              />
            ) : null}
          </div>
        </div>

        <div>
          <SidebarSection
            title="Advanced Features"
            sectionItems={navigationSecond}
            onClick={(name: string) => {
              closeAllSidebars()
              openSidebar(name)
            }}
          />

          {showSpotlight ? (
            <SpotlightButton
              setAdditionalLinkUpdateMessage={setAdditionalLinkUpdateMessage}
              additionalLinkUpdateMessage={additionalLinkUpdateMessage}
              showSpotlight={showSpotlight}
              setShowSpotlight={setShowSpotlight}
              loaderData={loaderData}
              input={input}
              setinput={setinput}
              mode={mode}
              setmode={setmode}
            />
          ) : null}
          {showTestimonial ? (
            <NoTestimonial
              inputTestimonial={inputTestimonial}
              setInputTestimonial={setInputTestimonial}
              setShowTestimonial={setShowTestimonial}
              loaderData={loaderData}
              input={input}
              setinput={setinput}
              mode={mode}
              setmode={setmode}
            />
          ) : null}
          {showAddVideo ? (
            <NoVideo
              inputVideo={inputVideo}
              setInputVideo={setInputVideo}
              setShowAddVideo={setShowAddVideo}
              loaderData={loaderData}
              mode={mode}
              setmode={setmode}
            />
          ) : null}
          {showPortfolio ? (
            <Portfolio
              loaderData={loaderData}
              setShowPortfolio={setShowPortfolio}
              mode={mode}
              setmode={setmode}
            />
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="" onClick={(e) => e.stopPropagation()}>
        <div
          className={`hidden lg:flex grow w-96  font-inter mt-12 md:fixed md:inset-y-0 md:flex-col`}
        >
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            {renderSideBar()}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="fixed top-[0] z-50 pl-1 pt-0.5 lg:hidden lg:pl-3 lg:pt-3">
            <button
              type="button"
              className="hover:white -ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-white"
              onClick={() => setSidebarOpen((prev) => (prev = sidebarOpen ? false : true))}
            >
              <span className="sr-only">Open sidebar</span>
              {!sidebarOpen && <Bars2Icon className="h-6 w-6 " aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
