import picture from '../../../assets/images/picture.png';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import facebook from '../../../assets/images/logos/facebook_logo.png';
import twitter from '../../../assets/images/logos/twitter_logo.png';
import youtube from '../../../assets/images/logos/youtube_logo.png';

export default function Template2() {
  return (
    <>
    <div className="flex flex-wrap justify-center min-h-screen">
      <div className="w-full md:w-3/5 text-center text-gray-200">
        <img src={picture} className="h-full w-full" alt="" />
      </div>

      <div className="w-full md:w-2/5 p-4 text-gray-700 border border-gray-200">
        <div className='mt-20'>
          <h1 className="text-base font-medium leading-6">Diksha Grover</h1>
          <p className="text-xs leading-3">Front-end Developer</p>
 
          <div className='mt-3'>
            <button
                type="button"
                className="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <MenuAlt1Icon className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
                Read my blog
              </button>
          </div>
        <div className='text-xs mt-4 leading-4'>
          <p className='pt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti, accusantium, dolor quibusdam incidunt magnam officia aliquid!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci similique numquam sapiente, corporis exercitationem nihil?
          </p>
          <p className='pt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam, temporibus mollitia rerum qui nemo ipsum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet ullam recusandae at, optio quidem temporibus.
          </p>
        </div>

        <div className='flex flex-col mt-4 text-xs'>
          <div className='flex'>
            <div className='flex flex-col w-[50%]'>
              <h2 className="text-gray-900">WORK</h2>
              <h2 className="text-gray-600">
                CrownStack
              </h2>
            </div>
            <div className='flex flex-col'>
              <h2 className="text-gray-900">EDUCATION</h2>
              <h2 className="text-gray-600">
                Oxford
              </h2>
            </div>
          </div>
        </div>
        
        <div className='flex gap-4 justify-left mt-6'>
          <a href="http://www.facebook.com">
            <img src={facebook} alt="" className="w-5 h-5"/>
          </a>
          <a href="http://www.twitter.com"> 
          <img src={twitter} alt="" className="w-5 h-5"/>
          </a>
          <a href="http://www.youtube.com">
          <img src={youtube} alt="" className="w-5 h-5"/>

          </a>
        </div>
            
        </div>
      </div>
    </div>
    </>
  )
}