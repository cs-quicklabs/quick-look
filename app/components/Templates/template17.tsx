import defaultimg from '../../../assets/images/profile.png'
import PoweredBy from '../Common/PoweredBy'
import Background3 from '../../../assets/images/templates/temp3.png'
import RedirectButton from './addOns/RedirectButton'

export default function Template17({
  input,
  loaderData,
  secondaryRestore,
}: any) {

  const spotText = loaderData?.spotlightButton?.buttonText?.length > 30 
                  ? 
                  `${loaderData?.spotlightButton?.buttonText.substring(0, 30)}...` 
                  :
                  loaderData?.spotlightButton?.buttonText;


  const myStyle={
    backgroundImage: 
   `url(${Background3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='flex justify-center min-h-screen px-4' style={myStyle}>

      <div className='w-full max-w-2xl flex items-center flex-col mt-16'>
        <img
          className={`h-24 w-24 rounded-full object-cover border border-white`}
          src={secondaryRestore === true ?
              defaultimg
              : 
              loaderData?.profileImage?.secondaryImage || defaultimg
          }
          alt="profilePic"
          loading="lazy"
        />

        <h2 className='mt-4 text-2xl font-bold leading-8 text-gray-900'>
          {loaderData?.firstname} {loaderData?.lastname}
        </h2>

        <h3 className='mt-1 text-gray-500 text-base leading-5 font-normal'>
          {input?.occupation}{' '}
          {input?.company ? "@" + input?.company : ""}
        </h3>

        <h3 className='mt-1 text-gray-500 text-base leading-5 font-normal'>  
          {input?.location}
        </h3>

        {/* <pre className="mt-4 whitespace-pre-wrap break-normal font-sans text-base font-normal leading-5 text-gray-500">
          {input?.description?.trim()}
        </pre> */}
        
        {loaderData?.socialMedia?.facebookLink && (
          <RedirectButton
            link={`https://${loaderData?.socialMedia?.facebookLink}`} 
            text="Facebook"
          />
        )}

        {loaderData?.socialMedia?.twitterLink && (
          <RedirectButton
            link={`https://${loaderData?.socialMedia?.twitterLink}`} 
            text="Twitter"
          />
        )}

        {loaderData?.socialMedia?.youtubeLink && (
          <RedirectButton
            link={`https://${loaderData?.socialMedia?.youtubeLink}`} 
            text="YouTube"
          />
        )}

        {loaderData?.supportBanner?.toggleBanner && 
          <RedirectButton
            link={
              loaderData?.supportBanner?.bannerlink?.includes('https')
                ? loaderData?.supportBanner?.bannerlink
                : 'https://' + loaderData?.supportBanner?.bannerlink
            }
            text={loaderData?.supportBanner?.bannerText}
          />
        }

        {loaderData?.spotlightButton?.toggleSpotlight && (
          <RedirectButton
            link={
              loaderData?.spotlightButton?.buttonActionlink?.includes('https')
                ? loaderData?.spotlightButton?.buttonActionlink
                : 'https://' + loaderData?.spotlightButton?.buttonActionlink
            }
            text={spotText}
          />
        )}

        {loaderData?.spotlightButton?.toggleSpotlight && (
          loaderData?.additionalLinks?.map((additionalSpotlight: any, i:number) =>
            <RedirectButton
              key={i}
              link={
                additionalSpotlight?.linkUrl?.includes('https')
                  ? additionalSpotlight?.linkUrl
                  : 'https://' + additionalSpotlight?.linkUrl
              }
              text={additionalSpotlight?.linkText?.length > 30 ? `${additionalSpotlight?.linkText?.substring(0, 30)}...` : additionalSpotlight?.linkText}
            />
        ))}

        {loaderData?.video?.videoLink && (
          <RedirectButton 
            link={
              loaderData?.video?.videoLink?.includes('https')
              ? loaderData?.video?.videoLink
              : 'https://' + loaderData?.video?.videoLink
            }
            text={"Video"}
          />
        )}

        {loaderData?.portfolioImage?.map((img: any, i:number, arr:any) => (
          <RedirectButton 
            key={i}
            link={img?.imageUrl}
            text={"Portfolio Image" + (arr?.length > 1 ? i+1 : "")}
          />
        ))}

        <div className='py-6'>
          <PoweredBy/>
        </div>
      </div>
      
    </div>
  )
}
