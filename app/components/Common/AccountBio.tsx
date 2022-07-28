import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function DashboardBio({setshowBio,input,setinput,showBio,loaderData}:any) {
  // const [open, setOpen] = useState(true)
  const Onclose = (e:any) => {
    // const value = e.target.name
    // setinput(...input,input.value = loaderData.value)
   setshowBio(false)
  };
// const Onclose = ()=>{

//   setshowBio(false)
// }
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setshowBio}>
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
                  <div className="flex h-[95%] flex-col mt-12 w-full md:max-w-xs lg:max-w-md divide-y divide-gray-200 bg-white font-inter border-r border-gray-200">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="py-6 px-4 sm:px-6 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> Update Your Bio </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <form action="">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setshowBio(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <a href="/account">
                              <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" /></a>
                            </button></form>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-gray-500 leading-5 font-normal">
                            Get started by filling in the information below to update your profile
                          </p>
                        </div>
                      </div>
                     
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
                                  // value={input.bio}
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
                                  // onChange={(e:any) => setVal(e.target.value)}
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
                      <a href="/account">
                      <button
                        type="button"
                        className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5"
                        onClick={() => setshowBio(false)}
                      >
                         
                        Cancel
                      </button></a>
                      <button
                        type="submit"
                        className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Update
                      </button>
                    </div>
                  </div></form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
