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
export default function Template3 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  console.log(mode);
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
    const myStyle={
        backgroundImage: 
       `url(${Background3})`,
        height:`${nav ?'96.5vh' :'90.5vh'}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex  ${mode ==='mobile' ? 'flex-col' : 'lg:flex-row flex-col'}  justify-center items-center bg-no-repeat object-cover overflow-none`} style={myStyle}>
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-[4rem]">

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`h-[38rem] ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}`} src={secondaryRestore === true ? pic3 : loaderData?.profileImage?.secondaryImage}  /> : null}

      </div>
      <div className='mt-[3.75rem]'>
        <h4 className="text-2xl leading-8 font-bold">
          {loaderData?.firstname} {loaderData?.lastname}
        </h4>

        {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
          <h3 className="text-gray-600 w-max break-all text-base leading-5 font-normal ">
            {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
          </h3> : <span></span>}

        <div >
        <div className='flex flex-col gap-20'>
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

        {loaderData?.spotlightButton?.toggleSpotlight && 
          <Spotlightbtn loaderData={loaderData}/>}
        </div>

        <div className="mt-1">
          <pre className="text-gray-500 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap break-all">
              { input?.description?.trim()}
            </pre>
        </div>

        {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}

<footer className='flex pt-[2rem] w-full lg:pt-[5rem] gap-4 md:gap-8  justify-center'>
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