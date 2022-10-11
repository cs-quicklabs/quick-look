import React from 'react'
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
// import './style.scss'
 export default function PortfolioAddon({loaderData}:any) {
 
  
// const images = loaderData?.portfolioImage.map((img:any) => (
//   {
//     original: img.imageUrl
//   }
// ))

  return (
   <>
   <div className='grid grid-cols-6 gap-4'>
   {loaderData?.portfolioImage.map((img:any)=>(
 <img src={img.imageUrl} alt='' className='object-cover h-20 w-40'/>
))}
    </div>
 {/* <ImageGallery
        items={images}
        showBullets={true}
        showIndex={true}
        showThumbnails={false}
        lazyLoad={true}
        showPlayButton={false}
         
       /> */}
    </>
  )
}
