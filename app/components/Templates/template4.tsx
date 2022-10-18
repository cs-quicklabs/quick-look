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

export default function Template4 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
  
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide flex-col-reverse bg-purple-50 ml-[0.1rem] ${nav ?'min-h-[calc(96.5vh+50px)] ' : 'min-h-[calc(95.5vh+50px)] '} ${mode ==='mobile' ? '  flex-col' : ' xl:flex-row flex-col  pt-[2rem] lg:pt-[5rem]'}  justify-center bg-no-repeat object-cover overflow-none`}>

      <div></div>
      
      <div className={`mt-[1rem] sm:mt-[2rem] xl:mt-[5.625rem] pt-[1rem] bg-white ${mode ==='mobile' ? 'sm:ml-[4rem] lg:ml-[2rem] 2xl:ml-0 largeLaptop:mr-[1rem]  p-[3rem] lg:pl-[3rem] xl:pl-[10.5rem] medium:pl-[14rem] largeLaptop:pl-[5rem] large:pl-[0rem] 2xl:pl-[2rem]' : 'lg:bg-purple-50 pl-[2rem] xl:pl-[7rem] largeLaptop:pl-[0rem]  md:pl-[9rem] lg:pl-[15rem] xl:p-[0rem] largeLaptop:mr-[6rem]'} ${nav ? 'lg:pr-[8rem] lg:pl-[9rem] largeLaptop:pl-[0rem]' :''}`}>
        {loaderData?.profileInfo?.occupation === '' && !loaderData?.spotlightButton && !loaderData?.portfolioImage[0] && loaderData?.testimonial?.testimonialText === '' && loaderData?.video?.videoLink === '' && !input?.description ?
        <h4 className={`text-xl leading-8 font-extrabold sm:ml-[-7rem]  ${mode ==='mobile' ? 'xl:text-[36px] xl:leading-10 lg:ml-0' : 'lg:text-[36px] lg:leading-10 2xl:pr-[4rem] xl:ml-[2rem] medium:ml-[0rem] 2xl:ml-[0rem] '} ${nav ? '2xl:ml-[0.5rem] largeLaptop:mr-[0rem]' :''}`}>
        {loaderData?.firstname} {loaderData?.lastname}
      </h4> :
      <h4 className={`text-xl leading-8 font-extrabold sm:ml-[-7rem]  ${mode ==='mobile' ? 'xl:text-[36px] xl:leading-10 lg:ml-0' : 'lg:text-[36px] lg:leading-10 2xl:pr-[4rem] xl:ml-[2rem] medium:ml-[2rem] '} ${nav ? '2xl:ml-[0.5rem]' :''}`}>
      {loaderData?.firstname} {loaderData?.lastname}
    </h4>}

        

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={` text-gray-500 w-max break-all text-xs leading-5 font-medium sm:ml-[-7rem] ${mode ==='mobile' ? 'xl:leading-8 xl:text-gray-600 xl:text-2xl lg:mt-[0.375rem]  lg:ml-0' : 'lg:leading-8 lg:text-gray-600 lg:mt-[0.375rem] lg:text-2xl xl:ml-[2rem] medium:ml-[2.5rem]'}  ${nav ? '2xl:ml-[0.5rem]' :''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={`${mode ==='mobile' ? 'xl:ml-[-4rem]' : 'pr-[6rem] sm:pr-[12rem] lg:pr-[8rem] xl:pr-0 2xl:pr-[44rem] medium:pr-[45rem] largeLaptop:pr-[59rem]'} ${nav ? 'pr-[6rem] lg:pr-[14rem] xl:pr-[12rem] medium:pr-[46rem] large:pr-[61rem] 2xl:pr-[52rem] largeLaptop:pr-[74rem]' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? 'xl:ml-[-4rem]' : 'pr-[6rem] sm:pr-[12rem] lg:pr-[8rem] xl:pr-0 2xl:pr-[44rem] medium:pr-[45rem] largeLaptop:pr-[59rem]'} ${nav ? 'pr-[6rem] lg:pr-[14rem] xl:pr-[12rem] medium:pr-[46rem] large:pr-[61rem] 2xl:pr-[52rem] largeLaptop:pr-[74rem]' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1 ">
          <pre className={`text-gray-700 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[40rem] medium:pr-[44rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem] medium:pr-[29rem] medium:ml-[2rem] largeLaptop:ml-[3rem] 2xl:pr-[29rem] 2xl:ml-[-0.5rem] large:pr-[32rem] largeLaptop:pr-[50rem]' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={` pb-[4rem] flex flex-col ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'} ${nav ? 'sm:ml-[2rem] md:ml-[-7rem] lg:ml-[2rem] lg:pr-[10rem] medium:ml-[2rem] largeLaptop:ml-[3rem] 2xl:ml-[-0.75rem]' : ''}`}>
            <div className={`flex flex-col pt-[2rem] ${mode ==='mobile' ? ' ' : 'xl:flex-row '} ${nav ? 'lg:ml-[-9rem] xl:ml-0 2xl:ml-0' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex md:w-[80%] 2xl:w-[33%] ${mode ==='mobile' ? '2xl:w-[45%] ' : ''} ${nav ? 'large:w-[68%] 2xl:w-[40%] medium:w-[31%]' : ''}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <BriefcaseIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-xs lg:text-base leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[2rem]  ${mode ==='mobile' ? ' ' : 'xl:mt-0 '}`}>
                  <h2 className="text-gray-800 font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem]">
                    <AcademicCapIcon />
                  </h2>
                  <h2 className="text-gray-600 w-max text-xs lg:text-base leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          
          <div className={` mt-[-4rem] ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[40rem] medium:pr-[43rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem] medium:ml-[1.5rem]'} ${nav ? ' large:ml-[-20.5rem] 2xl:pr-[30rem] 2xl:ml-[-0.5rem]' : ''}`}>
          {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
          </div>
        
            <div className={`${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[40rem] medium:pr-[43rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem] medium:ml-[1.5rem]'} ${nav ? 'large:ml-[-20.5rem] pr-[6rem] lg:pr-[8rem] 2xl:pr-[30rem] 2xl:ml-[-0.5rem]' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            
            <div className={`pt-[4rem] ${mode ==='mobile' ? '' : 'pr-[3rem] sm:pr-[6rem] lg:pr-[2rem] xl:pr-0 2xl:pr-[40rem] medium:pr-[43rem] sm:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem] medium:ml-[1.5rem]'} ${nav ? 'large:ml-[-20.5rem] pr-[6rem] lg:pr-[8rem] 2xl:pr-[30rem] 2xl:ml-[-0.5rem]' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>

          <footer className={` pb-[5rem] flex pt-[4rem] w-full lg:pt-[5rem] gap-4 md:gap-8  justify-start ${mode ==='mobile' ? '' : 'medium:w-[40rem] pr-[3rem] sm:pr-0 lg:pr-[2rem] xl:pr-0 2xl:pr-[4rem] sm:ml-[-7rem] lg:ml-[-7rem] xl:ml-[1rem] 2xl:ml-[2.5rem]'}  ${nav ? 'pr-[4rem] lg:pr-[8rem] medium:pr-0 medium:ml-[1.4rem] 2xl:ml-[-0.75rem] largeLaptop:ml-[2.5rem] large:ml-[5rem]' : 'pr-[4rem] lg:pr-0'} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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

      <div className={`mb-4 flex-shrink-0 sm:mb-0 xl:mt-[5.625rem] pr-[1rem] sm:pr-[6rem] w-[65%] ${mode ==='mobile' ? 'lg:ml-[9rem] xl:ml-[14.5rem] 2xl:ml-[6.5rem] medium:ml-[16rem] largeLaptop:ml-[19rem] lg:pr-0 2xl:mr-[2rem] large:mr-[0rem] xl:pl-0 medium:pl-0 medium:max-w-[60rem] largeLaptop:max-w-[45rem] lg:max-w-[20rem] xl:max-w-[35rem] 2xl:max-w-[38rem] 2xl:pl-[3rem]' : '2xl:pl-[6rem] pl-[3rem] lg:pr-[5rem] xl:pr-0 medium:pl-0 xl:mr-[2rem] 2xl:mr-[6rem] lg:max-w-7xl xl:max-w-[32rem] ml-[3rem] sm:ml-[5.5rem] md:ml-[6.5rem] lg:ml-[5.7rem] lg:w-[86%] xl:w-[39%] 2xl:ml-[-40rem] xl:pl-[0rem] sm:pl-[6rem] lg:pl-[8rem] xl:p-[0rem]'} ${nav ? 'xl:pl-[2rem] 2xl:pl-0 lg:w-[47rem] xl:max-w-[35rem] lg:pr-[8rem] lg:pl-[7rem] lg:ml-[5.7rem] 2xl:ml-[-25rem] 2xl:mr-[6rem]' : 'xl:pl-0 '} ${loaderData?.profileInfo?.occupation === '' && !loaderData?.spotlightButton && !loaderData?.portfolioImage[0] && loaderData?.testimonial?.testimonialText === '' && loaderData?.video?.videoLink === '' && !input?.description ? '2xl:ml-[-23rem]' : ''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-lg object-cover ${mode ==='mobile' ? 'lg:h-[30rem] xl:h-[38rem] ' : 'h-auto medium:h-[40rem]'} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? 'lg:h-[45rem] xl:h-[40rem] ' :''} `} src={secondaryRestore === true ? pic4 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>
    </div>  
    </>
  )
} 