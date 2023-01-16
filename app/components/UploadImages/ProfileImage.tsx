import React, { useCallback } from 'react'
import { Form, useTransition } from '@remix-run/react';
import defaultProfileimage from '../../../assets/images/profile.png'
import BeatLoader from 'react-spinners/BeatLoader';
import Dropzone from './DragandDrop';
import * as cropro from 'cropro'

function ProfileImage({ secondaryRestore, loaderData, deleteImage, edit2, ref5, urlSec, ref6, setUrl,
  setEdit2, setEdit, setopen, setDeleteImage, setDrag, setDrag2, setSecondaryImageError,
  setImages, images, upload2, restore2, drag2, setUpload2, setUpload, ref2, setimage2, upload,
  setRestore2, secondaryImageError,
  setRestore }: any) {
  const transition = useTransition()
  const profileimageAlreadyuploaded = loaderData?.profileImage?.secondaryImage
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
  return (
    <>
      {profileimageAlreadyuploaded || secondaryRestore ? (
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
                  crossOrigin={`${secondaryRestore ? '' : 'anonymous'
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
              className="ml-6 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-indigo-600"
              onClick={() => {
                showCropAreaSecondary()
                setUrl('')
                setEdit2(true)
                setEdit(false)
              }}
            >
              Edit
            </button>
            {/* starts here */}
            <button
              id="secondaryUpdateImage"
              className="ml-2 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-indigo-600"
              onClick={() => {
              }}
            >
              Change
            </button>
            {/* ends here */}
            <button
              id="secondaryDeleteButton"
              onClick={(e: any) => {
                e.preventDefault()
                setopen(true)
                setDeleteImage('secondary')
              }}
              className="ml-2 cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-red-600"
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
                '/account/add/SecImage') ||
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
                    action="add/SecImage"
                    encType="multipart/form-data"
                    method="post"
                  >
                    <label
                      onClick={() => {
                        setUpload2((prev: any) => (prev = 'sec'))
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
                        '/account/add/SecImage'
                      }
                      onClick={() => {
                        setRestore2((prev: any) => (prev = true))
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
      )}
    </>
  )
}

export default ProfileImage
