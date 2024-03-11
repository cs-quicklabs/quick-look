import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import Background5 from '../../../assets/images/templates/template5.png'
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

export default function Template7({
  mode,
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
}: any) {
  const Location = useLocation()
  const nav = Location.pathname.includes(`${loaderData.username}`)
  {
    const myStyle = {
      backgroundImage: `url(${Background5})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    return (
      <>
        {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
        <div
          className={`flex overflow-auto scrollbar-hide ml-[0.1rem] pb-[3rem] flex-col items-center justify-center pt-[1rem] ${
            nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)] '
          } ${
            mode === 'mobile' ? 'lg:w-full]' : 'lg:pt-[6rem]'
          }  justify-center bg-no-repeat object-cover overflow-none`}
          style={myStyle}
        >
          <div className="flex flex-col items-center justify-center">
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                loading="lazy"
                className={`mb-3 w-60 h-60 rounded-full object-cover ${
                  loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
                } ${nav ? ' ' : ''} `}
                src={
                  secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage
                }
                alt="profile"
              />
            ) : null}

            <h5
              className={`mb-0 lg:mb-[0.375rem] text-gray-800 text-xl lg:text-[36px] leading-8 font-extrabold lg:leading-10 text-center lg:text-4xl`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h5>

            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3
                className={`text-xs leading-5 lg:text-2xl lg:leading-8 font-normal text-gray-600 break-normal text-center ${
                  mode === 'mobile' ? '' : ''
                } `}
              >
                {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
              </h3>
            ) : (
              <span></span>
            )}
          </div>

          <div
            className={`w-[21rem] sm:w-[32rem] ${
              mode === 'mobile'
                ? 'lg:w-[25rem] med:w-[32rem] mediumLaptop:w-[38rem] largeLaptop:w-[45rem]'
                : 'xl:w-[35rem] med:w-[40rem] medium:w-[45rem] mediumLaptop:w-[50rem] largeLaptop:w-[55rem]'
            } ${nav ? '' : ''}`}
          >
            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <Spotlightbtn loaderData={loaderData} />
              )}
            </div>

            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <AdditionalLinksAddOn loaderData={loaderData} />
              )}
            </div>

            <div className={`mt-[1.5rem] ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <pre
                className={`text-gray-700 text-base leading-5 font-normal font-sans flex items-center justify-center text-center whitespace-pre-wrap ${
                  mode === 'mobile' ? '' : ''
                } ${nav ? '' : ''}`}
              >
                {input?.description?.trim()}
              </pre>
            </div>

            <div
              className={`flex items-center justify-center  ${mode === 'mobile' ? '' : ''} ${
                nav ? '' : ''
              }`}
            >
              <div className={`flex flex-col  items-center justify-center ${nav ? '' : ''}`}>
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className="flex-1 pt-[1.5rem]">
                    <h2 className="text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem]">
                      <BriefcaseIcon />
                    </h2>
                    <h2 className="text-gray-600 text-base leading-5 font-normal break-normal">
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div className="flex-1 pt-[1.5rem]">
                    <h2 className="text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem]">
                      <AcademicCapIcon />
                    </h2>
                    <h2 className="text-gray-600 text-base leading-5 font-normal break-normal">
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
                />
              )}
            </div>

            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && (
                <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
              )}
            </div>

            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData} />
            </div>

            <footer
              className={`flex w-full gap-4 md:gap-8 items-center justify-center ${
                mode === 'mobile' ? '' : ''
              }  ${nav ? '' : ''} ${loaderData?.portfolioImage[0] ? 'pt-[1.5rem]' : 'pt-[0rem]'}`}
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

            <div className="py-5">
              <PoweredBy />
            </div>
          </div>
        </div>
      </>
    )
  }
}
