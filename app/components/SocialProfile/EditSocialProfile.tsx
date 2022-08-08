import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import ExistingSocialLinks from '../Common/ExistingSocialLinks'
import SelectEditProfile from '../Common/SelectEditProfile'

export default function EditSocialProfile({loaderData, setShowEditProfile, setshowSocialLinks, editLink}:any) {
  
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setShowEditProfile}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex w-96 mt-12">
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
                  <form method="post">
                  <div className="flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
                    <div className="bg-gray-50 py-6 px-4">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                          Add Social Profile Links
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                            onClick={() => setShowEditProfile(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon onClick={() => setShowEditProfile(false)} className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-1 pr-2">
                        <p className="text-sm leading-5 font-normal text-gray-500">
                        Select social profile links which you want to share on your profile
                        </p>
                      </div>
                    </div>
                    <div className='font-inter mt-7 flex flex-col items-center'>
                      <p className='text-xs leading-4 font-semibold tracking-wide'>
                        ADD MORE PROFILE LINKS
                      </p>
                      <p className='text-sm leading-5 font-normal text-gray-500 px-12 lg:px-0'>
                        Please add social links by clicking on button below
                      </p>
                      <button
                        // onClick={() => toggleSetting()}
                        type="button"
                        className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Add Social Profile
                      </button>
                    </div>

                    <div className='mt-10'>
                      <ExistingSocialLinks setshowSocialLinks={setshowSocialLinks} />
                    </div>

                    <div className='pl-3 pr-3.5 mt-6'>
                      <div>
                        <SelectEditProfile loaderData={loaderData} editLink={editLink} />
                      </div>
                      <div className='mt-5'>
                        <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                          {' '}
                          Add Link{' '}
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            placeholder="editlink"
                            name="editlink"
                            id="editlink"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-shrink-0 justify-end px-4 pb-2 mt-7">
                      <span>
                        <button
                          type="button"
                          className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5"
                          onClick={() => {
                            setShowEditProfile(false);
                            setshowSocialLinks(true);
                          }}
                        >
                          Cancel
                        </button>
                      </span>
                      <button
                        type="submit"
                        className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Update
                      </button>
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
