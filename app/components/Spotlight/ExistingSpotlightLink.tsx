import { useState } from 'react';
import EditTestimonial from '../Testimonial/EditTestimonial';
import CreateSpotlight from './CreateSpotlight';
import DeleteSpotlight from './DeleteSpotlight';
import EditSpotlight from './EditSpotlight';

export default function ExistingSpotlightLink({ setShowSpotlight,loaderData, mode, setmode}:any) {


const spotlight = [
  {
    name: loaderData?.spotlightButton?.buttonText,
    description: loaderData?.spotlightButton?.buttonActionlink,
  },
  // {
  //   name: 'loaderData?.spotlightButton?.buttonText',
  //   description: 'loaderData?.spotlightButton?.buttonActionlink',
  // },
  
]

const [clickedSpotlight, setClickedSpotlight] = useState<{ name: any; description: any }>({ name: '', description: '' });

const [showEditSpotlight, setShowEditSpotlight] = useState(false); 

const toggleEditSpotlight = (person: { name: string; description: string; }) => {
  setShowEditSpotlight(!showEditSpotlight);
  setClickedSpotlight(person);
}

const [openDeleteSpotlight, setOpenDeleteSpotlight] = useState(false);

  return (
    <div className="pl-3 pr-3.5">
      <ul>
        {spotlight.map((person) => (

          <li key={person.name} className="">
            {person.name ?
              <>
              <div className={`flex justify-between ${mode === 'mobile' ? 'flex-col xl:flex-row items-center ml-[24rem] lg:ml-[32rem] xl:ml-[0]' : 'flex-col lg:flex-row'}`}>
                <div className='flex flex-col w-screen'>
                  <div className='flex border-b border-gray-200'>
                  <div className="py-4 flex">
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{person.name}</p>
                    <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">{`${person.description?.slice(0,30)}....`}</p>
                  </div>
                </div>

                <div className={`flex justify-center items-start text-gray-400 mb-2 lg:mb-0   ${mode === 'mobile' ? ' flex-row xl:flex-col ml-[-13rem] lg:ml-[-13rem] xl:ml-[4rem] mt-[5rem]  lg:mt-[5rem] xl:mt-0' : 'flex-row lg:flex-col py-0 lg:py-4 ml-[-13rem] mt-[5rem] lg:ml-[5.2rem] lg:mt-0'}`}>
                  <button
                    data-cy="editExistingSpotlight"
                    className="hover:text-indigo-600 text-[14px]"
                    onClick={(e: any) => { e.preventDefault(); toggleEditSpotlight(person) }}
                  >
                    Edit
                  </button>
                  
                  <button
                    data-cy="deleteSpotlightButton"
                    onClick={(e: any) => { e.preventDefault(); setOpenDeleteSpotlight(true); setClickedSpotlight(person); }}
                    className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                    Delete
                  </button>
                  <DeleteSpotlight clickedSpotlight={clickedSpotlight} openDeleteSpotlight={openDeleteSpotlight} onClose={() => setOpenDeleteSpotlight(false)}  />

                  
                </div>
                  </div>

                  <div>
                  {showEditSpotlight && clickedSpotlight.name === person.name && (
                <CreateSpotlight showEditSpotlight={showEditSpotlight} setShowEditSpotlight={setShowEditSpotlight} setShowSpotlight={setShowSpotlight} clickedSpotlight={clickedSpotlight} loaderData={loaderData} mode={mode} setmode={setmode} />
              )}

              
                  </div>
                
                
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