import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
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

export default function Template8 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
  
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide flex-col-reverse bg-purple-50 ml-[0.1rem] justify-center items-center bg-no-repeat object-cover overflow-none ${mode ==='mobile' ? '  flex-col' : ' xl:flex-row flex-col pt-[2rem] lg:pt-[5rem] lg:gap-[4rem] lg:items-start lg:justify-start largeLaptop:gap-[12rem]  '} ${nav ?'min-h-[calc(96.5vh+50px)] lg:gap-[10rem] lg:items-start largeLaptop:gap-[17rem]' : 'min-h-[calc(95.5vh+50px)] '} `}>

      <div className={`mt-[1rem] sm:mt-[2rem] pt-[1rem] pl-[1rem] w-[25rem] md:w-[47rem] bg-white ${mode ==='mobile' ? 'lg:pr-[3rem] largeLaptop:w-[72rem]' : 'lg:bg-purple-50 lg:w-[32rem] lg:pl-[3rem] lg:mt-[0rem] largeLaptop:w-[43rem] largeLaptop:pl-[6rem]'} ${nav ? 'lg:w-[45.5rem] lg:pl-[7rem] largeLaptop:w-[55rem] largeLaptop:pl-[12rem]' :''}`}>
        {loaderData?.profileInfo?.occupation === '' && !loaderData?.spotlightButton && !loaderData?.portfolioImage[0] && loaderData?.testimonial?.testimonialText === '' && loaderData?.video?.videoLink === '' && !input?.description ?
        <h4 className={`text-xl leading-8 font-extrabold sm:ml-[-7rem]  ${mode ==='mobile' ? 'xl:text-[36px] xl:leading-10' : 'lg:text-[36px] lg:leading-10 '} ${nav ? '' :''}`}>
        {loaderData?.firstname} {loaderData?.lastname}
      </h4> :
      <h4 className={`text-xl leading-8 font-extrabold  ${mode ==='mobile' ? 'xl:text-[36px] xl:leading-10' : 'lg:text-[36px] lg:leading-10 '} ${nav ? '' :''}`}>
      {loaderData?.firstname} {loaderData?.lastname}
    </h4>}

        

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={` text-gray-500 break-all text-xs leading-5 font-medium ${mode ==='mobile' ? 'xl:leading-8 xl:text-gray-600 xl:text-2xl lg:mt-[0.375rem]' : 'lg:leading-8 lg:text-gray-600 lg:mt-[0.375rem] lg:text-2xl'}  ${nav ? '' :''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1 ">
          <pre className={`text-gray-700 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={` pb-[4rem] flex flex-col ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            <div className={`flex flex-col pt-[2rem] ${mode ==='mobile' ? ' ' : 'lg:flex-row lg:gap-[7rem] largeLaptop:gap-[15rem]'} ${nav ? 'lg:gap-[16rem]' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex ${mode ==='mobile' ? ' ' : ''} ${nav ? '' : ''}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2 className={`text-gray-600 w-max text-xs lg:text-base leading-5 font-normal break-all ${mode ==='mobile' ? ' ' : 'lg:mt-[-0.25rem] '}`} >
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[2rem]  ${mode ==='mobile' ? ' ' : 'xl:mt-0 '}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2 className={`text-gray-600 w-max text-xs lg:text-base leading-5 font-normal break-all ${mode ==='mobile' ? ' ' : 'lg:mt-[-0.25rem] '}`} >
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          
          <div className={` mt-[-4rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
          </div>
        
            <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            
            <div className={`pt-[4rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>

          <footer className={` pb-[5rem] flex pt-[4rem] w-full lg:pt-[5rem] gap-4 md:gap-8  justify-start ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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

      <div className={`mb-4 sm:mb-0 w-[15rem] md:w-[20rem] ${mode ==='mobile' ? 'lg:w-[28rem] pt-[4rem] pb-[2rem]' : 'lg:w-[33rem] largeLaptop:w-[35rem]'} ${nav ? 'lg:w-[35rem]' : ' '} ${loaderData?.profileInfo?.occupation === '' && !loaderData?.spotlightButton && !loaderData?.portfolioImage[0] && loaderData?.testimonial?.testimonialText === '' && loaderData?.video?.videoLink === '' && !input?.description ? '' : ''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-lg object-cover ${mode ==='mobile' ? '' : ''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? '' :''} `} src={secondaryRestore === true ? pic4 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>
    </div>  
    </>
  )
} 