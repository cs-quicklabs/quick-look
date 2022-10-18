import facebook from '../../../assets/images/fb1.png'
import twitter from '../../../assets/images/twitter1.png'
import youtube from '../../../assets/images/yt1.png'
import bgimage from '../../../assets/images/bg.png'
import defaultimg from '../../../assets/images/profile.png'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import Spotlightbtn from './addOns/Spotlightbtn'
import BannerAddOn from './addOns/Banner'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'

export default function Template1({
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
  mode
}: any) {
  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && (
        <BannerAddOn mode={mode} loaderData={loaderData} />
      )}
      <div className="flex overflow-hidden">
        <div className="flex-grow">
          <div className="h-[10rem]">
            <div className="relative">
              {loaderData?.profileImage?.primaryImage || primaryRestore ? (
                <img
                  className={` w-screen object-cover ${
                    loaderData?.profileImage?.primaryImage ||
                    primaryRestore === true
                      ? 'h-[10rem]'
                      : ''
                  }`}
                  src={
                    primaryRestore === true
                      ? bgimage
                      : loaderData?.profileImage?.primaryImage
                  }
                  alt=""
                />
              ) : null}
            </div>
            <div
              className={`relative    md:pl-[11rem]   lg:pl-[12.5rem] ${
                loaderData?.profileImage?.primaryImage ||
                primaryRestore === true
                  ? 'top-[-4rem]'
                  : 'top-[6rem]'
              }`}
            >
              {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
                <img
                  className={`h-[7rem] w-[7rem] rounded-full shadow-lg  shadow-white md:h-[8rem] md:w-32 ${
                    loaderData?.profileImage?.secondaryImage ||
                    secondaryRestore === true
                      ? 'border-4 border-white'
                      : ''
                  }`}
                  src={
                    secondaryRestore === true
                      ? defaultimg
                      : loaderData?.profileImage?.secondaryImage
                  }
                />
              ) : null}
              {/* src={secondaryRestore === true ? 'http://localhost:3000/build/_assets/profile-HAI7W636.png' : loaderData.profileImage.secondaryImage}  */}
            </div>
          </div>
          <div className="m-auto px-[7rem] pt-1 md:px-[19rem]  lg:px-[21rem]">
            <h1 className="w-max text-2xl font-bold leading-8 text-gray-900 ">
              {loaderData?.firstname} {loaderData?.lastname}
            </h1>
            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3 className="w-max break-all text-gray-500">
                {input.occupation}{' '}
                {input.location && input.occupation ? `in` : ''}{' '}
                {input.location}
              </h3>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            {loaderData?.spotlightButton?.toggleSpotlight && (
              <Spotlightbtn loaderData={loaderData} />
            )}
          </div>

          <div>
            {loaderData?.spotlightButton?.toggleSpotlight && (
              <AdditionalLinksAddOn loaderData={loaderData} />
            )}
          </div>

          <div className="pl-[5rem] pr-[8rem] md:px-[12rem] lg:px-[14rem]  ">
            <div className="m-auto  flex flex-wrap pt-[2.5rem]">
              <pre className="flex whitespace-pre-wrap break-all font-sans text-base font-normal leading-5 text-gray-500">
                {input?.description?.trim()}
              </pre>
            </div>
            {loaderData?.testimonial?.testimonialText && (
              <TestimonialAddOn
                testimonialText={loaderData?.testimonial?.testimonialText}
                testimonialBy={loaderData?.testimonial?.testimonialBy}
              />
            )}
            {loaderData?.video?.videoLink && (
              <VideoAddOn videoLink={loaderData?.video?.videoLink} />
            )}
            <PortfolioAddon loaderData={loaderData} />

            <div className="flex flex-col gap-20">
              <div className="flex  pt-16 ">
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className="flex w-[50%] flex-col">
                    <h2 className="w-max text-sm font-medium leading-5 text-gray-500">
                      WORK
                    </h2>
                    <h2 className="w-max break-all text-sm font-normal leading-5 text-gray-900">
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div className="flex flex-col">
                    <h2 className="w-max text-sm font-medium leading-5 text-gray-500">
                      EDUCATION
                    </h2>
                    <h2 className="w-max break-all text-sm font-normal leading-5 text-gray-900">
                      {input.education}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            {/* <footer className='flex pt-[2rem] lg:pt-[5rem] gap-4 md:gap-4 w-[40%] justify-center mx-[3.4rem] md:mx-[3.5rem]  lg:mx-[4.1rem] '> */}
            <footer className="flex w-full justify-center gap-4 pt-[2rem] md:gap-8  lg:pt-[5rem]">
              {loaderData?.socialMedia?.facebookLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.facebookLink}`}
                  target="_blank"
                >
                  <img src={facebook} alt="" className="h-auto w-9 md:w-11" />
                </a>
              ) : null}
              {loaderData?.socialMedia?.twitterLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.twitterLink}`}
                  target="_blank"
                >
                  <img src={twitter} alt="" className="h-auto w-9 md:w-11" />
                </a>
              ) : null}
              {loaderData?.socialMedia?.youtubeLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.youtubeLink}`}
                  target="_blank"
                >
                  <img src={youtube} alt="" className="h-auto w-9 md:w-11" />
                </a>
              ) : null}
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
