import bgimage from '../../../assets/images/bg.png'
import defaultimg from '../../../assets/images/profile.png'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import Spotlightbtn from './addOns/Spotlightbtn'
import BannerAddOn from './addOns/Banner'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'
import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import PoweredBy from '../Common/PoweredBy'

export default function Template9({
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
  mode,
}: any) {
  const Location = useLocation()
  const nav = Location.pathname.includes(`${loaderData.username}`)

  return (
    <>
      {loaderData?.supportBanner?.bannerText && (
        <BannerAddOn mode={mode} loaderData={loaderData} />
      )}
      <div
        className={`mb-[3rem] flex h-full ${
          nav ? 'w-screen' : ''
        }  items-center justify-center`}
      >
        <div
          className={`mb-[5rem] flex items-center justify-center bg-gray-900 rounded-2xl px-[2rem] ${
            mode == 'mobile'
              ? 'lg:w-[28rem] medium:w-[32rem] mediumLaptop:w-[38rem]'
              : 'w-[90%] md:w-[40rem] lg:w-[35rem] medium:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]'
          } ${nav ? 'mt-[8rem]' : 'mt-[5rem]'}`}
        >
          <div className="flex flex-col">
            <div
              className={`relative flex items-center justify-center ${
                mode == 'mobile' ? 'top-[-3rem]' : 'top-[-5rem]'
              }`}
            >
              {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
                <img
                  className={`rounded-full object-cover ${
                    mode == 'mobile'
                      ? 'h-[10rem] w-[10rem]'
                      : 'h-[10rem] w-[10rem] md:h-[14rem] md:w-[14rem]'
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
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                secondaryRestore == false &&
                loaderData?.profileImage?.secondaryImage == ''
                  ? 'mt-[3rem]'
                  : 'mt-[-3rem]'
              }`}
            >
              <h1
                className={`w-fit px-4 font-bold leading-8 text-gray-50 ${
                  mode == 'mobile' ? 'text-2xl' : 'text-2xl md:text-4xl lg:leading-10 lg:font-extrabold'
                }`}
              >
                {loaderData?.firstname} {loaderData?.lastname}
              </h1>
              {loaderData?.profileInfo?.occupation ||
              input.occupation ||
              input.location ||
              loaderData?.profileInfo?.location ? (
                <h3
                  className={`break-normal mt-1 text-gray-50 ${
                    mode == 'mobile'
                      ? 'w-fit px-4 text-xl'
                      : 'w-fit px-4 text-xl md:text-2xl lg:leading-8 lg:font-medium'
                  }`}
                >
                  {input.occupation}{' '}
                  {input.location && input.occupation ? `in` : ''}{' '}
                  {input.location}
                </h3>
              ) : (
                <span></span>
              )}

              <div className={`${
                  mode === 'mobile' ? 'lg:w-[24rem] medium:w-[28rem] mediumLaptop:w-[33rem]' : ''
                }`}>
              <div
                className={`${
                  mode === 'mobile' ? '' : ''
                }`}
              >
                {loaderData?.spotlightButton?.toggleSpotlight && (
                  <Spotlightbtn loaderData={loaderData} />
                )}
              </div>
              <div
                className={`${
                  mode === 'mobile' ? '' : ''
                }`}
              >
                {loaderData?.spotlightButton?.toggleSpotlight && (
                  <AdditionalLinksAddOn loaderData={loaderData} />
                )}
              </div>
              <div className="flex flex-wrap pt-[1rem]">
                {' '}
                <pre
                  className={`flex whitespace-pre-wrap break-normal font-sans text-base font-normal leading-5 text-gray-100 `}
                >
                  {input?.description?.trim()}{' '}
                </pre>{' '}
              </div>
              <div className="]">
                {loaderData?.testimonial?.testimonialText && (
                  <TestimonialAddOn
                    loaderData={loaderData}
                    testimonialText={loaderData?.testimonial?.testimonialText}
                    testimonialBy={loaderData?.testimonial?.testimonialBy}
                  />
                )}
              </div>

              {loaderData?.video?.videoLink && (
                <div className=''>
                  <VideoAddOn
                  loaderData={loaderData}
                  videoLink={loaderData?.video?.videoLink}
                />
                </div>
              )}
              {/* <div className="flex w-[20rem] items-center justify-center md:w-[32rem] md:pr-0 lg:px-0 lg:pl-0"> */}
              <div>
                <PortfolioAddon mode={mode} loaderData={loaderData} />
              </div>
              <div className="mt-[2rem] flex flex-col gap-6">
                <div className="flex items-center justify-center gap-4">
                  {input.company && (
                    <BriefcaseIcon className="h-6 w-6 text-gray-100" />
                  )}
                  <h2 className="w-max break-normal  text-base font-normal leading-5 text-gray-100">
                    {input.company}{' '}
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-4">
                  {input.education && (
                    <AcademicCapIcon className="h-6 w-6 text-gray-100" />
                  )}
                  <h2 className="w-max break-normal text-base font-normal leading-5 text-gray-100">
                    {input.education}{' '}
                  </h2>
                </div>
              </div>

              <footer
                className={` flex w-full justify-center gap-4 pb-[5rem] pt-[2rem] md:gap-8   ${
                  mode === 'mobile' ? '' : ''
                }  ${nav ? '' : ''} ${
                  loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'
                }`}
              >
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

              <div className='py-5 -mt-4 text-gray-50'>
                <PoweredBy/>
              </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
