import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import { BeatLoader } from 'react-spinners'
import { Form } from '@remix-run/react'

interface propsType {
  open: boolean
  handleConfirm?: () => void | any
  handleCancel: () => void | any
  header: string
  description?: any
  confirmButtonText?: string
  cancelButtonText?: string
  modalType?: 'Positive' | 'Negative'
  isError?: string | any
  loading?: boolean
  Icon?: any
  value?: string | number
}

const Modal = (props: propsType) => {
  return (
    <Transition.Root as={Fragment} show={props?.open}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => {
          if (!props?.loading) props?.handleCancel()
        }}
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

        <div className="fixed inset-0 z-50 overflow-y-auto" data-cy="modalBox">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div
                    data-cy="modalIcon"
                    className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10  ${
                      props?.modalType === 'Negative' ? 'bg-red-100' : 'bg-indigo-600'
                    }`}
                  >
                    {props?.Icon ||
                      (props?.modalType === 'Negative' ? (
                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                      ) : (
                        <BadgeCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      ))}
                  </div>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                      data-cy="modalHeader"
                    >
                      {props?.header}
                    </Dialog.Title>

                    {props?.description && (
                      <div className="mt-2" data-cy="modalDescription">
                        <p className="text-sm text-gray-500">{props?.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <Form replace={true} action="update/choose-template" method="post">
                    <input className="hidden" name="template" value={props?.value} />
                    <button
                      data-cy="confirmBtn"
                      type="submit"
                      className={`w-full border-transparent text-base sm:ml-3 sm:w-auto sm:text-sm flex items-center justify-center rounded-md border px-4 py-2 font-medium text-white shadow-sm hover:font-bold focus:outline-none
                        ${
                          props?.modalType === 'Negative'
                            ? ' bg-red-600 hover:border-red-600 hover:bg-red-700 '
                            : ' bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-700 '
                        }
                        ${props?.loading ? ' cursor-not-allowed' : ' cursor-pointer'}
                      `}
                      onClick={props?.handleConfirm}
                      disabled={props?.loading}
                    >
                      {props?.loading ? (
                        <BeatLoader color="#FFFFFF" size={14} className="px-0 py-0.5" />
                      ) : (
                        props?.confirmButtonText
                      )}
                    </button>
                  </Form>

                  {props?.cancelButtonText && (
                    <button
                      type="button"
                      className={`mt-3 w-full text-base sm:mt-0 sm:w-auto sm:text-sm flex items-center justify-center 
                        rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 
                        shadow-sm hover:border-gray-400 hover:bg-gray-50 focus:outline-none 
                        ${props?.loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      data-cy="cancelBtn"
                      disabled={props?.loading}
                      onClick={props?.handleCancel}
                    >
                      {props?.cancelButtonText}
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
