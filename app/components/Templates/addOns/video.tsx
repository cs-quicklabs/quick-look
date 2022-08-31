import React from 'react'

export default function VideoAddOn(videoLink: any) {
  const link = videoLink.videoLink
  let youtubeVideoId = link.slice(link.indexOf('=')+ 1) 
  let facebookVideoId = link

  // const ytfbVideo = videoLink.videoSourceKey === 'youtube' ? youtubeVideoId : facebookVideoId 

  return (
    <div className='max-w-7xl mx-auto mt-8'>
      {/* {videoLink.videoSourceKey === 'youtube' ?  */}
    {link.includes('youtube') ? 
    <iframe className='w-full h-[22.563rem]' src= {`https://www.youtube.com/embed/${youtubeVideoId}`} /> 
      :
      <iframe className='w-full h-[22.563rem] object-cover' src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.${youtubeVideoId}`}  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />}
    </div>
  )
}

