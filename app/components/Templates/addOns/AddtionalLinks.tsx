export default function AdditionalLinksAddOn({ loaderData }: any) {

  return (
    <div>
      {loaderData?.additionalLinks.map((additionalSpotlight: { linkText: any; linkHex: any; linkUrl: any; linkColor:any; }) => (
      <div className='flex justify-center items-center mt-9 mb-4'>
      <a className='pr-8 md:pr-0' href={additionalSpotlight?.linkUrl.includes('https') ? additionalSpotlight?.linkUrl : 'https://'+ additionalSpotlight?.linkUrl} target="_blank">
        <button style={{ 'backgroundColor': loaderData?.profile?.additionalLinksHexCode, 'textShadow': '0px 1px black' }} className={`flex justify-center rounded-md items-center w-[299px] sm:w-[399px] ml-[4.5rem] sm:ml-auto h-10 shadow-sm text-sm leading-5 font-medium text-white ${loaderData?.profile?.additionalLinksColor}`}> 
        {additionalSpotlight?.linkText?.length > 30 ? `${additionalSpotlight?.linkText.substring(0, 30)}...` : additionalSpotlight?.linkText}
        </button>
      </a>
    </div>
     ))}
    </div>

    
  )
}

