import facebook from '../../../assets/images/fb1.png'
import twitter from '../../../assets/images/twitter 1.png'
import youtube from '../../../assets/images/yt1.png'
import bgimage from '../../../assets/images/bg.png'


export default function Template1({ input, loaderData }: any) {
  return (
    <div className='flex  overflow-hidden'>

      <div >
        <div className='h-[10rem]'>
          <div className='relative '>
            <img className='h-[10rem] w-screen object-cover' src={bgimage} alt="" />
          </div>
          <div className='relative top-[-4rem]  md:pl-[11rem]   lg:pl-[12.5rem]'>
            <img className='w-[7rem] md:w-32 border-4 border-white rounded-full shadow-lg shadow-white' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
          </div>
        </div>
        <div className='m-auto pt-1 px-[7rem] md:px-[19rem]  lg:px-[21rem]'>
          <h1 className='text-2xl leading-8 font-bold text-gray-900 w-max '>
            {loaderData.firstname} {loaderData.lastname}
          </h1>
          {loaderData.occupation || input.occupation ||input.location ||loaderData.location ?
            <h3 className="text-gray-500 w-max break-all">
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}
        </div>
        <div className='pl-[5rem] pr-[8rem] md:pl-[13rem] lg:px-[14rem] md:pr-[22rem] '>
          <div className='m-auto  pt-[2.5rem] flex flex-wrap'>
            <pre className="text-gray-500 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap break-all">
         
              { input?.description?.trim()}
            </pre>
          </div>
          <div className='flex flex-col gap-20'>
            <div className='flex  pt-16 '>
              {loaderData.company || input.company ?
                <div className='flex flex-col w-[50%]'>
                  <h2 className="text-gray-500 font-medium text-sm leading-5 w-max">WORK</h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-all">
                    {input.company}
                  </h2>
                </div> : <span></span>}
              {loaderData.education || input.education ?
                <div className='flex flex-col'>
                  <h2 className="text-gray-500 font-medium text-sm leading-5 w-max">EDUCATION</h2>
                  <h2 className="text-gray-900 w-max text-sm leading-5 font-normal break-all">
                    {input.education}
                  </h2>
                </div> : <span></span>}
            </div>
          </div>
          <footer className='flex pt-[2rem] lg:pt-[5rem] gap-4 md:gap-4 w-[40%] justify-center mx-[3.4rem] md:mx-[3.5rem]  lg:mx-[4.1rem]'>
            {loaderData?.facebookLink ?
            <a href="http://www.facebook.com"><img src={facebook} alt="" className="w-9 md:w-11 h-auto" /></a> : null}
             {loaderData?.twitterLink ?
            <a href="http://www.twitter.com">
              <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
            </a> : null}
            {loaderData?.youtubeLink ?
            <a href="http://www.youtube.com">
              <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />

            </a> : null}
          </footer>
        </div>

      </div>
    </div>
  )
}