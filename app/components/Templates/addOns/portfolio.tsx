import React from 'react'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
// import '../../../styles/tailwind.css'

export default function PortfolioAddon({ loaderData, mode }: any) {
  const images = loaderData?.portfolioImage.map((img: any) => ({
    original: img.imageUrl,
  }))
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }
  // grid-cols-3 md:grid-cols-5
  return (
    <div className="img mt-8">
      <LightGallery
         elementClassNames={`grid gap-4 ${
          mode === 'mobile' ? 'grid-cols-2 w-[20rem] lg:w-full lg:grid-cols-3' : ''
        } ${
          loaderData.portfolioImage.length == 1
            ? 'grid-cols-1'
            : loaderData.portfolioImage.length == 2
            ? 'grid-cols-2'
            : loaderData.portfolioImage.length == 3
            ? 'grid-cols-3'
            : loaderData.portfolioImage.length == 4
            ? 'grid-cols-4'
            : loaderData.portfolioImage.length >= 5
            ? 'grid-cols-5'
            : ''
        }
        ${
          mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '10' ? 'grid-cols-2 w-[20rem] lg:w-full lg:w-full lg:grid-cols-3'  : loaderData?.profileInfo?.templateNumber == '10' ? 'grid-cols-2 w-[20rem] lg:w-full lg:grid-cols-3' : ''
        }
        ${
          mode === 'mobile' && loaderData?.profileInfo?.templateNumber == '14' ? 'grid-cols-2 w-[20rem] lg:w-[75%] xl:w-full'  : loaderData?.profileInfo?.templateNumber == '14' ? 'w-[90%]' : ''
        }`}
        counter
        animateThumb={false}
        zoomFromOrigin={false}
        allowMediaOverlap={true}
        toggleThumb={true}
        thumbnail={true}
        plugins={[lgZoom, lgVideo]}
        mode="lg-slide"
      >
        {/* <div  className='grid grid-cols-4  gap-4 items-center'> */}
        {loaderData.portfolioImage.map((img: any) => (
          <a
            data-lg-size="1406-1390"
            className="gallery-item"
            data-src={img.imageUrl}
          >
            <img
              draggable={false}
              loading="lazy"
              className="img-responsive h-[10rem] w-[16rem] cursor-pointer object-cover"
              src={img.imageUrl}
            />
          </a>
        ))}
        {/* </div> */}
      </LightGallery>
    </div>
  )
}
