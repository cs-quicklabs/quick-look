import pic from '../../../assets/images/pic.png';

import facebook from '../../../assets/images/fb.png';
import twitter from '../../../assets/images/twitter.png';
import youtube from '../../../assets/images/youtube.png';
export default function Template2({ input, loaderData }: any) {
  return (
    <>
    <div className="-mt-12 flex flex-row h-screen font-inter">
      <div className="w-full md:w-3/5 md:h-full lg:w-11/12 text-center text-gray-200">
        <img src={pic} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="flex flex-wrap w-screen md:w-2/5 md:h-full lg:w-6/12 p-4 lg:p-4 xl:p-16 text-gray-700 border border-gray-200">
        <div className='mt-20'>
          <h1 className="text-lg leading-6 font-bold text-gray-900">
          {loaderData.firstname} {loaderData.lastname}
          </h1>
          <p className="text-sm leading-5 font-medium">
          {loaderData.occupation || input.occupation || loaderData.location || input.location  ?
            <h3 className="text-gray-500 w-max break-words">
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}
          </p>
         
        <div className='text-base mt-3 leading-6'>
          <pre className="text-gray-500 pt-2 text-base leading-5 font-normal font-sans flex whitespace-pre-wrap break-all">
         
              { input?.description?.trim()}
            </pre>
         
        </div>
        <div className='flex flex-col mt-4 text-sm'>
          <div className='flex gap-4'>
          {loaderData.company || input.company ?
            <div className='flex flex-col w-[50%]'>
              <h2 className="text-gray-500 font-medium">WORK</h2>
              <h2 className="text-gray-900 break-all">
              {input.company}
              </h2>
              </div> : <span></span>}
              {loaderData.education || input.education ?
            <div className='flex flex-col'>
              <h2 className="text-gray-500 font-medium">EDUCATION</h2>
              <h2 className="text-gray-900 break-all">
              {input.education}
              </h2>
              </div> : <span></span>}
          </div>
        </div>
        <div className='flex gap-4 justify-left mt-6'>
           {loaderData?.facebookLink ?
          <a href={loaderData?.facebookLink} target="_blank">
            <img src={facebook} alt="" className="w-9 h-9"/>
          </a>: null}
          {loaderData?.twitterLink ?
          <a href={loaderData?.twitterLink} target="_blank">
          <img src={twitter} alt="" className="w-9 h-9"/>
          </a>: null}
           {loaderData?.youtubeLink ?
          <a href={loaderData?.youtubeLink} target="_blank">
          <img src={youtube} alt="" className="w-9 h-9"/>
          </a>: null}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}