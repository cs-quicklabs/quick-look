import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function NoImages({setshowImages,loaderData}:any) {
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
