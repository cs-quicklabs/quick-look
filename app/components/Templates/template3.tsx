import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import Background3 from '../../../assets/images/templates/temp3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from '@remix-run/react'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import PoweredBy from '../Common/PoweredBy'
export default function Template3({
  mode,
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
}: any) {
  const Location = useLocation()
  const nav = Location.pathname.includes(`${loaderData.username}`)
  const myStyle = {
    backgroundImage: `url(${Background3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
      <div style={myStyle}>
        <div
          className={`flex scrollbar-hide lg:justify-start lg:items-start bg-no-repeat object-cover overflow-none
          ${nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} 
          ${mode === 'mobile' ? 'flex-col' : 'flex-col xl:flex-row'} ${nav ? '' : ''}`}
        >
          <div
            className={`xl:h-screen h-full flex flex-col justify-start items-center bg-black pt-8 ${
              mode === 'mobile' ? 'w-full' : 'w-full lg:items-center xl:w-[30rem]'
            } ${nav ? '' : ''}`}
          >
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                loading="lazy"
                className={`rounded-full object-cover w-[10rem] h-[10rem] xl:mt-[4rem] ${
                  mode === 'mobile'
                    ? 'lg:w-[18rem] lg:h-[18rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]'
                    : 'lg:w-[18rem] lg:h-[18rem] mediumLaptop:w-[18rem] mediumLaptop:h-[18rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]'
                } ${nav ? '' : ''} ${
                  loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
                }  `}
                src={
                  secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage
                }
                alt="profile"
              />
            ) : null}

            <h4
              className={`text-white text-center text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] ${
                mode === 'mobile' ? '' : ''
              }  ${nav ? '' : ''}`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h4>

            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3
                className={`text-white text-center break-normal text-xs leading-5 font-normal lg:text-gray-50 lg:text-base ${
                  mode === 'mobile' ? '' : 'mediumLaptop:w-full'
                }  ${nav ? 'lg:w-full' : ''} `}
              >
                {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
              </h3>
            ) : (
              <span></span>
            )}

            <div
              className={`pb-[1rem]  bg-black w-full px-[1rem] ${
                mode === 'mobile' ? 'lg:px-[3rem]' : 'lg:bg-transparent xl:hidden'
              } `}
            >
              <div
                className={`flex pt-4 justify-between ${mode === 'mobile' ? '' : ''} ${
                  nav ? '' : ''
                }`}
              >
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className={`flex flex-col lg:w-[50%] ${mode === 'mobile' ? '' : ''}`}>
                    <h2
                      className={`text-white text-xs leading-5 font-normal lg:text-sm  ${
                        mode === 'mobile' ? '' : 'xl:leading-5 xl:font-medium xl:text-gray-600'
                      }`}
                    >
                      WORK
                    </h2>
                    <h2
                      className={`text-gray-100 text-xs leading-5 font-normal break-normal   ${
                        mode === 'mobile' ? 'xl:text-sm' : 'xl:text-sm xl:text-black'
                      }`}
                    >
                      {input.company}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
                {loaderData?.profileInfo?.education || input.education ? (
                  <div className={`flex flex-col  ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
                    <h2
                      className={`text-white text-xs leading-5 font-normal  ${
                        mode === 'mobile'
                          ? 'xl:text-sm'
                          : 'xl:text-sm xl:leading-5 xl:font-medium xl:text-gray-600'
                      }`}
                    >
                      EDUCATION
                    </h2>
                    <h2
                      className={`text-gray-100 text-xs leading-5 font-normal break-normal  ${
                        mode === 'mobile' ? 'xl:text-sm' : 'xl:text-sm xl:text-black'
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
          </div>

          <div
            className={`w-full px-[2rem] ${mode === 'mobile' ? '' : 'xl:pt-[6rem]'} ${
              nav
                ? 'med:w-[45rem] mediumLaptop:w-[52rem] largeLaptop:w-[55rem]'
                : mode != 'mobile'
                ? 'med:w-[30rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem] large:w-[60rem]'
                : ''
            }`}
            // className={`w-full flex flex-col items-end justify-start px-[2rem] ${mode === 'mobile' ? '' : 'xl:pt-[6rem]'} ${
            //   nav
            //     ? 'xl:w-[42rem] med:w-[45rem] mediumLaptop:w-[52rem] largeLaptop:w-[55rem]'
            //     : mode != 'mobile'
            //     ? 'xl:w-[23rem] med:w-[30rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem] large:w-[60rem]'
            //     : ''
            // }`}
          >
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

            <div
              className={`flex ${
                mode === 'mobile' ? 'flex-col-reverse' : 'flex-col-reverse lg:flex-col'
              }`}
            >
              <div
                className={`${
                  loaderData?.spotlightButton?.toggleSpotlight ? 'mt-[1rem] xl:mt-1' : 'mt-[2rem]'
                }`}
              >
                <pre
                  className={`text-gray-700 xl:w-full text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${
                    mode === 'mobile' ? '' : ''
                  } ${nav ? '' : ''}`}
                >
                  {input?.description?.trim()}
                </pre>
              </div>
              <div
                className={`pb-[1rem]  bg-black w-full hidden ${
                  mode === 'mobile' ? 'lg:mt-[-1rem]' : 'lg:bg-transparent xl:block'
                } `}
              >
                <div
                  className={`flex pt-6 justify-between ${mode === 'mobile' ? '' : ''} ${
                    nav ? 'lg:gap-[4rem] gap-[4rem]' : 'gap-[4rem]'
                  }`}
                >
                  {loaderData?.profileInfo?.company || input.company ? (
                    <div className={`flex flex-col lg:w-[50%] ${mode === 'mobile' ? '' : ''}`}>
                      <h2
                        className={`text-white text-xs leading-5 font-normal lg:text-sm  ${
                          mode === 'mobile' ? '' : 'lg:leading-5 lg:font-medium lg:text-gray-600'
                        }`}
                      >
                        WORK
                      </h2>
                      <h2
                        className={`text-gray-100 text-xs leading-5 font-normal break-normal whitespace-pre-wrap   ${
                          mode === 'mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black'
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
                      className={`flex flex-col  ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}
                    >
                      <h2
                        className={`text-white text-xs leading-5 font-normal  ${
                          mode === 'mobile'
                            ? 'lg:text-sm'
                            : 'lg:text-sm lg:leading-5 lg:font-medium lg:text-gray-600'
                        }`}
                      >
                        EDUCATION
                      </h2>
                      <h2
                        className={`text-gray-100 text-xs leading-5 font-normal break-normal  ${
                          mode === 'mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black'
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
            </div>

            <div className="xl:w-[100%] justify-center items-center">
              {/* <div className={`mb-[2rem] w-[100%] ${mode === 'mobile' ? 'w-[42rem]' : 'w-[42rem]'} ${nav ? '' : ''}`}> */}
              <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}md:w-full w-[32rem]`}>
                {loaderData?.testimonial?.testimonialText && (
                  <TestimonialAddOn
                    testimonialText={loaderData?.testimonial?.testimonialText}
                    testimonialBy={loaderData?.testimonial?.testimonialBy}
                    loaderData={loaderData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className={`text-center ${nav ? 'w-[60%]' : 'w-[80%]'}'`}>
            <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && (
                <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
              )}
            </div>

          {/* <div className='flex justify-center w-[50%] text-center items-center'> */}
            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData} />
            </div>
          {/* </div> */}

            <footer
              className={`flex w-full gap-4 md:gap-8  justify-center pb-[5rem]  ${nav ? '' : ''} ${
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
      </div>
      <div className="-mt-10 text-center">
        <PoweredBy />
      </div>
    </>
  )
}
