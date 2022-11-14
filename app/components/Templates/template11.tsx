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
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'

export default function Template11 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
    
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }

    <div className={`flex overflow-auto scrollbar-hide font-inter bg-white overflow-none pb-[1.5rem] ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:items-start xl:justify-start'} ${nav? '' :''}`} >

      <div className={`flex-shrink-0 flex flex-col ${mode ==='mobile' ? 'w-full ' : ''} ${nav? '' :''}`} >

      <div className=''>
        {primaryRestore || loaderData?.profileImage?.primaryImage ? (
            <img
              src={
                primaryRestore
                  ? DefaultCoverPicture
                  : loaderData?.profileImage?.primaryImage
              }
              className={`absolute w-[100%] object-cover ${
                mode === 'mobile' ? 'h-[79vh] med:h-[58vh] medium:h-[69vh] mediumLaptop:h-[45vh]' : 'h-[52vh] md:h-[57vh] lg:h-[75vh] xl:h-[32vh]'
              }`}
              alt=""
            />
          ) : null}
        </div>
        <div
          className={`relative flex flex-col justify-center items-center pt-[7rem] sm:pt-[14rem]  ${
            primaryRestore || loaderData?.profileImage?.primaryImage
              ? ` ${
                  mode === 'mobile'
                    ? 'bottom-[5rem] right-0 lg:right-[1rem] xl:right-0'
                    : 'bottom-[6rem] md:bottom-[12rem]'
                }`
              : 'bottom-[-11rem]'
          } ${mode === 'mobile' ? 'bottom-[5rem] lg:pt-[10rem]' : 'med:ml-[5rem] xl:bg-white xl:h-[35rem] xl:w-[85%] xl:mt-[20rem] xl:pt-[0rem] xl:rounded-md xl:ml-[10rem] xl:shadow-md'}`}
        >
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`flex rounded-full object-cover w-[7rem] h-[7rem] justify-center items-center  ${mode ==='mobile' ? 'lg:w-[12rem] lg:h-[12rem]' : 'lg:pt-[0rem] lg:w-[12rem] lg:h-[12rem] xl:mt-[-9rem] mediumLaptop:w-[12rem] mediumLaptop:h-[12rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
       
        <h4 className={`text-white text-center text-xl leading-8 font-semibold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : 'xl:text-black xl:text-left xl:text-4xl xl:font-extrabold xl:leading-10 '}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-white text-center break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:w-max xl:text-gray-500 mediumLaptop:w-full xl:text-2xl xl:leading-none xl:font-normal xl:mt-[0.5rem] xl:px-[0.75rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}

        <div className={`pb-[1rem] pl-[1rem] pr-[3rem] w-full lg:pl-[2rem]  ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'xl:pl-[1rem] xl:hidden'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
                    <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? '' : 'xl:hidden'}`}>
                    Work
                  </h2>
                  <h2 className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                  <BriefcaseIcon />
                  </h2>
                    <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem] med:w-[65%]'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'} ${nav ? '' : ''}`} >
                    <h2 className={`text-white text-xs leading-5 font-normal w-max  ${mode ==='mobile' ? '' : 'xl:hidden'}`} >
                    Education
                  </h2>
                  <h2 className= {`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                  <AcademicCapIcon />
                    
                  </h2>
                    <h2 className={`text-white w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>

            <footer className={`flex w-full gap-4 md:gap-8 justify-center pb-[3rem] xl:pt-[1rem] ${nav ? '' : ''} `}>
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

      <div className={`flex flex-col justify-center items-center w-[80%] ml-[1.5rem] px-[1rem] sm:ml-[2.5rem] ${mode ==='mobile' ? '' : 'xl:pt-[23rem] med:pt-[27rem] mediumLaptop:pt-[36rem] lg:w-[35rem xl:justify-start xl:items-start mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'} ${(mode !='mobile' && loaderData?.socialMedia?.facebookLink) || (mode !='mobile' && loaderData?.socialMedia?.twitterLink) || (mode !='mobile' && loaderData?.socialMedia?.youtubeLink) ? 'mt-[-7rem] sm:mt-[-13rem] lg:mt-[-10rem] med:mt-[-8rem] medium:mt-[-11rem]' : mode !='mobile' ?  'mt-[-5rem] sm:mt-[-10rem] lg:mt-[-8rem] medium:mt-[-11rem]' : ''} ${(mode ==='mobile' && loaderData?.socialMedia?.facebookLink) || (mode ==='mobile' && loaderData?.socialMedia?.twitterLink) || (mode ==='mobile' && loaderData?.socialMedia?.youtubeLink) ? 'lg:mt-[-5rem] xl:mt-[-4rem] mediumLaptop:mt-[-1.5rem]' : mode ==='mobile' ? 'lg:mt-[-3rem] xl:mt-[-2rem] mediumLaptop:mt-[1.5rem]' : '' } ${nav ? 'lg:w-[90%] xl:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]' : ''}`}>

          <pre className={`text-gray-900 text-xs leading-5 font-normal break-normal font-sans flex text-justify whitespace-pre-wrap lg:text-base ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>

            <div className={`pb-[1rem] pr-[3rem] w-full hidden ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'xl:pl-[0rem] xl:block'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'}`} >
                    <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? '' : 'xl:hidden'}`}>
                    Work
                  </h2>
                  <h2 className={`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                  <BriefcaseIcon />
                  </h2>
                    <h2 className={`text-white text-xs leading-5 font-normal w-max ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem] xl:w-[65%] medium:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex flex-col ${mode ==='mobile' ? '' : 'xl:flex-row'} ${nav ? '' : ''}`} >
                    <h2 className={`text-white text-xs leading-5 font-normal w-max  ${mode ==='mobile' ? '' : 'xl:hidden'}`} >
                    Education
                  </h2>
                  <h2 className= {`text-black font-medium text-sm leading-5 w-[1.125rem] mr-[0.5rem] hidden ${mode ==='mobile' ? '' : 'xl:block'}`} >
                  <AcademicCapIcon />
                    
                  </h2>
                    <h2 className={`text-white w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm xl:text-gray-600 lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>

        <div className=''>
          <div className={` text-center ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && 
            <Spotlightbtn loaderData={loaderData}/>}
            </div>
          

          <div className={`mb-10 ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
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

              <div className='ml-[1.1rem]'>
              <div  className={`${loaderData?.portfolioImage.length > 1 ? 'pt-[4rem]' : 'pt-[0rem]'} ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                <PortfolioAddon loaderData={loaderData}/>
              </div>
              
           
              </div>
              
              
        </div>   

            

         
            
      </div>
    </div>
        
     
    </>
  )
} 