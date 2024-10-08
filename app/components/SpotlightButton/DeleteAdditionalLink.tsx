import React from 'react'
import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Form, useNavigation } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'

export default function DeleteAdditinalLink({
  additionalSpotlight,
  deleteAdditionalLink,
  onClose,
  setOpenDeleteAdditionalLink,
}: any) {
  const navigation = useNavigation()
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    if (navigation.state === 'loading') {
      setOpenDeleteAdditionalLink(false)
    }
  }, [navigation])

  return (
    <div
      className="relative z-[999]"
    >
      <div className="fixed z-[999] inset-0 overflow-y-auto font-inter">
        <div className="flex items-end sm:items-center justify-center min-h-[80%] sm:min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationCircleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h1 className="text-lg leading-6 font-medium text-gray-900">
                  Delete Additional Spotlight Link
                </h1>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this additional spotlight link?
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex">
              <Form replace={true} action="delete/additionalLink" method="post">
                <input value={deleteAdditionalLink.id} name="deleteAdditionalLink" hidden />
                <button
                  data-cy="deleteAdditionalLink"
                  id="deleteAdditionalLinkButton"
                  name="deleteAdditionalLinkButton"
                  // value = {loaderData}
                  type="submit"
                  className="inline-flex justify-center items-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:w-auto sm:text-sm disabled:cursor-pointer"
                  disabled={navigation.state != 'idle' ? true : false}
                >
                  {navigation.state != 'idle' ? (
                    <BeatLoader color="#ffffff" className="px-0 py-0.5" size={12} />
                  ) : (
                    'Delete'
                  )}
                </button>
              </Form>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-pointer"
                onClick={onClose}
                disabled={navigation.state != 'idle'}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
