import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { Form } from '@remix-run/react';

export default function DashboardBio({bioMessage, setBioMessage ,setshowBio,input,setinput,showBio,loaderData,mode,setmode}:any) {

  const Onclose = (e:any) => {
    
    if(mode === 'desktop'){
    setshowBio(false)
    }
    if(mode === 'mobile'){
     
    }
  };

const OnCancel = ()=>{
setshowBio(false);
  setmode('desktop')
}
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className={`pointer-events-none fixed inset-y-0 left-0 flex `}>
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
                  <Form replace={true}  action="update/bio" method='post' className='h-screen'>
                  <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="py-6 px-4 sm:px-6 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> Update Your Bio </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                              onClick={() => setshowBio(false)}
                            >
                              <span className="sr-only">Close panel</span>
                             
                              <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                              
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-gray-500 leading-5 font-normal">
                            Get started by filling in the information below to update your profile
                          </p>
                        </div>
                      </div>
                     {/* <div>{bioMessage}</div> */}
                     {bioMessage &&
                          <div className="rounded-md bg-green-50 p-4 mb-4">
      <div className="flex  items-start justify-start">
        <div className="flex-shrink-0 pt-1">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{bioMessage}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5 pt-1">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md py-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" onClick={()=>setBioMessage('')} />
            </button>
          </div>
        </div>
      </div>
    </div>}
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <div>
                              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Tell us about yourself{' '}
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="description"
                                  name="description"
                                  rows={4}
                                 
                                  onChange={(event) => {
                      setinput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }}
                                  className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  value={input.description}
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Location{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  value={input.location}
                                  name="location"
                                  id="project-name"
                                  
                                  onChange={(event) => {
                      setinput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Occupation {' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="occupation"
                                  value={input.occupation}
                                  id="occupation"
                                   onChange={(event) => {
                      setinput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Company{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="company"
                                  value={input.company}
                                 onChange={(event) => {
                      setinput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }}

                                  id="project-name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Education{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="education"
                                  value={input.education}
                                  onChange={(event) => {
                      setinput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }}
                                  id="project-name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 pt-4 pb-2">
                     
                      <button
                        type="button"
                        className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5"
                        onClick={OnCancel
                        }
                      >
                         
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Update
                      </button>
                    </div>
                  </div></Form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
