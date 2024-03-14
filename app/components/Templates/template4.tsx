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
import PoweredBy from '../Common/PoweredBy'
export default function Template4({
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
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    return (
      <>
        {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
        <div
          className={`ml-[0.1rem] bg-black flex overflow-auto scrollbar-hide justify-center items-center xl:items-start pb-[3rem] pt-[1.5rem] ${
            nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'
          } ${
            mode === 'mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:gap-[8rem]'
          } ${nav ? '' : ''}`}
          style={myStyle}
        >
          <div
            className={`flex-shrink-0 flex justify-center items-center xl:mt-[6rem] mt-0 ${
              mode === 'mobile' ? '' : ''
            } ${nav ? '' : ''}`}
          >
            {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
              <img
                loading="lazy"
                className={` rounded-full border-[0.3rem] border-white w-80 h-80 object-cover ${
                  nav ? '' : ''
                } ${
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
            className={`w-[21rem] sm:w-[36rem] md:w-[44rem] 
            ${
              mode === 'mobile'
                ? 'small:w-[29rem] med:w-[38rem] medium:w-[41rem] mediumLaptop:w-[53rem] largeLaptop:w-[64rem]'
                : ' xl:mt-[9.5rem] xl:ml-[0rem] mediumLaptop:w-[33rem] largeLaptop:w-[38rem]'
            } 
            ${
              nav
                ? ' px-[2rem] SmMedium:w-[30rem] med:w-[35rem] medium:w-[40rem] mediumLaptop:w-[43rem] largeLaptop:w-[46rem]'
                : mode != 'mobile'
                ? 'lg:w-[35rem] med:w-[30rem]'
                : ''
            }`}
          >
            <h4
              className={`text-white text-center text-2xl leading-8 font-bold lg:text-4xl lg:leading-10 lg:font-extrabold ml-[0rem] sm:ml-0 ${
                mode === 'mobile' ? 'text-center' : 'lg:text-start sm:text-center'
              }  ${nav ? '' : ''}`}
            >
              {loaderData?.firstname} {loaderData?.lastname}
            </h4>

            {loaderData?.profileInfo?.occupation ||
            input.occupation ||
            input.location ||
            loaderData?.profileInfo?.location ? (
              <h3
                className={`text-gray-50 mt-1.5 text-center  break-normal text-xs leading-5 font-normal lg:text-gray-50 lg:text-2xl lg:leading-8 lg:font-medium ${
                  mode === 'mobile' ? '' : 'lg:text-start xl:w-full'
                }  ${nav ? 'xl:w-full' : ''} `}
              >
                {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
              </h3>
            ) : (
              <span></span>
            )}

            <div>
              <div
                className={`lg:flex text-center ${mode === 'mobile' ? 'text-center' : ''} ${
                  nav ? '' : ''
                }`}
              >
                {loaderData?.spotlightButton?.toggleSpotlight && (
                  <Spotlightbtn loaderData={loaderData} />
                )}
              </div>
            </div>

            <div>
              <div className={`${mode === 'mobile' ? '' : ''}`}>
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
                className={`text-gray-50 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${
                  mode === 'mobile' ? '' : ''
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
                  loaderData={loaderData}
                />
              )}
            </div>

            <div className={`pt-8 ${mode === 'mobile' ? 'xl:pb-[1rem]' : 'xl:pt-[2rem]'} `}>
              <div
                className={`flex flex-col ${
                  mode === 'mobile' ? 'flex-col' : 'xl:flex-row xl:gap-[5rem]'
                } ${nav ? '' : ''}`}
              >
                {loaderData?.profileInfo?.company || input.company ? (
                  <div className={`flex lg:w-[50%] ${mode === 'mobile' ? 'flex-col' : 'flex-col'}`}>
                    <h2
                      className={`text-white lg:text-gray-50 font-medium text-sm leading-5  ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      WORK
                    </h2>
                    <h2
                      className={`text-gray-100 lg:text-gray-50 text-sm leading-5 font-normal break-normal ${
                        mode === 'mobile' ? '' : 'xl:w-[65%]'
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
                    className={`flex mt-[1.5rem]  ${
                      mode === 'mobile' ? 'flex-col' : 'flex-col xl:mt-[0rem]'
                    } ${nav ? '' : ''}`}
                  >
                    <h2
                      className={`text-white lg:text-gray-50 font-medium text-sm leading-5 ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      EDUCATION
                    </h2>
                    <h2 className="text-gray-100 lg:text-gray-50 text-sm leading-5 font-normal break-normal">
                      {input.education}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>

            <div className={`${mode === 'mobile' ? '' : ''} ${nav ? '' : ''} border border-gray-500 mt-3`}>
              {loaderData?.video?.videoLink && (
                <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
              )}
            </div>

            <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData} />
            </div>

            <footer
              className={`flex w-full gap-4 md:gap-8 justify-end ${nav ? '' : ''} ${
                loaderData?.portfolioImage ? 'pt-[1.5rem]' : ''
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

        <div className="w-full -mt-8 text-center">
          <PoweredBy />
        </div>
      </>
    )
  }
}
