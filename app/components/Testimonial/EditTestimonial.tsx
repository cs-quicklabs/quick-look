import { Fragment, useState,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Form, useTransition } from '@remix-run/react';
import BeatLoader from "react-spinners/BeatLoader";

export default function EditSocialProfile({setShowEditTestimonial, loaderData, mode, setmode }: any) {

  const [testimonialBy, setTestimonialBy] = useState(loaderData?.testimonial?.testimonialBy)
  const [testimonialText, setTestimonialText] = useState(loaderData?.testimonial?.testimonialText)

  const [error, setError] = useState('');
  const [error1, setError1] = useState('');

  const transition = useTransition()
  useEffect(() => {
  transition.state === "loading" && setShowEditTestimonial(false)
}, [transition, testimonialText, testimonialText])
let onlyAlphabetsRegex = /^[a-z|A-Z]+(?: [a-z|A-Z ]+)*$/
let notContainsSymbols = !onlyAlphabetsRegex.test(testimonialBy)
let firstAndMiddleNameRegex = /^(?!.{32,})(\w+\s+\w+ ?)$/
let singlewhitespace =/^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/
let validsinglewhitespace = !singlewhitespace.test(testimonialBy)

let validName = !firstAndMiddleNameRegex.test(testimonialBy)
let whiteSpaceRegex = /^\S*$/
let notContainsWhitespace = !whiteSpaceRegex.test(testimonialBy)

  useEffect(() => {
    if(testimonialBy === ''){
      setError1('');
    }else if (!onlyAlphabetsRegex.test(testimonialBy)) {
      return setError1('Only alphabets allowed.')
    }
    else if(testimonialBy?.length < 2){
      setError1('Name must be 2 characters long');
    } else if(testimonialBy.length > 24 ){
      setError1('Name must not be more than 24 characters long');
    }
    else if(testimonialBy === ''){
      setError1('required');
    }else{setError1('')}
    if(testimonialText === ''){
      setError('');
    }
    else if(testimonialText?.length < 6){
      setError('Testimonial must be 6 characters long');
    }
    else if(testimonialText.length > 472 ){
      setError('Testimonial must be not more than 472 characters long');
    }
    else if(testimonialText === ''){
      setError('required');
    }else{setError('')}
  }, [testimonialBy, testimonialText])

  const Onclose = () => {
    if (mode === 'desktop') {
      // setShowTestimonial(true);
      setShowEditTestimonial(false)
    }
    if (mode === 'mobile') {
    }
  }

  const OnCancel = ()=>{
    // setShowTestimonial(true);
    setShowEditTestimonial(false);
    setmode('desktop');
  }


  return (
    <Transition.Root show={true} as={Fragment}>
    <div className="relative z-20">
    

      
        <div className="absolute inset-0 overflow-hidden">
          <div className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-[3rem]  ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'lg:w-96'}`}>
            <Transition.Child
              as={Fragment}
              enter=""
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave=""
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <Form replace={true} action='update/testimonial' method="post" className='h-screen' >
                  <div className="flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
                    <div className="bg-gray-50 py-6 px-4">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                        {`${loaderData?.testimonial?.testimonialBy  ? 'Edit Testimonial on your profile': 'Add Testimonial to your profile'} `}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                            onClick={Onclose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-1 pr-2">
                        <p className="text-sm leading-5 font-normal text-gray-500">
                        Edit testimonial from your profile
                        </p>
                      </div>
                    </div>
                    <div className='pl-2.5 pr-5 mt-6'>
                      <div>
                        <label htmlFor="testimonialText" className="block text-sm font-medium text-gray-700">
                          {' '}
                          Edit Testimonial{' '}
                        </label>
                        <div className="mt-1">
                          <textarea
                          data-cy="testimonialEditText"
                            id="testimonialText"
                            name="testimonialText"
                            value={testimonialText}
                            rows={4}
                            onChange={(event) => {
                              setTestimonialText(
                                 event.target.value
                              )
                            }}
                           className={`text-ellipsis text-gray-900 w-full lg:w-[22rem] block rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${error ? 'border border-red-600 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                          />
                          <div className='text-red-600 text-sm'>
                            {error}
                          </div>
                        </div>
                      </div>

                      <div className='mt-6'>
                        <label htmlFor="testimonialBy" className="block text-sm font-medium text-gray-700">
                          {' '}
                          Name of the person who gave this testimonial{' '}
                        </label>
                        <div className="mt-1">
                          <input
                          data-cy="testimonialEditBy"
                            type="text"
                            value={testimonialBy}
                            name="testimonialBy"
                            id="testimonialBy" 
                            onChange={(event) => {
                              setTestimonialBy(
                                 event.target.value
                              )
                            }}
                           className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm text-gray-900 ${error1 ? 'border border-red-600 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                          />
                          <div className='text-red-600 text-sm'>
                            {error1}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-shrink-0 justify-end mt-7">
                        <div >
                          <button
                            type="button"
                            className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5 disabled:cursor-pointer"
                            onClick={OnCancel}
                            disabled={transition?.state != "idle"}
                          >
                            Cancel
                          </button>
                        </div>
                      
                        <button
                          data-cy="editTestimonial"
                          type="submit"
                          className="ml-4 mb-4 leading-5 inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
                          disabled={error || !testimonialText || error1 || !testimonialBy || transition?.state != "idle" ? true : false}
                        >
                          {transition?.state != "idle"  ? <BeatLoader color="#ffffff" size={12} /> :
                        "Edit Testimonial"}
                        </button>
                      </div>
                    </div>

                    

                  </div>
                </Form>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      
    </div>
  </Transition.Root>
  )
}