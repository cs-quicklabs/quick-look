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
export default function Template6 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
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
    <div className={`ml-[0.1rem] flex overflow-auto scrollbar-hide  ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col p-[3rem] lg:pl-[4rem] xl:pl-[12rem] 2xl:pl-[2rem]' : 'flex-col xl:flex-row pt-[3rem] pb-[5rem] pl-[1rem] sm:pl-[3rem] lg:pl-[8rem] xl:p-[0rem]'}  justify-center bg-no-repeat object-cover overflow-none ${nav? 'flex-col lg:flex-row lg:pl-[1.5rem]' :''}`} style={myStyle}>
      <div className={`mb-4 flex-shrink-0 sm:mb-0 ${mode ==='mobile' ? 'lg:pl-[2rem] xl:pl-[7rem]  xl:mt-[5.625rem] lg:max-w-[25rem] xl:max-w-[32rem]  2xl:max-w-[47rem] medium:max-w-[60rem] medium:pl-[13rem] 2xl:pl-[4rem] largeLaptop:pl-[15rem] large:pl-[3rem]' : 'pl-[2.5rem] sm:pl-[3rem] xl:mt-[5.625rem] mr-[4rem] ml-[0rem] sm:mr-[6rem] sm:ml-[-1rem] md:ml-0 lg:max-w-7xl xl:max-w-[35rem] 2xl:ml-[0rem] xl:pl-[2rem]'} ${nav? 'xl:pl-[2rem] 2xl:pl-0 lg:w-[29rem] xl:max-w-[35rem] lg:mx-[1.625rem] xl:mx-[5.625rem] medium:mx-[5.625rem] largeLaptop:mx-[10.625rem] large:mx-[12.625rem] 2xl:ml-[7rem]' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-lg object-cover ${mode ==='mobile' ? 'lg:h-[30rem] xl:h-[38rem]' : 'h-auto medium:h-[40rem]'} ${nav? 'lg:h-[45rem] xl:h-[40rem]' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? pic3 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>
      <div className={`mt-[1.5rem] ${mode ==='mobile' ? 'xl:mt-[2.5rem] large:mt-[9.5rem] xl:ml-[0rem] medium:ml-[9rem] 2xl:ml-[1rem] largeLaptop:ml-[3rem]' : 'xl:mt-[9.5rem] lg:w-[25rem] largeLaptop:mr-[5rem] largeLaptop:w-[43rem]'} ${nav ? 'lg:w-[55rem]' : ''}`}>
        <h4 className={`text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 ${mode ==='mobile' ? '' : '2xl:pr-[4rem] medium:ml-[0.5rem] 2xl:ml-[0.5rem]'}  ${nav ? 'large:ml-0 2xl:ml-[0rem]' : ''}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-gray-600 w-max break-all text-xs leading-5 font-normal ml-[0rem] sm:ml-0 ${mode ==='mobile' ? 'xl:text-base' : 'lg:text-base 2xl:pr-[4rem] medium:ml-[0.5rem] 2xl:ml-[0.5rem] '}  ${nav ? 'large:ml-0 2xl:ml-[0rem]' : ''} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
        <div className={`gap-20 ml-[0rem] sm:ml-0 pb-[4rem] ${mode ==='mobile' ? '' : 'largeLaptop:pr-[0rem]  large:pr-[54rem] 2xl:pr-[2rem] medium:ml-[0.5rem] 2xl:ml-[0.5rem]'}  ${nav ? 'large:ml-0 xl:pr-[17rem] medium:pr-[24rem] largeLaptop:pr-[47.01rem] large:pr-[77rem] 2xl:ml-[0rem] 2xl:pr-[20rem]' : ''}`}>
            <div className={`flex flex-col pt-4 ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
              {loaderData?.profileInfo?.company || input.company ?
                <div className={`flex lg:w-[50%] ${mode ==='mobile' ? '' : 'xl:flex-col'}`} >
                  <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:hidden'}`}>
                    <BriefcaseIcon />
                  </h2>
                  <h2 className={`text-gray-500 font-medium text-sm leading-5 w-max hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                    WORK
                  </h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-normal">
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
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-normal">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          <div className={`${mode ==='mobile' ? '' : 'pl-[0rem] pr-[6rem] lg:pr-4'} ${nav ? 'pr-[6rem] lg:pr-[10rem]' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? '' : 'pl-[0rem] pr-[6rem] lg:pr-4 '} ${nav ? 'pr-[6rem] lg:pr-[10rem]' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1">
          <pre className={`text-gray-500 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : 'pr-[4rem] sm:pr-[6rem] lg:pr-4 medium:pr-[2rem] 2xl:pr-[2rem] large:pr-[6rem] medium:ml-[0.5rem] 2xl:ml-[0.5rem] '} ${nav ? 'pr-[6rem] lg:pr-[8rem] 2xl:pr-[8.01rem] medium:pr-[8rem] large:pr-0 large:ml-0 large:w-[86%] 2xl:ml-[0.5rem]' : ''}`}>
              { input?.description?.trim()}
            </pre>
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