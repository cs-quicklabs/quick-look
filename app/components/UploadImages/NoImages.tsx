import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import UpdateImage from './UpdateImage';

export default function NoImages({setshowImages}:any) {
  const [showupdateImage, setshowupdateImage] = useState(false);

  const toggleComponent = () => {
    setshowupdateImage(!showupdateImage);
  };

  const Onclose = (e:any) => {
    setshowImages(false)
  };

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setshowImages}>
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
                                onClick={() => setshowImages(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <a href="/account">
                                <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" /></a>
                              </button></form>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-gray-500 leading-5 font-normal">
                            Please update pictures shown in template
                            </p>
                          </div>
                        </div>
                      
                      
                      </div>

                      <div className="sm:col-span-6 mt-3.5 px-4 sm:px-6">
                        <label className="block text-sm font-medium leading-5 text-gray-700"> 
                          Primary Image 
                        </label>
                        <div className="mt-3.5 flex justify-center px-auto pt-10 pb-2.5 border border-gray-300 border-dashed rounded-md">
                          <div className="text-center">
                            <p className=' text-xs leading-4 font-semibold tracking-wide'>
                              NO IMAGE ADDED YET
                            </p>
                            <div className="flex text-sm">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium">
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="text-gray-500 text-sm leading-5 font-normal">Drag and Drop an Image or click on button to upload</p>
                            </div>
                            <button
                              type="submit"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mt-4 bg-indigo-600 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Upload Image
                            </button>
                            <p className="text-sm leading-5 mt-2.5 font-normal text-gray-400">Restore Default Image</p>
                          </div>
                        </div>
                      </div>
      
                      <div className="sm:col-span-6 mt-16 px-4 sm:px-6">
                        <label className="block text-sm font-medium leading-5 text-gray-700">         Secondary Image 
                        </label>
                        <div className="mt-3.5 flex justify-center px-[1px] pt-10 pb-2.5 border border-gray-300 border-dashed rounded-md">
                          <div className="text-center">
                            <p className=' text-xs leading-4 font-semibold tracking-wide'>
                              NO IMAGE ADDED YET
                            </p>
                            <div className="flex text-sm">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium">
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="text-gray-500 text-sm leading-5 font-normal">Drag and Drop an Image or click on button to upload</p>
                            </div>
                            <a
                              onClick={() => toggleComponent()}
                              type="submit"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mt-4 bg-indigo-600 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Upload Image
                            </a>
                            <p className="text-sm leading-5 mt-2.5 font-normal text-gray-400">Restore Default Image</p>
                          </div>

                          {showupdateImage && (
                            <UpdateImage setshowupdateImage={setshowupdateImage} />
                          )}

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
