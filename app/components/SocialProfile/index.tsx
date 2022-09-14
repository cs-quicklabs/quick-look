import AddMoreSocialLinks from "./AddMoreSocialLinks";
import NoSocialLink from "./NoSocialLink";

export default function Spotlight({setMessage,successUpdateMessage,setshowSocialLinks, loaderData,mode,setmode,message}:any) {
 
  
  return (
    <>
    
      <AddMoreSocialLinks successUpdateMessage={successUpdateMessage} setMessage={setMessage} setshowSocialLinks={setshowSocialLinks} loaderData={loaderData} mode={mode} setmode={setmode} message={message} />
      
    </>
    
  )
}
