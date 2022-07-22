import pic from '../../../assets/images/pic.png';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import facebook from '../../../assets/images/fb.png';
import twitter from '../../../assets/images/twitter.png';
import youtube from '../../../assets/images/youtube.png';

export default function Template2({ input, loaderData }: any) {


  return (
    <>
    <div className="-mt-12 flex max-h-screen overflow-y-auto w-screen h-screen">
      <div className="w-full md:w-3/5 text-center text-gray-200 h-full bg-red-700">
        <img src={pic} className="h-full w-full object-cover" alt="" />
      </div>

      <div className="w-full md:w-2/5 h-full p-16 text-gray-700 border border-gray-200 overflow-hidden">
        <div className='mt-20'>
          <h1 className="text-lg font-semibold leading-6">
          {loaderData.firstname} {loaderData.lastname}
          </h1>
          <p className="text-sm leading-5 font-medium">
          {loaderData.occupation || input.occupation ?
            <h3 className="text-gray-500 w-max">
              {input.occupation}
            </h3> : <span></span>}
          </p>
 
          <div className='mt-4'>
            <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <MenuAlt1Icon className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
                Read my blog
              </button>
          </div>
        <div className='text-base mt-3 leading-6'>
          <p className='pt-2'>
            {input.description}
          </p>
        </div>

        <div className='flex flex-col mt-4 text-sm'>
          <div className='flex'>
          {loaderData.company || input.company ?
            <div className='flex flex-col w-[50%]'>
              <h2 className="text-gray-900 font-medium">WORK</h2>
              <h2 className="text-gray-600">
              {input.company}
              </h2>
              </div> : <span></span>}
              {loaderData.education || input.education ?
            <div className='flex flex-col'>
              <h2 className="text-gray-900 font-medium">EDUCATION</h2>
              <h2 className="text-gray-600">
              {input.education}
              </h2>
              </div> : <span></span>}
          </div>
        </div>
        
        <div className='flex gap-4 justify-left mt-6'>
          <a href="http://www.facebook.com">
            <img src={facebook} alt="" className="w-9 h-9"/>
          </a>
          <a href="http://www.twitter.com"> 
          <img src={twitter} alt="" className="w-9 h-9"/>
          </a>
          <a href="http://www.youtube.com">
          <img src={youtube} alt="" className="w-11 h-9"/>

          </a>
        </div>
            
        </div>
      </div>
    </div>
    </>
  )
}

function calc(arg0: number, rem: any) {
  throw new Error('Function not implemented.');
}
