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

  // return (
  //   <>
  //     {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
  //     <div
  //       className={`lg:pl-[0.1rem] flex overflow-auto scrollbar-hide justify-center bg-no-repeat object-cover overflow-none bg-black pb-[3rem] ${
  //         nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'
  //       } ${
  //         mode === 'mobile' ? 'flex-col' : 'flex-col lg:flex-row lg:justify-around'
  //       } ${nav ? '' : ''}`}
  //     >

  //       {/*  */}
  //       <div
  //         // className={`pt-[1rem] pb-[0.5rem] flex-shrink-0 flex justify-center items-center ${
  //         //   mode === 'mobile'
  //         //     ? 'lg:pb-[0rem] lg:pt-[1.5rem]'
  //         //     : 'sm:mb-0 lg:pb-[0rem] lg:pt-[1.5rem] lg:items-start'
  //         // } ${nav ? '' : ''}`}
  //         className={`flex-shrink-0 flex justify-center items-center ${
  //           mode === 'mobile'
  //             ? ''
  //             : ''
  //         } ${nav ? '' : ''}`}
  //       >
  //         {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
  //           <img
  //             loading="lazy"
  //             // className={`rounded-full object-cover border-[0.3rem] border-white w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem] ${
  //             //   mode === 'mobile'
  //             //     ? 'lg:w-[20rem] lg:h-[20rem] med:w-[23rem] med:h-[23rem] medium:w-[23rem] medium:h-[23rem] mediumLaptop:w-[23rem] mediumLaptop:h-[23rem] largeLaptop:w-[23rem] largeLaptop:h-[23rem]'
  //             //     : 'small:w-[20rem] small:h-[20rem] xl:p-4 med:w-[23rem] med:h-[23rem] medium:w-[23rem] medium:h-[23rem] mediumLaptop:w-[23rem] mediumLaptop:h-[23rem] largeLaptop:w-[23rem] largeLaptop:h-[23rem]'
  //             // } ${nav ? '' : ''} ${
  //             //   loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
  //             // }  `}
  //             className={` rounded-full border-[0.3rem] border-white w-80 h-80 object-cover ${nav ? '' : ''} ${
  //               loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' : ''
  //             }  `}
  //             src={
  //               secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage
  //             }
  //             alt="profile"
  //           />
  //         ) : null}
  //       </div>
  //       {/*  */}
  //       <div
  //         className={`lg:mt-[1.5rem] px-[2rem] flex flex-col text-center justify-center w-full ${
  //           mode === 'mobile' ? '' : 'xl:pr-0 xl:pl-0 xl:w-1/2'
  //         } ${
  //           nav
  //             ? 'SmMedium:w-[30rem] med:w-[35rem] medium:w-[40rem] mediumLaptop:w-[41rem] largeLaptop:w-[48rem]'
  //             : mode != 'mobile'
  //             ? 'med:w-[30rem] medium:w-[32rem] mediumLaptop:w-[38rem] largeLaptop:w-[45rem]'
  //             : ''
  //         }`}
  //       >
  //         <h4
  //           className={`text-white text-center text-2xl leading-8 font-bold lg:text-4xl lg:leading-10 lg:font-extrabold ml-[0rem] sm:ml-0 ${
  //             mode === 'mobile' ? '' : 'lg:text-start'
  //           }  ${nav ? '' : ''}`}
  //         >
  //           {loaderData?.firstname} {loaderData?.lastname}
  //         </h4>

  //         {loaderData?.profileInfo?.occupation ||
  //         input.occupation ||
  //         input.location ||
  //         loaderData?.profileInfo?.location ? (
  //           <h3
  //             className={`text-gray-50 mt-1.5 text-center  break-normal text-xs leading-5 font-normal lg:text-gray-50 lg:text-2xl lg:leading-8 lg:font-medium ${
  //               mode === 'mobile' ? '' : 'lg:text-start xl:w-full'
  //             }  ${nav ? 'xl:w-full' : ''} `}
  //           >
  //             {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
  //           </h3>
  //         ) : (
  //           <span></span>
  //         )}

  //         <div>
  //           <div className={`lg:flex text-center ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
  //             {loaderData?.spotlightButton?.toggleSpotlight && (
  //               <Spotlightbtn loaderData={loaderData} />
  //             )}
  //           </div>
  //         </div>

  //         <div className={`lg:flex ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
  //           {loaderData?.spotlightButton?.toggleSpotlight && (
  //             <AdditionalLinksAddOn loaderData={loaderData} />
  //           )}
  //         </div>

  //         <div className={`flex flex-col-reverse ${mode === 'mobile' ? '' : 'lg:flex-col'}`}>
  //           <div
  //             className={` ${
  //               loaderData?.spotlightButton?.toggleSpotlight
  //                 ? 'mt-[1.5rem] xl:mt-[0rem]'
  //                 : 'mt-[2rem]'
  //             }`}
  //           >
  //             <pre
  //               className={`text-gray-50 lg:text-gray-50 text-xs leading-5 lg:text-lg lg:leading-none  font-sans flex whitespace-pre-wrap text-justify ${
  //                 mode === 'mobile' ? '' : ''
  //               } ${nav ? '' : ''}`}
  //             >
  //               {input?.description?.trim()}
  //             </pre>
  //           </div>

  //           <div className={`pt-8 ${mode === 'mobile' ? 'xl:pb-[1rem]' : 'xl:pt-[2rem]'} `}>
  //             <div
  //               className={`flex flex-col ${
  //                 mode === 'mobile' ? 'flex-col' : 'xl:flex-row xl:gap-[5rem]'
  //               } ${nav ? '' : ''}`}
  //             >
  //               {loaderData?.profileInfo?.company || input.company ? (
  //                 <div className={`flex lg:w-[50%] ${mode === 'mobile' ? 'flex-col' : 'flex-col'}`}>
  //                   <h2
  //                     className={`text-white lg:text-gray-50 font-medium text-sm leading-5 w-max  ${
  //                       mode === 'mobile' ? '' : ''
  //                     }`}
  //                   >
  //                     WORK
  //                   </h2>
  //                   <h2
  //                     className={`text-gray-100 lg:text-gray-50 w-max text-sm leading-5 font-normal break-normal ${
  //                       mode === 'mobile' ? '' : 'xl:w-[65%]'
  //                     }`}
  //                   >
  //                     {input.company}
  //                   </h2>
  //                 </div>
  //               ) : (
  //                 <span></span>
  //               )}
  //               {loaderData?.profileInfo?.education || input.education ? (
  //                 <div
  //                   className={`flex mt-[1.5rem]  ${
  //                     mode === 'mobile' ? 'flex-col' : 'flex-col xl:mt-[0rem]'
  //                   } ${nav ? '' : ''}`}
  //                 >
  //                   <h2
  //                     className={`text-white lg:text-gray-50 font-medium text-sm leading-5 w-max ${
  //                       mode === 'mobile' ? '' : ''
  //                     }`}
  //                   >
  //                     EDUCATION
  //                   </h2>
  //                   <h2 className="text-gray-100 lg:text-gray-50 w-max text-sm leading-5 font-normal break-normal">
  //                     {input.education}
  //                   </h2>
  //                 </div>
  //               ) : (
  //                 <span></span>
  //               )}
  //             </div>
  //           </div>
  //         </div>

  //         <div className={`mb-[2rem] ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}w-[42rem]`}>
  //           {loaderData?.testimonial?.testimonialText && (
  //             <TestimonialAddOn
  //               testimonialText={loaderData?.testimonial?.testimonialText}
  //               testimonialBy={loaderData?.testimonial?.testimonialBy}
  //               loaderData={loaderData}
  //             />
  //           )}
  //         </div>

  //         {loaderData?.video?.videoLink && (
  //           <div className={`border border-1 ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
  //             {loaderData?.video?.videoLink && (
  //               <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />
  //             )}
  //           </div>
  //         )}

  //         <div className={` ${mode === 'mobile' ? '' : ''} ${nav ? '' : ''}`}>
  //           <PortfolioAddon loaderData={loaderData} />
  //         </div>

  //         <footer
  //           className={`flex w-full gap-4 md:gap-8 justify-end  ${nav ? '' : ''} ${
  //             loaderData?.portfolioImage[0] ? 'pt-[1.5rem]' : 'pt-[0rem]'
  //           }`}
  //         >
  //           {loaderData?.socialMedia?.facebookLink ? (
  //             <a
  //               href={`https://${loaderData?.socialMedia?.facebookLink}`}
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               <img src={facebook} alt="" className="w-9 md:w-11 h-auto" />
  //             </a>
  //           ) : null}
  //           {loaderData?.socialMedia?.twitterLink ? (
  //             <a
  //               href={`https://${loaderData?.socialMedia?.twitterLink}`}
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
  //             </a>
  //           ) : null}
  //           {loaderData?.socialMedia?.youtubeLink ? (
  //             <a
  //               href={`https://${loaderData?.socialMedia?.youtubeLink}`}
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />
  //             </a>
  //           ) : null}
  //         </footer>
  //       </div>
  //     </div>
  //     <div className="-mt-10 text-white">
  //       <PoweredBy />
  //     </div>
  //   </>
  // )

  {
    const myStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    return (
      <>
        {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} />}
        <div
          className={`ml-[0.1rem] bg-black flex overflow-auto scrollbar-hide justify-center items-center pb-[3rem] pt-[1.5rem] ${
            nav ? 'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'
          } ${
            mode === 'mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:gap-[0rem] xl:justify-around'
          } ${nav ? '' : ''}`}
          style={myStyle}
        >
          <div
            className={`flex-shrink-0 flex justify-center items-center ${
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
                : 'xl:w-[25rem] xl:mt-[9.5rem] xl:ml-[0rem] mediumLaptop:w-[33rem] largeLaptop:w-[38rem]'
            } 
            ${
              nav
                ? 'lg:w-full px-[2rem] SmMedium:w-[30rem] med:w-[35rem] medium:w-[40rem] mediumLaptop:w-[43rem] largeLaptop:w-[46rem]'
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
                      className={`text-white lg:text-gray-50 font-medium text-sm leading-5 w-max  ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      WORK
                    </h2>
                    <h2
                      className={`text-gray-100 lg:text-gray-50 w-max text-sm leading-5 font-normal break-normal ${
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
                      className={`text-white lg:text-gray-50 font-medium text-sm leading-5 w-max ${
                        mode === 'mobile' ? '' : ''
                      }`}
                    >
                      EDUCATION
                    </h2>
                    <h2 className="text-gray-100 lg:text-gray-50 w-max text-sm leading-5 font-normal break-normal">
                      {input.education}
                    </h2>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
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

        <div className="w-full pb-10 -mt-8 text-center">
          <PoweredBy />
        </div>
      </>
    )
  }
}
