import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Form, useSubmit, useTransition } from '@remix-run/react';
import { BeatLoader } from 'react-spinners';

export default function EditSpotlight({ setShowEditAdditional, clickedAdditionalSpotlight, mode, setmode, loaderData}:any) {
  const transition = useTransition()

  const [val,setVal]= useState({linkText: clickedAdditionalSpotlight?.linkText, linkUrl: clickedAdditionalSpotlight?.linkUrl});
  const [click, setClicked] = useState(false)
   const [errorLinkText,setErrorLinktext]=useState('')
   const [errorUrl, setErrorUrl] = useState('')

   useEffect(() => {
    if(transition.state === 'loading'){ 
      setClicked(false);
      setShowEditAdditional(false);
    }
  }, [transition])

  useEffect(() => {
    if(val?.linkText?.length === 0){
      setErrorLinktext('Required')
    }else{
      setErrorLinktext('')
    }
   }, [val])

   useEffect(() => {
    if(val?.linkText?.length === 0){
      setErrorUrl('Required')
    }else{
      setErrorUrl('')
    }
   }, [val])

  return (
    <Form replace action="update/additionalLink" method='post'>
      <div className={`flex flex-col ml-[-1rem] divide-y divide-gray-200 font-inter ${mode === 'mobile' ? 'lg:ml-[-1rem] w-[16rem] lg:w-max xl:w-96' : 'md:w-[20rem] lg:w-[23rem] xl:w-[24rem]'} `}>
        
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
                  name="linkText"
                  id="linkText"
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${click && errorLinkText ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                />
                {click &&<div className='text-sm text-red-500'>{errorLinkText}</div>}
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
                  name="linkUrl"
                  id="linkUrl"
                  onChange={(event) => {
                    setVal({
                      ...val,
                      [event.target.name]: event.target.value,
                    })
                  }}

                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${click && errorUrl ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                />
                {click &&<div className='text-sm text-red-500'>{errorUrl}</div>}
              </div>
            </div>
            

            <div className="flex flex-shrink-0 justify-end mt-7">

              <input value={clickedAdditionalSpotlight.id} name="editAdditionalSpotlight" hidden />

              <div className="flex flex-shrink-0 justify-end pl-4 pb-2 mt-7">
                    <span>
                      <button
                      type="button"
                      className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5 disabled:cursor-pointer"
                      onClick={() => {
                      setShowEditAdditional(false);
                      }}
                      disabled={transition?.state != "idle"}
                      >
                      Cancel
                      </button>
                    </span>
                    <button
                    data-cy="editAdditionalSpotlightButton"
                    id="editAdditionalSpotlightButton"
                    type="submit"
                    className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
                    onClick={(e:any)=>{setClicked(true);
                      val.linkText === '' || val.linkUrl === '' ? e.preventDefault() : null
                    }}
                    disabled={transition?.state != "idle" ? true : false}
                    >
                      {transition?.submission?.action === "/account/update/additionalLink"  && !errorUrl && !errorLinkText  ? <BeatLoader color="#ffffff" /> : 'Edit Link' }
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
