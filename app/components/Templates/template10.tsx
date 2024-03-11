import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'
import defaultimg from '../../../assets/images/profile.png'
import { useLocation } from '@remix-run/react'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import PortfolioAddon from './addOns/portfolio'
import PoweredBy from '../Common/PoweredBy'

function Template10({ input, loaderData, primaryRestore, secondaryRestore, mode }: any) {
  const Location = useLocation()

  const nav = Location.pathname.includes(`${loaderData.username}`)
  
  {
    const myStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    return (
      <>
        {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
        
      <div>
        {primaryRestore || loaderData?.profileImage?.primaryImage ? (
          <img
            src={primaryRestore ? DefaultCoverPicture : loaderData?.profileImage?.primaryImage}
            className={`w-[100%] object-cover ${
              mode === 'mobile' ? 'h-[15rem]' : 'h-[8rem] md:h-[14rem]'
            }`}
            alt="cover"
            loading="lazy"
          />
        ) : null}
      </div>
      
      <div className="xl:flex xl:flex-col xl:items-center flex flex-col items-center">
        
      <div
          className={`flex flex-col ${mode === 'mobile' ? '' : ''}  ${
            mode === 'mobile'
              ? 'h-[9rem] largeLaptop:h-[20vh]'
              : 'h-[4rem] md:h-[7rem] largeLaptop:h-[9rem]'
          }`}
        >
          <div
            className={`relative flex-col flex justify-center items-center  ${
              primaryRestore || loaderData?.profileImage?.primaryImage
                ? ` ${
                    mode === 'mobile' ? 'bottom-[5rem] right-0' : 'bottom-[4rem] md:bottom-[9rem]'
                  }`
                : 'bottom-[-11rem]'
            } ${mode === 'mobile' ? 'bottom-[9rem]' : ''}`}
          >
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                src={secondaryRestore ? defaultimg : loaderData?.profileImage?.secondaryImage}
                alt="profile"
                loading="lazy"
                className={`rounded-full h-[8rem] w-[8rem] md:w-[275px] md:h-[275px] ${
                  mode === 'mobile'
                    ? 'drop-shadow border-white lg:border-[10px] '
                    : 'border-[7px] border-white drop-shadow md:border-[10px]'
                }  `}
              />
            ) : null}
          </div>
        </div>

        <div
          className={`flex scrollbar-hide ml-[0.1rem] pb-[3rem] flex-col items-start justify-start pt-[2rem] ${
            nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)] '
          } ${
            mode === 'mobile' ? 'lg:w-full]' : 'lg:pt-[2rem]'
          }  justify-start bg-no-repeat object-cover overflow-none`}
          style={myStyle}
        >
          <div
            className={`w-[21rem] sm:w-[32rem] ${
              mode === 'mobile'
                ? 'lg:w-[25rem] med:w-[32rem] mediumLaptop:w-[38rem] largeLaptop:w-[45rem]'
                : 'xl:w-[35rem] med:w-[40rem] medium:w-[45rem] mediumLaptop:w-[50rem] largeLaptop:w-[55rem]'
            } ${nav ? '' : ''}`}
          >
            
            <div
              className={`font-extrabold leading-10 md:mt-0 lg:mt-4 xl:mt-0 text-center ${
                mode === 'mobile' ? 'lg:text-4xl' : 'text-xl md:text-4xl'
              }`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </div>
            <div className={`text-xs font-medium md:leading-8 md:text-2xl text-center`}>
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </div>
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

            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.testimonial?.testimonialText && (
                <TestimonialAddOn
                  testimonialText={loaderData?.testimonial?.testimonialText}
                  testimonialBy={loaderData?.testimonial?.testimonialBy}
                />
              )}
            </div>
            <div
              className={`flex items-center justify-center pb-4  ${mode === 'mobile' ? '' : ''} ${
                nav ? '' : ''
              }`}
            >
              <div className={`flex flex-col  items-center justify-center ${nav ? '' : ''}`}>
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className="flex-1 pt-[0rem]">
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
      </div>
      </>
    )
  }
}

export default Template10
