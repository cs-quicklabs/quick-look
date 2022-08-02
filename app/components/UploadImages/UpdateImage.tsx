import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import bg from '../../../assets/images/bg.png'
import avatar6 from '../../../assets/images/avatars/avatar-6.png'
import DeleteImage from '../Common/DeleteImage'

export default function UpdateImage({setshowupdateImage}:any) {
  const [open, setopen] = useState(false)
  
  const Onclose = (e:any) => {
    setshowupdateImage(false)
  };

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setshowupdateImage}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex w-96">
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
                  <form  action="account/update/bio" method='POST' className='h-screen'>
                    <div className="flex flex-col mt-12 h-[95%] w-full md:max-w-xs lg:max-w-md bg-white font-inter border-r border-gray-200 overflow-y-auto">
                      <div className="">
                        <div className="py-6 px-4 sm:px-6 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> Update Profile Pictures </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <form action="">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setshowupdateImage(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <span>
                                <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" /></span>
                              </button></form>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-gray-500 leading-5 font-normal">
                            Please update pictures shown in template
                            </p>
                          </div>
                        </div>
                      
                        <div className="sm:col-span-6 mt-3.5 px-4 sm:px-6">
                          <label className="block text-sm font-medium leading-5 text-gray-700"> 
                            Primary Image 
                          </label>

                          <div>

                            <div className="flex justify-center border border-gray-300 border-dashed rounded-md mt-3.5 h-36">
                              <img src={bg} alt="" className='h-full' />
                            </div>

                            <div className='flex justify-center items-center mt-3'>
                              <button className='text-sm leading-5 font-normal text-gray-400'>
                                Edit
                              </button>

                              <a
                                onClick={()=>{setopen(true)}}
                                className='ml-2 text-sm leading-5 font-normal text-gray-400'>
                                  Delete
                              </a>
                            </div>

                          </div>

                        </div>

                        <div className=''>

                          <div className="sm:col-span-6 mt-6 px-4 sm:px-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700"> 
                              Secondary Image 
                            </label>

                            <div className="flex justify-center h-[7rem] w-[7rem] border border-gray-300 border-dashed rounded-full mt-3.5">
                              <img src={avatar6} alt="" className='rounded-full h-full w-full' />
                            </div>
  
                          </div>

                          <div className='flex justify-center items-center w-[7rem] ml-6 mt-3'>
                              <button className='text-sm leading-5 font-normal text-gray-400'>
                                Edit
                              </button>

                              <a 
                                onClick={()=>{setopen(true)}}
                                className='ml-3 text-sm leading-5 font-normal text-gray-400'>
                                Delete
                              </a>
                            </div>

                        </div>

                        <DeleteImage open={open} onClose={() => setopen(false)} />

                      </div>

                      
                      
                    </div>

                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
