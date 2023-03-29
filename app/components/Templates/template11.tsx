import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from '@remix-run/react'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'
import PoweredBy from '../Common/PoweredBy'

export default function Template11({
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
      {loaderData?.supportBanner?.toggleBanner && (
        <BannerAddOn loaderData={loaderData} />
      )}

      <div
        className={`flex overflow-auto scrollbar-hide font-inter bg-white overflow-none pb-[3rem] ${
          nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'
        } ${mode === 'mobile' ? 'flex-col' : 'flex-col xl:gap-[4rem]'} ${
          nav ? '' : ''
        }`}
      >
        <div
          className={`flex-shrink-0 flex flex-col relative ${
            mode === 'mobile' ? 'w-full ' : ''
          } ${nav ? '' : ''}`}
        >
          <div className="">
            {primaryRestore || loaderData?.profileImage?.primaryImage ? (
              <img
                src={
                  primaryRestore
                    ? DefaultCoverPicture
                    : loaderData?.profileImage?.primaryImage
                }
                className={`absolute w-[100%] object-cover ${
                  (mode === 'mobile' &&
                    loaderData?.socialMedia?.facebookLink) ||
                  (mode === 'mobile' && loaderData?.socialMedia?.twitterLink) ||
                  (mode === 'mobile' && loaderData?.socialMedia?.youtubeLink)
                    ? 'lg:h-[26rem] xl:h-[27rem]'
                    : mode === 'mobile'
                    ? 'lg:h-[23rem]'
                    : ''
                }
              ${
                (mode != 'mobile' && loaderData?.socialMedia?.facebookLink) ||
                (mode != 'mobile' && loaderData?.socialMedia?.twitterLink) ||
                (mode != 'mobile' && loaderData?.socialMedia?.youtubeLink)
                  ? 'h-[20rem] lg:h-[26rem] xl:h-[16rem]'
                  : mode != 'mobile'
                  ? 'h-[17rem] sm:h-[17rem] lg:h-[23rem] xl:h-[16rem]'
                  : ''
              }`}
                alt="cover"
                loading="lazy"
              />
            ) : null}
          </div>
          <div className={`flex flex-col items-center`}>
            <div
              className={`absolute flex flex-col items-center ${
                primaryRestore || loaderData?.profileImage?.primaryImage
                  ? ` ${
                      mode === 'mobile'
                        ? 'top-[1rem]'
                        : 'top-[1rem] xl:top-[99px] xl:left-[60px] xl:pt-[11rem]'
                    }`
                  : 'bottom-[-11rem]'
              } ${
                mode === 'mobile'
                  ? ''
                  : 'xl:bg-white xl:h-[40rem] xl:w-[20rem] xl:px-[1rem] xl:rounded-md xl:shadow-md'
              }`}
            >
              {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
                <img
                  loading="lazy"
                  className={`rounded-full object-cover w-[7rem] h-[7rem] ${
                    mode === 'mobile'
                      ? 'lg:w-[11rem] lg:h-[11rem]'
                      : 'lg:pt-[0rem] lg:w-[11rem] lg:h-[11rem] xl:mt-[-9rem] mediumLaptop:w-[11rem] mediumLaptop:h-[11rem]'
                  } ${nav ? '' : ''} ${
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

              <h4
                className={`text-white text-center text-xl leading-8 font-semibold pt-[1rem] ${
                  mode === 'mobile'
                    ? ''
                    : 'xl:text-black xl:text-4xl xl:font-extrabold xl:leading-10 '
                }  ${nav ? '' : ''}`}
              >
                {loaderData?.firstname} {loaderData?.lastname}
              </h4>

              {loaderData?.profileInfo?.occupation ||
              input.occupation ||
              input.location ||
              loaderData?.profileInfo?.location ? (
                <h3
                  className={`mt-1 text-white text-center break-normal text-xs leading-5 font-normal lg:text-base ${
                    mode === 'mobile'
                      ? ''
                      : 'xl:w-[14rem] xl:text-gray-500 mediumLaptop:w-full xl:text-2xl xl:leading-none xl:font-normal xl:mt-1 xl:px-[0.75rem]'
                  }  ${nav ? 'lg:w-full' : ''} `}
                >
                  {input.occupation}{' '}
                  {input.location && input.occupation ? `in` : ''}{' '}
                  {input.location}
                </h3>
              ) : (
                <span></span>
              )}

              <div
                className={`pb-[1rem] w-screen px-[1rem] ${
                  mode === 'mobile'
                    ? 'lg:px-[18rem] xl:px-[25rem] medium:px-[27rem]'
                    : 'xl:hidden'
                } ${
                  nav ? 'lg:px-[2rem]' : mode != 'mobile' ? 'lg:px-[14rem]' : ''
                }`}
              >
                <div
                  className={`flex pt-4 justify-between ${
                    mode === 'mobile' ? '' : ''
                  }`}
                >
                  {loaderData?.profileInfo?.company || input.company ? (
                    <div
                      className={`flex flex-col ${
                        mode === 'mobile' ? '' : 'xl:flex-row'
                      }`}
                    >
                      <h2
                        className={`text-white text-xs leading-5 font-normal w-max ${
                          mode === 'mobile' ? '' : 'xl:hidden'
                        }`}
                      >
                        Work
                      </h2>
                      <h2
                        className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${
                          mode === 'mobile' ? '' : 'xl:block'
                        }`}
                      >
                        <BriefcaseIcon />
                      </h2>
                      <h2
                        className={`text-white text-xs leading-5 font-normal w-max ${
                          mode === 'mobile'
                            ? 'lg:text-sm'
                            : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem] '
                        } ${
                          nav
                            ? 'med:w-max'
                            : mode != 'mobile'
                            ? 'med:w-[65%]'
                            : ''
                        } `}
                      >
                        {input.company}
                      </h2>
                    </div>
                  ) : (
                    <span></span>
                  )}
                  {loaderData?.profileInfo?.education || input.education ? (
                    <div
                      className={`flex flex-col ${
                        mode === 'mobile' ? '' : 'xl:flex-row'
                      } ${nav ? '' : ''}`}
                    >
                      <h2
                        className={`text-white text-xs leading-5 font-normal w-max  ${
                          mode === 'mobile' ? '' : 'xl:hidden'
                        }`}
                      >
                        Education
                      </h2>
                      <h2
                        className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${
                          mode === 'mobile' ? '' : 'xl:block'
                        }`}
                      >
                        <AcademicCapIcon />
                      </h2>
                      <h2
                        className={`text-white w-max text-xs leading-5 font-normal break-normal  ${
                          mode === 'mobile'
                            ? 'lg:text-sm'
                            : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'
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

              <footer
                className={`flex w-full gap-4 md:gap-8 justify-center pb-[3rem] xl:pt-6 ${
                  nav ? '' : ''
                } `}
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
          </div>
        </div>

        {/* h-[20rem] sm:h-[22rem] lg:h-[28rem] xl:h-[16rem]' */}

        <div
          className={`flex flex-col justify-center items-center w-full
      ${mode === 'mobile' ? '' : 'largeLaptop:w-[50rem]'}
      ${
        nav
          ? 'xl:w-[40rem] med:w-[45rem] medium:w-[45rem] mediumLaptop:w-[50rem] largeLaptop:w-[55rem]'
          : mode != 'mobile'
          ? 'xl:w-[35rem] med:w-[40rem] medium:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]'
          : ''
      } 
      ${
        mode === 'mobile' &&
        (loaderData?.socialMedia?.facebookLink ||
          loaderData?.socialMedia?.twitterLink ||
          loaderData?.socialMedia?.youtubeLink)
          ? 'lg:mt-[28rem] xl:mt-[29rem]'
          : mode === 'mobile'
          ? 'lg:mt-[27rem]'
          : mode != 'mobile' ||
            loaderData?.socialMedia?.facebookLink ||
            mode != 'mobile' ||
            loaderData?.socialMedia?.twitterLink ||
            mode != 'mobile' ||
            loaderData?.socialMedia?.youtubeLink
          ? 'mt-[21rem] lg:mt-[28rem] xl:mt-[16rem] xl:ml-[28rem]'
          : mode != 'mobile'
          ? 'mt-[21rem] lg:mt-[27rem] xl:mt-[16rem]'
          : ''
      } 
      `}
        >
          {loaderData?.spotlightButton?.toggleSpotlight && (
            <div className="">
              <Spotlightbtn loaderData={loaderData} />
            </div>
          )}

          {loaderData?.spotlightButton?.toggleSpotlight && (
            <AdditionalLinksAddOn loaderData={loaderData} />
          )}

          <div
            className={`px-[1rem] ${
              mode === 'mobile' ? 'lg:px-[2rem] xl:px-[3rem]' : 'lg:px-[2rem]'
            }`}
          >
            <pre
              className={`text-gray-700 text-xs leading-5 font-normal break-normal font-sans flex text-justify whitespace-pre-wrap lg:text-base ${
                mode === 'mobile' ? '' : ''
              } ${nav ? '' : ''}`}
            >
              {input?.description?.trim()}
            </pre>

            <div
              className={`pb-[1rem] pr-[3rem] w-full hidden ${
                mode === 'mobile' ? 'xl:mt-[-1rem]' : 'xl:pl-[0rem] xl:block'
              } `}
            >
              <div
                className={`flex pt-4 justify-between ${
                  mode === 'mobile' ? '' : ''
                } ${nav ? '' : ''}`}
              >
                {loaderData?.profileInfo?.company || input.company ? (
                  <div
                    className={`flex flex-col ${
                      mode === 'mobile' ? '' : 'xl:flex-row'
                    }`}
                  >
                    <h2
                      className={`text-white text-xs leading-5 font-normal w-max ${
                        mode === 'mobile' ? '' : 'xl:hidden'
                      }`}
                    >
                      Work
                    </h2>
                    <h2
                      className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${
                        mode === 'mobile' ? '' : 'xl:block'
                      }`}
                    >
                      <BriefcaseIcon />
                    </h2>
                    <h2
                      className={`text-white text-xs leading-5 font-normal w-max ${
                        mode === 'mobile'
                          ? 'lg:text-sm'
                          : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'
                      } ${
                        nav
                          ? 'xl:w-max med:w-max'
                          : mode != 'mobile'
                          ? ' xl:w-[65%] med:w-[65%] medium:w-max'
                          : ''
                      }`}
                    >
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div
                    className={`flex flex-col ${
                      mode === 'mobile' ? '' : 'xl:flex-row'
                    } ${nav ? '' : ''}`}
                  >
                    <h2
                      className={`text-white text-xs leading-5 font-normal w-max  ${
                        mode === 'mobile' ? '' : 'xl:hidden'
                      }`}
                    >
                      Education
                    </h2>
                    <h2
                      className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${
                        mode === 'mobile' ? '' : 'xl:block'
                      }`}
                    >
                      <AcademicCapIcon />
                    </h2>
                    <h2
                      className={`text-white w-max text-xs leading-5 font-normal break-normal  ${
                        mode === 'mobile'
                          ? 'lg:text-sm'
                          : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'
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
                />
              )}
            </div>

            <div className="">
              <PortfolioAddon loaderData={loaderData} />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <PoweredBy />
      </div>
    </>
  )
}
