import React from 'react'
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
// import '../../../styles/tailwind.css'

 export default function PortfolioAddon({loaderData}:any) {
 
  console.log(loaderData)
const images = loaderData?.portfolioImage.map((img:any) => (
  {
    original: img.imageUrl
  }
))
const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
  return (
   <div className='img'>
 
   <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
    {/* <div className='grid grid-cols-4  gap-4 items-center'> */}
   {loaderData.portfolioImage.map((img:any)=>(
        <a
          data-lg-size="1406-1390"
          className="gallery-item"
          data-src={img.imageUrl}
          
        >
          <img
            className="img-responsive"
            src={img.imageUrl}
          />
        </a>

))}
{/* </div> */}
      </LightGallery>
    </div>
  )
}
