import facebook from '../../../assets/images/fb1.png'
import twitter from '../../../assets/images/twitter1.png'
import youtube from '../../../assets/images/yt1.png'
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
export default function Template16 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
      <div className=''>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
      </div>
    <div className={`relative flex overflow-auto scrollbar-hide font-inter bg-black justify-center items-center overflow-none pb-[3rem] ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:items-start xl:justify-start'} 
    ${nav ? 'xl:gap-[11rem] med:gap-[14rem] medium:gap-[15rem] largeLaptop:gap-[17rem]' : mode !='mobile' ? 'xl:gap-[4rem] med:gap-[9rem] medium:gap-[10rem] largeLaptop:gap-[12rem]' :''}`} >

      <div className={`flex-shrink-0 flex flex-col justify-start items-start h-[25rem] ${mode ==='mobile' ? 'w-full lg:h-[30rem] largeLaptop:h-[40rem]' : 'w-full lg:h-[28rem] xl:pl-[4rem] xl:w-[24rem] xl:h-[100vh] med:pl-[5rem] medium:pl-[7rem] mediumLaptop:w-[30rem] largeLaptop:w-[34rem] largeLaptop:pl-[8rem]'} ${nav? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`absolute object-cover w-full h-[25rem] ${mode ==='mobile' ? 'lg:h-[30rem] largeLaptop:h-[40rem]' : 'lg:h-[28rem] xl:w-[20rem] xl:h-[100vh] med:w-[24rem] mediumLaptop:w-[25rem] largeLaptop:w-[32rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

        {(loaderData?.socialMedia?.facebookLink || loaderData?.socialMedia?.twitterLink || loaderData?.socialMedia?.youtubeLink) && 
        <div className={`relative rounded-lg flex flex-col bg-yellow-500 gap-4 lg:gap-8 px-[0.5rem] py-[0.75rem] lg:px-[1rem] lg:py-[1rem] mt-[8.5rem] ${mode ==='mobile' ? 'lg:mt-[12rem] med:mt-[13rem]' : 'xl:mt-[12.5rem] med:mt-[46vh]'}`}>
        {loaderData?.socialMedia?.facebookLink ?
        <a href={`https://${loaderData?.socialMedia?.facebookLink}`} target='_blank'><img src={facebook} alt="" className="w-6 sm:w-[2rem] lg:w-11 h-auto" /></a> : null}
        {loaderData?.socialMedia?.twitterLink ?
        <a href={`https://${loaderData?.socialMedia?.twitterLink}`} target='_blank'>
          <img src={twitter} alt="" className="w-6 sm:w-[2rem] lg:w-11 h-auto" />
        </a> : null}
        {loaderData?.socialMedia?.youtubeLink ?
        <a href={`https://${loaderData?.socialMedia?.youtubeLink}`} target='_blank'>
          <img src={youtube} alt="" className="w-6 sm:w-[2rem] lg:w-11 h-auto" />

        </a> : null}
      </div> }

      </div>

      <div className={`flex flex-col justify-center items-center w-[90%] px-[1rem] ${mode ==='mobile' ? '' : 'xl:pt-[7rem]'} ${nav ? 'lg:w-[90%] xl:w-[35rem] med:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]' : mode !='mobile' ? 'lg:w-[35rem] xl:w-[25rem] med:w-[30rem] mediumLaptop:w-[37rem] largeLaptop:w-[40rem]' : ''}`}>

      <div className={`w-full ${mode ==='mobile' ? '' : 'xl:rounded-none xl:shadow-none'}`} >
          <h4 className={`text-white text-left text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : 'xl:text-yellow-500 xl:w-[50%] xl:text-left xl:text-6xl xl:font-extrabold xl:leading-none'}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-white text-left break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:w-full mediumLaptop:w-full xl:text-2xl xl:leading-8 xl:font-medium xl:mt-[1rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}

            <div className={` ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && 
            <Spotlightbtn loaderData={loaderData}/>}
            </div>
          

          <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
            </div>

            <div className={`pb-[1rem] w-full ${mode ==='mobile' ? '' : 'lg:bg-transparent xl:hidden'} `}>
              <div className={`flex pt-4 justify-between flex-col ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-white font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-yellow-500'}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-50 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal mt-[-0.15rem] xl:text-base xl:leading-6 xl:font-normal  ${mode ==='mobile' ? 'lg:text-sm xl:w-max' : 'lg:text-white lg:text-sm lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex mt-[1rem] ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-white font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-yellow-500'}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-50 w-max text-xs leading-5 font-normal break-normal xl:text-base xl:leading-6 xl:font-normal ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-white lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>
        </div>

        <div className={`${loaderData?.spotlightButton?.toggleSpotlight ? 'mt-1' : 'mt-[1rem]'}`}>
          <pre className={`text-white text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : 'lg:text-gray-50'} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
          </div>

          <div className={`pb-[1rem] w-full hidden ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'lg:bg-transparent xl:block'} `}>
              <div className={`flex pt-[2rem] justify-between flex-col ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-white font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-yellow-500'}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-50 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-white lg:text-sm lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex mt-[1rem] ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-white font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-yellow-500'}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-50 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-white lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>

        <div className=''>
              <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.testimonial?.testimonialText && 
            <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} loaderData={loaderData} />
              }
              </div>

              {loaderData?.video?.videoLink &&
              <div className={`border border-1 mt-[2rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && 
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />}
              </div>}
              
              
              <div  className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                <PortfolioAddon loaderData={loaderData}/>
              </div>
            
        </div>   

            

         
            
      </div>
    </div>
    </>
  )
} 