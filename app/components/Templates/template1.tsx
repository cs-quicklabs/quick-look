import facebook from '../../../assets/images/fb1.png'
import twitter from '../../../assets/images/twitter1.png'
import youtube from '../../../assets/images/yt1.png'
import bgimage from '../../../assets/images/bg.png'
import defaultimg from '../../../assets/images/profile.png'
import TestimonialAddOn from './addOns/testimonial';
import VideoAddOn from './addOns/video'
import Spotlightbtn from './addOns/Spotlightbtn'
export default function Template1({ input, loaderData,primaryRestore,secondaryRestore }: any) {
  return (
    <div className='flex  overflow-hidden'>

      <div >
        <div className='h-[10rem]'>
          <div className='relative '>
            <img className={` w-screen object-cover ${loaderData.profileImage.primaryImage || primaryRestore === true ? 'h-[10rem]' : ''}`} src={primaryRestore === true ? bgimage : loaderData.profileImage.primaryImage} alt="" />
          </div>
          <div className={`relative   md:pl-[11rem]   lg:pl-[12.5rem] ${ loaderData.profileImage.primaryImage || primaryRestore === true ? 'top-[-4rem]' : 'top-[6rem]'}`}>
            {secondaryRestore || loaderData.profileImage.secondaryImage ?
            <img className={`w-[7rem] h-[8rem] md:w-32  rounded-full shadow-lg shadow-white ${loaderData.profileImage.secondaryImage || secondaryRestore === true ? 'border-4 border-white' :''}`} src={secondaryRestore === true ? defaultimg : loaderData.profileImage.secondaryImage}  /> : null}
            {/* src={secondaryRestore === true ? 'http://localhost:3000/build/_assets/profile-HAI7W636.png' : loaderData.profileImage.secondaryImage}  */}
          </div>
        </div>
        <div className='m-auto pt-1 px-[7rem] md:px-[19rem]  lg:px-[21rem]'>
          <h1 className='text-2xl leading-8 font-bold text-gray-900 w-max '>
            {loaderData.firstname} {loaderData.lastname}
          </h1>
          {loaderData.profileInfo.occupation || input.occupation ||input.location ||loaderData.profileInfo.location ?
            <h3 className="text-gray-500 w-max break-all">
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}
        </div>
        {loaderData?.spotlightButton?.toggleSpotlight &&
          <Spotlightbtn loaderData={loaderData}/>}
        
        <div className='pl-[5rem] pr-[8rem] md:pl-[13rem] lg:px-[14rem] md:pr-[22rem] '>
          <div className='m-auto  pt-[2.5rem] flex flex-wrap'>
            <pre className="text-gray-500 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap break-all">
         
              { input?.description?.trim()}
            </pre>
          </div>
            {loaderData?.testimonial?.testimonialText && 
           <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} />
            }
            {loaderData?.video?.videoLink && 
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />}
          <div className='flex flex-col gap-20'>
            <div className='flex  pt-16 '>
              {loaderData.profileInfo.company || input.company ?
                <div className='flex flex-col w-[50%]'>
                  <h2 className="text-gray-500 font-medium text-sm leading-5 w-max">WORK</h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData.profileInfo.education || input.education ?
                <div className='flex flex-col'>
                  <h2 className="text-gray-500 font-medium text-sm leading-5 w-max">EDUCATION</h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          <footer className='flex pt-[2rem] lg:pt-[5rem] gap-4 md:gap-4 w-[40%] justify-center mx-[3.4rem] md:mx-[3.5rem]  lg:mx-[4.1rem] '>
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
  )
}