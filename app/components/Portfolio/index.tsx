import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function Portfolio({ setShowPortfolio, mode, setmode }: any) {


  const ref = useRef(null);


  const Onclose = (e: any) => {

    if (mode === 'desktop') {
      setShowPortfolio(false)
    }
    if (mode === 'mobile') {

    }
  };

  const OnCancel = () => {
    setShowPortfolio(false)
    setmode('desktop')
  }

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
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
                  <form action="" encType="multipart/form-data" method='post'>

                    <div className='h-screen'>
                      <div className={`flex h-[95%] flex-col mt-12  bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'w-[100vw] md:w-[20rem] lg:w-96'} `}>
                        <div className="">
                          <div className="py-6 px-4 sm:px-6 bg-gray-50">
                            <div className="flex items-center justify-between">
                              <Dialog.Title className="text-lg font-medium text-gray-900 leading-7">    Add Portfolio Pictures
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">

                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm "
                                  onClick={OnCancel}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <button>
                                    <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" />
                                  </button>
                                </button>
                              </div>
                            </div>
                            <div className="mt-1">
                              <p className="text-sm text-gray-500 leading-5 font-normal">
                              Add or delete portfolio picture on your profile
                              </p>
                            </div>
                          </div>


                        </div>


                        

                          <div className="sm:col-span-6 mt-3.5 px-4 sm:px-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                              Portfoilio Images
                            </label>
                            <div className="mt-3.5 flex justify-center px-auto md:pt-6 lg:pt-10 pb-2.5 border border-gray-300 border-dashed rounded-md">
                              <div className="text-center">
                                <p className='text-xs leading-4 font-semibold tracking-wide'>
                                  NO IMAGE ADDED YET
                                </p>
                                <div className="flex text-sm">
                                  <label className="relative cursor-pointer bg-white rounded-md font-medium">
                                    <input
                                      type="file"

                                      className="hidden"
                                      id="photo"
                                      name="primaryImageUpload"
                                      accept="image/*"
                                      // onChange={handleChange}
                                    />
                                  </label>
                                  <p className={`text-gray-500 text-sm leading-5 font-normal ${mode === 'mobile' ? 'px-16 xl:px-0' : ''}`}>Drag and Drop an Image or click on button to upload</p>
                                </div>


                                <div className='flex flex-col justify-center items-center md:mx-12 lg:mx-20'>

                                  <label htmlFor="photo" id="primaryUploadImage" className='cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm mx-4 px-4 py-3 mt-4 bg-indigo-600 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 w-max'>
                                    Upload Image

                                    <input
                                      type="file"

                                      className="hidden"
                                      id="photo"
                                      name="primaryImageUpload"
                                      accept="image/*"
                                      // onChange={handleChange}
                                    />

                                    {/* <input type="file" name="photo" /> */}
                                    <button type="submit" ref={ref} className="hidden">upload</button>
                                  </label>

                                </div>

                              </div>
                            </div>
                          </div>

                        

                      

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

