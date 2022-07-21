import facebook from '../../../assets/images/logos/facebook_logo.png'
import twitter from '../../../assets/images/logos/twitter_logo.png'
import youtube from '../../../assets/images/logos/youtube_logo.png'
import bgimage from '../../../assets/images/background-template.jpg'

type props = {
  occupation?: string, 
  company?: string, 
  education?: string, 
  bio?: string,
  firstname?: any,
  location?: string,
  lastname?: any,
  input?:any
  loaderData?:any
}
export default function Template1({ firstname, lastname, occupation, company, education, bio, location,input,loaderData }: props) {
  return (
    <div className='flex pl-0 md:pl-[129px]'>

      <div >
        <div>
          <div className='relative '>
            {/* Cover picture */}
            <img className='h-[16rem] w-screen object-cover' src={bgimage} alt="" />
          </div>
          <div className='absolute top-[15rem] left-[6rem] md:left-[29.5rem] lg:left-[36.5rem]'>
            <img className='w-32 border-4 border-white rounded-full shadow-lg shadow-white' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
          </div>
        </div>
        {/* <div className='px-[11rem] md:px-[14rem] lg:px-[21rem]'> */}
        <div className='m-auto  pt-1 px-[11rem] md:px-[14rem] lg:px-[21rem]'>
          <h1 className='text-2xl font-semibold text-gray-900'>
            {firstname} {lastname}
          </h1>
          {occupation || input.occupation ?
          <h3 className="text-gray-500 w-max">
            I am a {occupation ? occupation : input.occupation}
          </h3> : <span></span>}
        </div>
        <div className='px-[5rem] md:px-[8rem] lg:px-[14rem]'>
          <div className='m-auto  pt-16'>
            <p className="text-gray-500">
              { bio ? bio : input.description}
            </p>
          </div>
          <div className='flex flex-col gap-20'>
            <div className='flex  pt-16'>
              {company || input.company ?
              <div className='flex flex-col w-[50%]'>
                <h2 className="text-gray-500 w-max">WORK</h2>
                <h2 className="text-gray-900 w-max">
                  { company ? company :input.company }
                </h2>
              </div>: <span></span>}
              {education || input.education ?
              <div className='flex flex-col'>
                <h2 className="text-gray-500 w-max">Education</h2>
                <h2 className="text-gray-900 w-max">
                  { education ? education : input.education}
                </h2>
              </div>: <span></span>}
              </div>
          </div>
          <footer className='flex pt-[2rem] md:pt-[5rem] gap-4 md:gap-8 w-[40%] justify-center mx-[4.6rem]  md:mx-[5rem]'>
            <a href="http://www.facebook.com"><img src={facebook} alt="" className="w-9 md:w-11 h-auto" /></a>
            <a href="http://www.twitter.com">
              <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
            </a>
            <a href="http://www.youtube.com">
              <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />

            </a>
          </footer>
        </div>

      </div>
    </div>
  )
}