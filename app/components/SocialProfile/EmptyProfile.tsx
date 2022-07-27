import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import thumbnail1 from '../../../assets/images/screenshots/thumbnail1.png'
import thumbnail2 from '../../../assets/images/screenshots/thumbnail2.png'
import CreateProfile from './CreateProfile'



export default function EmptyProfile({setshowSocialLinks}:any) {
  const [showCreateProfile, setshowCreateProfile] = useState(false);

  const toggleSetting = () => {
    setshowCreateProfile(!showCreateProfile);
  };

  const Onclose = useCallback(() => {
   setshowSocialLinks(false)
  }, []);
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setshowSocialLinks}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full mt-12">
              <Transition.Child
                as={Fragment}
                enter=""
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave=""
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-full md:max-w-xs lg:max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="bg-gray-50 py-6 px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">Add Social Profile Links</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setshowSocialLinks(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon onClick={() => setshowSocialLinks(false)} className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="pt-1 pr-2">
                        <p className="text-sm leading-5 font-normal text-gray-500">
                        Select social profile links which you want to share on your profile
                        </p>
                      </div>
                    </div>
                    <div className='font-inter mt-7 pl-12 md:pl-0 lg:pl-14'>
                      <p className='text-xs leading-4 font-semibold tracking-wide pl-20 md:pl-[6rem]'>
                        NO LINKS ADDED YET 
                      </p>
                      <p className='text-sm leading-5 font-normal text-gray-500 md:pl-4 lg:pl-0'>
                        Please add social links by clicking on button below
                      </p>
                      <button
                        onClick={() => toggleSetting()}
                        type="button"
                        className="inline-flex items-center px-4 py-2 ml-20 md:ml-[6rem] mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Add Social Profile
                      </button>
                      {showCreateProfile && (
                        <CreateProfile setShowUserSetting={setshowCreateProfile} />
                      )}
                    </div>
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
