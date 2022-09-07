import { useEffect, useState } from "react";
import EditSocialLink from "./EditSocialLink";
import DeleteSocialLink from "./DeleteSocialLink";
import fbIcon from '../../../assets/images/fb1.png'
import twitterIcon from '../../../assets/images/twitter1.png'
import ytIcon from '../../../assets/images/yt1.png'

export default function ExistingSocialLinks({successUpdateMessage,message, loaderData, setshowSocialLinks, selectedSocialLinks, mode, setmode }: any) {
const linkName = localStorage.getItem("LinkName")
  const linkEmail = localStorage.getItem("LinkEmail")

  
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [open, setopen] = useState(false);
  const [clickedLink, setClickedLink] = useState<{ name: any; email: any; image: any }>({ name: '', email: '', image: '' });
  



  
  const people = [
    {
      name: 'Facebook',
      email: loaderData?.socialMedia?.facebookLink,
      image: fbIcon,
    },
    {
      name: 'Twitter',
      email: loaderData?.socialMedia?.twitterLink,
      image: twitterIcon,
    },
    {
      name: 'Youtube',
      email: loaderData?.socialMedia?.youtubeLink,
      image: ytIcon,
    },
  ]


  const toggleEdit = (person: { name: string; email: string; image: string; }) => {
    setShowEditProfile(!showEditProfile);
    setopen(false);
    setClickedLink(person)
  }
  const toggleDel = (person: { name: string; email: string; image: string; }) => {
    setopen(!open);
    setShowEditProfile(false);
    setClickedLink(person)
  }

  return (
    <div className="pl-3 pr-3.5">
      <ul>
        {people.map((person) => (

          <li key={person.email} className="">
            {person.email ?
            <>
              <div className={`flex justify-between ${mode === 'mobile' ? 'flex-col xl:flex-row items-center' : 'flex-col lg:flex-row'}`}>
                  <div className='flex flex-col w-screen'>
                    <div className='flex border-b border-gray-200'>
                    <div className="py-4 flex">
                    <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{person.name}</p>
                      <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">{person.email}</p>
                    </div>
                  </div>

                  <div className={`flex items-start mb-2 lg:mb-0 text-gray-400 ${mode === 'mobile' ? 'mr-[1.7rem] xl:mr-0 flex-row xl:flex-col' : 'flex-row lg:flex-col ml-[3.2rem] lg:ml-[3.2rem] py-0 lg:py-4'} ${clickedLink.name === person.name && showEditProfile  ? 'hidden' : 'block'}`}>
                    <button
                      data-cy="editSocialButton"
                      className="hover:text-indigo-600 text-[14px]"
                      onClick={(e: any) => { e.preventDefault(); toggleEdit(person) }}
                    >
                      Edit
                    </button>
                    
                    <button
                      data-cy="deleteSocialButton"
                      onClick={(e: any) => { 
                        e.preventDefault();  
                          toggleDel(person)
                      }}
                      className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                      Delete
                    </button>

                    <DeleteSocialLink open={open} person={person.name} onClose={() => setopen(false)} clickedLink={clickedLink} />
                    
                  </div>

                    </div>

                    {showEditProfile && clickedLink.name === person.name && (
                      <EditSocialLink clickedLink={clickedLink} successUpdateMessage={successUpdateMessage} loaderData={loaderData} setShowEditProfile={setShowEditProfile} setshowSocialLinks={setshowSocialLinks} selectedSocialLinks={selectedSocialLinks} mode={mode} message={message}/>

                    )}

                  </div>

                  

                  
                  
                </div>
            </>
              
              : <span></span>}
          </li>
        ))}
      </ul>
    </div>

  )
}