import { useEffect, useState } from 'react'
import ExistingVideo from './ExistingVideo'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Form, useNavigation } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'
import SidebarDetailContainer from '../Sidebar/SidebarDetailContainer'

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
  const navigation = useNavigation()
  useEffect(() => {
    if (navigation.state === 'loading') {
      setShowCreateVideoLink(false)
    }
  }, [navigation])

  const OnCancel = () => {
    setShowCreateVideoLink(false)
  }

  const Onclose = () => {
    if (mode === 'desktop') {
      setShowCreateVideoLink(false)
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

  return (
    <SidebarDetailContainer mode={mode}>
      <Form replace={true} action="add/video" method="post" className="h-screen">
        <div className="flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
          <div className="bg-gray-50 py-6 px-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium leading-7 text-gray-900">
                {`${
                  loaderData?.video?.videoLink
                    ? 'Edit Video Link on your profile'
                    : 'Add Video Link to your profile'
                } `}
              </div>
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
                    <div className="text-red-500 text-sm">{error}</div>
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
                    disabled={navigation.state != 'idle'}
                  >
                    Cancel
                  </button>
                </div>

                <button
                  data-cy="addVideoURL"
                  type="submit"
                  className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
                  disabled={!val || navigation.state != 'idle' ? true : !error ? false : true}
                >
                  {navigation.state != 'idle' ? (
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
    </SidebarDetailContainer>
  )
}
