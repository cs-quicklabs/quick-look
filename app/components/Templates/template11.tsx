import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'

export default function Template11 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
    
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }

    <div className={`relative flex overflow-auto scrollbar-hide font-inter bg-white overflow-none pb-[3rem] ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:gap-[4rem] xl:flex-row xl:items-start xl:justify-start'} ${nav? '' :''}`} >

      <div className={`flex-shrink-0 flex flex-col ${mode ==='mobile' ? 'w-full ' : ''} ${nav? '' :''}`} >

      <div className=''>
        {primaryRestore || loaderData?.profileImage?.primaryImage ? (
            <img
              src={
                primaryRestore
                  ? DefaultCoverPicture
                  : loaderData?.profileImage?.primaryImage
              }
              className={`absolute w-[100%] object-cover ${
                (mode === 'mobile' && loaderData?.socialMedia?.facebookLink) || (mode === 'mobile' && loaderData?.socialMedia?.twitterLink) || (mode === 'mobile' && loaderData?.socialMedia?.youtubeLink) ? 'h-[79vh] lg:h-[76vh] xl:h-[74vh] med:h-[74vh] medium:h-[55vh] mediumLaptop:h-[55vh]' : mode === 'mobile' ? 'lg:h-[67vh] xl:h-[63vh] medium:h-[51vh]' : ''
              }
              ${(mode !='mobile' && loaderData?.socialMedia?.facebookLink) || (mode !='mobile' &&loaderData?.socialMedia?.twitterLink) || (mode !='mobile' && loaderData?.socialMedia?.youtubeLink) ? 'h-[54vh] sm:h-[58vh] md:h-[58vh] lg:h-[75vh] xl:h-[42vh]' : mode !='mobile' ? 'h-[48vh] sm:h-[51vh] md:h-[52vh] lg:h-[68vh] xl:h-[42vh]' : ''}`}
              alt=""
            />
          ) : null}
        </div>
        <div
          className={`relative flex flex-col justify-center items-center pt-[7rem] sm:pt-[8rem] md:pt-[14rem] ${
            primaryRestore || loaderData?.profileImage?.primaryImage
              ? ` ${
                  mode === 'mobile'
                    ? 'bottom-[5rem] right-0 lg:right-[1rem] xl:right-0'
                    : 'bottom-[6rem] md:bottom-[12rem] xl:bottom-[-6rem] medium:bottom-[-9rem]'
                }`
              : 'bottom-[-11rem]'
          } ${mode === 'mobile' ? 'bottom-[5rem] lg:pt-[7rem]' : 'med:ml-[5rem] xl:bg-white xl:h-[35rem] xl:w-[85%] xl:pt-[0rem] xl:rounded-md xl:ml-[4rem] xl:shadow-md'}`}
        >
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`flex rounded-full object-cover w-[7rem] h-[7rem] justify-center items-center  ${mode ==='mobile' ? 'lg:w-[12rem] lg:h-[12rem]' : 'lg:pt-[0rem] lg:w-[12rem] lg:h-[12rem] xl:mt-[-9rem] mediumLaptop:w-[12rem] mediumLaptop:h-[12rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
       
        <h4 className={`text-white text-center text-xl leading-8 font-semibold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : 'xl:text-black xl:text-left xl:text-4xl xl:font-extrabold xl:leading-10 '}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-white text-center break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:w-max xl:text-gray-500 mediumLaptop:w-full xl:text-2xl xl:leading-none xl:font-normal xl:mt-[0.5rem] xl:px-[0.75rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}

        <div className={`pb-[1rem] pl-[1rem] pr-[3rem] w-full lg:pl-[2rem]  ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'xl:pl-[1rem] xl:hidden'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
                    <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? '' : 'xl:hidden'}`}>
                    Work
                  </h2>
                  <h2 className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                  <BriefcaseIcon />
                  </h2>
                    <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem] med:w-[65%]'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'} ${nav ? '' : ''}`} >
                    <h2 className={`text-white text-xs leading-5 font-normal w-max  ${mode ==='mobile' ? '' : 'xl:hidden'}`} >
                    Education
                  </h2>
                  <h2 className= {`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                  <AcademicCapIcon />
                    
                  </h2>
                    <h2 className={`text-white w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>

            <footer className={`flex w-full gap-4 md:gap-8 justify-center pb-[3rem] xl:pt-[1rem] ${nav ? '' : ''} `}>
              {loaderData?.socialMedia?.facebookLink ?
              <a href={`https://${loaderData?.socialMedia?.facebookLink}`} target='_blank'><img src={facebook} alt="" className="w-9 md:w-11 h-auto" /></a> : null}
              {loaderData?.socialMedia?.twitterLink ?
              <a href={`https://${loaderData?.socialMedia?.twitterLink}`} target='_blank'>
                <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
              </a> : null}
              {loaderData?.socialMedia?.youtubeLink ?
              <a href={`https://${loaderData?.socialMedia?.youtubeLink}`} target='_blank'>
                <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />

              </a> : null}
            </footer>
          
        </div>

      </div>

      <div className={`flex flex-col justify-center items-center w-full
      ${mode === 'mobile' ? '' : 'lg:w-[35rem mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'} 
      ${(mode === 'mobile') && (loaderData?.socialMedia?.facebookLink || loaderData?.socialMedia?.twitterLink || loaderData?.socialMedia?.youtubeLink) ? 'lg:mt-[-6rem] SmMedium:mt-[-6.5rem] med:mt-[-6.5rem] mediumLaptop:mt-[-6.5rem] largeLaptop:mt-[-6.5rem]' : mode === 'mobile' ? 'lg:mt-[-6.5rem] xl:mt-[-8rem] med:mt-[-7.5rem] mediumLaptop:mt-[-5.5rem] largeLaptop:mt-[-5.5rem]' : '' } 
      ${(mode != 'mobile' || loaderData?.socialMedia?.facebookLink) || (mode != 'mobile' || loaderData?.socialMedia?.twitterLink) || (mode != 'mobile' || loaderData?.socialMedia?.youtubeLink) ? 'mt-[-8rem] sm:mt-[-7.5rem] md:mt-[-13.5rem] lg:mt-[-13rem] xl:mt-[16rem] mediumLaptop:mt-[21rem] largeLaptop:mt-[21.5rem]' : mode != 'mobile' ?  'mt-[-10rem] sm:mt-[-10rem] lg:mt-[-8rem] xl:mt-[16rem] mediumLaptop:mt-[21rem] largeLaptop:mt-[21.5rem]' : ''} 
      ${nav ? '' : ''}
      `}>

        {loaderData?.spotlightButton?.toggleSpotlight && 
        <Spotlightbtn loaderData={loaderData}/>}
        
          {loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}

          <div className={`px-[1rem] ${mode ==='mobile' ? 'lg:px-[2rem] xl:px-[3rem]' : 'lg:px-[2rem]'}`} >
            <pre className={`text-gray-900 text-xs leading-5 font-normal break-normal font-sans flex text-justify whitespace-pre-wrap lg:text-base ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                { input?.description?.trim()}
              </pre>

              <div className={`pb-[1rem] pr-[3rem] w-full hidden ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'xl:pl-[0rem] xl:block'} `}>
                <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`} >
                  {loaderData?.profileInfo?.company || input.company ?
                    <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
                      <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? '' : 'xl:hidden'}`}>
                      Work
                    </h2>
                    <h2 className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                    <BriefcaseIcon />
                    </h2>
                      <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem] xl:w-[65%] medium:w-max'}`} >
                        {input.company}
                      </h2>
                    </div> : <span></span>}
                  {loaderData?.profileInfo?.education || input.education ?
                    <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'} ${nav ? '' : ''}`} >
                      <h2 className={`text-white text-xs leading-5 font-normal w-max  ${mode ==='mobile' ? '' : 'xl:hidden'}`} >
                      Education
                    </h2>
                    <h2 className= {`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                    <AcademicCapIcon />
                      
                    </h2>
                      <h2 className={`text-white w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'}`} >
                        {input.education}
                      </h2>
                    </div> : <span></span>}
                </div>
              </div>


                <div className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                {loaderData?.testimonial?.testimonialText && 
              <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} loaderData={loaderData} />
                }
                </div>
            
                <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                {loaderData?.video?.videoLink && 
                <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />}
                </div>

                <div  className="">
                  <PortfolioAddon loaderData={loaderData}/>
                </div>
              
            
          </div>

          

            

         
            
      </div>

    </div>
        
     
    </>
  )
} 