import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Form, useTransition } from '@remix-run/react';
import { BeatLoader } from 'react-spinners';

export default function EditSpotlight({ showEditAdditional, setShowEditAdditional, clickedSpotlight, mode, setmode}:any) {
  const transition = useTransition()
  const Onclose = (e:any) => {
    if(mode === 'desktop'){
      // setShowEditAdditional(false)
    }
    if(mode === 'mobile'){
     
    }
  };
const [name,SetName]= useState(clickedSpotlight?.name)
const [val,SetVal]= useState(clickedSpotlight?.description)

  const OnCancel = ()=>{
    // setShowEditAdditional(false);
    setmode('desktop')
  }

  // useEffect(() => {
  //   localStorage.setItem("LinkName",clickedSpotlight?.name)
  //   localStorage.setItem("LinkEmail",clickedSpotlight?.description)
  // }, [])

  // const [spotlightVal, setSpotlightVal] = useState<string>(clickedSpotlight?.email)

  return (
    <Form action="add/spotlight" method='post'>
      <div className={`flex flex-col ml-[-0.8rem] divide-y divide-gray-200 bg-white font-inter ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
      <div className="h-0 flex-1">
        
        <div className="flex flex-1 flex-col justify-between">
          <div className="divide-y divide-gray-200 px-4 sm:px-6">
            <div className="space-y-6 pt-2 pb-1 border-b border-gray-200">

              <div className=''>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                {' '}
                Edit Link Text{' '}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={name}
                  // displayValue={() => clickedLink?.name}
                  name="linkText"
                  id="linkText"
                  
                  onChange={(event) => {
      SetName(event.target.value)
    }}
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
                  value={val}
                  // displayValue={() => clickedLink?.name}
                  name="linkUrl"
                  id="linkUrl"
                  onChange={(event) => SetVal(event.target.value)}

                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            

            <div className="flex flex-shrink-0 justify-end mt-7">
    
              <button
                data-cy="editSpotlightButton"
                type="submit"
                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
                // disabled={error || !inputTestimonial.testimonialText || error1 || !inputTestimonial.testimonialBy ? true : false}
              >
                {transition?.state != "idle"  ? <BeatLoader color="#ffffff" /> : 'Edit Link' }
              </button>
            </div>

            

            </div>
          </div>
        </div> 
        
      
      
        
      </div>
            
      </div>

    </Form>
  )
}
