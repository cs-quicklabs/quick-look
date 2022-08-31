import { useState } from 'react';
import DeleteSpotlight from './DeleteSpotlight';

export default function ExistingSpotlightLink({ loaderData, mode, setmode}:any) {

const testimonial = [
  {
    name: 'My Portfolio',
    description: 'www.portfolio.com',
  },
]

const [showEditSpotlight, setShowEditSpotlight] = useState(false); 

const toggleEditSpotlight = (person: { name: string; description: string; }) => {
  setShowEditSpotlight(!showEditSpotlight);
}

const [openDeleteSpotlight, setOpenDeleteSpotlight] = useState(false);

  return (
    <div className="pl-3 pr-3.5">
      <ul>
        {testimonial.map((person) => (

          <li key={person.name} className="">
            {person.description ?
              <div className={`flex justify-between  border-b border-gray-200 ${mode === 'mobile' ? 'flex-col xl:flex-row items-center' : 'flex-col lg:flex-row'}`}>
                <div className="py-4 flex">
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{person.name}</p>
                    <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">{`${person.description.slice(0,30)}....`}</p>
                  </div>
                </div>

                <div className={`flex  items-start  mb-2 lg:mb-0 text-gray-400 ${mode === 'mobile' ? 'mr-[1.7rem] xl:mr-0 flex-row xl:flex-col' : 'flex-row lg:flex-col ml-[3.2rem] lg:ml-0 py-0 lg:py-4'}`}>
                  <button
                    data-cy="editTestimonialButton"
                    className="hover:text-indigo-600 text-[14px]"
                    onClick={(e: any) => { e.preventDefault(); toggleEditSpotlight(person) }}
                  >
                    Edit
                  </button>
                  {/* {showEditTestimonial && (
                    <EditTestimonial inputTestimonial={inputTestimonial} setInputTestimonial={setInputTestimonial} setShowTestimonial={setShowTestimonial} loaderData={loaderData} setShowEditTestimonial={setShowEditTestimonial} mode={mode} setmode={setmode} />

                  )} */}
                  <button
                    data-cy="deleteTestimonialButton"
                    onClick={(e: any) => { e.preventDefault(); setOpenDeleteSpotlight(true); }}
                    className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                    Delete
                  </button>
                  <DeleteSpotlight openDeleteSpotlight={openDeleteSpotlight} onClose={() => setOpenDeleteSpotlight(false)}  />
                </div>
              </div>
              : <span></span>}
          </li>
        ))}
      </ul>
    </div>
  )
}