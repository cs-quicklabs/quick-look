import React from 'react'
import AddMoreSpotlightLink from './AddMoreSpotlightLink'
import CreateSpotlight from './CreateSpotlight'

export default function Spotlight({showSpotlight, setShowSpotlight, loaderData, mode, setmode}:any) {
  
  console.log(loaderData)
  
  return (
    <>
    {loaderData?.spotlightButton?.buttonText ? 
      <AddMoreSpotlightLink showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} 
    loaderData={loaderData} mode={mode} setmode={setmode} /> :
     <CreateSpotlight showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} 
    loaderData={loaderData} mode={mode} setmode={setmode} />
    }  
    </>
    
  )
}
