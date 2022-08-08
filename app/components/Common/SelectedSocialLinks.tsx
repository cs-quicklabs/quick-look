import { useState } from "react";
import DeleteSocialProfile from "./DeleteSocialProfile";

export default function SelectedSocialLinks({ loaderData, setshowSocialLinks, selectedSocialLinks, clickedLink}:any) {
  const [open, setopen] = useState(false);

  const people = [
  {}
]


  return (
    <div className="pl-3 pr-3.5">
      <form action="" method="post">
          <ul role="list" className="">
          {people.map(() => (
            
            <li key={clickedLink.email} className="">
              {clickedLink.email ?
              <div className="flex justify-between flex-col lg:flex-row border-b border-gray-200">
                <div className="py-4 flex">
                  <img className="h-10 w-10 rounded-full" src={clickedLink.image} alt="" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{clickedLink.name}</p>
                    <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">{clickedLink.email}</p>
                  </div>
                </div>
              
                <div className="flex flex-row ml-[3.2rem] lg:ml-0 lg:flex-col items-start py-0 lg:py-4 mb-2 lg:mb-0 text-gray-400">
                  <button
                  disabled
                  >
                    Edit
                  </button>
    
                    <button 
                    onClick={(e:any)=>{e.preventDefault(); setopen(true)}}
                    className="ml-3 lg:ml-0">
                      Delete
                    </button>
                    <DeleteSocialProfile open={open} onClose={() => setopen(false)} />
                </div>
              </div>
              : <span></span>}
            </li> 
          ))} 
        </ul>
      </form>
      
    </div>
    
  )
}