import facebook from '../../../assets/images/fb.png'
import twitter from '../../../assets/images/twitter.png'
import youtube from '../../../assets/images/youtube.png'
import pic3 from '../../../assets/images/templates/pic3.png'
import Background3 from '../../../assets/images/templates/template3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
export default function Template3 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
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
    <div className={`flex overflow-auto ${nav ?'h-[96.5vh]' : 'h-[95.5vh] '} ${mode ==='mobile' ? 'flex-col p-[3rem] lg:pl-[6rem] xl:pl-[14rem] 2xl:pl-[4rem] 2xl:flex-row' : 'flex-col xl:flex-row py-[5rem] pl-[6rem] lg:pl-[8rem] xl:p-[0rem]'}  justify-center bg-no-repeat object-cover overflow-none`} style={myStyle}>
      <div className={`mb-4 flex-shrink-0 sm:mb-0 sm:mr-[4rem] ${mode ==='mobile' ? '' : 'lg:mt-[5.625rem]'}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`${mode ==='mobile' ? 'xl:pl-0 lg:h-[30rem] xl:h-[38rem] lg:max-w-[25rem] xl:max-w-[35rem]' : 'lg:max-w-7xl xl:max-w-[35rem] h-auto 2xl:ml-[2rem] xl:pl-[7rem]'} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''} ${nav? 'xl:pl-[2rem] 2xl:pl-0 lg:w-[47rem] lg:h-[45rem] xl:h-[40rem] xl:max-w-[35rem] ' :'xl:pl-0 2xl:pl-[2rem]'} `} src={secondaryRestore === true ? pic3 : loaderData?.profileImage?.secondaryImage}  /> : null}

      </div>
      <div className='mt-[9.5rem]'>
        <h4 className={`text-2xl leading-8 font-bold ${mode ==='mobile' ? '' : '2xl:pr-[4rem] 2xl:ml-[2.5rem]'}`}>
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className={`text-gray-600 w-max break-all text-base leading-5 font-normal ${mode ==='mobile' ? '' : '2xl:pr-[4rem] 2xl:ml-[2.5rem]'} `} >
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
        <div className={`flex flex-col gap-20 ${mode ==='mobile' ? '' : '2xl:pr-[4rem] 2xl:ml-[2.5rem]'}`}>
            <div className='flex  pt-4 '>
              {loaderData?.profileInfo?.company || input.company ?
                <div className='flex flex-col w-[50%]'>
                  <h2 className="text-gray-500 font-medium text-sm leading-5 w-max">WORK</h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData?.profileInfo?.education || input.education ?
                <div className='flex flex-col'>
                  <h2 className="text-gray-500 font-medium text-sm leading-5 w-max">EDUCATION</h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          <div className={`${mode ==='mobile' ? '' : 'pr-[6rem] lg:pr-4'} ${nav ? 'pr-[8rem] lg:pr-[10rem]' : ''}`}>
          {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
          </div>
       
        </div>

        <div className={`mb-10 ${mode ==='mobile' ? '' : 'pr-[6rem] lg:pr-4 '} ${nav ? 'pr-[8rem] lg:pr-[10rem]' : ''}`}>
            { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
          </div>

        <div className="mt-1">
          <pre className={`text-gray-500 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify ${mode ==='mobile' ? '' : 'pr-[6rem] lg:pr-4 2xl:pr-[4rem] 2xl:ml-[2.5rem]'} ${nav ? 'pr-[6rem] lg:pr-[8rem]' : ''}`}>
              { input?.description?.trim()}
            </pre>
        </div>

        {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
            <div className={`${mode ==='mobile' ? '' : 'pr-[6rem] lg:pr-4'} ${nav ? 'pr-[6rem] lg:pr-[8rem]' : ''}`}>
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
            </div>
            

<footer className={`flex pt-[4rem] w-full lg:pt-[5rem] gap-4 md:gap-8  justify-center  ${nav ? 'pr-[7rem] lg:pr-[8rem]' : 'pr-[4rem] lg:pr-0'}`}>
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