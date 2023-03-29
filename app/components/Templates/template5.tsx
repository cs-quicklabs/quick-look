import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import Background6 from '../../../assets/images/templates/template6Vector.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from '@remix-run/react'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
import PortfolioAddon from './addOns/portfolio'
import PoweredBy from '../Common/PoweredBy'

export default function Template5({
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
      backgroundImage: `url(${Background6})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    return (
      <>
        <div
          className={`relative ${mode === 'mobile' ? '' : ''} ${
            nav ? '' : ' '
          }`}
        >
          {loaderData?.supportBanner?.toggleBanner && (
            <BannerAddOn loaderData={loaderData} />
          )}
        </div>

        <div
          className={`flex flex-col-reverse items-end ml-[0.1rem] pb-[3rem] ${
            mode === 'mobile'
              ? ''
              : 'xl:flex-row xl:items-start xl:justify-between'
          } ${nav ? '' : ' '}`}
        >
          <div
            className={`w-full px-[2rem] mt-[3rem] h-full ${
              mode === 'mobile'
                ? 'lg:px-[3rem]'
                : 'xl:mt-[10rem] medium:pl-[3rem]  mediumLaptop:pl-[5rem] '
            } ${
              nav
                ? 'xl:w-[53%] mediumLaptop:w-[50rem] largeLaptop:w-[55rem]'
                : mode != 'mobile'
                ? 'xl:w-[53%] mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'
                : ''
            }`}
          >
            <h4
              className={`text-xl leading-8 font-semibold text-black lg:text-4xl lg:leading-10 lg:font-extrabold lg:text-gray-800 ${
                mode === 'mobile' ? '' : ''
              } ${nav ? '' : ''}`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h4>
            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3
                className={`text-xs leading-5 font-normal text-gray-500 lg:text-2xl lg:leading-8 lg:font-medium lg:text-gray-600 ${
                  mode === 'mobile' ? '' : ''
                }  ${nav ? '=' : ''} `}
              >
                {input.occupation}{' '}
                {input.location && input.occupation ? `in` : ''}{' '}
                {input.location}
              </h3>
            ) : (
              <span></span>
            )}

            <div
              className={`flex ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}
            >
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <Spotlightbtn loaderData={loaderData} />
              )}
            </div>

            <div
              className={`flex ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}
            >
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <AdditionalLinksAddOn loaderData={loaderData} />
              )}
            </div>

            <div className="mt-1">
              <pre
                className={`text-gray-700 text-xs lg:text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${
                  mode === 'mobile' ? '' : ''
                } ${nav ? '' : ''}`}
              >
                {input?.description?.trim()}
              </pre>
            </div>

            <div>
              <div
                className={`flex flex-col pt-4 ${
                  mode === 'mobile' ? '' : 'xl:flex-row lg:justify-between'
                }  ${nav ? '' : ''}`}
              >
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className={`flex  ${mode === 'mobile' ? '' : ''}`}>
                    <h2
                      className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] lg:text-gray-800 ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      <BriefcaseIcon />
                    </h2>

                    <h2
                      className={`text-gray-600 w-max text-xs leading-5 lg:text-base lg:leading-6 font-normal break-normal ${
                        mode === 'mobile'
                          ? ''
                          : 'lg:mt-[-0.25rem] xl:w-[65%] largeLaptop:w-max'
                      }  ${nav ? '' : ''}`}
                    >
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div
                    className={`flex mt-[0.75rem] ${
                      mode === 'mobile' ? '' : ' xl:mt-0'
                    }`}
                  >
                    <h2
                      className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] lg:text-gray-800 ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      <AcademicCapIcon />
                    </h2>
                    <h2
                      className={`text-gray-600 w-max text-xs leading-5 lg:text-base lg:leading-6 font-normal break-normal ${
                        mode === 'mobile' ? '' : 'lg:mt-[-0.25rem]'
                      }  ${nav ? '' : ''}`}
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
                />
              )}
            </div>

            <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData} />
            </div>

            <footer
              className={`flex w-full gap-4 md:gap-8 justify-start  ${
                nav ? '' : ''
              } ${loaderData?.portfolioImage[0] ? 'pt-[2rem]' : 'pt-[0rem]'}`}
            >
              {loaderData?.socialMedia?.facebookLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.facebookLink}`}
                  target="_blank" rel="noreferrer"
                >
                  <img src={facebook} alt="" className="w-9 md:w-11 h-auto" />
                </a>
              ) : null}
              {loaderData?.socialMedia?.twitterLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.twitterLink}`}
                  target="_blank" rel="noreferrer"
                >
                  <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
                </a>
              ) : null}
              {loaderData?.socialMedia?.youtubeLink ? (
                <a
                  href={`https://${loaderData?.socialMedia?.youtubeLink}`}
                  target="_blank" rel="noreferrer"
                >
                  <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />
                </a>
              ) : null}
            </footer>
          </div>

          <div
            className={`flex py-[2rem] pr-4 sm:w-[33rem] md:w-[38rem] ${
              mode === 'mobile'
                ? 'lg:w-[28rem] xl:w-[26rem] med:w-[26rem] medium:w-[36rem] largeLaptop:w-[38rem]'
                : 'lg:w-[28rem] xl:h-[100vh] xl:pt-[4rem] xl:w-[26rem] medium:w-[31rem] mediumLaptop:w-[35rem] largeLaptop:w-[38rem]'
            } ${nav ? 'xl:w-[33rem]' : ''}`}
            style={myStyle}
          >
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                loading="lazy"
                className={`relative rounded-full shadow-xl object-cover h-[20rem] w-[20rem] sm:h-[30rem] sm:w-[30rem] md:h-[35rem] md:w-[35rem] ${
                  mode === 'mobile'
                    ? 'lg:h-[25rem] lg:w-[25rem] xl:w-[23rem] xl:h-[23rem] medium:w-[28rem] medium:h-[28rem] mediumLaptop:w-[32rem] mediumLaptop:h-[32rem] largeLaptop:h-[35rem] largeLaptop:w-[35rem]'
                    : ' lg:h-[25rem] lg:w-[25rem] xl:w-[23rem] xl:h-[23rem] medium:w-[28rem] medium:h-[28rem] mediumLaptop:w-[32rem] mediumLaptop:h-[32rem] largeLaptop:w-[35rem] largeLaptop:h-[35rem]'
                } ${nav ? 'SmMedium:w-[30rem] SmMedium:h-[30rem]' : ''} ${
                  loaderData?.profileImage?.secondaryImage ||
                  secondaryRestore === true
                    ? ''
                    : ''
                }  `}
                src={
                  secondaryRestore === true
                    ? defaultimg
                    : loaderData?.profileImage?.secondaryImage
                }
                alt="profile"
              />
            ) : null}
          </div>
        </div>
        <div className="py-5">
          <PoweredBy />
        </div>
      </>
    )
  }
}
