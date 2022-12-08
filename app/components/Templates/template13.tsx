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
export default function Template13 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide font-inter bg-[#F1F6FF] justify-center items-center overflow-none pb-[3rem] ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:items-start xl:justify-around xl:px-[1rem] xl:bg-white mediumLaptop:px-[4rem] largeLaptop:px-[6rem]'} ${nav ? '' : mode !='mobile' ? '' : ''}`} >

      <div className={`flex-shrink-0 flex flex-col justify-center items-center py-[2rem] ${mode ==='mobile' ? 'w-full ' : 'w-full lg:items-center lg:pt-[5rem] lg:pb-[10rem] xl:w-[22rem] xl:items-start med:w-[25rem] mediumLaptop:w-[35rem] largeLaptop:w-[40rem]'} ${nav ? '' : mode !='mobile' ? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-t-lg object-cover w-[15rem] h-[15rem]  ${mode ==='mobile' ? 'lg:w-[25rem] lg:h-[25rem] xl:h-[30rem] med:h-[35rem] med:w-[30rem] mediumLaptop:w-[30rem] mediumLaptop:h-[35rem] largeLaptop:w-[35rem] largeLaptop:h-[40rem]' : 'lg:w-[25rem] lg:h-[25rem] xl:w-[22rem] xl:h-[28rem] xl:rounded-lg med:h-[35rem] med:w-[25rem] mediumLaptop:w-[30rem] mediumLaptop:h-[35rem] largeLaptop:w-[35rem] largeLaptop:h-[40rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>

      <div className={`flex flex-col justify-center items-center w-full px-[2rem] ${mode ==='mobile' ? '' : 'xl:pt-[23rem] xl:px-[0rem]'} 
      ${nav ? 'lg:w-[45rem] xl:w-[32rem] med:w-[35rem] medium:w-[40rem] mediumLaptop:w-[43rem] largeLaptop:w-[46rem]' : mode !='mobile' ? 'lg:w-[35rem] xl:w-[20rem] med:w-[30rem] mediumLaptop:w-[35rem] largeLaptop:w-[43rem]' :  ''}`}>

      <div className={`shadow-lg rounded-lg bg-white mt-[-2rem] w-full ${mode ==='mobile' ? '' : 'lg:mt-[-10rem] med:mt-[-14rem] xl:rounded-none xl:shadow-none xl:w-full'}`} >
          <h4 className={`text-black text-center text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] break-keep ${mode ==='mobile' ? '' : 'xl:w-[50%] xl:text-left xl:text-6xl xl:font-extrabold xl:leading-none xl:border-b-[1px] xl:border-gray-300 xl:pb-[1rem]'}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-gray-600 text-center break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:text-left xl:w-full mediumLaptop:w-full xl:text-2xl xl:leading-8 xl:font-medium xl:mt-[1rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}

            <div className={`pb-[1rem] pl-[1rem] pr-[1.5rem] w-full lg:pl-[2rem] ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'lg:bg-transparent xl:pl-[0rem] xl:hidden'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-[70%] sm:w-max text-xs leading-5 font-normal break-normal mt-[-0.15rem] lg:w-[65%] ${mode ==='mobile' ? 'lg:text-sm xl:w-max' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>
        </div>

        <div className='mt-[1rem]'>

        <div className={`text-center ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && 
            <Spotlightbtn loaderData={loaderData}/>}
            </div>
          

          <div className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
            </div>

        <div className="mt-1">
          <pre className={`text-gray-700 text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {input?.description?.trim()}
            </pre>
          </div>

          <div className={`pb-[1rem] pr-[1.5rem] w-full lg:pl-[2rem] hidden ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'lg:bg-transparent xl:pl-[0rem] xl:block '} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>
         

        <div className=''>
              <div className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.testimonial?.testimonialText && 
            <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} loaderData={loaderData} />
              }
              </div>
          
              <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && 
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />}
              </div>
              
              <div  className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                <PortfolioAddon loaderData={loaderData}/>
              </div>
              
            <footer className={`flex w-full gap-4 md:gap-8  justify-start  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[1rem]' : 'pt-[0rem]'}`}>
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

            

         
            
      </div>
    </div>
    </>
  )
} 