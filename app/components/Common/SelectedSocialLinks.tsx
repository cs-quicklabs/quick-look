import { useEffect, useState } from "react";
import DeleteSocialProfile from "./DeleteSocialProfile";
import fbIcon from '../../../assets/images/fb1.png'
import twitterIcon from '../../../assets/images/twitter1.png'
import ytIcon from '../../../assets/images/yt1.png'

export default function SelectedSocialLinks({ clickedLink, mode,loaderData}:any) {
  const [open, setopen] = useState(false);

  const people = [
  {}
]
console.log('@@@@@@@@@@',clickedLink?.name);

  const linkName = localStorage.getItem("LinkName")?.toLocaleLowerCase()
// const [imageSelect,setImageSelect] = useState('')
 
// useEffect(() => {
//  clickedLink?.name === 'facebook' ? setImageSelect(fbIcon) : linkName === 'twitter' ? setImageSelect(twitterIcon) : linkName === 'youtube' ? setImageSelect(ytIcon) : clickedLink?.image
// }, [clickedLink?.name])

  return (
    <div className="pl-3 pr-3.5">
          <ul role="list" className="">
          {people.map(() => (
            
            <li key={clickedLink.email} className="">
              {clickedLink.email ?
              <div className={`flex justify-between border-b border-gray-200 ${mode === 'mobile' ? 'flex-col xl:flex-row items-center' : 'flex-col lg:flex-row'}`}>
                <div className="py-4 flex">
                  <img className="h-10 w-10 rounded-full" src={clickedLink?.name === 'Facebook' ? fbIcon :clickedLink?.name === 'Twitter' ? twitterIcon :  clickedLink?.name === 'Youtube' ? ytIcon : ''} alt="" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{clickedLink.name}</p>
                    <p className={` text-sm text-gray-500 text-ellipsis overflow-hidden ${mode === 'mobile' ? "w-52" : "w-52 md:w-36 lg:w-28 xl:w-52"}`}>{clickedLink?.name === 'Facebook' ? loaderData?.socialMedia?.facebookLink :clickedLink?.name === 'Twitter' ? loaderData?.socialMedia?.twitterLink :  clickedLink?.name === 'Youtube' ? loaderData?.socialMedia?.youtubeLink : ''}</p>
                  </div>
                </div>
              
                <div className={`flex items-start text-[14px]  mb-2 lg:mb-0 text-gray-400 ${mode === 'mobile' ? 'mr-[1.7rem] xl:mr-0 flex-row xl:flex-col' : 'flex-row lg:flex-col ml-[3.2rem] lg:ml-0 py-0 lg:py-4'}`}>
                  <button
                  disabled
                  >
                    Edit
                  </button>
    
                    <button 
                    onClick={(e:any)=>{e.preventDefault(); setopen(true)}}
                    className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                      Delete
                    </button>
                    <DeleteSocialProfile open={open} onClose={() => setopen(false)} clickedLink={clickedLink} />
                </div>
              </div>
              : <span></span>}
            </li> 
          ))} 
        </ul>
      
    </div>
    
  )
}