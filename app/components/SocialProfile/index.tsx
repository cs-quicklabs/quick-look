import AddMoreSocialLinks from "./AddMoreSocialLinks";
import NoSocialLink from "./NoSocialLink";

export default function Spotlight({successUpdateMessage,setshowSocialLinks, loaderData,mode,setmode,message}:any) {
  
  
  
  return (
    <>
    {loaderData?.socialMedia?.facebookLink || loaderData?.socialMedia?.twitterLink || loaderData?.socialMedia?.youtubeLink ? 
      <AddMoreSocialLinks setshowSocialLinks={setshowSocialLinks} loaderData={loaderData} mode={mode} setmode={setmode} message={message} />
       :
       <NoSocialLink successUpdateMessage={successUpdateMessage} setshowSocialLinks={setshowSocialLinks} loaderData={loaderData} mode={mode} setmode={setmode} message={message} /> 
    }  
    </>
    
  )
}
