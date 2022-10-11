import facebook from '../../../assets/images/fb.png'
import twitter from '../../../assets/images/twitter.png'
import youtube from '../../../assets/images/youtube.png'
import Background5 from '../../../assets/images/templates/template5.png'
import pic5 from '../../../assets/images/templates/pic5.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import {BriefcaseIcon} from '@heroicons/react/outline'
import {AcademicCapIcon} from '@heroicons/react/outline'

export default function Template5 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
    const myStyle={
      backgroundImage: 
     `url(${Background5})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)] '} ${mode ==='mobile' ? '' : ''}  justify-center bg-no-repeat object-cover overflow-none` } style={myStyle} >
      
      
<div className={`pt-[2rem] lg:pt-[6rem] px-[1.5rem] ${mode ==='mobile' ? 'lg:pl-[3.5rem] xl:pl-[12.5rem] medium:pl-[10.5rem]' : 'w-[40rem] lg:pl-[6.75rem]'}`} >
   
    <div className="flex flex-col items-center">
        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`mb-3 w-[15rem] h-[15rem] rounded-full ${mode ==='mobile' ? '' : ''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? ' ' :''} `} src={secondaryRestore === true ? pic5 : loaderData?.profileImage?.secondaryImage}  /> : null}
      
        <h5 className={`mb-0 lg:mb-[0.375rem] text-gray-800 text-xl leading-8 font-extrabold lg:text-4xl lg:leading-10 px-[1.5rem] lg:px-0`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h5>
        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-xs leading-5 lg:text-2xl lg:leading-8 font-normal text-gray-600 w-max break-all px-[1.5rem] lg:px-0 ${mode ==='mobile' ? '' : '2xl:pr-[4rem] 2xl:ml-[2.5rem]'} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}
        
    </div>

    <div className={` pr-[2.5rem] md:pr-[1.5rem] ${mode ==='mobile' ? 'lg:pr-[0.5rem]' : 'lg:pr-0'} ${nav ? '' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
       

        <div className={`mb-10 pr-[2.5rem] md:pr-[1.5rem] ${mode ==='mobile' ? 'lg:pr-[0.5rem]' : 'lg:pr-0'} ${nav ? '' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

    <div className={`mt-[1.5rem] ml-[5rem] pr-[5rem] sm:ml-0 sm:pr-0  ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          <pre className={`text-gray-700 text-base leading-5 font-normal font-sans flex items-center justify-center text-center whitespace-pre-wrap ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={`flex items-center justify-center px-[1.5rem] lg:px-0  ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            <div className={`flex flex-col  items-center justify-center ${nav ? '' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className='flex pt-[1.5rem]'>
                  <h2 className="text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-base leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className='flex pt-[1.5rem]'>
                  <h2 className="text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-base leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>

          <div className={`mt-[-3rem] ml-[5rem] pr-[5rem] sm:ml-0 sm:pr-0 ${mode ==='mobile' ? '' : 'lg:ml-[1.5rem] lg:pr-[1.5rem]'} ${nav ? '' : ''}`}>
          {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
          </div>
        
            <div className={` ml-[5rem] pr-[5rem] sm:ml-0 sm:pr-0 ${mode ==='mobile' ? '' : 'lg:ml-[1.5rem] lg:pr-[1.5rem]'} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            

          <footer className={`flex pt-[1.5rem] w-full gap-4 md:gap-8 items-center justify-center px-[1.5rem] lg:px-0 ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''}`}>
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
    </>
  )
}} 