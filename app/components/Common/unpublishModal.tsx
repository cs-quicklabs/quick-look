import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { Form, useTransition } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'

import type { ActionArgs } from '@remix-run/node' // or cloudflare/deno
import { getUser } from '~/services/auth.service.server'
import { publishToggle } from '~/services/user.service.server'

export async function action({ request }: ActionArgs) {
  const user = await getUser(request)
  return await publishToggle(user)
}

export default function Delete({
  open,
  onClose,
  isPublished,
  setopenModal,
}: any) {
  const transition = useTransition()
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    if (transition?.state === 'submitting') setopenModal(false)
  }, [transition])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
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
                  {isPublished ? (
                    <div
                      className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${
                        isPublished ? 'bg-red-100' : 'bg-indigo-100'
                      } sm:mx-0 sm:h-10 sm:w-10`}
                    >
                      <ExclamationIcon
                        className={`h-6 w-6 ${
                          isPublished ? 'text-red-600' : 'text-indigo-600'
                        } `}
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {isPublished ? 'Unpublish Account' : 'Publish Account'}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {isPublished
                          ? 'Are you sure you want to unpublish your account? Your profile will be hidden and will not be available to those who already have your profile link. Although you can publish your profile if you wish to anytime.'
                          : 'Are you sure you want to publish your account? Your profile will be Shown and will be available to anyone who already have your profile link. Although you can unpublish your profile if you wish to anytime.'}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-5 sm:mt-4 sm:flex ${
                    isPublished ? 'pl-[3.5rem]' : 'pl-[1rem]'
                  }`}
                >
                  <Form method="patch">
                    <button
                      type="submit"
                      // onClick={onClose}
                      className={`inline-flex justify-center items-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 disabled:cursor-pointer ${
                        isPublished
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }  text-base font-medium text-white  focus:outline-none sm:w-auto sm:text-sm`}
                      disabled={transition?.state === 'submitting'}
                    >
                      {transition?.state === 'submitting' ? (
                        <BeatLoader
                          color="#ffffff"
                          size={12}
                          className="px-0 py-0.5"
                        />
                      ) : isPublished ? (
                        'Unpublish'
                      ) : (
                        'Publish'
                      )}
                    </button>
                  </Form>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-pointer"
                    onClick={onClose}
                    disabled={transition?.state === 'submitting'}
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
