import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import defaultimg from '../../../assets/images/profile.png'
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
    <div className={`flex overflow-auto scrollbar-hide flex-col-reverse bg-purple-50 ml-[0.1rem] justify-center items-center bg-no-repeat object-cover overflow-none ${mode ==='mobile' ? '  flex-col' : ' flex-col lg:items-start lg:justify-start xl:pt-[5rem] xl:gap-[0rem] xl:flex-row med:gap-[4rem] mediumLaptop:gap-[6rem] largeLaptop:gap-[8rem]  '} ${nav ?'min-h-[calc(96.5vh+50px)] lg:gap-[10rem] lg:items-start largeLaptop:gap-[17rem]' : 'min-h-[calc(95.5vh+50px)] '} `}>

      <div className={`pt-[1rem] w-full bg-white px-[2rem] pb-[3rem] ${mode ==='mobile' ? 'lg:pr-[3rem] xl:pr-[6rem] xl:pl-[4rem] mediumLaptop:pl-[7rem] mediumLaptop:w-[57rem] largeLaptop:pl-[5rem] largeLaptop:w-[72rem]' : 'lg:pt-[1.5rem] lg:pl-[4rem] lg:pr-[4rem] lg:mt-[0rem] xl:bg-purple-50 xl:pl-[6rem] xl:w-[37rem] mediumLaptop:pl-[8rem] mediumLaptop:w-[42rem] largeLaptop:w-[46rem] largeLaptop:pl-[6rem]'} ${nav ? '' :''}`}>
        {loaderData?.profileInfo?.occupation === '' && !loaderData?.spotlightButton && !loaderData?.portfolioImage[0] && loaderData?.testimonial?.testimonialText === '' && loaderData?.video?.videoLink === '' && !input?.description ?
        <h4 className={`text-xl leading-8 font-extrabold sm:ml-[-7rem]  ${mode ==='mobile' ? 'xl:text-[36px] xl:leading-10' : 'lg:text-[36px] lg:leading-10 '} ${nav ? '' :''}`}>
        {loaderData?.firstname} {loaderData?.lastname}
      </h4> :
      <h4 className={`text-xl leading-8 font-extrabold  ${mode ==='mobile' ? 'xl:text-[36px] xl:leading-10' : 'lg:text-[36px] lg:leading-10 '} ${nav ? '' :''}`}>
      {loaderData?.firstname} {loaderData?.lastname}
    </h4>}

        

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={` text-gray-500 break-normal text-xs leading-5 font-medium ${mode ==='mobile' ? 'xl:leading-8 xl:text-gray-600 xl:text-2xl lg:mt-[0.375rem]' : 'lg:leading-8 lg:text-gray-600 lg:mt-[0.375rem] lg:text-2xl'}  ${nav ? '' :''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-[1rem]">
          <pre className={`text-gray-700 text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={`flex flex-col ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            <div className={`flex flex-col pt-[1.5rem] ${mode ==='mobile' ? ' ' : 'xl:flex-row xl:justify-between'} ${nav ? '' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex ${mode ==='mobile' ? ' ' : ''} ${nav ? '' : ''}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2 className={`text-gray-600 w-max text-xs lg:text-base leading-5 font-normal break-normal ${mode ==='mobile' ? 'lg:mt-[-0.25rem] ' : 'xl:mt-[-0.25rem] xl:w-[65%]'}`} >
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[2rem]  ${mode ==='mobile' ? ' ' : 'xl:mt-0 '}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2 className={`text-gray-600 w-max text-xs lg:text-base leading-5 font-normal break-normal ${mode ==='mobile' ? ' lg:mt-[-0.25rem]' : 'xl:mt-[-0.25rem] '}`} >
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
            <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} mode={mode} />}
            </div>
            
            <div className={`${loaderData?.portfolioImage[0] ? 'pt-[0rem]' : 'pt-[0rem]'} ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>

          <footer className={`flex w-full gap-4 md:gap-8  justify-start ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''} ${ loaderData?.portfolioImage[0] ? 'pt-[1rem]' : 'pt-[0rem]'}`}>
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

      <div className={`py-[2rem] ${mode ==='mobile' ? 'xl:pr-[2rem] xl:pr-auto' : 'lg:pl-[8rem] xl:pl-[0rem]'} ${loaderData?.profileInfo?.occupation === '' && !loaderData?.spotlightButton && !loaderData?.portfolioImage[0] && loaderData?.testimonial?.testimonialText === '' && loaderData?.video?.videoLink === '' && !input?.description ? '' : ''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-lg object-cover w-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] ${mode ==='mobile' ? 'lg:w-[20rem] lg:h-[20rem] medium:w-[25rem] medium:h-[25rem] mediumLaptop:w-[30rem] mediumLaptop:h-[30rem] largeLaptop:w-[35rem] largeLaptop:h-[35rem]' : 'xl:w-[20rem] xl:h-[25rem] medium:w-[25rem] medium:h-[35rem] mediumLaptop:w-[30rem] largeLaptop:w-[35rem]'} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? '' :''} `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>
    </div>  
    </>
  )
} 