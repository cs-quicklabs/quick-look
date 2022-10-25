import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import pic3 from '../../../assets/images/templates/pic3.png'
import Background3 from '../../../assets/images/templates/template3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
import PortfolioAddon from './addOns/portfolio'
export default function Template6 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
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
    <div></div>
    </>
  )
}} 