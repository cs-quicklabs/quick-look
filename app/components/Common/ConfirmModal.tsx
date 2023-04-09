import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

export default function Modal({ open, onClose }: any) {
  const [signout, setSignout] = useState(false)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[100] font-inter" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                data-cy="signOutModal"
                className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6"
              >
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                    onClick={onClose}
                    disabled={signout}
                  >
                    <span className="sr-only">Close</span>
                    <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationCircleIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Are you sure, you want to Sign out?</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <form method="POST" action="/auth/logout">
                    <button
                      data-cy="signOut"
                      type="submit"
                      // disabled={signout}
                      className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        typeof window !== 'undefined' && localStorage.setItem('viewMode', 'desktop')
                        setSignout(true)
                      }}
                    >
                      {' '}
                      {signout ? (
                        <BeatLoader color="#FFFFFF" size={12} className="px-0 py-0.5" />
                      ) : (
                        'Sign out'
                      )}
                    </button>
                  </form>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onClose}
                    disabled={signout}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
