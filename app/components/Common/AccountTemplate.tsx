import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
// import thumbnail1 from '../../../assets/images/screenshots/thumbnail1.png'
import thumbnail1 from '../../../assets/images/screenshots/Group 3.svg'
import { useNavigation } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'
import thumbnail3 from '../../../assets/images/screenshots/thumbnail3.png'
import thumbnail4 from '../../../assets/images/screenshots/thumbnail4.png'
import thumbnail5 from '../../../assets/images/screenshots/thumbnail5.png'
import thumbnail6 from '../../../assets/images/screenshots/thumbnail6.png'
import temp9 from '../../../assets/images/screenshots/temp9.png'
import thumb3 from '../../../assets/images/screenshots/thumb3.png'
import thumb4 from '../../../assets/images/screenshots/thumb4.png'
// import thumb6 from '../../../assets/images/screenshots/thumb6.png'
import template9 from '../../../assets/images/screenshots/template-9.png'
import thumb13 from '../../../assets/images/screenshots/thumbnail13.png'
import thumbnail14 from '../../../assets/images/screenshots/thumbnail14.png'
import thumbnail16 from '../../../assets/images/screenshots/thumbnail16.png'
import temp17 from '../../../assets/images/screenshots/temp17.png'
import temp18 from '../../../assets/images/screenshots/temp18.png'
import thumbnail11 from '../../../assets/images/screenshots/thumbnail11.png'
import Modal from './Modal'

export default function AccountTemplate({ setshowTemplate, mode, setmode }: any) {
  const transition = useNavigation()

  const [selectTemplate, setSelectTemplate] = useState('')
  // const templateHandle = 'update/choose-template'
  const OnCancel = () => {
    setshowTemplate(false)
    setmode('desktop')
  }
  // const Onclose = () => {
  //   if (mode === 'desktop') {
  //     setshowTemplate(false)
  //   }
  //   // if (mode === 'mobile') {
  //   // }
  // }

  const apiResponseRef = useRef(false)

  useEffect(() => {
    if (
      transition?.submission?.action?.includes('/account/update/choose-template') &&
      !apiResponseRef?.current
    )
      apiResponseRef.current = true

    if (transition?.state === 'idle' && apiResponseRef?.current) {
      setSelectTemplate('')
      apiResponseRef.current = false
    }
  }, [transition])

  return (
    <>
      <Modal
        open={Boolean(selectTemplate)}
        handleCancel={() => {
          setSelectTemplate('')
        }}
        loading={transition?.submission?.action === '/account/update/choose-template'}
        value={selectTemplate}
        confirmButtonText="Change"
        cancelButtonText="Cancel"
        header="Change Template"
        description={'Are you sure you want to change your profile template?'}
      />

      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => {}}>
          {/* <div className="fixed inset-0" /> */}

          <div className=" inset-0 ">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`pointer-events-none fixed inset-y-0 left-0 mt-12  flex ${
                  mode === 'mobile' ? 'w-[16rem] lg:ml-[16rem] xl:ml-[24rem] xl:w-96' : 'lg:w-96'
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
                  <Dialog.Panel
                    data-cy="accountTemplate"
                    className="pointer-events-auto w-full md:max-w-xs lg:max-w-md"
                  >
                    <div className="flex h-full flex-col overflow-auto border-r border-gray-200 bg-white">
                      <div className="bg-gray-50 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                            Select Template{' '}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-sm leading-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={OnCancel}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="pt-1 pr-2">
                          <p className="text-sm font-normal leading-5 text-gray-500">
                            Select how you want your profile to look like. Click on Toggle button to
                            view in mobile and Desktop mode
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-0">
                        <div className="mb-[-1rem]">
                          <input type="hidden" name="template" value="0" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('0')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '0' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem] ">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail1}
                                  alt=""
                                  className={` w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail1}
                                alt=""
                                className={` w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="2" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('2')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '2' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail3}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail3}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="8" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('8')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '8' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail4}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail4}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="7" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('7')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '7' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail5}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail5}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="5" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('5')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '5' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail6}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail6}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="10" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('10')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '10' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={temp9}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={temp9}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="9" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('9')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '9' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={template9}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={template9}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="3" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('3')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '3' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumb3}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumb3}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="4" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('4')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '4' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumb4}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumb4}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        {/* <Form replace={true} action= {templateHandle} method='post'>
                      <div >
                        <input type="hidden" name='template' value='6' />
                        <button 
                        type='submit'
                        className='disabled:cursor-pointer'
                        onClick={(e: any) => { setSelectTemplate('template6') }}
                        disabled={transition?.state != 'idle'}
                        >
                          {selectTemplate === 'template6' && transition?.submission?.action == "/account/update/choose-template" ? (
                            <div className='relative top-[-1rem]'><BeatLoader color="#184fad" 
                            className={`relative items-center ${mode === 'mobile' ? "top-[6rem] xl:top-[8.5rem]" : "top-[8.5rem]"}`} />
                            <img src={thumb6} alt="" className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${mode === 'mobile' ? 'h-auto' :'h-[14rem]'}`} />
                              </div>
                            ) : (
                              <img
                                src={thumb6}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>
                      */}

                        <div>
                          <input type="hidden" name="template" value="11" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('11')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '11' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail11}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail11}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="13" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('13')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '13' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumb13}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumb13}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="14" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('14')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '14' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail14}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail14}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="16" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('16')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '16' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={thumbnail16}
                                  alt=""
                                  className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={thumbnail16}
                                alt=""
                                className={` mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="17" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('17')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '17' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={temp17}
                                  alt=""
                                  className={`mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={temp17}
                                alt=""
                                className={`mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>

                        <div>
                          <input type="hidden" name="template" value="18" />
                          <button
                            type="submit"
                            className="disabled:cursor-pointer"
                            onClick={(e: any) => {
                              setSelectTemplate('18')
                            }}
                            disabled={transition?.state != 'idle'}
                          >
                            {selectTemplate === '18' &&
                            transition?.submission?.action == '/account/update/choose-template' ? (
                              <div className="relative top-[-1rem]">
                                <BeatLoader
                                  color="#184fad"
                                  className={`relative items-center ${
                                    mode === 'mobile'
                                      ? 'top-[6rem] xl:top-[8.5rem]'
                                      : 'top-[8.5rem]'
                                  }`}
                                />
                                <img
                                  src={temp18}
                                  alt=""
                                  className={`mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 opacity-30 ${
                                    mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                src={temp18}
                                alt=""
                                className={`mt-[-1rem] w-[27.5rem] cursor-pointer border-8 border-gray-200 ${
                                  mode === 'mobile' ? 'h-auto' : 'h-[14rem]'
                                }`}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
