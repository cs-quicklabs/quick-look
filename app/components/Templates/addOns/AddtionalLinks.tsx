/* eslint-disable react/jsx-no-target-blank */
export default function AdditionalLinksAddOn({ loaderData }: any) {
  return (
    <div>
      {loaderData?.additionalLinks.map(
        (
          additionalSpotlight: {
            linkText: any
            linkHex: any
            linkUrl: any
            linkColor: any
          },
          index: number
        ) => (
          // eslint-disable-next-line react/jsx-key
          <div key={index} className={`flex justify-center items-center mb-4`}>
            <a
              className={`flex justify-center rounded-md items-center w-[299px] sm:w-[399px] h-10 shadow-sm text-sm leading-5 font-medium text-white ${loaderData?.profile?.additionalLinksColor}`}
              href={
                additionalSpotlight?.linkUrl.includes('https')
                  ? additionalSpotlight?.linkUrl
                  : 'https://' + additionalSpotlight?.linkUrl
              }
              style={{
                backgroundColor: loaderData?.profile?.additionalLinksHexCode,
                textShadow: '0px 1px black',
              }}
              target="_blank"
            >
              {additionalSpotlight?.linkText?.length > 30
                ? `${additionalSpotlight?.linkText.substring(0, 30)}...`
                : additionalSpotlight?.linkText}
            </a>
          </div>
        )
      )}
    </div>
  )
}
