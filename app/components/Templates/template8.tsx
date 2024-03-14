import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from '@remix-run/react'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import PortfolioAddon from './addOns/portfolio'
import PoweredBy from '../Common/PoweredBy'

export default function Template8({
  mode,
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
}: any) {
  const Location = useLocation()
  const nav = Location.pathname.includes(`${loaderData.username}`)
  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
      <div
        className={`flex overflow-auto scrollbar-hide flex-col-reverse bg-purple-50 justify-center items-center bg-no-repeat object-cover overflow-none ${
          mode === 'mobile'
            ? '  flex-col'
            : ' flex-col xl:items-start xl:pt-[5rem] xl:flex-row '
        } ${
          nav
            ? 'min-h-[calc(96.5vh+50px)] items-center justify-center xl:items-start'
            : 'min-h-[calc(95.5vh+50px)] '
        } `}
      >
        <div
          className={`pt-[1rem] w-[full] px-[2rem] pb-[3rem] ${
            mode === 'mobile'
              ? 'small:w-[29rem] med:w-[38rem] medium:w-[41rem] mediumLaptop:w-[53rem] largeLaptop:w-[64rem]'
              : 'lg:pt-[1.5rem] lg:px-[4rem] lg:mt-[0rem] xl:pl-[2rem] xl:pr-[4rem] xl:bg-purple-50 xl:w-[33rem] medium:w-[40rem] mediumLaptop:w-[42rem] largeLaptop:w-[46rem]'} 
          } ${
            nav
              ? 'lg:w-full px-[2rem] SmMedium:w-[30rem] med:w-[35rem] medium:w-[40rem] mediumLaptop:w-[43rem] largeLaptop:w-[46rem]'
              : mode != 'mobile'
              ? 'lg:w-[35rem] med:w-[30rem]'
              : ''
          }`}
        >
          {loaderData?.profileInfo?.occupation === '' &&
          !loaderData?.spotlightButton &&
          !loaderData?.portfolioImage[0] &&
          loaderData?.testimonial?.testimonialText === '' &&
          loaderData?.video?.videoLink === '' &&
          !input?.description ? (
            <h4
              className={`text-xl leading-8 font-extrabold sm:ml-[-7rem]  ${
                mode === 'mobile' ? 'xl:text-[36px] xl:leading-10' : 'lg:text-[36px] lg:leading-10 '
              } ${nav ? '' : ''}`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h4>
          ) : (
            <h4
              className={`text-xl leading-8 font-extrabold  ${
                mode === 'mobile' ? 'xl:text-[36px] xl:leading-10' : 'lg:text-[36px] lg:leading-10 '
              } ${nav ? '' : ''}`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h4>
          )}

          {loaderData?.profileInfo?.occupation ||
          input.occupation ||
          input.location ||
          loaderData?.profileInfo?.location ? (
            <h3
              className={` text-gray-500 break-normal text-xs leading-5 font-medium ${
                mode === 'mobile'
                  ? 'xl:leading-8 xl:text-gray-600 xl:text-2xl lg:mt-[0.375rem]'
                  : 'lg:leading-8 lg:text-gray-600 lg:mt-[0.375rem] lg:text-2xl'
              }  ${nav ? '' : ''} `}
            >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3>
          ) : (
            <span></span>
          )}

          <div>
            <div className={`flex ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''} justify-center items-center`}>
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <Spotlightbtn loaderData={loaderData} />
              )}
            </div>
          </div>

          <div className={`flex ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && (
              <AdditionalLinksAddOn loaderData={loaderData} />
            )}
          </div>

          <div className="mt-[1rem]">
            <pre
              className={`text-gray-700 text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${
                mode === 'mobile' ? '' : ''
              } ${nav ? '' : ''}`}
            >
              {input?.description?.trim()}
            </pre>
          </div>

          <div className={`flex flex-col ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            <div
              className={`flex flex-col gap-2 pt-[1.5rem] ${
                mode === 'mobile' ? ' ' : 'xl:flex-row xl:justify-between'
              } ${nav ? '' : ''}`}
            >
              {loaderData?.profileInfo?.company || input.company ? (
                <div className={`flex-1 ${mode === 'mobile' ? ' ' : ''} ${nav ? '' : ''}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2
                    className={`text-gray-600 text-xs lg:text-base leading-5 font-normal break-normal ${
                      mode === 'mobile' ? 'lg:mt-[-0.25rem] ' : 'xl:mt-[-0.25rem]'
                    }`}
                  >
                    {input.company}
                  </h2>
                </div>
              ) : (
                <span></span>
              )}
              {loaderData?.profileInfo?.education || input.education ? (
                <div className={`flex-1 mt-[2rem]  ${mode === 'mobile' ? ' ' : 'xl:mt-0 '}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2
                    className={`text-gray-600 text-xs lg:text-base leading-5 font-normal break-normal ${
                      mode === 'mobile' ? ' lg:mt-[-0.25rem]' : 'xl:mt-[-0.25rem] '
                    }`}
                  >
                    {input.education}
                  </h2>
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>

          <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.testimonial?.testimonialText && (
              <TestimonialAddOn
                testimonialText={loaderData?.testimonial?.testimonialText}
                testimonialBy={loaderData?.testimonial?.testimonialBy}
                loaderData={loaderData}
              />
            )}
          </div>

          <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && (
              <VideoAddOn
                videoLink={loaderData?.video?.videoLink}
                loaderData={loaderData}
                mode={mode}
              />
            )}
          </div>

          <div
            className={`${loaderData?.portfolioImage[0] ? 'pt-[0rem]' : 'pt-[0rem]'} ${
              mode === 'mobile' ? '' : ''
            } ${nav ? '' : ''}`}
          >
            <PortfolioAddon loaderData={loaderData} />
          </div>

          <footer
            className={`flex w-full gap-4 md:gap-8  justify-start ${mode === 'mobile' ? '' : ''}  ${
              nav ? '' : ''
            } ${loaderData?.portfolioImage[0] ? 'pt-[1rem]' : 'pt-[0rem]'}`}
          >
            {loaderData?.socialMedia?.facebookLink ? (
              <a
                href={`https://${loaderData?.socialMedia?.facebookLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" className="w-9 md:w-11 h-auto" />
              </a>
            ) : null}
            {loaderData?.socialMedia?.twitterLink ? (
              <a
                href={`https://${loaderData?.socialMedia?.twitterLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
              </a>
            ) : null}
            {loaderData?.socialMedia?.youtubeLink ? (
              <a
                href={`https://${loaderData?.socialMedia?.youtubeLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />
              </a>
            ) : null}
          </footer>
        </div>

        <div className={`py-[2rem] ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
            <img
              loading="lazy"
              className={`rounded-lg object-cover w-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] ${
                mode === 'mobile'
                  ? 'lg:w-[25rem] lg:h-[25rem] medium:w-[30rem] medium:h-[35rem] mediumLaptop:w-[30rem] mediumLaptop:h-[35rem] largeLaptop:w-[35rem] largeLaptop:h-[40rem]'
                  : 'xl:w-[25rem] xl:h-[25rem] medium:w-[30rem] medium:h-[35rem] mediumLaptop:w-[30rem] largeLaptop:w-[35rem] largeLaptop:h-[40rem]'
              } ${
                loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
              } ${nav ? 'SmMedium:w-[25rem] med:w-[30rem] med:h-[30rem] medium:w-[30rem]' : ''} `}
              src={
                secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage
              }
              alt="profile"
            />
          ) : null}
        </div>
      </div>

      <div className="-mt-8">
        <PoweredBy />
      </div>
    </>
  )
}
