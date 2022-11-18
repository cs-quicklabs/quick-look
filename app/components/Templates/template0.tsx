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
  mode,
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
              className={`relative pl-[1rem] sm:pl-[7rem] md:pl-[11rem] ${
                loaderData?.profileImage?.primaryImage ||
                primaryRestore === true
                  ? 'top-[-4rem]'
                  : 'top-[6rem]'
              } ${mode === 'mobile' ? 'small:pl-[5.5rem] medium:pl-[8.5rem] mediumLaptop:pl-[14.5rem] largeLaptop:pl-[10.5rem]' : 'small:pl-[8.5rem] SmMedium:pl-[22.5rem] med:pl-[14.5rem] medium:pl-[12.5rem] largeLaptop:pl-[10.5rem]'}`}
            >
              {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  className={`h-[9rem] w-[9rem] rounded-full shadow-lg  shadow-white md:h-[8rem] md:w-32 ${
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
          <div className={`m-auto px-[10.5rem] pt-1 smallScreen:px-[16.5rem] mediumScreen:px-[19.5rem] ${mode === 'mobile' ? 'small:px-[14.5rem] medium:px-[17.5rem] mediumLaptop:px-[23.5rem] largeLaptop:px-[20.5rem]' : 'small:px-[17.5rem] SmMedium:px-[31.5rem] med:px-[23.5rem] medium:px-[21.5rem] largeLaptop:px-[19.5rem]'}`} >
            <h1 className="w-max text-2xl font-bold leading-8 text-gray-900 ">
              {loaderData?.firstname} {loaderData?.lastname}
            </h1>
            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3 className="w-max break-normal text-gray-500">
                {input.occupation}{' '}
                {input.location && input.occupation ? `in` : ''}{' '}
                {input.location}
              </h3>
            ) : (
              <span></span>
            )}
          </div>

          <div
            className={`w-[100%] pl-[2rem] pr-[13rem] xs:pr-[15rem] smallScreen:pl-[2rem] smallScreen:pr-[14rem] mediumScreen:pr-[12rem]  ${
              mode === 'mobile'
                ? 'small:w-[91%] small:pr-[12rem] small:pl-[5rem] med:pr-[2rem] medium:pl-[6rem] mediumLaptop:pl-[14rem] largeLaptop:pl-[9rem] largeLaptop:pr-[2rem]'
                : 'small:pr-[14rem] small:pl-[7rem] SmMedium:pr-[15rem] SmMedium:pl-[20rem] SmMedium:flex-row med:pl-[13rem] med:pr-[8rem] medium:pl-[12rem] medium:pr-[7rem] mediumLaptop:pl-[8rem] mediumLaptop:pr-[6rem] largeLaptop:pr-[8rem]'
            }`}
          >
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

            <div className="m-auto  flex flex-wrap pt-[2.5rem]">
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
            <div className=''>
            <PortfolioAddon loaderData={loaderData} mode={mode} />
            </div>
            

            <div className="flex flex-col justify-between">
              <div className="flex  pt-[2rem] ">
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className="flex flex-col">
                    <h2 className="w-max text-sm font-medium leading-5 text-gray-500">
                      WORK
                    </h2>
                    <h2 className={`w-[65%] text-sm font-normal leading-5 text-gray-900 break-normal ${mode === 'mobile' ? '' : ''}`} >
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
                    <h2 className="w-max text-sm font-normal leading-5 text-gray-900 break-normal">
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
