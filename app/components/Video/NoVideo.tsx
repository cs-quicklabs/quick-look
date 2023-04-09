import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import CreateVideoLink from './CreateVideoLink'
import ExistingVideo from './ExistingVideo'
import { useNavigation } from '@remix-run/react'
import { AlertSuccess } from '../Alert/Alert'

export default function NoVideo({
  inputVideo,
  setInputVideo,
  setShowAddVideo,
  mode,
  loaderData,
  setmode,
}: any) {
  // const [text, setText] = useState('')
  // useEffect(() => {
  //   setText(successUpdateMessage)
  // }, [successUpdateMessage])

  const [showCreateVideoLink, setShowCreateVideoLink] = useState(false)
  const apiResponseRef = useRef('')
  const navigation = useNavigation()
  const [apiResponse, setApiResponse] = useState({ id: 0, message: '' })
  const { id, message } = apiResponse

  const toggleCreateVideo = () => {
    setShowCreateVideoLink(!showCreateVideoLink)
  }
  const OnCancel = () => {
    setShowAddVideo(false)
    setmode('desktop')
  }

  const Onclose = () => {
    if (mode === 'desktop') {
      setShowAddVideo(false)
    }
  }

  useEffect(() => {
    const action = navigation.formAction || ''

    if (action.includes('add/video') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your video link added successfully.'

    if (action.includes('update/video') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your video link has been updated successfully.'

    if (action.includes('delete/video') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your video link has been deleted successfully.'

    if (navigation.state === 'idle' && apiResponseRef?.current) {
      setApiResponse({
        message: apiResponseRef.current,
        id: apiResponse?.id + 1,
      })
      apiResponseRef.current = ''
    }
  }, [navigation])

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => {}}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-12  ${
              mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'lg:w-96'
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
                <div
                  className={`flex h-full flex-col bg-white border-r border-gray-200 overflow-y-auto ${
                    mode === 'mobile' ? ' w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'
                  }`}
                >
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
                          <XCircleIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="pt-1 pr-2">
                      <p className="text-sm leading-5 font-normal text-gray-500">
                        Please provide link of video you would like to show on profile
                      </p>
                    </div>
                  </div>

                  <div className="px-4 my-2">
                    <AlertSuccess message={message} key={id} />
                  </div>

                  {!loaderData?.video?.videoLink ? (
                    <div className="font-inter mt-7 flex flex-col items-center">
                      <p className="text-xs leading-4 font-semibold tracking-wide">
                        NO LINK ADDED YET
                      </p>
                      <p
                        className={`text-sm leading-5 font-normal text-gray-500 px-12  text-center  ${
                          mode === 'mobile' ? 'lg:px-4' : 'lg:px-0'
                        }`}
                      >
                        Please add video link by clicking on button below
                      </p>
                      <button
                        data-cy="addVideoLinkButton"
                        onClick={() => toggleCreateVideo()}
                        type="button"
                        className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Add Video
                      </button>
                      {showCreateVideoLink && (
                        <CreateVideoLink
                          OncloseVideo={OnCancel}
                          inputVideo={inputVideo}
                          setInputVideo={setInputVideo}
                          setShowCreateVideoLink={setShowCreateVideoLink}
                          setShowAddVideo={setShowAddVideo}
                          mode={mode}
                          setmode={setmode}
                          loaderData={loaderData}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="">
                      <ExistingVideo
                        inputVideo={inputVideo}
                        setInputVideo={setInputVideo}
                        loaderData={loaderData}
                        mode={mode}
                      />
                    </div>
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
