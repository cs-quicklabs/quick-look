import React from 'react'
import AddMoreSpotlightLink from './AddMoreSpotlightLink'
import CreateSpotlight from './CreateSpotlight'

export default function Spotlight({ setAdditionalLinkUpdateMessage, additionalLinkUpdateMessage,showSpotlight, setShowSpotlight, loaderData, mode, setmode}:any) {
  
  return (
    <>
    {loaderData?.spotlightButton?.buttonText ? 
      <AddMoreSpotlightLink setAdditionalLinkUpdateMessage={setAdditionalLinkUpdateMessage} additionalLinkUpdateMessage={additionalLinkUpdateMessage} showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} 
    loaderData={loaderData} mode={mode} setmode={setmode} /> :
     <CreateSpotlight showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} 
    loaderData={loaderData} mode={mode} setmode={setmode} />
    }  
    </>
    
  )
}
