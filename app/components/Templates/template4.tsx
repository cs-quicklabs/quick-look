import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
export default function Template4 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`lg:pl-[0.1rem] flex overflow-auto scrollbar-hide bg-black pb-[3rem] ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:pt-[3rem] xl:gap-[4rem] xl:flex-row med:gap-[5rem] mediumLaptop:gap-[7rem]'}  justify-center bg-no-repeat object-cover overflow-none ${nav? 'lg:gap-[12rem] mediumLaptop:gap-[12rem] largeLaptop:gap-[15rem]' :''}`}>
      <div className={`pt-[1rem] pb-[0.5rem] flex-shrink-0 flex justify-center items-center ${mode ==='mobile' ? 'lg:pb-[0rem] lg:pt-[1.5rem]' : 'sm:mb-0 lg:pb-[0rem] lg:pt-[1.5rem] lg:items-start'} ${nav? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-full object-cover border-[0.3rem] border-white w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem]   ${mode ==='mobile' ? 'lg:w-[20rem] lg:h-[20rem] med:w-[25rem] med:h-[25rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]' : 'lg:w-[20rem] lg:h-[20rem] xl:p-4 med:w-[25rem] med:h-[25rem] mediumLaptop:w-[25rem] mediumLaptop:h-[25rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>

      <div className={`lg:mt-[1.5rem] pl-[1rem] pr-[2rem] w-full ${mode ==='mobile' ? 'lg:pr-[2.5rem] lg:pl-[4rem] xl:pl-[5rem] med:pr-[3.5rem] med:pl-[4rem]' : 'lg:pr-[3rem] lg:pl-[4rem] xl:pr-0 xl:pl-0 xl:w-[25rem] med:w-[30rem] medium:w-[32rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'} ${nav ? '' : ''}`}>
        <h4 className={`text-white text-center text-2xl leading-8 font-bold lg:text-4xl lg:leading-10 lg:font-extrabold ml-[0rem] sm:ml-0 ${mode ==='mobile' ? '' : 'xl:text-start'}  ${nav ? '' : ''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-white text-center  break-normal text-xs leading-5 font-normal lg:text-gray-50 lg:text-2xl lg:leading-8 lg:font-medium ${mode ==='mobile' ? '' : 'xl:text-start xl:w-max mediumLaptop:w-full'}  ${nav ? 'xl:w-full' : ''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={` text-center ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

          <div className={`flex flex-col-reverse ${mode ==='mobile' ? '' : 'xl:flex-col'}`} >
            <div className={` ${ loaderData?.spotlightButton?.toggleSpotlight ? 'mt-[1.5rem] xl:mt-[0rem]' : 'mt-[2rem]'}`} >
            <pre className={`text-white lg:text-gray-50 text-xs leading-5 lg:text-lg lg:leading-none  font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                { input?.description?.trim()}
              </pre>
          </div>

          <div className={` ${mode ==='mobile' ? 'xl:pb-[1rem]' : 'xl:pt-[1rem]'} `}>
              <div className={`flex flex-col ${mode ==='mobile' ? 'flex-col' : 'xl:flex-row xl:gap-[5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex lg:w-[50%] ${mode ==='mobile' ? 'flex-col' : 'flex-col'}`} >
                    <h2 className={`text-white lg:text-gray-50 font-medium text-sm leading-5 w-max  ${mode ==='mobile' ? '' : ''}`} >
                      WORK
                    </h2>
                    <h2 className={`text-gray-100 lg:text-gray-50 w-max text-sm leading-5 font-normal break-normal ${mode ==='mobile' ? '' : 'xl:w-[65%]'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex mt-[1.5rem]  ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:mt-[0rem]'} ${nav ? '' : ''}`} >
                    <h2 className= {`text-white lg:text-gray-50 font-medium text-sm leading-5 w-max ${mode ==='mobile' ? '' : ''}`} >
                      EDUCATION
                    </h2>
                    <h2 className="text-gray-100 lg:text-gray-50 w-max text-sm leading-5 font-normal break-normal">
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>
          </div>

            <div className={`mb-[2rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} loaderData={loaderData} />
            }
            </div>
        
            <div className={`border border-1 ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />}
            </div>
            
            <div  className={` ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>
            
          <footer className={`flex w-full gap-4 md:gap-8  justify-start  ${nav ? '' : ''} ${ loaderData?.portfolioImage[0] ? 'pt-[1.5rem]' : 'pt-[0rem]'}`}>
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
} 