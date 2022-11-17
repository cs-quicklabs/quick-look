import React from 'react'

export default function VideoAddOn({ videoLink, loaderData, mode }: any) {
  const link = videoLink
  let youtubeVideoId = link?.slice(link.indexOf('=') + 1)
  let facebookVideoId = link

  // const ytfbVideo = videoLink.videoSourceKey === 'youtube' ? youtubeVideoId : facebookVideoId

  return (
    <div className={`mx-auto mt-8 ${loaderData?.profileInfo?.templateNumber == '0' || loaderData?.profileInfo?.templateNumber == '2' ? 'w-[100%]' : 'w-[20rem] md:w-[31rem]'} `} >
      {/* {videoLink.videoSourceKey === 'youtube' ?  */}
      {link?.includes('youtube') ? (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          className={`h-[25rem] ${
            loaderData?.profileInfo?.templateNumber == '9'
              ? 'ml-[2.5rem] w-[75%] md:ml-[5.3rem]' 
              : loaderData?.profileInfo?.templateNumber == '8' && mode ==='mobile'
              ? 'lg:w-[60%] 2xl:w-full'
              : 'w-full'
          }`}
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        />
      ) : (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.${youtubeVideoId}`}
          // width="734"
          className={`h-[350px] md:h-[700px]${
            loaderData?.profileInfo?.templateNumber == '9'
              ? 'ml-[5.5rem] w-[20rem] md:w-[31rem]'
              : ' w-[370px]  md:w-[734px]'
          }`}
          // height="700"
          scrolling="no"
          allowTransparency={true}
          allowFullScreen={true}
        />
      )}
    </div>
  )
}

//  <iframe src="/" width="734" height="824" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
