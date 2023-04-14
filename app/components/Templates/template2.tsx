import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import Background3 from '../../../assets/images/templates/template3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/Testimonial'
import VideoAddOn from './addOns/Video'
import { useLocation } from '@remix-run/react'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import PortfolioAddon from './addOns/Portfolio'
import PoweredBy from '../Common/PoweredBy'
export default function Template2({
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
      backgroundImage: `url(${Background3})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    return (
      <>
        {loaderData?.supportBanner?.toggleBanner && (
          <BannerAddOn loaderData={loaderData} mode={mode} />
        )}
        <div
          className={`ml-[0.1rem] flex overflow-auto scrollbar-hide justify-center items-center pb-[3rem] pt-[1.5rem] ${nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'
            } ${mode === 'mobile'
              ? 'flex-col'
              : 'flex-col xl:flex-row xl:gap-[0rem] xl:items-start xl:justify-around'
            } ${nav ? '' : ''}`}
          style={myStyle}
        >
          <div
            className={`pb-[1rem] flex-shrink-0 ${mode === 'mobile' ? 'xl:pl-[1rem]  xl:mt-[1.5em]' : 'xl:mt-[5.625rem]'
              } ${nav ? '' : ''}`}
          >
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                loading="lazy"
                className={`rounded-lg object-cover h-auto w-[16rem] sm:h-[20rem] sm:w-[20rem] md:h-[24rem] md:w-[22rem] ${mode === 'mobile'
                  ? 'lg:w-[22rem] lg:h-[24rem] xl:h-[20rem] xl:w-[18rem] med:w-[25rem] med:h-[28rem] mediumLaptop:h-[32rem] mediumLaptop:w-[30rem] largeLaptop:w-[33rem] largeLaptop:h-[35rem]'
                  : 'xl:h-[30rem] xl:w-[25rem] med:h-[38rem] med:w-[28rem] medium:h-[40rem] mediumLaptop:w-[35rem] largeLaptop:h-[40rem] largeLaptop:w-[35rem]'
                  } ${nav ? '' : ''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
                  }  `}
                src={
                  secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage
                }
                alt=""
              />
            ) : null}
          </div>

          <div
            className={`w-[21rem] sm:w-[36rem] md:w-[44rem] 
      ${mode === 'mobile'
                ? 'small:w-[29rem] med:w-[38rem] medium:w-[41rem] mediumLaptop:w-[53rem] largeLaptop:w-[64rem]'
                : 'xl:w-[25rem] xl:mt-[9.5rem] xl:ml-[0rem] mediumLaptop:w-[33rem] largeLaptop:w-[38rem]'
              } 
      ${nav
                ? 'lg:w-full px-[2rem] SmMedium:w-[30rem] med:w-[35rem] medium:w-[40rem] mediumLaptop:w-[43rem] largeLaptop:w-[46rem]'
                : mode != 'mobile'
                  ? 'lg:w-[35rem] med:w-[30rem]'
                  : ''
              }`}
          >
            <h4
              className={`text-2xl leading-8 font-bold 
        ${mode === 'mobile' ? '' : ''} `}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h4>

            {loaderData?.profileInfo?.occupation ||
              input.occupation ||
              input.location ||
              loaderData?.profileInfo?.location ? (
              <h3
                className={`text-gray-600 w-max break-normal text-xs leading-5 font-normal ${mode === 'mobile' ? 'xl:text-base' : 'lg:text-base'
                  }  ${nav ? '' : ''} `}
              >
                {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
              </h3>
            ) : (
              <span></span>
            )}

            <div>
              <div className={`${mode === 'mobile' ? '' : ''}  ${nav ? '' : ''}`}>
                <div
                  className={`flex flex-col pt-4 ${mode === 'mobile' ? '' : 'lg:flex-row lg:justify-between'
                    }`}
                >
                  {loaderData?.profileInfo?.company || input.company ? (
                    <div className={`flex ${mode === 'mobile' ? '' : 'xl:flex-col'}`}>
                      <h2
                        className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode === 'mobile' ? '' : 'xl:hidden'
                          }`}
                      >
                        <BriefcaseIcon />
                      </h2>
                      <h2
                        className={`text-gray-500 font-medium text-sm leading-5 w-max hidden ${mode === 'mobile' ? '' : 'xl:block'
                          }`}
                      >
                        WORK
                      </h2>
                      <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-normal">
                        {input.company}
                      </h2>
                    </div>
                  ) : (
                    <span></span>
                  )}
                  {loaderData?.profileInfo?.education || input.education ? (
                    <div
                      className={`flex mt-[0.75rem] ${mode === 'mobile' ? '' : 'xl:flex-col lg:mt-0'
                        }`}
                    >
                      <h2
                        className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode === 'mobile' ? '' : 'xl:hidden'
                          }`}
                      >
                        <AcademicCapIcon />
                      </h2>
                      <h2
                        className={`text-gray-500 font-medium text-sm leading-5 w-max hidden ${mode === 'mobile' ? '' : 'xl:block'
                          }`}
                      >
                        EDUCATION
                      </h2>
                      <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-normal">
                        {input.education}
                      </h2>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>

              <div className={`${mode === 'mobile' ? '' : ''}`}>
                <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
                  {loaderData?.spotlightButton?.toggleSpotlight && (
                    <Spotlightbtn loaderData={loaderData} />
                  )}
                </div>
                <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
                  {loaderData?.spotlightButton?.toggleSpotlight && (
                    <AdditionalLinksAddOn loaderData={loaderData} />
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${loaderData?.spotlightButton?.toggleSpotlight ? 'mt-1' : 'mt-[1rem]'}`}
            >
              <pre
                className={`text-gray-500 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode === 'mobile' ? '' : ''
                  } ${nav ? '' : ''}`}
              >
                {input?.description?.trim()}
              </pre>
            </div>

            <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.testimonial?.testimonialText && (
                <TestimonialAddOn
                  testimonialText={loaderData?.testimonial?.testimonialText}
                  testimonialBy={loaderData?.testimonial?.testimonialBy}
                />
              )}
            </div>

            <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && (
                <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
              )}
            </div>

            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData} />
            </div>

            <footer
              className={`flex w-full gap-4 md:gap-8 justify-start ${nav ? '' : ''} ${loaderData?.portfolioImage ? 'pt-[1.5rem]' : ''
                }`}
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
        </div>

        <div className="w-full pb-10 -mt-8 text-center">
          <PoweredBy />
        </div>
      </>
    )
  }
}
