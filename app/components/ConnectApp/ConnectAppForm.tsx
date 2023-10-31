import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BeatLoader from 'react-spinners/BeatLoader'
import { useFetcher } from '@remix-run/react'
import { templateOptions } from '~/utils/constants'
import { AlertError, AlertSuccess } from '../Alert/Alert'
import thumbnail1 from '../../../assets/images/screenshots/Group 3.svg'
import thumbnail3 from '../../../assets/images/screenshots/thumbnail3.png'
import thumbnail4 from '../../../assets/images/screenshots/thumbnail4.png'
import thumbnail5 from '../../../assets/images/screenshots/thumbnail5.png'
import thumbnail6 from '../../../assets/images/screenshots/thumbnail6.png'
import temp9 from '../../../assets/images/screenshots/temp9.png'
import thumb3 from '../../../assets/images/screenshots/thumb3.png'
import thumb4 from '../../../assets/images/screenshots/thumb4.png'
import template9 from '../../../assets/images/screenshots/template-9.png'
import thumb13 from '../../../assets/images/screenshots/thumbnail13.png'
import thumbnail14 from '../../../assets/images/screenshots/thumbnail14.png'
import thumbnail16 from '../../../assets/images/screenshots/thumbnail16.png'
import temp17 from '../../../assets/images/screenshots/temp17.png'
import temp18 from '../../../assets/images/screenshots/temp18.png'
import thumbnail11 from '../../../assets/images/screenshots/thumbnail11.png'

export const imagePreview = [
  {
    imgUrl: thumbnail1,
    value: '0',
  },
  {
    imgUrl: thumbnail3,
    value: '2',
  },
  {
    imgUrl: thumbnail4,
    value: '8',
  },
  {
    imgUrl: thumbnail5,
    value: '7',
  },
  {
    imgUrl: thumbnail6,
    value: '5',
  },
  {
    imgUrl: temp9,
    value: '10',
  },
  {
    imgUrl: template9,
    value: '9',
  },
  {
    imgUrl: thumb3,
    value: '3',
  },
  {
    imgUrl: thumb4,
    value: '4',
  },
  {
    imgUrl: thumbnail11,
    value: '11',
  },
  {
    imgUrl: thumb13,
    value: '13',
  },
  {
    imgUrl: thumbnail14,
    value: '14',
  },
  {
    imgUrl: thumbnail16,
    value: '16',
  },
  {
    imgUrl: temp17,
    value: '17',
  },
  {
    imgUrl: temp18,
    value: '18',
  },
]

export default function ConnectAppModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: (v?: boolean) => void
}) {
  const fetcher = useFetcher()
  const [imageURL, setImageURL] = useState(thumbnail1)

  // @ts-ignore
  const errors = fetcher?.data?.errors
  // @ts-ignore
  const error = fetcher?.data?.error
  // @ts-ignore
  const success = fetcher?.data?.success

  useEffect(() => {
    if (success) onClose(true)
  }, [success, onClose])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full sm:p-6">
                {error ? (
                  <div className="my-2">
                    <AlertError message={error} autoClose={5000} />
                  </div>
                ) : null}

                {success ? (
                  <>
                    <AlertSuccess message={'App connected successfully.'} autoClose={3000} />
                  </>
                ) : (
                  <div className="">
                    <fetcher.Form method="post" className="flex flex-col gap-4 justify-center">
                      <div className="flex flex-col justify-between items-center gap-1">
                        <div className="w-full">
                          <label
                            className="text-gray-700 font-medium leading-5 text-sm"
                            htmlFor="appName"
                          >
                            App Name
                          </label>

                          <input
                            data-cy="appName"
                            autoComplete="off"
                            className={`flex items-center box-border appearance-none w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                              errors?.['appName'] ? 'border border-red-400' : 'first-line:'
                            }`}
                            type="text"
                            name="appName"
                            id="appName"
                          />

                          {errors?.['appName'] ? (
                            <div className="text-red-600 text-sm py-1">{errors['appName']}</div>
                          ) : null}
                        </div>

                        <div className="w-full mt-2">
                          <label
                            className="text-gray-700 font-medium leading-5 text-sm"
                            htmlFor="template"
                          >
                            Default Profile Template
                          </label>

                          <select
                            name="template"
                            id="template"
                            className="border border-gray-300 rounded-md shadow-sm h-10 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5"
                            onChange={(e) => {
                              setImageURL(
                                imagePreview.find((v) => v.value === e.target.value)?.imgUrl || ''
                              )
                            }}
                          >
                            {templateOptions.map((v, i) => (
                              <option key={v.label + i} value={v.value}>
                                {v.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <img
                          src={imageURL}
                          alt="template"
                          className={`w-auto sm:w-[27rem] border-2 border-gray-200 h-[16rem] ${
                            imageURL === thumbnail1 ? 'pb-1' : ''
                          }`}
                        />
                      </div>

                      <div className="flex items-center justify-center gap-4">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm disabled:cursor-pointer"
                          onClick={() => onClose()}
                          disabled={fetcher.state != 'idle'}
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="inline-flex justify-center items-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:w-auto sm:text-sm disabled:cursor-pointer"
                          disabled={fetcher.state != 'idle'}
                        >
                          {fetcher.state != 'idle' ? (
                            <BeatLoader size={14} color="#ffffff" className="px-0 py-0.5" />
                          ) : (
                            'Confirm'
                          )}
                        </button>
                      </div>
                    </fetcher.Form>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
