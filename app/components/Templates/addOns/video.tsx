import React from 'react'

export default function VideoAddOn(videoLink: any) {
  const link = videoLink.videoLink
  let youtubeVideoId = link.slice(link.lastIndexOf('=')+ 1)
  return (
    <div className='max-w-7xl mx-auto mt-8'>
      <iframe className='w-full h-[22.563rem]' src={`https://www.youtube.com/embed/${youtubeVideoId}`} />
    </div>
  )
}

