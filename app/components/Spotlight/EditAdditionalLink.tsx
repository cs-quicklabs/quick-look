import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Form, useTransition } from '@remix-run/react';
import { BeatLoader } from 'react-spinners';

export default function EditSpotlight({ clickedAdditionalSpotlight, mode, setmode}:any) {
  const transition = useTransition()
  console.log("clickedAdditionalSpotlight", clickedAdditionalSpotlight.id)

  const [val,setVal]= useState({linkText: clickedAdditionalSpotlight?.linkText, linkUrl: clickedAdditionalSpotlight?.linkUrl});

  return (
    <Form action="update/additionalLink" method='post' >
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
                  value={val?.linkText}
                  // displayValue={() => clickedLink?.name}
                  name="linkText"
                  id="linkText"
                  onChange={(event:any) => {
                    setVal(event.target.value)
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
                  value={val?.linkUrl}
                  // displayValue={() => clickedLink?.name}
                  name="linkUrl"
                  id="linkUrl"
                  onChange={(event:any) => setVal(event.target.value)}

                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            

            <div className="flex flex-shrink-0 justify-end mt-7">

              <input id={clickedAdditionalSpotlight.id} name="editAdditionalSpotlight" hidden />
    
              <button
                data-cy="editAdditionalSpotlightButton"
                type="submit"
                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
                disabled={transition?.state != "idle" ? true : false}
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
