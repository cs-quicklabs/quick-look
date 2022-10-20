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
    
    <div className={`flex flex-col-reverse justify-center ml-[0.1rem] ${mode ==='mobile' ? '' : 'lg:flex-row lg:items-start largeLaptop:gap-[0rem]'} ${nav ?'' : ' '}`}>
      
      <div className={`w-[24rem] md:w-[42rem] pl-[1rem] mt-[3rem] h-full ${mode ==='mobile' ? 'lg:w-[45rem] largeLaptop:w-[63rem]' : 'lg:w-[30rem] lg:mt-[14.375rem] lg:pl-[6rem] largeLaptop:pl-[3rem] largeLaptop:w-[45rem]'} ${nav? 'lg:w-[51rem] largeLaptop:pl-[9rem] largeLaptop:w-[65rem]' :''}`}>
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
            <div className={`flex flex-col pt-4 ${mode ==='mobile' ? '' : 'xl:flex-row largeLaptop:gap-[18.5rem]'}  ${nav ? 'lg:gap-[5rem]' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] ${mode ==='mobile' ? '' : ''}`}>
                    <BriefcaseIcon />
                  </h2>
                  
                  <h2 className={`text-gray-900 w-max text-xs leading-5 lg:text-base lg:leading-6 font-normal break-normal ${mode ==='mobile' ? '' : 'lg:mt-[-0.25rem]'}  ${nav ? '' : ''}`}>
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[0.75rem] ${mode ==='mobile' ? '' : ' lg:mt-0'}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[1.18rem] ${mode ==='mobile' ? '' : ''}`} >
                    <AcademicCapIcon />
                  </h2>
                  <h2 className={`text-gray-900 w-max text-xs leading-5 lg:text-base lg:leading-6 font-normal break-normal ${mode ==='mobile' ? '' : 'lg:mt-[-0.25rem]'}  ${nav ? '' : ''}`}>
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

        <div className={`ml-[4.5rem] flex justify-center items-center py-[2rem] ${mode ==='mobile' ? 'mediumLaptop:ml-[20.5rem]' : 'lg:h-[100vh] mediumLaptop:ml-[13.5rem]'} ${nav? 'mediumLaptop:ml-[15.5rem]' :''}`} style={myStyle}>
        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
          <img className={`relative rounded-full shadow-xl object-cover ml-[-1rem] lg:ml-[-3rem] ${mode ==='mobile' ? '' : 'largeLaptop:mt-[-17rem]'} ${nav? 'lg:ml-[-1rem]' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? pic6 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
        </div>

      
    </div>  
    </>
  )
}} 