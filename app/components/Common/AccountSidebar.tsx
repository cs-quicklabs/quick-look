import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars2Icon, XCircleIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'
import AccountBio from './AccountBio'
import AccountTemplate from './AccountTemplate'
import DefaultProfileIcon from '../../../assets/images/profile.png'
import UploadImages from '../UploadImages/UploadImages'
import SocialProfile from '../SocialProfile/AddMoreSocialLinks'
import NoTestimonial from '../Testimonial/NoTestimonial'
import NoVideo from '../Video/NoVideo'
import Portfolio from '../Portfolio'
import SpotlightButton from '../Spotlight'
import Banner from '../Banner'

const navigationFirst = [
  { name: 'Design Templates', subheading: 'Pick your design Template' },
  { name: 'Bio', subheading: 'Introduction, Work and Education Details' },
  { name: 'Social Links', subheading: 'Links to Social Profile' },
  { name: 'Images', subheading: 'Update Images in your templates' },
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
    if (showImages && mode === 'mobile') {
      setshowImages(true)
    }
  }, [mode, showImages])

  const renderPublishStatus = () => {
    const { isPublished } = loaderData?.profile
    let PublishIcon = isPublished ? CheckCircleIcon : ExclamationCircleIcon
    return (
      <div
        className={`w-full inline-flex rounded-md ${isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          } text-sm mt-3 py-1 px-2`}
      >
        <PublishIcon
          className={`mt-1 mr-2 h-4 w-4 ${isPublished ? 'text-green-400' : 'text-yellow-400'}`}
        />
        <span className="flex-1">
          {isPublished ? 'Your profile is live' : 'Your profile needs publishing'}
        </span>
        <span className="ml-2 cursor-pointer font-medium" onClick={() => setShowModal(true)}>
          {isPublished ? `Unpublish ->` : 'Publish ->'}
        </span>
      </div>
    )
  }

  const renderSideBarMenuItem = (title: String, subtitle: String) => {
    return (
      <div className="flex cursor-pointer justify-between border-t border-gray-200 px-2 py-4">
        <div className="">
          <p className="group flex items-center rounded-md px-2 text-sm font-medium leading-5">
            {title}
          </p>

          <p className="px-2 text-sm font-medium text-gray-500 group-hover:text-gray-700">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    )
  }

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
    if (item === 'Images') {
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
        <div className="flex flex-shrink-0 px-6 pt-3 pb-2">
          <div className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  data-cy="profileImage"
                  className="inline-block h-9 w-9 rounded-full"
                  src={
                    loaderData?.profileImage?.secondaryImage
                      ? loaderData?.profileImage?.secondaryImage
                      : DefaultProfileIcon
                  }
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">
                  {loaderData?.firstname} {loaderData?.lastname}
                </p>
                <a
                  href={`/${loaderData?.username}`}
                  target="_blank"
                  className="text-xs font-medium leading-4 text-gray-500 group-hover:text-gray-700"
                  rel="noreferrer"
                >
                  View profile
                </a>
              </div>
            </div>
            {renderPublishStatus()}
          </div>
        </div>
        <div>
          <div className="mt-2 w-full border-t border-gray-200 bg-gray-50 pl-7 text-xs font-medium leading-5 text-gray-500 group-hover:text-gray-700">
            Basic Profile
          </div>
          <nav className="flex-1 bg-white">
            {navigationFirst.map((item) => (
              <div
                key={item.name}
                data-cy={`${item.name}`}
                onClick={() => {
                  closeAllSidebars()
                  openSidebar(item.name)
                }}
                className={classNames('hover:bg-gray-50')}
              >
                {renderSideBarMenuItem(item.name, item.subheading)}
              </div>
            ))}
          </nav>
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

        <div>
          <div className="mt-0 w-full border-t border-gray-200 bg-gray-50 pl-7 text-xs font-medium leading-5 text-gray-500 group-hover:text-gray-700">
            Advanced Features
          </div>

          <nav className="flex-1 bg-white ">
            {navigationSecond.map((item) => (
              <div
                key={item.name}
                data-cy={`${item.name}`}
                onClick={() => {
                  closeAllSidebars()
                  openSidebar(item.name)
                }}
                className={classNames('hover:bg-gray-50')}
              >
                {renderSideBarMenuItem(item.name, item.subheading)}
              </div>
            ))}
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
          </nav>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="" onClick={(e) => e.stopPropagation()}>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />


            <div className="fixed inset-0 z-10 flex overflow-y-auto">

              <Dialog.Panel className="absolute flex h-screen w-full flex-1 flex-col bg-white md:max-w-xs lg:max-w-md">

                <div className="absolute top-0 right-0 mt-[1.3rem]">
                  <button
                    type="button"
                    className="mr-1 flex h-10 w-10 items-center justify-center rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {renderSideBar()}

              </Dialog.Panel>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* static desktop  */}
        { }
        <div
          className={`hidden lg:flex grow ${mode === 'mobile' ? 'w-[16rem] xl:w-96' : 'lg:w-96'
            }  font-inter mt-12 md:fixed md:inset-y-0 md:flex-col`}
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
