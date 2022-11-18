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
export default function Template3 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 const myStyle={
  backgroundImage: 
 `url(${Background3})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
  return(
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide lg:justify-start lg:items-start bg-no-repeat object-cover overflow-none ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:gap-[2rem]'} ${nav? '' :''}`} style={myStyle} >

      <div className={`flex-shrink-0 flex flex-col justify-center items-center bg-black py-[2rem] ${mode ==='mobile' ? 'w-full ' : 'w-full lg:items-center xl:py-[10rem] xl:w-[24rem]  mediumLaptop:w-[30rem] largeLaptop:w-[34rem]'} ${nav? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-full object-cover w-[10rem] h-[10rem]   ${mode ==='mobile' ? 'lg:w-[25rem] lg:h-[25rem]' : 'lg:w-[20rem] lg:h-[20rem] mediumLaptop:w-[25rem] mediumLaptop:h-[25rem] largeLaptop:w-[30rem] largeLaptop:h-[30rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

        <h4 className={`text-white text-center text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-white text-center break-normal text-xs leading-5 font-normal lg:text-gray-50 lg:text-base ${mode ==='mobile' ? '' : 'lg:w-max mediumLaptop:w-full'}  ${nav ? 'lg:w-full' : ''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

          <div className={`pb-[1rem]  bg-black w-full lg:pl-[2rem] ${mode ==='mobile' ? '' : 'lg:bg-transparent xl:hidden'} `}>
            <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : ''} ${nav ? 'lg:gap-[10rem]' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex flex-col lg:w-[50%] ${mode ==='mobile' ? '' : ''}`} >
                  <h2 className={`text-white w-max text-xs leading-5 font-normal lg:text-sm  ${mode ==='mobile' ? '' : 'xl:leading-5 xl:font-medium xl:text-gray-600'}`} >
                    WORK
                  </h2>
                  <h2 className={`text-gray-100 w-max text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'xl:text-sm' : 'xl:text-sm xl:text-black'}`} >
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex flex-col  ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`} >
                  <h2 className= {`text-white w-max text-xs leading-5 font-normal  ${mode ==='mobile' ? 'xl:text-sm' : 'xl:text-sm xl:leading-5 xl:font-medium xl:text-gray-600'}`} >
                    EDUCATION
                  </h2>
                  <h2 className={`text-gray-100 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'xl:text-sm' : 'xl:text-sm xl:text-black'}`} >
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>

      </div>

      <div className={`w-full px-[1rem] ${mode ==='mobile' ? 'lg:pl-[3rem] lg:pr-[2rem]' : 'lg:pl-[3rem] lg:pr-[1rem] lg:w-[40rem] xl:pt-[14rem] xl:w-[28rem] xl:pl-[0rem] xl:pr-[0rem] med:w-[33rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem] large:w-[60rem]'} ${nav ? 'mediumLaptop:w-[45rem] largeLaptop:w-[50rem]' : ''}`}>

      <div className={`flex ${mode ==='mobile' ? 'flex-col-reverse' : 'flex-col-reverse lg:flex-col'}`} >
        <div className="mt-1 ">
          <pre className={`text-gray-700 text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
          </div>
          <div className={`pb-[1rem]  bg-black w-full hidden ${mode ==='mobile' ? 'lg:mt-[-1rem]' : 'lg:bg-transparent xl:block'} `}>
            <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : ''} ${nav ? 'lg:gap-[10rem]' : ''}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex flex-col lg:w-[50%] ${mode ==='mobile' ? '' : ''}`} >
                  <h2 className={`text-white w-max text-xs leading-5 font-normal lg:text-sm  ${mode ==='mobile' ? '' : 'lg:leading-5 lg:font-medium lg:text-gray-600'}`} >
                    WORK
                  </h2>
                  <h2 className={`text-gray-100 w-max text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black'}`} >
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex flex-col  ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`} >
                  <h2 className= {`text-white w-max text-xs leading-5 font-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:leading-5 lg:font-medium lg:text-gray-600'}`} >
                    EDUCATION
                  </h2>
                  <h2 className={`text-gray-100 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black'}`} >
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
        </div>

        <div className=''>
          <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && 
            <Spotlightbtn loaderData={loaderData}/>}
            </div>
          

          <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
            </div>

              <div className={`mb-[2rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
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
              
            <footer className={`flex w-full gap-4 md:gap-8  justify-start pb-[5rem]  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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
    </>
  )
} 