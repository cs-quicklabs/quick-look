import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import Background3 from '../../../assets/images/templates/temp3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
export default function Template16 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide bg-black justify-center items-center overflow-none ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:items-start'} ${nav? '' :''}`} >

      <div className={`flex-shrink-0 flex flex-col justify-center items-center ${mode ==='mobile' ? 'w-full ' : 'w-full lg:items-center xl:w-[24rem] xl:justify-start xl:items-start mediumLaptop:w-[30rem] largeLaptop:w-[34rem]'} ${nav? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`absolute object-cover w-[15rem] h-[15rem]   ${mode ==='mobile' ? 'lg:w-[25rem] lg:h-[25rem]' : 'lg:w-[20rem] lg:h-[20rem] mediumLaptop:w-[25rem] mediumLaptop:h-[25rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

        <div className={`relative flex w-full gap-4 md:gap-8 justify-start pb-[5rem]  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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
        </div>

      </div>

      <div className={` flex flex-col justify-center items-center w-full ${mode ==='mobile' ? '' : 'xl:pt-[23rem] lg:w-[35rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'} ${nav ? 'lg:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]' : ''}`}>

      <div className={`w-[80%] mt-[-2rem] ${mode ==='mobile' ? '' : 'lg:mt-[-10rem] xl:rounded-none xl:shadow-none xl:w-full xl:pl-[1rem]'}`} >
          <h4 className={`text-white text-center text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : 'lg:text-yellow-500 xl:w-[50%] xl:text-left xl:text-6xl xl:font-extrabold xl:leading-none'}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          <div className='xl:border-b-[1px] xl:border-gray-300 xl:mt-[1rem]'></div>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-white text-center break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:w-max mediumLaptop:w-full xl:text-2xl xl:leading-8 xl:font-medium xl:mt-[1rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}

            <div className={`pb-[1rem] pl-[1rem] pr-[1.5rem] w-full lg:pl-[2rem] ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'lg:bg-transparent xl:pl-[0rem]'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? 'lg:gap-[10rem]' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-white font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'lg:text-yellow-500'}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-50 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-white lg:text-sm lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-white font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'lg:text-yellow-500'}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-50 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-white lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>
        </div>

        <div className='mt-[1rem] pl-[1rem]'>
           {/* <div className={`flex ${mode ==='mobile' ? 'flex-col-reverse' : 'flex-col-reverse lg:flex-col'}`} > */}
        <div className="mt-1 ">
          <pre className={`text-white text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${mode ==='mobile' ? '' : 'lg:text-gray-50'} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
          </div>
         
        {/* </div> */}

        <div className=''>
          <div className={` text-center ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && 
            <Spotlightbtn loaderData={loaderData}/>}
            </div>
          

          <div className={`mb-10 ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
            </div>

              <div className={`mb-[2rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.testimonial?.testimonialText && 
            <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} loaderData={loaderData} />
              }
              </div>
          
              <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && 
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />}
              </div>
              
              <div  className={`${loaderData?.portfolioImage.length > 1 ? 'pt-[4rem]' : 'pt-[0rem]'} ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                <PortfolioAddon loaderData={loaderData}/>
              </div>
            
        </div>   
        </div>

            

         
            
      </div>
    </div>
    </>
  )
} 