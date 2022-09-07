import AddMoreSocialLinks from "./AddMoreSocialLinks";
import NoSocialLink from "./NoSocialLink";

export default function Spotlight({successUpdateMessage,setshowSocialLinks, loaderData,mode,setmode,message}:any) {
  
  return (
    <>
    
      <AddMoreSocialLinks setshowSocialLinks={setshowSocialLinks} loaderData={loaderData} mode={mode} setmode={setmode} message={message} />
      
    </>
    
  )
}
