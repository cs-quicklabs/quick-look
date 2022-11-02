import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CreateBanner from './CreateBanner'
import DeleteBanner from './Deletebanner'

export default function Banner({
  setShowBanner,
  loaderData,
  mode,
  setmode,
}: any) {
  const [showCreatebanner, setShowCreatebanner] = useState(false)
  const [openDeleteBanner, setOpenDeleteBanner] = useState(false)

  const toggleCreateBanner = () => {
    setShowCreatebanner(!showCreatebanner)
  }

  const OnCancel = () => {
    setShowBanner(false)
    setmode('desktop')
  }

  const Onclose = () => {
    if (mode === 'desktop') {
      setShowBanner(false)
    }
    if (mode === 'mobile') {
    }
  }
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => {}}>
        {/* <div className="fixed inset-0" /> */}

        {/* <div className={`fixed inset-0 overflow-hidden`}> */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`pointer-events-none fixed inset-y-0 left-0 mt-12  flex  ${
              mode === 'mobile'
                ? 'w-[16rem] lg:ml-[16rem] xl:ml-[24rem] xl:w-96'
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
                <div
                  className={`flex h-full flex-col overflow-y-auto border-r border-gray-200 bg-white ${
                    mode === 'mobile'
                      ? ' w-[16rem] xl:w-96'
                      : ' w-[20rem] lg:w-96'
                  }`}
                >
                  <div className="bg-gray-50 py-6 px-4">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                        {loaderData?.supportBanner?.bannerText ? 'Edit' : 'Add'}{' '}
                        support banner on your profile
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white text-sm leading-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
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
                      <p className="text-sm font-normal leading-5 text-gray-500">
                        A support banner appears on top of your profile
                      </p>
                    </div>
                  </div>

                  {!loaderData?.supportBanner?.bannerText ? (
                    <div className="font-inter mt-7 flex flex-col items-center">
                      <p className="text-xs font-semibold leading-4 tracking-wide">
                        NO BANNER ADDED YET
                      </p>
                      <p
                        className={`px-12 text-center text-sm font-normal leading-5  text-gray-500  ${
                          mode === 'mobile' ? 'lg:px-4' : 'lg:px-0'
                        }`}
                      >
                        Please add banner by clicking on button below
                      </p>
                      <button
                        data-cy="addBannerButton"
                        onClick={() => toggleCreateBanner()}
                        type="button"
                        className="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700"
                      >
                        Add Support Banner
                      </button>
                      {showCreatebanner && (
                        <CreateBanner
                          OncloseBanner={OnCancel}
                          setShowCreatebanner={setShowCreatebanner}
                          mode={mode}
                          setmode={setmode}
                          loaderData={loaderData}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="pl-3 pr-3.5">
                      <ul>
                        <li className="">
                          <div
                            className={`flex justify-between  border-b border-gray-200 ${
                              mode === 'mobile'
                                ? 'flex-col items-center xl:flex-row'
                                : 'flex-col lg:flex-row'
                            }`}
                          >
                            <div className="flex py-4">
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                  {loaderData?.supportBanner?.bannerText?.slice(
                                    0,
                                    18
                                  ) + '...'}
                                </p>
                                <p
                                  className={` overflow-hidden text-ellipsis text-sm text-gray-500 ${
                                    mode === 'mobile' ? 'w-[9rem]' : 'w-52'
                                  }`}
                                >
                                  {loaderData?.supportBanner?.bannerlink
                                    ?.length > 18
                                    ? loaderData?.supportBanner?.bannerlink.slice(
                                        0,
                                        18
                                      ) + '...'
                                    : loaderData?.supportBanner?.bannerlink}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`mb-2  flex  items-start text-gray-400 lg:mb-0 ${
                                mode === 'mobile'
                                  ? 'mr-[6.5rem] flex-row xl:mr-0 xl:flex-col'
                                  : 'ml-4 flex-row  py-0 lg:ml-[3.2rem] lg:flex-col lg:py-4'
                              }`}
                            >
                              <button
                                data-cy="editBanner"
                                className="text-[14px] hover:text-indigo-600"
                                onClick={(e: any) => {
                                  e.preventDefault()
                                  setShowCreatebanner(true)
                                }}
                              >
                                Edit
                              </button>
                              {showCreatebanner && (
                                <CreateBanner
                                  setOpenDeleteBanner={setOpenDeleteBanner}
                                  loaderData={loaderData}
                                  showCreatebanner={showCreatebanner}
                                  setShowCreatebanner={setShowCreatebanner}
                                  mode={mode}
                                  setmode={setmode}
                                />
                              )}
                              <button
                                data-cy="deleteBanner"
                                onClick={(e: any) => {
                                  e.preventDefault()
                                  setOpenDeleteBanner(true)
                                }}
                                className={`text-[14px] hover:text-red-600 ${
                                  mode === 'mobile'
                                    ? 'ml-[1.5rem] xl:ml-0'
                                    : 'ml-3 lg:ml-0'
                                }`}
                              >
                                Delete
                              </button>
                              {openDeleteBanner && (
                                <DeleteBanner
                                  openDeleteBanner={openDeleteBanner}
                                  setOpenDeleteBanner={setOpenDeleteBanner}
                                  onClose={() => setOpenDeleteBanner(false)}
                                />
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        {/* </div> */}
      </Dialog>
    </Transition.Root>
  )
}
