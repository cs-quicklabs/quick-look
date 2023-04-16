import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/Video'
import { useLocation } from '@remix-run/react'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
// import Background6 from '../../../assets/images/templates/template6Vector.png'

export default function Template6({
  mode,
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
}: any) {
  const Location = useLocation()
  const nav = Location.pathname.includes(`${loaderData.username}`)

  // const myStyle1 = {
  //   backgroundImage: `url(${Background6})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // }

  // const myStyle2 = {
  //   backgroundImage: `url(${Background6})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // }

  // const myStyle3 = {
  //   backgroundImage: `url(${Background6})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // }

  // const myStyle4 = {
  //   backgroundImage: `url(${Background6})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // }

  // const myStyle5 = {
  //   backgroundImage: `url(${Background6})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // }

  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
      <div
        className={`lg:pl-[0.1rem] flex overflow-auto scrollbar-hide ${
          nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'
        } ${
          mode === 'mobile' ? 'flex-col' : 'flex-col pt-[3rem] pb-[5rem] lg:gap-[8rem] xl:flex-row'
        }  justify-center bg-no-repeat object-cover overflow-none ${
          nav ? 'lg:gap-[12rem] mediumLaptop:gap-[12rem] largeLaptop:gap-[15rem]' : ''
        }`}
      >
        <div
          className={`my-4 flex-shrink-0 flex justify-center items-center   ${
            mode === 'mobile' ? '' : 'sm:mb-0 lg:items-start'
          } ${nav ? '' : ''}`}
        >
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
            <img
              loading="lazy"
              className={`rounded-full object-cover border-4 border-blue-500 w-[10rem] h-[10rem] ${
                mode === 'mobile'
                  ? 'lg:w-[20rem] lg:h-[20rem]'
                  : 'lg:w-[20rem] lg:h-[20rem] lg:p-4 mediumLaptop:w-[25rem] mediumLaptop:h-[25rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]'
              } ${nav ? '' : ''} ${
                loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
              }  `}
              src={
                secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage
              }
              alt="profile"
            />
          ) : null}
        </div>

        <div
          className={`lg:mt-[1.5rem] pl-[1rem] pr-[2rem] w-full ${
            mode === 'mobile' ? '' : 'xl:w-[30rem] mediumLaptop:w-[35rem] largeLaptop:w-[40rem]'
          } ${nav ? 'xl:w-[35rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem]' : ''}`}
        >
          <h4
            className={`text-black text-center  text-2xl leading-8 font-bold lg:text-4xl lg:leading-10 lg:font-extrabold ml-[0rem] sm:ml-0 ${
              mode === 'mobile' ? '' : 'lg:text-start'
            }  ${nav ? '' : ''}`}
          >
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          {loaderData?.profileInfo?.occupation ||
          input.occupation ||
          input.location ||
          loaderData?.profileInfo?.location ? (
            <h3
              className={`text-gray-500 text-center break-normal text-xs leading-5 font-normal lg:text-2xl lg:leading-8 lg:font-medium ${
                mode === 'mobile' ? '' : 'lg:text-start xl:w-max mediumLaptop:w-full'
              }  ${nav ? 'xl:w-full' : ''} `}
            >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3>
          ) : (
            <span></span>
          )}

          <div>
            <div className={` text-center ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.spotlightButton?.toggleSpotlight && (
                <Spotlightbtn loaderData={loaderData} />
              )}
            </div>
          </div>

          <div className={`mb-10 ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && (
              <AdditionalLinksAddOn loaderData={loaderData} />
            )}
          </div>

          <div className="flex flex-col-reverse lg:flex-col">
            <div className="mt-1">
              <pre
                className={`text-gray-700 text-xs leading-5 lg:text-lg lg:leading-none  font-sans flex whitespace-pre-wrap text-justify ${
                  mode === 'mobile' ? '' : ''
                } ${nav ? '' : ''}`}
              >
                {input?.description?.trim()}
              </pre>
            </div>

            <div className={`pb-[1rem] lg:pb-[1rem] ${mode === 'mobile' ? '' : ''} `}>
              <div
                className={`flex flex-col pt-4 ${
                  mode === 'mobile' ? 'flex-col' : 'lg:flex-row justify-between'
                } ${nav ? '' : ''}`}
              >
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className={`flex lg:w-[50%] ${mode === 'mobile' ? '' : ''}`}>
                    <h2
                      className={`text-black font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] ${
                        mode === 'mobile' ? '' : 'xl:w-[1.525rem]'
                      }`}
                    >
                      <BriefcaseIcon />
                    </h2>
                    <h2 className="text-gray-600 w-max text-sm leading-5 font-normal break-normal mt-[-0.325rem]">
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div
                    className={`flex mt-[1.5rem]  ${mode === 'mobile' ? '' : 'lg:mt-[0rem]'} ${
                      nav ? '' : ''
                    }`}
                  >
                    <h2
                      className={`text-black font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className="text-gray-600 w-max text-sm leading-5 font-normal break-normal">
                      {input.education}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>

          <div className={`mb-[2rem] ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.testimonial?.testimonialText && (
              <TestimonialAddOn
                testimonialText={loaderData?.testimonial?.testimonialText}
                testimonialBy={loaderData?.testimonial?.testimonialBy}
                loaderData={loaderData}
              />
            )}
          </div>

          <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && (
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
            )}
          </div>

          <div
            className={`${loaderData?.portfolioImage.length > 1 ? 'pt-[4rem]' : 'pt-[0rem]'} ${
              mode === 'mobile' ? '' : ''
            } ${nav ? '' : ''}`}
          >
            <PortfolioAddon loaderData={loaderData} />
          </div>

          <footer
            className={`flex w-full gap-4 md:gap-8  justify-start pb-[5rem]  ${nav ? '' : ''} ${
              loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'
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
    </>
  )
}
