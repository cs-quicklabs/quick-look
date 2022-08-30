import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import ExistingTestimonial from './ExistingTestimonial';

export default function AccountTestimonial({inputTestimonial, setInputTestimonial, setShowTestimonial, loaderData, mode, setmode}:any) {

  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  console.log("inputTestimonial",inputTestimonial);
  useEffect(() => {
    if(inputTestimonial.testimonialBy === ''){
      setError1('');
    }
    else if(inputTestimonial.testimonialBy.length < 6){
      setError1('Name must be 6 characters long');
    } else if(inputTestimonial.testimonialBy.length >24 ){
      setError1('Name must not be more than 24 characters long');
    }
    else if(inputTestimonial.testimonialBy === ''){
      setError1('required');
    }else{setError1('')}
    if(inputTestimonial.testimonialText === ''){
      setError('');
    }
    else if(inputTestimonial.testimonialText.length < 6){
      setError('Testimonial must be 6 characters long');
    }
    else if(inputTestimonial.testimonialText.length > 472 ){
      setError('Testimonial must be not more than 472 characters long');
    }
    else if(inputTestimonial.testimonialText === ''){
      setError('required');
    }else{setError('')}
  }, [inputTestimonial.testimonialBy, inputTestimonial.testimonialText])
  

  const OnCancel = ()=>{
    setShowTestimonial(false);
    setmode('desktop');
  }
  
  const Onclose = (e: any) => {
  
    if (mode === 'desktop') {
      setShowTestimonial(false);
    }
    if (mode === 'mobile') {
    }
  };

return (
  <Transition.Root show={true} as={Fragment}>
    <Dialog as="div" className="relative z-20" onClose={()=>{}}>
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
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
                <form action='/account/add/testimonial' method="post" className='h-screen font-inter' >
                  {loaderData.testimonial.testimonialBy ?
                  <div className='flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto'>
                    <div className="bg-gray-50 py-6 px-4">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                        Add Testimonial to your profile
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
                        Add, edit or delete testimonial from your profile
                      </p>
                    </div>
                  </div>
                  <ExistingTestimonial inputTestimonial={inputTestimonial} setInputTestimonial={setInputTestimonial} setShowTestimonial={setShowTestimonial} loaderData={loaderData} mode={mode} setmode={setmode} />
                </div>:
                  <div className="flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
                  <div className="bg-gray-50 py-6 px-4">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                        Add Testimonial to your profile
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
                        Add, edit or delete testimonial from your profile
                      </p>
                    </div>
                  </div>
                  <div className='pl-2.5 pr-5 mt-6'>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        {' '}
                        Testimonial{' '}
                      </label>
                      <div className="mt-1">
                        <textarea
                          placeholder='Please enter your testimonial'
                          id="description"
                          name="testimonialText"
                          rows={4}
                          onChange={(event) => {
                            setInputTestimonial({
                              ...inputTestimonial,
                              [event.target.name]: event.target.value,
                            })
                          }}
                          className={`text-ellipsis w-44 block rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${error ? 'border border-red-600 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                          value={inputTestimonial.testimonialText}
                        />
                        <div className='text-red-600 text-sm'>
                          {error}
                        </div>
                      </div>
                    </div>

                    <div className='mt-6'>
                      <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                        {' '}
                        Name of the person who gave this testimonial{' '}
                      </label>
                      <div className="mt-1">
                        <input
                          placeholder='Please enter your name'
                          type="text"
                          value={inputTestimonial.testimonialBy}
                          name="testimonialBy"
                          id="project-name"
                          onChange={(event) => {
                            setInputTestimonial({
                              ...inputTestimonial,
                              [event.target.name]: event.target.value,
                            })
                          }}
                          className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm${error1 ? 'border border-red-600 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
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
                          className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5"
                          onClick={OnCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    
                      <button
                        data-cy="addTestimonialButton"
                        type="submit"
                        className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700" 
                        disabled={error || !inputTestimonial.testimonialText || error1 || !inputTestimonial.testimonialBy ? true : false}
                      >
                        Add Testimonial
                      </button>
                    </div>
                  </div>

                  

                </div>
                  }
                  
                </form>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

};