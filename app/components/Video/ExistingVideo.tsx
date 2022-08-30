import { useState } from 'react';
import fbIcon from '../../../assets/images/fb1.png';
import DeleteVideo from './DeleteVideo';
import EditVideo from './EditVideo';

export default function ExistingVideo({inputVideo, setInputVideo, loaderData, mode, setmode}:any) {

//   const Onclose = (e:any) => {
    
//     if(mode === 'desktop'){
//     setshowBio(false)
//     }p
//     if(mode === 'mobile'){
     
//     }
//   };

// const OnCancel = ()=>{
// setshowBio(false);
//   setmode('desktop')
// }

const videoLink = [
  {
    name: 'yt or fb',
    link: loaderData?.video?.videoLink ,
  },
]

const [showEditVideo, setShowEditVideo] = useState(false); 

const toggleEditVideo = (person: { name: string; link: string; }) => {
  setShowEditVideo(!showEditVideo);
}

const [openDeleteVideoModal, setOpenDeleteVideoModal] = useState(false);

  return (
    <div className="pl-3 pr-3.5">
      <ul>
        {videoLink.map((person) => (

          <li key={person.name} className="">
            {person.link ?
              <div className={`flex justify-between  border-b border-gray-200 ${mode === 'mobile' ? 'flex-col xl:flex-row items-center' : 'flex-col lg:flex-row'}`}>
                <div className="py-4 flex">
                {/* <iframe  className="h-11 w-11 rounded-full" src="https://www.youtube.com/embed/tgbNymZ7vqY" /> */}

                  {/* <img className="h-11 w-11 rounded-full" src={person.image} alt="" /> */}
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{person.name}</p>
                    <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">
                    {`${person.link.slice(0,30)}....`}
                    </p>
                  </div>
                </div>

                <div className={`flex  items-start  mb-2 lg:mb-0 text-gray-400 ${mode === 'mobile' ? 'mr-[1.7rem] xl:mr-0 flex-row xl:flex-col' : 'flex-row lg:flex-col ml-[3.2rem] lg:ml-0 py-0 lg:py-4'}`}>
                  <button
                    data-cy="editVideoButton"
                    className="hover:text-indigo-600 text-[14px]"
                    onClick={(e: any) => { e.preventDefault(); toggleEditVideo(person); }}
                  >
                    Edit
                  </button>
                  {showEditVideo && (
                    <EditVideo inputVideo={inputVideo} setInputVideo={setInputVideo} loaderData={loaderData} setShowEditVideo={setShowEditVideo} mode={mode} setmode={setmode} />

                  )}
                  <button
                    data-cy="deleteVideoButton"
                    onClick={(e: any) => { e.preventDefault(); setOpenDeleteVideoModal(true); }}
                    className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                    Delete
                  </button>
                  <DeleteVideo openDeleteVideoModal={openDeleteVideoModal} onClose={() => setOpenDeleteVideoModal(false)}  />
                </div>
              </div>
              : <span></span>}
          </li>
        ))}
      </ul>
    </div>
  )
}