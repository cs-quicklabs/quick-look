/* eslint-disable react/jsx-no-target-blank */
export default function AdditionalLinksAddOn({ loaderData }: any) {

  return (
    <div>
      {loaderData?.additionalLinks.map((additionalSpotlight: { linkText: any; linkHex: any; linkUrl: any; linkColor:any; }) => (
      // eslint-disable-next-line react/jsx-key
      <div className={`flex justify-center items-center ${loaderData?.profileInfo?.templateNumber == '2' || loaderData?.profileInfo?.templateNumber == '4' || loaderData?.profileInfo?.templateNumber == '7' || loaderData?.profileInfo?.templateNumber == '8' || loaderData?.profileInfo?.templateNumber == '11' || loaderData?.profileInfo?.templateNumber == '13' || loaderData?.profileInfo?.templateNumber == '14' || loaderData?.profileInfo?.templateNumber == '16' ? 'mb-[2rem]' : 'mt-9 mb-4' }`} >

      <a className='' href={additionalSpotlight?.linkUrl.includes('https') ? additionalSpotlight?.linkUrl : 'https://'+ additionalSpotlight?.linkUrl} target="_blank">
        
        <button style={{ 'backgroundColor': loaderData?.profile?.additionalLinksHexCode, 'textShadow': '0px 1px black' }} className={`flex justify-center rounded-md items-center w-[299px] sm:w-[399px] h-10 shadow-sm text-sm leading-5 font-medium text-white ${loaderData?.profile?.additionalLinksColor}`}> 
        {additionalSpotlight?.linkText?.length > 30 ? `${additionalSpotlight?.linkText.substring(0, 30)}...` : additionalSpotlight?.linkText}
        </button>
      </a>
    </div>
     ))}
    </div>

    
  )
}

