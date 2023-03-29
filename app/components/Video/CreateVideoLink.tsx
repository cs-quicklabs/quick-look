import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ExistingVideo from './ExistingVideo'
import { XIcon } from '@heroicons/react/outline'
import { Form, useTransition } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'

export default function CreateVideoLink({
  OncloseVideo,
  inputVideo,
  setInputVideo,
  setShowCreateVideoLink,
  setShowAddVideo,
  mode,
  loaderData,
  setmode,
}: any) {
  const [val, setVal] = useState('')
  const transition = useTransition()
  useEffect(() => {
    if (transition.state === 'loading') {
      setShowCreateVideoLink(false)
    }
  }, [transition])

  const OnCancel = () => {
    setShowCreateVideoLink(false)
  }

  const Onclose = () => {
    if (mode === 'desktop') {
      setShowCreateVideoLink(false)
    }
    if (mode === 'mobile') {
    }
    OncloseVideo()
  }
  const handleURL = (event: any) => {
    const value = event.target.value
    setVal(value?.includes('https://www.') ? value?.substring(12) : value)
  }
  const [error, SetError] = useState('')

  let whiteSpaceRegex = /^\S*$/
  let RegEx = val?.includes('youtube')
    ? /^(https?:\/\/)?((w{3}\.)?)youtube.com\/./gm
    : /^(https?:\/\/)?((w{3}\.)?)facebook.com\/./gm

  const RegexCheck = () => {
    if (val === '') {
      return SetError('')
    }
    if (!whiteSpaceRegex.test(val)) {
      return SetError('White space not allowed.')
    }
    if (!RegEx.test(val)) {
      return SetError('Please enter a valid link.')
    } else {
      return SetError('')
    }
  }

  useEffect(() => {
    RegexCheck()
  }, [val])

  // let matchesFbRegex = url.match(fbRegEx)
  // if (!url) {
  //   return 'Required.'
  // } else if (!notContainsWhitespace) {
  //   return 'Whitespaces are not allowed.'
  // } else if (!matchesFbRegex) {
  //   return 'Inavlid Facebook URL.'
  // }

  return (
    <Transition.Root show={true} as={Fragment}>
      <div className="relative z-40">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-[3rem]  ${
              mode === 'mobile'
                ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96'
                : 'lg:w-96'
            }`}
          >
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
                <Form
                  replace={true}
                  action="add/video"
                  method="post"
                  className="h-screen"
                >
                  <div className="flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
                    <div className="bg-gray-50 py-6 px-4">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                          {`${
                            loaderData?.video?.videoLink
                              ? 'Edit Video Link on your profile'
                              : 'Add Video Link to your profile'
                          } `}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                            onClick={OnCancel}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon
                              onClick={Onclose}
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="pt-1 pr-2">
                        <p className="text-sm leading-5 font-normal text-gray-500">
                          Please provide link of video you would like to show on
                          profile
                        </p>
                      </div>
                    </div>
                    {loaderData?.video?.videoLink ? (
                      <div className="">
                        <ExistingVideo
                          setVal={setVal}
                          inputVideo={inputVideo}
                          setInputVideo={setInputVideo}
                          loaderData={loaderData}
                          mode={mode}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="pl-2.5 pr-5 mt-6">
                          <div className="mt-[0.875rem]">
                            <label
                              htmlFor="project-name"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              {' '}
                              Add Link{' '}
                            </label>
                            <div className="mt-1">
                              <input
                                data-cy="addVideoLink"
                                type="text"
                                placeholder="Please enter your video link"
                                name="videoLink"
                                id="videoLink"
                                value={val}
                                onChange={handleURL}
                                className={`leading-5 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm text-gray-900 ${
                                  error
                                    ? 'focus:border-red-500 focus:ring-red-500 border-red-500'
                                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                                }`}
                              />
                              <div className="text-red-500 text-sm">
                                {error}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-shrink-0 justify-end px-4 pb-2 mt-7">
                          <div>
                            <button
                              data-cy="cancelButton"
                              type="button"
                              className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5 disabled:cursor-pointer"
                              onClick={OnCancel}
                              disabled={transition?.state != 'idle'}
                            >
                              Cancel
                            </button>
                          </div>

                          <button
                            data-cy="addVideoURL"
                            type="submit"
                            className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
                            disabled={
                              !val || transition?.state != 'idle'
                                ? true
                                : !error
                                ? false
                                : true
                            }
                          >
                            {transition?.state != 'idle' ? (
                              <BeatLoader color="#ffffff" size={12} />
                            ) : (
                              'Add Video'
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </Form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  )
}
