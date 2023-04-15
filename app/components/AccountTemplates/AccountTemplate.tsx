import { useEffect, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
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
import template9 from '../../../assets/images/screenshots/template-9.png'
import thumb13 from '../../../assets/images/screenshots/thumbnail13.png'
import thumbnail14 from '../../../assets/images/screenshots/thumbnail14.png'
import thumbnail16 from '../../../assets/images/screenshots/thumbnail16.png'
import temp17 from '../../../assets/images/screenshots/temp17.png'
import temp18 from '../../../assets/images/screenshots/temp18.png'
import thumbnail11 from '../../../assets/images/screenshots/thumbnail11.png'
import Modal from '../Common/Modal'
import SidebarDetailContainer from '../Sidebar/SidebarDetailContainer'

export default function AccountTemplate({ setshowTemplate, mode, setmode }: any) {
  const navigation = useNavigation()

  const [selectTemplate, setSelectTemplate] = useState('')
  const OnCancel = () => {
    setshowTemplate(false)
    setmode('desktop')
  }

  const apiResponseRef = useRef(false)

  useEffect(() => {
    if (
      navigation.formAction?.includes('/account/update/choose-template') &&
      !apiResponseRef?.current
    )
      apiResponseRef.current = true

    if (navigation.state === 'idle' && apiResponseRef?.current) {
      setSelectTemplate('')
      apiResponseRef.current = false
    }
  }, [navigation])

  return (
    <>
      <Modal
        open={Boolean(selectTemplate)}
        handleCancel={() => {
          setSelectTemplate('')
        }}
        loading={navigation.formAction === '/account/update/choose-template'}
        value={selectTemplate}
        confirmButtonText="Change"
        cancelButtonText="Cancel"
        header="Change Template"
        description={'Are you sure you want to change your profile template?'}
      />

      <SidebarDetailContainer mode={mode}>
        <div className="flex h-full flex-col overflow-auto border-r border-gray-200 bg-white">
          <div className="bg-gray-50 py-6 px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium leading-7 text-gray-900">Select Template </div>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="rounded-md bg-white text-sm leading-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={OnCancel}
                >
                  <span className="sr-only">Close panel</span>
                  <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="pt-1 pr-2">
              <p className="text-sm font-normal leading-5 text-gray-500">
                Select how you want your profile to look like. Click on Toggle button to view in
                mobile and Desktop mode
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '0' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem] ">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '2' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '8' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '7' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '5' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '10' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '9' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '3' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '4' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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

            <div>
              <input type="hidden" name="template" value="11" />
              <button
                type="submit"
                className="disabled:cursor-pointer"
                onClick={(e: any) => {
                  setSelectTemplate('11')
                }}
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '11' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '13' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '14' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '16' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '17' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
                disabled={navigation.state != 'idle'}
              >
                {selectTemplate === '18' &&
                navigation.formAction == '/account/update/choose-template' ? (
                  <div className="relative top-[-1rem]">
                    <BeatLoader
                      color="#184fad"
                      className={`relative items-center ${
                        mode === 'mobile' ? 'top-[6rem] xl:top-[8.5rem]' : 'top-[8.5rem]'
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
      </SidebarDetailContainer>
    </>
  )
}
