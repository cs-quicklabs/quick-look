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

export default function Template6 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
    const myStyle={
      backgroundImage: 
     `url(${Background6})`,
      // position: absolute,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // width:'20rem',
      // height:'30.75rem',
      // paddingLeft: '15rem',
  };
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex flex-col-reverse lg:items-center justify-center bg-white ${mode ==='mobile' ? '' : 'lg:flex-row'} ${nav ?'' : ' '}`}>
      
      <div className={`w-[24rem] pl-[1rem] ${mode ==='mobile' ? '' : 'lg:w-[20rem] lg:mt-[14.375rem]'} ${nav? '' :''}`}>
        <h4 className={`text-xl leading-8 font-semibold lg:text-4xl lg:leading-10 lg:font-extrabold ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>
        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-xs leading-5 font-normal lg:text-2xl lg:leading-8 lg:font-medium ${mode ==='mobile' ? '' : ''}  ${nav ? '=' : ''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

          <div className={`gap-20 ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''}`}>
            <div className={`flex flex-col pt-4 ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex lg:w-[50%] ${mode ==='mobile' ? '' : 'xl:flex-col'}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:hidden'}`}>
                    <BriefcaseIcon />
                  </h2>
                  <h2 className={`text-gray-500 font-medium text-sm leading-5 w-max hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                    WORK
                  </h2>
                  <h2 className="text-gray-900 w-[70%] text-sm leading-5 font-normal break-normal">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[0.75rem] ${mode ==='mobile' ? '' : 'xl:flex-col xl:mt-0'}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:hidden'}`} >
                    <AcademicCapIcon />
                  </h2>
                  <h2 className= {`text-gray-500 font-medium text-sm leading-5 w-max hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                    EDUCATION
                  </h2>
                  <h2 className="text-gray-900 w-[70%] text-sm leading-5 font-normal break-normal">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>

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

        <div className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
            </div>
        
            <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            
            <div  className={`pt-[4rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>
            
          <footer className={`flex w-full gap-4 md:gap-8 justify-start pb-[5rem]  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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

      <div className={`w-[22rem] pt-[2rem] ${mode ==='mobile' ? '' : ''} ${nav? '' :''}`} style={myStyle}>
      {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-full shadow-xl object-cover bg-red-400 ml-[3.5rem] ${mode ==='mobile' ? '' : ''} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? pic6 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
      </div>
    </div>  
    </>
  )
}} 