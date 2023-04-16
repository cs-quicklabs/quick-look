import { useEffect, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import CreateTestimonial from './CreateTestimonialForm'
import ExistingTestimonial from './ExistingTestimonial'
import { AlertSuccess } from '../Alert/Alert'
import { useNavigation } from '@remix-run/react'
import SidebarDetailContainer from '../Sidebar/SidebarDetailContainer'

export default function NoTestimonial({
  inputTestimonial,
  setInputTestimonial,
  setShowTestimonial,
  loaderData,
  mode,
  setmode,
}: any) {
  const [showCreateTestimonial, setShowCreateTestimonial] = useState(false)
  const [apiResponse, setApiResponse] = useState({ id: 0, message: '' })
  const apiResponseRef = useRef('')
  const navigation = useNavigation()
  const { id, message } = apiResponse

  const toggleCreatetestimonial = () => {
    setShowCreateTestimonial(!showCreateTestimonial)
  }
  const OnCancel = () => {
    setShowTestimonial(false)
    setmode('desktop')
  }

  const Onclose = () => {
    if (mode === 'desktop') {
      setShowTestimonial(false)
    }
  }

  useEffect(() => {
    const action = navigation.formAction || ''

    if (action.includes('add/testimonial') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your testimonial added successfully.'

    if (action.includes('update/testimonial') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your testimonial has been updated successfully.'

    if (action.includes('delete/testimonial') && !apiResponseRef?.current)
      apiResponseRef.current = 'Your testimonial has been deleted successfully.'

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
      <div
        className={`flex mt-12 h-full flex-col bg-white border-r border-gray-200 overflow-y-auto ${
          mode === 'mobile' ? ' w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'
        }`}
      >
        <div className="bg-gray-50 py-6 px-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium leading-7 text-gray-900">
              {`${
                loaderData?.testimonial?.testimonialBy
                  ? 'Edit Testimonial on your profile'
                  : 'Add Testimonial to your profile'
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
              {loaderData?.testimonial?.testimonialBy
                ? 'Edit or delete testimonial from your profile'
                : 'Add testimonial to your profile'}
            </p>
          </div>
        </div>

        <div className="px-4 my-2">
          <AlertSuccess message={message} key={id} />
        </div>

        {!loaderData?.testimonial?.testimonialBy ? (
          <div className="font-inter mt-7 flex flex-col items-center">
            <p className="text-xs leading-4 font-semibold tracking-wide">
              NO TESTIMONIAL ADDED YET
            </p>
            <p
              className={`text-sm leading-5 font-normal text-gray-500 px-12 text-center  ${
                mode === 'mobile' ? 'lg:px-4' : 'lg:px-0'
              }`}
            >
              Please add testimonial by clicking on button below
            </p>
            <button
              data-cy="addTestimonialButton"
              onClick={() => toggleCreatetestimonial()}
              type="button"
              className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Add Testimonial
            </button>
            {showCreateTestimonial && (
              <CreateTestimonial
                OnCloseTestimonial={OnCancel}
                inputTestimonial={inputTestimonial}
                setInputTestimonial={setInputTestimonial}
                setShowCreateTestimonial={setShowCreateTestimonial}
                setShowTestimonial={setShowTestimonial}
                mode={mode}
                setmode={setmode}
                loaderData={loaderData}
              />
            )}
          </div>
        ) : (
          <div className="">
            <ExistingTestimonial
              inputTestimonial={inputTestimonial}
              setInputTestimonial={setInputTestimonial}
              loaderData={loaderData}
              mode={mode}
              setShowTestimonial={setShowTestimonial}
            />
          </div>
        )}
      </div>
    </SidebarDetailContainer>
  )
}
