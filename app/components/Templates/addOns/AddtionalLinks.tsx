export default function AdditionalLinksAddOn({ loaderData }: any) {

  const btnText = loaderData?.additionalLinks?.linkText?.length > 30 ? `${loaderData?.additionalLinks?.linkText.substring(0, 30)}...` : loaderData?.additionalLinks?.linkText


  return (
    <div className='flex justify-center items-center mt-9 mb-4'>
      <a className='pr-8 md:pr-0' href={loaderData?.additionalLinks?.linkUrl.includes('https') ? loaderData?.additionalLinks?.linkUrl : 'https://'+loaderData?.additionalLinks?.linkUrl} target="_blank">
        <button style={{ 'backgroundColor': loaderData?.additionalLinks?.linkHex, 'textShadow': '0px 1px black' }} className={`flex justify-center rounded-md items-center w-[399px] h-10 shadow-sm text-sm leading-5 font-medium text-white ${loaderData?.additionalLinks?.linkColor}`}> {btnText}
        </button>
      </a>
    </div>
  )
}

