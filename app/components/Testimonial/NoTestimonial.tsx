import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CreateTestimonial from './CreateTestimonial';
import ExistingTestimonial from './ExistingTestimonial';

export default function NoTestimonial({ inputTestimonial, setInputTestimonial, setShowTestimonial, loaderData, mode, setmode}:any) {

// const [text, setText] = useState('')
// useEffect(() => {
//   setText(successUpdateMessage)
// }, [successUpdateMessage])

  const [showCreateTestimonial, setShowCreateTestimonial] = useState(false);

  const toggleCreatetestimonial = () => {
    setShowCreateTestimonial(!showCreateTestimonial);
  };
  const OnCancel = ()=>{
    setShowTestimonial(false);
    setmode('desktop');
  }

  const Onclose = () => {
    if(mode === 'desktop'){
      setShowTestimonial(false)
    }
    if(mode === 'mobile'){
    }
  }
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
        <div className="fixed inset-0" />

        <div className={`fixed inset-0 overflow-hidden`}>
          <div className="absolute inset-0 overflow-hidden">
            <div className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-12  ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'lg:w-96'}`}>
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
                  <div className={`flex h-full flex-col bg-white border-r border-gray-200 overflow-y-auto ${mode === 'mobile' ? ' w-[16rem] xl:w-96' : ' w-[20rem] lg:w-96'}`}>
                    <div className="bg-gray-50 py-6 px-4">
                    <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                          {`${loaderData?.testimonial?.testimonialBy  ? 'Edit': 'Add'} Testimonial to your profile`}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                              onClick={OnCancel}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="pt-1 pr-2">
                          <p className="text-sm leading-5 font-normal text-gray-500">
                            {loaderData?.testimonial?.testimonialBy ? "Edit or delete testimonial from your profile" : "Add testimonial to your profile" }
                            
                          </p>
                        </div>
                    </div>

                    {!loaderData?.testimonial?.testimonialBy ? 
                    
                      <div className='font-inter mt-7 flex flex-col items-center'>
                        <p className='text-xs leading-4 font-semibold tracking-wide'>
                          NO TESTIMONIAL ADDED YET
                        </p>
                        <p className={`text-sm leading-5 font-normal text-gray-500 px-12 text-center  ${mode === 'mobile' ? 'lg:px-4' : 'lg:px-0'}`}>
                          Please add testimonial by clicking on button below
                        </p>
                        <button
                          data-cy="addTestimonialButton"
                          onClick={() => toggleCreatetestimonial()}
                          type="button"
                          className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Add Testimonial
                        </button>
                        {showCreateTestimonial && (
                          <CreateTestimonial OnCloseTestimonial={OnCancel}  inputTestimonial={inputTestimonial} setInputTestimonial={setInputTestimonial} setShowCreateTestimonial={setShowCreateTestimonial} setShowTestimonial={setShowTestimonial} mode={mode} setmode={setmode} loaderData={loaderData} />
                        )}
                      </div>:
                      
                      <div className=''>
                      <ExistingTestimonial inputTestimonial={inputTestimonial} setInputTestimonial={setInputTestimonial} loaderData={loaderData} mode={mode} setShowTestimonial={setShowTestimonial} />
                      </div>
                    }

                    
                    
                  </div>                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
