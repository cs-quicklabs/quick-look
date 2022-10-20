import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import Background6 from '../../../assets/images/templates/template6Vector.png'
import pic6 from '../../../assets/images/templates/pic6.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import {BriefcaseIcon} from '@heroicons/react/outline'
import {AcademicCapIcon} from '@heroicons/react/outline'
import PortfolioAddon from './addOns/portfolio'

export default function Template5 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 console.log(loaderData)
   {
    const myStyle={
      backgroundImage: 
     `url(${Background6})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  return(
    <>
    <div className={`relative ${mode ==='mobile' ? '' : ''} ${nav ?'' : ' '}`} >
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    </div>
    
    <div className={`flex flex-col-reverse justify-center bg-white ml-[0.1rem] ${mode ==='mobile' ? '' : 'lg:flex-row lg:items-start largeLaptop:gap-[18rem]'} ${nav ?'' : ' '}`}>
      
      <div className={`w-[24rem] md:w-[42rem] pl-[1rem] mt-[3rem] ${mode ==='mobile' ? 'lg:w-[45rem] largeLaptop:w-[63rem]' : 'lg:w-[30rem] lg:mt-[14.375rem] lg:pl-[6rem] largeLaptop:pl-[0rem]'} ${nav? 'lg:w-[51rem]' :''}`}>
        <h4 className={`text-xl leading-8 font-semibold lg:text-4xl lg:leading-10 lg:font-extrabold ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>
        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-xs leading-5 font-normal lg:text-2xl lg:leading-8 lg:font-medium ${mode ==='mobile' ? '' : ''}  ${nav ? '=' : ''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}
          

          <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>

          <div className={`mb-10 ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

          <div className="mt-1">
          <pre className={`text-gray-500  text-xs lg:text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div>
            <div className={`flex flex-col pt-4 ${mode ==='mobile' ? '' : 'xl:flex-row'}  ${nav ? 'lg:gap-[20rem]' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] ${mode ==='mobile' ? '' : ''}`}>
                    <BriefcaseIcon />
                  </h2>
                  
                  <h2 className={`text-gray-900 w-[80%] text-xs leading-5 lg:text-base lg:leading-6 font-normal break-normal ${mode ==='mobile' ? '' : 'lg:mt-[-0.25rem]'}  ${nav ? 'lg:w-[100%]' : ''}`}>
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[0.75rem] ${mode ==='mobile' ? '' : ' lg:mt-0'}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] ${mode ==='mobile' ? '' : ''}`} >
                    <AcademicCapIcon />
                  </h2>
                  <h2 className={`text-gray-900 w-[80%] text-xs leading-5 lg:text-base lg:leading-6 font-normal break-normal ${mode ==='mobile' ? '' : 'lg:mt-[-0.25rem]'}  ${nav ? 'lg:w-[100%]' : ''}`}>
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>

        <div className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
            </div>
        
            <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            
            <div  className={` ${ loaderData?.portfolioImage[0] ? 'pt-[2rem]' : 'pt-[0rem]'} ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>
            
          <footer className={`flex w-full gap-4 md:gap-8 justify-start pb-[5rem]  ${nav ? '' : ''} ${ loaderData?.portfolioImage[0] ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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

      <div className={`relative h-[22rem] md:h-[45rem] ${nav? 'lg:h-[45rem]' :''}`} >
        <div className={`absolute w-[22rem] h-[25rem] ml-[4.5rem] md:w-[45rem] md:h-[45rem] ${mode ==='mobile' ? 'largeLaptop:w-[45rem] largeLaptop:h-[45rem] largeLaptop:ml-[26.5rem]' : ''} ${nav? 'lg:w-[45rem] lg:h-[45rem]' :''}`} style={myStyle}></div>

        <div className={`relative w-[22rem] h-[22rem] py-[2rem] ml-[4.5rem] md:w-[45rem] md:h-[45rem] lg:py-[0rem] lg:w-[38rem] lg:h-[38rem] ${mode ==='mobile' ? 'lg:pt-[3.5rem] lg:ml-[7.5rem] largeLaptop:w-[51rem] largeLaptop:ml-[20.5rem]' : 'lg:pt-[7rem]'} ${nav? 'lg:w-[45rem] lg:h-[45rem]' :''}`}>
        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
          <img className={`relative rounded-full shadow-xl object-cover ml-[-1rem] lg:ml-[-3rem] ${mode ==='mobile' ? '' : ''} ${nav? 'lg:ml-[-1rem] ' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? pic6 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
        </div>
      </div>

      
    </div>  
    </>
  )
}} 