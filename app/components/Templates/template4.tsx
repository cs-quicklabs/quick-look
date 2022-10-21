import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import pic3 from '../../../assets/images/templates/pic3.png'
import Background3 from '../../../assets/images/templates/template3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
import PortfolioAddon from './addOns/portfolio'
export default function Template4 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
    const myStyle={
        backgroundImage: 
       `url(${Background3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`ml-[0.1rem] flex overflow-auto scrollbar-hide bg-black ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col p-[3rem] lg:pl-[4rem] xl:pl-[12rem] 2xl:pl-[2rem]' : 'flex-col xl:flex-row pt-[3rem] pb-[5rem] pl-[1rem] sm:pl-[3rem] lg:pl-[8rem] xl:p-[0rem]'}  justify-center bg-no-repeat object-cover overflow-none ${nav? 'flex-col lg:flex-row lg:pl-[1.5rem]' :''}`}>
      <div className={`mb-4 flex-shrink-0 sm:mb-0 rounded-full ${mode ==='mobile' ? '' : ''} ${nav? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-full object-cover p-4 border-4 border-white  ${mode ==='mobile' ? '' : ''} ${nav? 'lg:h-[45rem] xl:h-[40rem]' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? pic3 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>
      <div className={`mt-[1.5rem] ${mode ==='mobile' ? '' : 'lg:w-[55rem]'} ${nav ? '' : ''}`}>
        <h4 className={`text-white text-2xl leading-8 font-bold lg:text-4xl lg:leading-10 lg:font-extrabold ml-[0rem] sm:ml-0 ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-white lg:text-gray-50 w-max break-all text-xs leading-5 font-normal lg:text-2xl lg:leading-8 lg:font-medium ${mode ==='mobile' ? '' : ''}  ${nav ? '' : ''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
       
          <div className={`${mode ==='mobile' ? '' : 'pl-[0rem] pr-[6rem] lg:pr-4'} ${nav ? 'pr-[6rem] lg:pr-[10rem]' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? '' : 'pl-[0rem] pr-[6rem] lg:pr-4 '} ${nav ? 'pr-[6rem] lg:pr-[10rem]' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1">
          <pre className={`text-white lg:text-gray-50 text-xs leading-5 lg:text-lg lg:leading-none  font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        <div className={`gap-20 ml-[0rem] sm:ml-0 pb-[4rem] ${mode ==='mobile' ? '' : 'largeLaptop:pr-[0rem]  large:pr-[54rem] 2xl:pr-[2rem] medium:ml-[0.5rem] 2xl:ml-[0.5rem]'}  ${nav ? 'large:ml-0 xl:pr-[17rem] medium:pr-[24rem] largeLaptop:pr-[47.01rem] large:pr-[77rem] 2xl:ml-[0rem] 2xl:pr-[20rem]' : ''}`}>
            <div className={`flex flex-col pt-4 ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex lg:w-[50%] ${mode ==='mobile' ? '' : 'xl:flex-col'}`} >
                  <h2 className={`text-gray-500 font-medium text-sm leading-5 w-max  ${mode ==='mobile' ? '' : ''}`} >
                    WORK
                  </h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-normal">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className={`flex mt-[0.75rem] ${mode ==='mobile' ? '' : 'xl:flex-col xl:mt-0'}`} >
                  <h2 className= {`text-gray-500 font-medium text-sm leading-5 w-max ${mode ==='mobile' ? '' : ''}`} >
                    EDUCATION
                  </h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-normal">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>

            <div className={`${mode ==='mobile' ? '' : 'pr-[4rem] sm:pr-[6rem] lg:pr-4 large:pr-[6rem]'} ${nav ? 'lg:pr-[7.5rem] large:pr-[14.5rem]' : ''}`}>
            {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
            </div>
        
            <div className={`${mode ==='mobile' ? '' : 'pr-[4rem] sm:pr-[6rem] lg:pr-4 large:pr-[6rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem] large:pr-[14.5rem]' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            
            <div  className={`pt-[4rem] ${mode ==='mobile' ? '' : 'pr-[4rem] sm:pr-[6rem] lg:pr-4 large:pr-[6rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem] large:pr-[14.5rem]' : ''}`}>
              <PortfolioAddon loaderData={loaderData}/>
            </div>
            
          <footer className={`flex w-full gap-4 md:gap-8  justify-start pb-[5rem]  ${nav ? 'pr-[5rem] lg:pr-[8rem]' : 'pr-[4rem] lg:pr-0'} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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