import facebook from '../../../assets/images/fb.png'
import twitter from '../../../assets/images/twitter.png'
import youtube from '../../../assets/images/youtube.png'
import pic4 from '../../../assets/images/templates/pic4.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import {BriefcaseIcon} from '@heroicons/react/outline'
import {AcademicCapIcon} from '@heroicons/react/outline'
import PortfolioAddon from './addOns/portfolio'

export default function Template4 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide bg-[#F5F3FF] ${nav ?'min-h-[calc(96.5vh+50px)] ' : 'min-h-[calc(95.5vh+50px)] '} ${mode ==='mobile' ? 'largeLaptop:bg-[#F1F6FF] flex-col-reverse flex-col largeLaptop:flex-row ' : 'xl:bg-[#F1F6FF] flex-col-reverse xl:flex-row flex-col xl:flex-row pt-[5rem]'}  justify-center bg-no-repeat object-cover overflow-none`}>
      
      <div className={`mt-[2.5rem] xl:mt-[5.625rem] pt-[1rem] bg-[#F1F6FF] ${mode ==='mobile' ? 'sm:ml-[4rem] lg:ml-[2rem] 2xl:ml-0 largeLaptop:mr-[8rem]  p-[3rem] lg:pl-[6rem] xl:pl-[14rem] medium:pl-[14rem] 2xl:pl-[4rem]' : 'pl-[3rem] sm:pl-[9rem] xl:pl-[7rem] sm:pl-[6rem] lg:pl-[15rem] xl:p-[0rem]'} ${nav ? 'lg:pl-[10rem] lg:pr-[8rem] lg:pl-[7rem]' :''}`}>
        <h4 className={`text-xl leading-8 font-extrabold sm:ml-[-7rem]  ${mode ==='mobile' ? 'xl:text-4xl xl:leading-10 lg:ml-0' : 'lg:text-4xl lg:leading-10 2xl:pr-[4rem] xl:ml-[2rem] medium:ml-[3rem] '} ${nav ? '2xl:ml-[33.5rem]' :''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={` text-gray-500 w-max break-all text-xs leading-5 font-medium sm:ml-[-7rem] ${mode ==='mobile' ? 'xl:leading-8 xl:text-gray-600 xl:text-2xl lg:mt-[0.375rem]  lg:ml-0' : 'lg:leading-8 lg:text-gray-600 lg:mt-[0.375rem] lg:text-2xl xl:ml-[2rem] medium:ml-[3rem]'}  ${nav ? '2xl:ml-[33.5rem]' :''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={`${mode ==='mobile' ? 'xl:ml-[-4rem]' : 'pr-[6rem] sm:pr-[12rem] lg:pr-[8rem] xl:pr-0 medium:pr-[6rem] 2xl:pr-[52rem]'} ${nav ? 'pr-[6rem] lg:pr-[14rem] xl:pr-[12rem] medium:pr-[8rem] large:pr-[61rem]' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? 'xl:ml-[-4rem]' : 'pr-[6rem] sm:pr-[12rem] lg:pr-[8rem] xl:pr-0 medium:pr-[6rem] 2xl:pr-[52rem]'} ${nav ? 'pr-[6rem] lg:pr-[14rem] xl:pr-[12rem] medium:pr-[8rem] large:pr-[61rem]' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1 ">
          <pre className={`text-gray-700 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem] medium:pr-[5rem] medium:ml-[4.5rem] 2xl:pr-[14rem] 2xl:ml-[9.5rem] large:pr-[32rem]' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={` flex flex-col ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'sm:ml-[2rem] md:ml-[-7rem] lg:ml-[2rem] lg:pr-[10rem] medium:ml-[4.5rem] 2xl:ml-[9.5rem]' : ''}`}>
            <div className={`flex flex-col pt-[2rem] ${mode ==='mobile' ? '2xl:flex-row ' : '2xl:flex-row '} ${nav ? 'lg:ml-[-9rem] xl:ml-0 2xl:ml-0' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex md:w-[80%] medium:w-[76%] 2xl:w-[33%] ${nav ? 'large:w-[68%]' : ''}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-sm leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[2rem]  ${mode ==='mobile' ? '2xl:mt-0 ' : '2xl:mt-0 '}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-sm leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          
          <div className={` mt-[-4rem] ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? ' large:ml-[-20.5rem]' : ''}`}>
          {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
          </div>
        
            <div className={`${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'large:ml-[-20.5rem] pr-[6rem] lg:pr-[8rem]' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            
            <div className={`${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'large:pr-[31rem] pr-[6rem] lg:pr-[8rem]' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>

          <footer className={` pb-[5rem] flex pt-[4rem] w-full lg:pt-[5rem] gap-4 md:gap-8  justify-start ${mode ==='mobile' ? '' : 'medium:w-[40rem] pr-[3rem] sm:pr-0 lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] lg:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'}  ${nav ? 'pr-[4rem] lg:pr-[8rem] medium:pr-0 medium:ml-[13.5rem] large:ml-[5rem]' : 'pr-[4rem] lg:pr-0'}`}>
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

      <div className={`mb-4 flex-shrink-0 sm:mb-0 xl:mt-[5.625rem] pr-[2rem] sm:pr-[6rem] ${mode ==='mobile' ? 'lg:ml-[5rem] xl:ml-[13rem] medium:ml-[16rem] largeLaptop:ml-[-7rem] lg:pr-0 2xl:mr-[2rem] xl:pl-0 medium:pl-0 medium:max-w-[60rem] lg:max-w-[25rem] xl:max-w-[35rem] 2xl:max-w-[38rem]' : 'pl-[3rem] lg:pr-[2rem] xl:pr-0 medium:pl-0 xl:mr-[2rem] lg:max-w-7xl xl:max-w-[32rem] ml-[-1.5rem] sm:ml-[-2.5rem] md:ml-[0.5rem] lg:ml-[0.7rem] 2xl:ml-[2rem] xl:pl-[3rem] sm:pl-[6rem] lg:pl-[8rem] xl:p-[0rem]'} ${nav ? 'xl:pl-[2rem] 2xl:pl-0 lg:w-[47rem] xl:max-w-[35rem] lg:pr-[8rem] lg:pl-[7rem] lg:ml-[5.7rem]' : 'xl:pl-0 2xl:pl-[6rem]'}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-lg object-cover ${mode ==='mobile' ? 'lg:h-[30rem] xl:h-[38rem] ' : 'h-auto medium:h-[40rem]'} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? 'lg:h-[45rem] xl:h-[40rem] ' :''} `} src={secondaryRestore === true ? pic4 : loaderData?.profileImage?.secondaryImage}  /> : null}

      </div>
    </div>  
    </>
  )
}} 