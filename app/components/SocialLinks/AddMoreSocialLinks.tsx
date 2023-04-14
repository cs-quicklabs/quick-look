import { useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import CreateSocialLinks from './CreateSocialLinksForm'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import ExistingSocialLinks from './ExistingSocialLinks'
import { useNavigation } from '@remix-run/react'

export default function AddMoreSocialLinks({
  setMessage,
  successUpdateMessage,
  setshowSocialLinks,
  loaderData,
  mode,
  setmode,
  message,
}: any) {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const navigation = useNavigation()

  const [showCreateProfile, setshowCreateProfile] = useState(false)
  useEffect(() => {
    if (message) {
      setText(message)
    }
    if (successUpdateMessage) {
      setText1(successUpdateMessage)
    }
    // setshowCreateProfile(false)
    setTimeout(() => {
      if (message || successUpdateMessage) {
        setText('')
        setText1('')
      }
    }, 2000)
  }, [message, successUpdateMessage])

  useEffect(() => {
    navigation.state === 'loading' && setshowCreateProfile(false)
  }, [navigation, showCreateProfile])

  const OnCancel = () => {
    setshowSocialLinks(false)
    setmode('desktop')
  }
  return (
    <div className="relative z-40">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-12  ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-80' : 'lg:w-80'
            }`}
        >
          <div className="pointer-events-auto w-screen max-w-md">
            <div
              className={`flex h-full flex-col bg-white border-r border-gray-200 overflow-y-auto ${mode === 'mobile' ? ' w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'
                }`}
            >
              <div className="bg-gray-50 py-6 px-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium leading-7 text-gray-900">
                    {`${loaderData?.socialMedia?.facebookLink &&
                      loaderData?.socialMedia?.twitterLink &&
                      loaderData?.socialMedia?.youtubeLink
                      ? ''
                      : 'Add'
                      } Social Profile Links`}
                  </div>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                      onClick={OnCancel}
                    >
                      <span className="sr-only">Close panel</span>
                      <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {loaderData?.socialMedia?.facebookLink &&
                  loaderData?.socialMedia?.twitterLink &&
                  loaderData?.socialMedia?.youtubeLink ? null : (
                  <div className="pt-1 pr-2">
                    <p className="text-sm leading-5 font-normal text-gray-500">
                      Select social profile links which you want to share on your profile
                    </p>
                  </div>
                )}
              </div>

              {loaderData?.socialMedia?.facebookLink &&
                loaderData?.socialMedia?.twitterLink &&
                loaderData?.socialMedia?.youtubeLink ? null : (
                <>
                  <div className="font-inter mt-7 flex flex-col items-center">
                    <p className="text-xs leading-4 font-semibold tracking-wide">
                      {loaderData?.socialMedia?.facebookLink ||
                        loaderData?.socialMedia?.twitterLink ||
                        loaderData?.socialMedia?.youtubeLink
                        ? 'ADD MORE PROFILE LINKS'
                        : 'NO LINKS ADDED YET '}
                    </p>
                    <p
                      className={`text-sm leading-5 font-normal text-gray-500 px-12  ${mode === 'mobile' ? 'lg:px-4' : 'lg:px-0'
                        }`}
                    >
                      Please add social links by clicking on button below
                    </p>
                    <button
                      data-cy="addSocialProfileButton"
                      onClick={() => setshowCreateProfile((prev) => (prev = true))}
                      type="button"
                      className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      disabled={text || text1 ? true : false}
                    >
                      Add Social Profile
                    </button>
                    <div className="">
                      {showCreateProfile && (
                        <CreateSocialLinks
                          OnCloseSocial={OnCancel}
                          showCreateProfile={showCreateProfile}
                          setMessage={setMessage}
                          message={message}
                          successUpdateMessage={successUpdateMessage}
                          setshowCreateProfile={setshowCreateProfile}
                          setshowSocialLinks={setshowSocialLinks}
                          mode={mode}
                          loaderData={loaderData}
                        />
                      )}
                    </div>
                  </div>
                </>
              )}

              {(text || text1) && (
                <div className="rounded-md bg-green-50 p-4 mt-4">
                  <div className="flex  items-start justify-start">
                    <div className="flex-shrink-0 pt-1">
                      <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">{text || text1}</p>
                    </div>
                    <div className="ml-auto pl-3">
                      <div className="-mx-1.5 -my-1.5 pt-1">
                        <button
                          type="button"
                          className="inline-flex bg-green-50 rounded-md py-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                        >
                          <span className="sr-only">Dismiss</span>
                          <XCircleIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                            onClick={() => {
                              setText('')
                              setText1('')
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={`${showCreateProfile ? 'mt-36 z-40' : 'mt-4'}`}>
                <ExistingSocialLinks
                  successUpdateMessage={successUpdateMessage}
                  message={message}
                  loaderData={loaderData}
                  setshowSocialLinks={setshowSocialLinks}
                  mode={mode}
                  setmode={setmode}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
