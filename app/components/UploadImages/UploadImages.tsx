import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import bg from '../../../assets/images/bg.png'
import defaultProfileimage from '../../../assets/images/profile.png'
import BeatLoader from 'react-spinners/BeatLoader'
import DeleteImage from '../Common/DeleteImage'
import { Form, useTransition, useSubmit } from '@remix-run/react'
import * as cropro from 'cropro'
import Dropzone from './DragandDrop'
import DropzonePrimary from './DragandDropPrimary'
import ProfileImage from './ProfileImage'
import { CheckCircleIcon } from '@heroicons/react/solid'

let timeOut: string | number | NodeJS.Timeout | undefined

export default function NoImages({
  setshowImages,
  mode,
  setmode,
  primaryRestore,
  secondaryRestore,
  loaderData,
}: any) {
  const bgimageAlreadyuploaded = loaderData?.profileImage?.primaryImage
  const profileimageAlreadyuploaded = loaderData?.profileImage?.secondaryImage
  const [open, setopen] = useState(false)
  const [image, setimage] = useState(null)

  const [image2, setimage2] = useState(null)
  const [deleteImage, setDeleteImage] = useState('')
  const [primaryImageError, setPrimaryImageError] = useState('')
  const [secondaryImageError, setSecondaryImageError] = useState('')
  const [upload, setUpload] = useState('')
  const [upload2, setUpload2] = useState('')
  const [restore, setRestore] = useState(false)
  const [restore2, setRestore2] = useState(false)
  const [images, setImages] = useState('')
  const [edit, setEdit] = useState(false)
  const [edit2, setEdit2] = useState(false)
  const [drag, setDrag] = useState(false)
  const [drag2, setDrag2] = useState(false)

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()

      reader.onload = function (e: any) {
        // @ts-ignore
        setImages(e.target.result)
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

  const [images1, setImages1] = useState('')
  const onDrop1 = useCallback((acceptedFiles: any) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()

      reader.onload = function (e: any) {
        // @ts-ignore
        setImages1(e.target.result)
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

  const transition = useTransition()
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)

  const [url, setUrl] = useState('')
  const [urlSec, setUrlSec] = useState('')

  function showCropArea() {
    if (ref4.current !== null) {
      // create a CropArea
      const cropArea = new cropro.CropArea(ref4.current)
      cropArea.displayMode = 'popup'
      // attach an event handler to assign cropped image back to our image element
      cropArea.addRenderEventListener((dataUrl) => {
        if (ref4.current) {
          // @ts-ignore
          ref4.current.src = dataUrl
          // @ts-ignore
          setUrl(ref4.current.src)
        }
      })
      // launch CROPRO
      cropArea.show()
    }
  }

  function showCropAreaSecondary() {
    if (ref5.current !== null) {
      // create a CropArea
      const cropArea = new cropro.CropArea(ref5.current)
      cropArea.displayMode = 'popup'
      // attach an event handler to assign cropped image back to our image element
      cropArea.addRenderEventListener((dataUrl) => {
        if (ref5.current) {
          // @ts-ignore
          ref5.current.src = dataUrl
          // @ts-ignore
          setUrlSec(ref5.current.src)
        }
      })
      // launch CROPRO
      cropArea.show()
    }
  }

  useEffect(() => {
    if (image) {
      // @ts-ignore
      ref?.current?.click()
    }
    if (image2 !== null) {
      // @ts-ignore
      ref2?.current?.click()
    }
    if (url && url.includes('data:')) {
      // @ts-ignore
      ref3?.current?.click()
    }
    setUrl('')
    if (urlSec && urlSec.includes('data:')) {
      // @ts-ignore
      ref6?.current?.click()
      setUrlSec('')
    }
  }, [image, image2, url, urlSec])

  const handleChange = (e: any) => {
    if (e.target.files[0].size / 1024 < 4300) {
      if (
        e.target.files[0].type.includes('image/jpeg') ||
        e.target.files[0].type.includes('image/jpg') ||
        e.target.files[0].type.includes('image/png')
      ) {
        setimage(e.target.files[0])
      } else {
        setPrimaryImageError('Please upload image only')
      }
    } else {
      setPrimaryImageError('Image size can be upto 4mb.')
    }
  }
  const handleChange2 = (e: any) => {
    if (e.target.files[0].size / 1024 < 4300) {
      if (
        e.target.files[0].type.includes('image/jpeg') ||
        e.target.files[0].type.includes('image/jpg') ||
        e.target.files[0].type.includes('image/png')
      ) {
        setimage2(e.target.files[0])
      } else {
        setSecondaryImageError('Please upload image only')
      }
    } else {
      setSecondaryImageError('Image size can be upto 4mb.')
    }
  }

  const Onclose = (e: any) => {
    if (mode === 'desktop') {
      setshowImages(false)
    }
    if (mode === 'mobile') {
    }
  }

  const OnCancel = () => {
    setshowImages(false)
    setmode('desktop')
  }

  // states to change cover image
  const changeImageSubmitRef = useRef(null)
  const [changeImageResponse, setChangeImageResponse] = useState({
    message: '',
    type: false,
  })
  const changeImageStateRef = useRef(false)

  const handleChangeImage = (event: any) => {
    const file = event?.target?.files?.[0]

    if (file?.type?.includes('image') && !file?.type?.includes('svg')) {
      if (file?.size / 1024 > 4096) {
        setChangeImageResponse({
          message: 'Image size can be upto 4MB.',
          type: false,
        })
        return
      }

      // @ts-ignore
      changeImageSubmitRef?.current?.click()
    } else {
      setChangeImageResponse({
        message: 'Only jpg, jpeg and png files are supported!',
        type: false,
      })
    }
  }

  useEffect(() => {
    if (changeImageResponse?.message) {
      clearTimeout(timeOut)

      timeOut = setTimeout(() => {
        setChangeImageResponse({ message: '', type: false })
      }, 4000)
    }
  }, [changeImageResponse])

  // callback to open editor for cover image after changing
  const [openEditor, setOpenEditor] = useState(false)

  useEffect(() => {
    const action = transition?.submission?.action || ''

    if (
      (action.includes('change-image') || action.includes('add/image')) &&
      !changeImageStateRef?.current
    )
      changeImageStateRef.current = true

    if (
      transition?.state === 'idle' &&
      changeImageStateRef?.current &&
      openEditor
    ) {
      changeImageStateRef.current = false

      setTimeout(() => {
        showCropArea()
        setUrlSec('')
        setEdit(true)
        setEdit2(false)
      }, 1000)
    }
    setOpenEditor(false)
  }, [transition, openEditor])

  // for success alert
  const apiResponseRef = useRef('')
  const [apiResponse, setApiResponse] = useState({ id: 0, message: '' })
  const { id, message } = apiResponse
  const timeOutRef = useRef('')

  useEffect(() => {
    const action = transition?.submission?.action || ''

    if (action.includes('add/image') && !apiResponseRef?.current)
      apiResponseRef.current = 'Image added successfully.'

    if (action.includes('update/crop-image') && !apiResponseRef?.current)
      apiResponseRef.current = 'Image has been updated successfully.'

    if (action.includes('update/restoreImage') && !apiResponseRef?.current)
      apiResponseRef.current = 'Image has been restored successfully.'

    if (action.includes('update/change-') && !apiResponseRef?.current)
      apiResponseRef.current = 'Image has been changed successfully.'

    if (action.includes('delete/') && !apiResponseRef?.current)
      apiResponseRef.current = 'Image has been deleted successfully.'

    if (transition?.state === 'idle' && apiResponseRef?.current) {
      setApiResponse({
        message: apiResponseRef.current,
        id: apiResponse?.id + 1,
      })
      apiResponseRef.current = ''
    }
  }, [transition])

  useEffect(() => {
    if (apiResponse?.message) {
      clearTimeout(timeOutRef?.current)
      // @ts-ignore
      timeOutRef.current = setTimeout(() => {
        setApiResponse({ ...apiResponse, message: '' })
      }, 4000)
    }
  }, [apiResponse])

  const isUploading =
    (upload === 'primary' &&
      transition?.submission?.action === '/account/add/image') ||
    (restore &&
      transition?.submission?.action === '/account/update/restoreImage') ||
    (drag && transition?.submission?.action == '/account/update/crop-image')

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => {}}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex w-96">
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
                <div className="h-screen">
                  <div
                    className={`font-inter mt-12 flex h-[95%]  flex-col overflow-y-auto border-r border-gray-200 bg-white pb-[2rem] ${
                      mode === 'mobile'
                        ? 'w-[16rem] lg:ml-[16rem] xl:ml-[24rem] xl:w-96'
                        : 'w-[100vw] md:w-[20rem] lg:w-96'
                    } `}
                  >
                    <div className="">
                      <div className="bg-gray-50 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                            {' '}
                            Update Profile Pictures
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-sm leading-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white "
                              onClick={OnCancel}
                            >
                              <span className="sr-only">Close panel</span>
                              <button>
                                <XIcon
                                  onClick={Onclose}
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm font-normal leading-5 text-gray-500">
                            Please update pictures shown in template
                          </p>
                        </div>
                      </div>
                    </div>

                    {message && (
                      <div
                        className="rounded-md bg-green-50 p-4 mx-4 sm:mx-6 my-2"
                        data-cy="alertSuccess"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="text-sm font-medium text-green-800">
                            {message}
                          </p>
                        </div>
                      </div>
                    )}

                    {bgimageAlreadyuploaded || primaryRestore ? (
                      <div className="mt-3.5 px-4 sm:col-span-6 sm:px-6">
                        <label className="block text-sm font-medium leading-5 text-gray-700">
                          Cover Image
                        </label>

                        <div>
                          <div className="mt-3.5 flex  h-44 justify-center rounded-md">
                            {(deleteImage === 'primary' &&
                              transition?.submission?.action ==
                                '/account/delete/image') ||
                            (edit &&
                              transition?.submission?.action ==
                                '/account/update/crop-image') ||
                            transition?.submission?.action ===
                              '/account/update/change-image' ? (
                              <div className="relative top-[-1rem] ">
                                <BeatLoader
                                  color="#184fad"
                                  className="relative top-[6.5rem] left-[9rem]"
                                />
                                <img
                                  src={
                                    primaryRestore
                                      ? bg
                                      : loaderData?.profileImage?.primaryImage
                                  }
                                  alt=""
                                  className={`h-full w-[31.5rem] object-cover ${
                                    (deleteImage === 'primary' &&
                                      transition?.submission?.action ==
                                        '/account/delete/image') ||
                                    transition?.submission?.action ==
                                      '/account/update/crop-image' ||
                                    transition?.submission?.action ===
                                      '/account/update/change-image'
                                      ? 'opacity-30'
                                      : ''
                                  }`}
                                />
                              </div>
                            ) : (
                              <img
                                ref={ref4}
                                crossOrigin={`${
                                  primaryRestore ? '' : 'anonymous'
                                }`}
                                src={
                                  primaryRestore
                                    ? bg
                                    : loaderData?.profileImage?.primaryImage
                                }
                                alt=""
                                className="h-full w-full object-cover"
                                onLoad={() => {
                                  setOpenEditor(true)
                                }}
                              />
                            )}
                            <Form
                              replace
                              action="update/crop-image"
                              method="post"
                            >
                              <input
                                name="editPrimaryImage"
                                type="text"
                                value={url}
                                hidden
                              />
                              <button type="submit" ref={ref3} hidden>
                                Edit
                              </button>
                            </Form>
                          </div>

                          <div
                            className={`mt-3 flex items-center justify-center ${
                              transition?.state === 'idle' ? '' : 'hidden'
                            }`}
                          >
                            <button
                              onClick={() => {
                                showCropArea()
                                setUrlSec('')
                                setEdit(true)
                                setEdit2(false)
                              }}
                              id="primaryEditImage"
                              className=" cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-indigo-600"
                            >
                              Edit
                            </button>

                            {/* to change image */}
                            <Form
                              replace
                              action="update/change-image"
                              method="post"
                              encType="multipart/form-data"
                            >
                              <input
                                name={'changePrimaryImage'}
                                id="changePrimaryImage"
                                type="file"
                                className="hidden"
                                onChange={handleChangeImage}
                                accept="image/*"
                                value={''}
                              />

                              <button
                                type="submit"
                                ref={changeImageSubmitRef}
                                hidden
                              />
                            </Form>

                            <label
                              htmlFor="changePrimaryImage"
                              className="mx-4 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-indigo-600"
                            >
                              Change
                            </label>

                            <button
                              id="primaryDeleteButton"
                              onClick={(e: any) => {
                                e.preventDefault()
                                setopen(true)
                                setDeleteImage('primary')
                              }}
                              className="cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-red-600"
                              disabled={
                                deleteImage === 'primary' &&
                                transition?.submission?.action ==
                                  '/account/delete/image'
                              }
                            >
                              Delete
                            </button>
                          </div>

                          {!changeImageResponse?.type &&
                            changeImageResponse?.message && (
                              <div className="flex justify-center mt-2 text-sm text-red-500">
                                {changeImageResponse.message}
                              </div>
                            )}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3.5 px-4 sm:col-span-6 sm:px-6">
                        <label className="block text-sm font-medium leading-5 text-gray-700">
                          Cover Image
                        </label>

                        <div
                          className="relative px-auto mt-3.5 flex justify-center rounded-md border border-dashed border-gray-300 pb-2.5 md:pt-6 lg:pt-10"
                          onDragEnter={() => {
                            setDrag(true)
                            setDrag2(false)
                          }}
                        >
                          {isUploading && (
                            <div className="h-full absolute w-full flex justify-center items-center -mb-2.5 md:-mt-6 lg:-mt-10">
                              <BeatLoader
                                color="#184fad"
                                className="mt-2"
                                size={20}
                              />
                            </div>
                          )}

                          <div
                            className={`text-center ${
                              isUploading ? 'invisible' : ''
                            } ${
                              transition.state !== 'idle'
                                ? 'pointer-events-none'
                                : ''
                            } `}
                          >
                            <>
                              <DropzonePrimary
                                setPrimaryImageError={setPrimaryImageError}
                                images1={images1}
                                setImages1={setImages1}
                                accept={'image/*'}
                                onDrop={onDrop1}
                              >
                                <div className="flex text-sm"></div>
                              </DropzonePrimary>

                              <div className="flex flex-col items-center justify-center md:mx-12 lg:mx-20">
                                <Form
                                  replace={true}
                                  method="post"
                                  action="add/image"
                                  encType="multipart/form-data"
                                >
                                  <label
                                    onClick={() => {
                                      setUpload((prev) => (prev = 'primary'))
                                      setUpload2('')
                                    }}
                                    id="primaryUploadImage"
                                    className="mx-4 mt-4 inline-flex w-max cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                  >
                                    Upload Image
                                    <input
                                      type="file"
                                      className="hidden"
                                      disabled={
                                        transition.state !== 'idle'
                                          ? true
                                          : false
                                      }
                                      id="photo"
                                      name="primaryImageUpload"
                                      accept="image/png, image/jpeg, image/jpg"
                                      onChange={handleChange}
                                    />
                                    <button
                                      type="submit"
                                      ref={ref}
                                      className="hidden"
                                    >
                                      upload
                                    </button>
                                  </label>
                                </Form>

                                <Form
                                  replace
                                  action="update/restoreImage"
                                  method="post"
                                >
                                  <button
                                    data-cy="restorePrimaryImage"
                                    name="restoreImage"
                                    value="restoreprimaryImage"
                                    className="mt-2.5 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-gray-600"
                                    disabled={
                                      upload === 'primary' &&
                                      transition.state !== 'idle'
                                    }
                                    onClick={() => {
                                      setRestore((prev) => (prev = true))
                                      setRestore2(false)
                                    }}
                                  >
                                    Restore Default Image
                                  </button>
                                </Form>
                              </div>

                              <div className="mt-2 text-sm text-red-500">
                                {primaryImageError}
                              </div>
                            </>
                            <h4 className="text-sm">
                              (Supported image .jpg .jpeg, and .png)
                            </h4>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* {profileimageAlreadyuploaded || secondaryRestore ? (
                        <div className="">
                          <div className="mt-6 px-4 sm:col-span-6 sm:px-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                              Profile Image
                            </label>

                            <div className="mt-3.5 flex h-[8rem] w-[8rem]  justify-center rounded-full">
                              {(deleteImage === 'secondary' &&
                                transition?.submission?.action ==
                                  '/account/delete/image') ||
                              (edit2 &&
                                transition?.submission?.action ==
                                  '/account/update/crop-image') ? (
                                <div className="relative top-[-1.8rem]">
                                  <BeatLoader
                                    color="#184fad"
                                    className="relative top-20 left-[2.2rem]"
                                  />
                                  <img
                                    src={
                                      secondaryRestore
                                        ? defaultProfileimage
                                        : loaderData?.profileImage
                                            ?.secondaryImage
                                    }
                                    alt=""
                                    className="h-[8rem] w-[8rem] rounded-full object-cover opacity-30"
                                  />
                                </div>
                              ) : (
                                <img
                                  ref={ref5}
                                  crossOrigin={`${
                                    secondaryRestore ? '' : 'anonymous'
                                  }`}
                                  src={
                                    secondaryRestore
                                      ? defaultProfileimage
                                      : loaderData?.profileImage?.secondaryImage
                                  }
                                  alt=""
                                  className="h-full w-full rounded-full object-cover"
                                />
                              )}
                              <Form
                                replace
                                action="update/crop-image"
                                method="post"
                              >
                                <input
                                  name="editSecondaryImage"
                                  type="text"
                                  value={urlSec}
                                  hidden
                                />
                                <button type="submit" ref={ref6} hidden>
                                  Edit
                                </button>
                              </Form>
                            </div>
                          </div>

                          <div className="ml-6 mt-3 flex w-[7rem] items-center justify-center">
                            <button
                              id="secondaryEditImage"
                              className=" cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-indigo-600"
                              onClick={() => {
                                showCropAreaSecondary()
                                setUrl('')
                                setEdit2(true)
                                setEdit(false)
                              }}
                            >
                              Edit
                            </button>
                            <button
                              id="secondaryDeleteButton"
                              onClick={(e: any) => {
                                e.preventDefault()
                                setopen(true)
                                setDeleteImage('secondary')
                              }}
                              className="ml-3 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-red-600"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="px-4 sm:col-span-6 sm:px-6 md:mt-6 md:mb-7 lg:mt-16 lg:mb-0">
                          <label className="block text-sm font-medium leading-5 text-gray-700">
                            {' '}
                            Profile Image
                          </label>
                          <div
                            className="mt-3.5 flex justify-center rounded-md border border-dashed border-gray-300 px-[1px] pb-2.5 md:pt-6 lg:pt-10"
                            onDragEnter={() => {
                              setDrag(false)
                              setDrag2(true)
                            }}
                          >
                            <div className="text-center">
                              <Dropzone
                                setSecondaryImageError={setSecondaryImageError}
                                setImages={setImages}
                                accept={'image/*'}
                                onDrop={onDrop}
                                images={images}
                              >
                                <div className="flex text-sm"></div>
                              </Dropzone>
                              {(upload2 === 'sec' &&
                                transition?.submission?.action ===
                                  '/account/add/image') ||
                              (restore2 &&
                                transition?.submission?.action ===
                                  '/account/update/restoreImage') ||
                              (drag2 &&
                                transition?.submission?.action ==
                                  '/account/update/crop-image') ? (
                                <div className="flex h-[6rem] items-center justify-center">
                                  <BeatLoader color="#184fad" />
                                </div>
                              ) : (
                                <div className="flex flex-col items-center justify-center md:mx-12 lg:mx-20 ">
                                  <Form
                                    replace={true}
                                    action="add/image"
                                    encType="multipart/form-data"
                                    method="post"
                                  >
                                    <label
                                      onClick={() => {
                                        setUpload2((prev) => (prev = 'sec'))
                                        setUpload('')
                                      }}
                                      
                                      id="secondaryUploadImage"
                                      className="mx-4 mt-4 inline-flex w-max cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                    >
                                      Upload Image
                                      <input
                                        type="file"
                                        disabled={transition.state !== 'idle' ? true : false}
                                        className="hidden"
                                        id="photo2"
                                        name="secondaryImageUpload"
                                        accept="image/png, image/jpeg, image/jpg"
                                        onChange={handleChange2}
                                      />
                                      <button
                                        type="submit"
                                        ref={ref2}
                                        className="hidden"
                                      >
                                        upload
                                      </button>
                                    </label>
                                  </Form>
                                  <Form
                                    replace
                                    action="update/restoreImage"
                                    method="post"
                                  >
                                    <button
                                      data-cy="restoreSecondaryImage"
                                      name="restoreImage"
                                      value="restoresecondaryImage"
                                      className="mt-2.5 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-gray-600"
                                      disabled={
                                        upload === 'sec' &&
                                        transition?.submission?.action ==
                                          '/account/add/image'
                                      }
                                      onClick={() => {
                                        setRestore2((prev) => (prev = true))
                                        setRestore(false)
                                      }}
                                    >
                                      Restore Default Image
                                    </button>
                                  </Form>
                                </div>
                              )}
                              <div className="mt-2 text-sm text-red-500">
                                {secondaryImageError}
                              </div>
                              <h4 className="text-sm">
                                (Supported image .jpg .jpeg, and .png)
                              </h4>
                            </div>
                          </div>
                        </div>
                      )} */}
                    <ProfileImage
                      secondaryRestore={secondaryRestore}
                      loaderData={loaderData}
                      deleteImage={deleteImage}
                      edit2={edit2}
                      ref5={ref5}
                      urlSec={urlSec}
                      ref6={ref6}
                      setUrl={setUrl}
                      setUrlSec={setUrlSec}
                      setEdit2={setEdit2}
                      setEdit={setEdit}
                      setopen={setopen}
                      setDeleteImage={setDeleteImage}
                      setDrag={setDrag}
                      setDrag2={setDrag2}
                      setSecondaryImageError={setSecondaryImageError}
                      setImages={setImages}
                      images={images}
                      upload2={upload2}
                      restore2={restore2}
                      drag2={drag2}
                      setUpload2={setUpload2}
                      setUpload={setUpload}
                      ref2={ref2}
                      setimage2={setimage2}
                      upload={upload}
                      setRestore2={setRestore2}
                      secondaryImageError={secondaryImageError}
                      setRestore={setRestore}
                    />
                    <DeleteImage
                      open={open}
                      onClose={() => setopen(false)}
                      mode={mode}
                      deleteImage={deleteImage}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
