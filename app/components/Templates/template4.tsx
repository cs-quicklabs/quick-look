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

export default function Template4 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide bg-[#F1F6FF] ${nav ?'min-h-[calc(96.5vh+50px)] lg:pr-[8rem] lg:pl-[7rem]' : 'min-h-[calc(95.5vh+50px)] '} ${mode ==='mobile' ? 'flex-col-reverse flex-col large:flex-row p-[3rem] lg:pl-[6rem] xl:pl-[14rem] medium:pl-[14rem] 2xl:pl-[4rem]' : 'flex-col-reverse xl:flex-row flex-col xl:flex-row py-[5rem] pl-[3rem] sm:pl-[6rem] lg:pl-[8rem] xl:p-[0rem]'}  justify-center bg-no-repeat object-cover overflow-none`}>
      
      <div className={`mt-[2.5rem] xl:mt-[5.625rem]   ${mode ==='mobile' ? 'sm:ml-[4rem]' : 'sm:ml-[9rem]'} ${nav ? 'lg:ml-[14rem]' :''}`}>
        <h4 className={`text-4xl leading-10 font-extrabold sm:ml-[-7rem] ${mode ==='mobile' ? 'lg:ml-[-3rem]' : '2xl:pr-[4rem] xl:ml-[2rem] medium:ml-[6rem] '} ${nav ? '2xl:ml-[33.5rem]' :''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-gray-600 w-max break-all text-2xl leading-8 font-medium mt-[0.375rem] sm:ml-[-7rem] ${mode ==='mobile' ? 'lg:ml-[-3rem]' : 'xl:ml-[2rem] medium:ml-[6rem]'}  ${nav ? '2xl:ml-[33.5rem]' :''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={`${mode ==='mobile' ? '' : 'pr-[6rem] sm:pr-[12rem] lg:pr-[8rem] xl:pr-0   medium:pr-[6rem] 2xl:pr-[52rem]'} ${nav ? 'pr-[8rem] lg:pr-[14rem] xl:pr-[12rem] medium:pr-[8rem] large:pr-[61rem]' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? '' : 'pr-[6rem] sm:pr-[12rem] lg:pr-[8rem] xl:pr-0 medium:pr-[6rem] 2xl:pr-[52rem]'} ${nav ? 'pr-[8rem] lg:pr-[14rem] xl:pr-[12rem] medium:pr-[8rem] large:pr-[61rem]' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1">
          <pre className={`text-gray-700 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem] medium:pr-[5rem] medium:ml-[4.5rem] 2xl:pr-[14rem] 2xl:ml-[9.5rem]' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={`flex flex-col ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'sm:ml-[2rem] lg:pr-[10rem] medium:ml-[4.5rem] 2xl:ml-[9.5rem]' : ''}`}>
            <div className={`flex flex-col md:flex-row pt-4 ${nav ? 'lg:ml-[-10rem] xl:ml-0 2xl:ml-0' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className='flex md:w-[80%] 2xl:w-[33%]'>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-sm leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className='flex'>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-sm leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          
          <div className={`${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? '' : ''}`}>
          {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
          </div>
        
            <div className={`${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem]' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            

          <footer className={`flex pt-[4rem] w-full lg:pt-[5rem] gap-4 md:gap-8  justify-center ${mode ==='mobile' ? '' : 'medium:w-[40rem] pr-[3rem] sm:pr-0 lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-5rem] lg:ml-[-3rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'}  ${nav ? 'pr-[7rem] lg:pr-[8rem]' : 'pr-[4rem] lg:pr-0'}`}>
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

      <div className={`mb-4 flex-shrink-0 sm:mb-0 xl:mt-[5.625rem]  ${mode ==='mobile' ? '2xl:mr-[2rem]' : 'xl:mr-[2rem]'} ${nav ? '' : ''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`${mode ==='mobile' ? 'xl:pl-0 lg:h-[30rem] xl:h-[38rem] lg:max-w-[25rem] xl:max-w-[35rem]' : 'lg:max-w-7xl xl:max-w-[35rem] h-auto ml-[-1.5rem] sm:ml-[0.5rem] lg:ml-[0.7rem] 2xl:ml-[2rem] xl:pl-[7rem]'} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? 'xl:pl-[2rem] 2xl:pl-0 lg:w-[47rem] lg:h-[45rem] xl:h-[40rem] xl:max-w-[35rem] ' :'xl:pl-0 2xl:pl-[6rem]'} `} src={secondaryRestore === true ? pic4 : loaderData?.profileImage?.secondaryImage}  /> : null}

      </div>
    </div>  
    </>
  )
}} 