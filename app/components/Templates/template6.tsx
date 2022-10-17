// import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
// import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
// import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import Background6 from '../../../assets/images/templates/template6Vector.png'
import pic6 from '../../../assets/images/templates/pic6.png'
import BannerAddOn from './addOns/Banner'
// import Spotlightbtn from './addOns/Spotlightbtn'
// import TestimonialAddOn from './addOns/testimonial'
// import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
// import AdditionalLinksAddOn from './addOns/AddtionalLinks'
// import {BriefcaseIcon} from '@heroicons/react/outline'
// import {AcademicCapIcon} from '@heroicons/react/outline'
// import PortfolioAddon from './addOns/portfolio'

export default function Template6 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
  const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
   {
    const myStyle={
      backgroundImage: 
     `url(${Background6})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  return(
    <>
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex bg-white`} style={myStyle}>
      <div>
      {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-full object-cover ${mode ==='mobile' ? '' : 'h-auto medium:h-[40rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? pic6 : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
      </div>
      <div>
        I am an art director, software engineer, and web developer at Crownstack currently living in India. My interests range from photography to technology. I am also interested in shopping, painting, and yoga.
      </div>  
    </div>  
    </>
  )
}} 