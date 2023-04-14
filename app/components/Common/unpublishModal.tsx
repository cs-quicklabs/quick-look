import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Form, useNavigation } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'

import type { ActionArgs } from '@remix-run/node' // or cloudflare/deno
import { publishToggle } from '~/services/user.service.server'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

export async function action({ request }: ActionArgs) {
  return await publishToggle(request)
}

export default function UnpublishModal({ open, onClose, isPublished, setopenModal }: any) {
  const navigation = useNavigation()
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    if (navigation.state === 'submitting') setopenModal(false)
  }, [navigation])

  const modalProps = {
    title: isPublished ? 'Unpublish Your Profile' : 'Publish Your Profile',
    description: isPublished ? 'Are you sure you want to unpublish your account? Your profile will be hidden and will not be available to those who already have your profile link. Although you can publish your profile if you wish to anytime.' : 'Are you sure you want to publish your account? Your profile will be public and will be available to anyone who already have your profile link. Although you can unpublish your profile if you wish to anytime.',
    iconColor: isPublished ? 'text-red-600' : 'text-indgo-600',
    actionButton: isPublished ? 'Unpublish' : 'Publish',
    buttonColor: isPublished ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700',
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => { }}>
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

        <div className="fixed z-10 inset-0 overflow-y-auto font-inter">
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
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${isPublished ? 'bg-red-100' : 'bg-indigo-100'
                      } sm:mx-0 sm:h-10 sm:w-10`}
                  >
                    <ExclamationCircleIcon
                      className={`h-6 w-6 ${isPublished ? 'text-red-600' : 'text-indigo-600'} `}
                      aria-hidden="true"
                    />
                  </div>


                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {modalProps.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {modalProps.description}
                      </p>
                    </div>
                    <div
                      className={`mt-5 sm:mt-4 sm:flex pl-8`}
                    >
                      <Form method="patch">
                        <button
                          type="submit"
                          className={`inline-flex justify-center items-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 disabled:cursor-pointer ${modalProps.buttonColor
                            }  text-base font-medium text-white  focus:outline-none sm:w-auto sm:text-sm`}
                          disabled={navigation.state === 'submitting'}
                        >
                          {navigation.state === 'submitting' ? (
                            <BeatLoader color="#ffffff" size={12} className="px-0 py-0.5" />
                          ) : modalProps.actionButton}
                        </button>
                      </Form>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-pointer"
                        onClick={onClose}
                        disabled={navigation.state === 'submitting'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
