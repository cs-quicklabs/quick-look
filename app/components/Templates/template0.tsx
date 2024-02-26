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
import PoweredBy from '../Common/PoweredBy'

export default function Template1({
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
  mode,
}: any) {
  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && (
        <BannerAddOn mode={mode} loaderData={loaderData} />
      )}
      <div className={`flex w-full sm:w-full ${mode === 'mobile' ? 'lg:w-full' : 'w-full'}`}>
        <div className="flex-grow">
          <div className="h-44 relative">
            <div className="relative">
              {loaderData?.profileImage?.primaryImage || primaryRestore ? (
                <img
                  className={`w-[100%] object-cover ${
                    loaderData?.profileImage?.primaryImage || primaryRestore === true ? 'h-44' : ''
                  }`}
                  src={primaryRestore === true ? bgimage : loaderData?.profileImage?.primaryImage}
                  alt="cover"
                  loading="lazy"
                />
              ) : null}
            </div>
            <div className={`absolute md:left-40 top-[100px]`}>
              {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  className={`h-32 w-32 rounded-full shadow-lg  shadow-white ${
                    loaderData?.profileImage?.secondaryImage || secondaryRestore === true
                      ? 'border-4 border-white'
                      : ''
                  }`}
                  src={
                    secondaryRestore === true
                      ? defaultimg
                      : loaderData?.profileImage?.secondaryImage
                  }
                  alt="profile"
                  loading="lazy"
                />
              ) : null}
              {/* src={secondaryRestore === true ? 'http://localhost:3000/build/_assets/profile-HAI7W636.png' : loaderData.profileImage.secondaryImage}  */}
            </div>
          </div>
          <div className={`mt-14 sm:mt-0 sm:ml-32 md:ml-72 pl-4`}>
            <h1 className="w-max text-2xl font-bold leading-8 text-gray-900 ">
              {loaderData?.firstname} {loaderData?.lastname}
            </h1>
            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3 className={`text-gray-500 text-base leading-5 mt-0.5 font-normal`}>
                {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
              </h3>
            ) : (
              <span></span>
            )}
          </div>

          {/* <div
            className={`w-[100%] pl-[2rem] pr-[8.5rem] xs:pr-[5.5rem] smallScreen:pr-[5.5rem] mediumScreen:pr-[3.5rem]  ${
              mode === 'mobile'
                ? 'small:w-[91%] small:pr-[5rem] med:w-[100%] med:pr-[2rem] largeLaptop:pr-[2rem]'
                : 'SmMedium:flex-row'
            }
            ${nav ?'small:pl-[4rem] small:pr-[4rem]' : mode != 'mobile' ? 'small:pr-[7rem] SmMedium:pr-[2rem]' : '' }`}
          > */}
          <div className="max-w-2xl mx-auto px-8">
            <div className="">
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <Spotlightbtn loaderData={loaderData} />
              )}
            </div>

            <div className="">
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <AdditionalLinksAddOn loaderData={loaderData} />
              )}
            </div>

            <div
              className={`m-auto  flex flex-wrap mt-0.5 ${
                loaderData?.spotlightButton?.toggleSpotlight ? 'pt-[1.5rem]' : 'pt-11'
              }`}
            >
              <pre className="flex whitespace-pre-wrap break-normal font-sans text-base font-normal leading-5 text-gray-500">
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
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
            )}
            <div className="">
              <PortfolioAddon loaderData={loaderData} mode={mode} />
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex  pt-[2rem] justify-between">
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className="flex flex-col">
                    <h2 className="w-max text-sm font-medium leading-5 text-gray-500">WORK</h2>
                    <h2
                      className={`w-full text-sm font-normal leading-5 text-gray-900 break-normal ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div className="flex flex-col">
                    <h2 className="w-max text-sm font-medium leading-5 text-gray-500">EDUCATION</h2>
                    <h2 className="w-max text-sm font-normal leading-5 text-gray-900 break-words">
                      {input.education}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            {/* <footer className='flex pt-[2rem] lg:pt-[5rem] gap-4 md:gap-4 w-[40%] justify-center mx-[3.4rem] md:mx-[3.5rem]  lg:mx-[4.1rem] '> */}
            <footer className="flex w-full justify-center gap-4 pt-[2rem] pb-[4rem]  md:gap-8 lg:pt-[5rem]">
              {loaderData?.socialMedia?.facebookLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.facebookLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="" className="h-auto w-9 md:w-11" />
                </a>
              ) : null}
              {loaderData?.socialMedia?.twitterLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.twitterLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" className="h-auto w-9 md:w-11" />
                </a>
              ) : null}
              {loaderData?.socialMedia?.youtubeLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.youtubeLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube} alt="" className="h-auto w-9 md:w-11" />
                </a>
              ) : null}
            </footer>

            <div className="-mt-10 pb-10">
              <PoweredBy />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
