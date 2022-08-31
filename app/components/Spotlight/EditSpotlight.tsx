import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export default function EditSpotlight({mode, setmode}:any) {
  const Onclose = (e:any) => {
    if(mode === 'desktop'){
      // setShowSpotlight(false)
    }
    if(mode === 'mobile'){
     
    }
  };

  const OnCancel = ()=>{
    // setShowSpotlight(false);
    setmode('desktop')
  }

  return (
    <form action="" method='POST'>
      <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
      <div className="h-0 flex-1 overflow-y-auto">
        <div className="py-6 px-4 sm:px-6 bg-gray-50">
          
          <div className="mt-1">
            <p className="text-sm text-gray-500 leading-5 font-normal">
              You can add more than one link to your profile
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="divide-y divide-gray-200 px-4 sm:px-6">
            <div className="space-y-6 pt-6 pb-5">

            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                {' '}
                Edit Link Text{' '}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  // value={input.location}
                  name=""
                  id="project-name"
                  
    //               onChange={(event) => {
    //   setinput({
    //     ...input,
    //     [event.target.name]: event.target.value,
    //   })
    // }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                {' '}
                Edit Link URL{' '}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  // value={input.location}
                  name=""
                  id="project-name"
                  
    //               onChange={(event) => {
    //   setinput({
    //     ...input,
    //     [event.target.name]: event.target.value,
    //   })
    // }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            

            <div className="flex flex-shrink-0 justify-end mt-7">
    
              <button
                data-cy="editSpotlightButton"
                type="submit"
                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700" 
                // disabled={error || !inputTestimonial.testimonialText || error1 || !inputTestimonial.testimonialBy ? true : false}
              >
                Edit  Link
              </button>
            </div>

            </div>
          </div>
        </div> 
      
    
        
      </div>
            
      </div>
    </form>
  )
}
