import { useCallback, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Form, useNavigation } from '@remix-run/react'
import { useEffect } from 'react'
import Portfolioimage from './PortfolioImage'
import BeatLoader from 'react-spinners/BeatLoader'
import DropzonePortfolio from './DragAndDropImage'
import { AlertSuccess } from '../Alert/Alert'
import SidebarDetailContainer from '../Sidebar/SidebarDetailContainer'

export default function Portfolio({ setShowPortfolio, mode, setmode, loaderData }: any) {
  const [upload, setUpload] = useState(false)
  const [image, setimage] = useState(null)
  const [image1, setimage1] = useState(null)
  const [error, setError] = useState('')
  const [errorDrag, setErrorDrag] = useState('')
  const apiResponseRef = useRef('')
  const navigation = useNavigation()
  const [apiResponse, setApiResponse] = useState({ id: 0, message: '' })
  const { id, message } = apiResponse

  const [edit, setEdit] = useState(false)
  const [del, setDel] = useState(false)
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()

      reader.onload = function (e: any) {
        setimage1(e.target.result)
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

  const ref = useRef(null)
  useEffect(() => {
    if (image) {
      //@ts-ignore
      ref?.current?.click()
    }
  }, [image])
  const calc =
    loaderData.portfolioImage.length == 20
      ? 'bottom-[31rem]'
      : loaderData.portfolioImage.length > 16 && loaderData.portfolioImage.length < 20
      ? 'bottom-[18rem]'
      : loaderData.portfolioImage.length > 12 && loaderData.portfolioImage.length <= 16
      ? 'bottom-[14rem]'
      : loaderData.portfolioImage.length > 8 && loaderData.portfolioImage.length <= 12
      ? 'bottom-[10.5rem]'
      : loaderData.portfolioImage.length > 4 && loaderData.portfolioImage.length <= 8
      ? 'bottom-[7rem]'
      : loaderData.portfolioImage.length >= 1 && loaderData.portfolioImage.length <= 4
      ? 'bottom-[4rem]'
      : ''

  const handleChange = (e: any) => {
    setEdit(false)
    setDel(false)

    if (e.target.files[0].size / 1024 < 4300) {
      if (
        e.target.files[0].type.includes('image/jpeg') ||
        e.target.files[0].type.includes('image/jpg') ||
        e.target.files[0].type.includes('image/png')
      ) {
        setimage(e.target.files[0])
      } else {
        setError('Please upload image only')
      }
    } else {
      setError('Image size can be upto 4mb.')
    }
  }

  const Onclose = (e: any) => {
    if (mode === 'desktop') {
      setShowPortfolio(false)
    }
    setShowPortfolio(false)
  }

  const OnCancel = () => {
    setShowPortfolio(false)
    setmode('desktop')
  }

  useEffect(() => {
    if (navigation.state != 'idle') {
      setError('')
      setErrorDrag('')
    }
  }, [navigation, error, errorDrag])

  const isUploading =
    (navigation.state !== 'idle' && upload) ||
    navigation.formAction === '/account/add/drop-portfolio-image'

  useEffect(() => {
    const action = navigation.formAction || ''

    if (action.includes('add/') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your Portfolio Image added successfully.'

    if (action.includes('update/') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your Portfolio Image has been updated successfully.'

    if (action.includes('delete/') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your Portfolio Image has been deleted successfully.'

    if (navigation.state === 'idle' && apiResponseRef?.current) {
      setApiResponse({
        message: apiResponseRef.current,
        id: apiResponse?.id + 1,
      })
      apiResponseRef.current = ''
    }
  }, [navigation])

  return (
    <SidebarDetailContainer mode={mode}>
      <div className="h-screen">
        <div
          className={`font-inter mt-12 flex overflow-y-auto ${
            loaderData.portfolioImage.length <= 12 ? 'h-full' : 'h-[100vh]'
          }   flex-col border-r border-gray-200 bg-white ${
            mode === 'mobile'
              ? 'w-[16rem] lg:ml-[16rem] xl:ml-[24rem] xl:w-96'
              : 'w-[100vw] md:w-[20rem] lg:w-[24rem] largeLaptop:w-96'
          } `}
        >
          <div className="">
            <div className="bg-gray-50 py-6 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium leading-7 text-gray-900">
                  {' '}
                  Add Portfolio Pictures
                </div>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-white text-sm leading-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white "
                    onClick={Onclose}
                  >
                    <span className="sr-only">Close panel</span>
                    <button>
                      <XCircleIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </button>
                </div>
              </div>
              <div className="mt-1">
                <p className="text-sm font-normal leading-5 text-gray-500">
                  Add or delete portfolio picture on your profile
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 my-2">
            <AlertSuccess message={message} key={id} />
          </div>

          <div className="mt-3.5 px-4 sm:col-span-6 sm:px-6">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Portfolio Images
            </label>
            {loaderData.portfolioImage.length <= 19 ? (
              <div className="relative px-auto mt-3.5 flex justify-center rounded-md border border-dashed border-gray-300 pb-2.5 md:pt-6 lg:pt-10">
                {isUploading && (
                  <div className="h-full absolute w-full flex justify-center items-center -mb-2.5 md:-mt-6 lg:-mt-10">
                    <BeatLoader color="#184fad" className="mt-2" size={20} />
                  </div>
                )}

                <div className={`text-center ${isUploading ? 'invisible' : ''}`}>
                  <DropzonePortfolio
                    setErrorDrag={setErrorDrag}
                    onDrop={onDrop}
                    image1={image1}
                    setimage1={setimage1}
                    accept={'image/*'}
                    setEdit={setEdit}
                    setDel={setDel}
                    mode={mode}
                  >
                    <p className="text-xs font-semibold leading-4 tracking-wide">ADD IMAGES</p>
                    <div className="flex text-sm"></div>
                  </DropzonePortfolio>
                  <Form
                    replace={true}
                    action="/account/add/portfolioImage"
                    encType="multipart/form-data"
                    method="post"
                  >
                    <div className="flex flex-col items-center justify-center md:mx-12 lg:mx-20">
                      <label
                        htmlFor="photo"
                        id="primaryUploadImage"
                        data-cy="portfolioImage"
                        className="bord~er mx-4 mt-4 inline-flex w-max cursor-pointer justify-center rounded-md border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        onClick={() => {
                          setUpload(true)
                          setEdit(false)
                          setDel(false)
                        }}
                      >
                        Upload Image
                        <input
                          type="file"
                          className="hidden"
                          id="photo"
                          name="portfolioImage"
                          accept="image/*"
                          onChange={handleChange}
                        />
                        <button type="submit" ref={ref} className="hidden">
                          upload
                        </button>
                        {/* <input type="file" name="photo" /> */}
                      </label>

                      <div className="mt-2 text-sm text-red-500">{errorDrag || error}</div>
                      <h4 className="text-sm">(Supported image .jpg .jpeg, and .png)</h4>
                    </div>
                  </Form>
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`relative ${
              (navigation.state != 'idle' && edit) || (navigation.state != 'idle' && del)
                ? 'opacity-30'
                : null
            }`}
          >
            <ul
              className="col-span-2 mx-6 mt-8 grid grid-cols-4 items-center gap-4 gap-y-4 hover:mb-4"
              style={{ overflow: 'auto' }}
            >
              {loaderData.portfolioImage.map((img: any, inx: number) => (
                <Portfolioimage
                  key={inx}
                  setUpload={setUpload}
                  img={img}
                  setEdit={setEdit}
                  setDel={setDel}
                  edit={edit}
                  del={del}
                />
              ))}
            </ul>
          </div>
          {(navigation.state != 'idle' && edit) || (navigation.state != 'idle' && del) ? (
            <div className={`relative ${calc} mx-auto`}>
              <BeatLoader color="#184fad" />
            </div>
          ) : null}
        </div>
      </div>
    </SidebarDetailContainer>
  )
}
