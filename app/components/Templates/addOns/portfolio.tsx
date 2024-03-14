import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

export default function PortfolioAddon({ loaderData, mode }: any) {
  return (
    <div className="img">
      <LightGallery
       elementClassNames={`{
        flex flex-wrap justify-center mt-4
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
        {loaderData.portfolioImage.map((img: any, inx: number) => (
          <span data-lg-size="1406-1390" className="gallery-item" data-src={img.imageUrl} key={inx}>
            <img
              draggable={false}
              loading="lazy"
              className="img-responsive mr-4 lg:mr-6 mb-4 w-8 h-10 lg:mb-6 md:w-16 md:h-20 cursor-pointer object-cover"
              src={img.imageUrl}
              alt="portfolio"
            />
          </span>
        ))}
      </LightGallery>
    </div>
  )
}