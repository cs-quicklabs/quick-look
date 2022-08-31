import React from 'react'

export default function VideoAddOn(videoLink: any) {
  const link = videoLink.videoLink
  let youtubeVideoId = link.slice(link.indexOf('=')+ 1) 
  let facebookVideoId = link

  // const ytfbVideo = videoLink.videoSourceKey === 'youtube' ? youtubeVideoId : facebookVideoId 

  return (
    <div className='max-w-7xl mx-auto mt-8 '>
      {/* {videoLink.videoSourceKey === 'youtube' ?  */}
    {link.includes('youtube') ? 
    <iframe className='w-full h-[25rem]' src= {`https://www.youtube.com/embed/${youtubeVideoId}`} /> 
      :
      <iframe src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.${youtubeVideoId}`}  width="734" height="700"  scrolling="no"  allowTransparency={true} allowFullScreen={true} />}
    </div>
  )
}

//  <iframe src="/" width="734" height="824" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>