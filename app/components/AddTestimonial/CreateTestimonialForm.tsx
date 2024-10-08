import { useEffect, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import ExistingTestimonial from './ExistingTestimonial'
import { Form, useNavigation } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'
import SidebarDetailContainer from '../Sidebar/SidebarDetailContainer'

export default function AccountTestimonial({
  OnCloseTestimonial,
  inputTestimonial,
  setInputTestimonial,
  setShowTestimonial,
  loaderData,
  mode,
  setmode,
  setShowCreateTestimonial,
}: any) {
  const navigation = useNavigation()
  useEffect(() => {
    if (navigation.state === 'loading') {
      setShowCreateTestimonial(false)
    }
  }, [navigation])

  const [testimonialBy, setTestimonialBy] = useState('')
  const [testimonialText, setTestimonialText] = useState('')

  const [error, setError] = useState('')
  const [error1, setError1] = useState('')

  useEffect(() => {
    let onlyAlphabetsRegex = /^[a-z|A-Z]+(?: [a-z|A-Z ]+)*$/

    if (testimonialBy.length === 0) {
      setError1('')
    } else if (!onlyAlphabetsRegex.test(testimonialBy)) {
      return setError1('Only alphabets allowed.')
    } else if (testimonialBy.length < 2) {
      return setError1(`Name must be 2 characters long`)
    } else if (testimonialBy.length > 24) {
      return setError1(`Name must not be more than 24 characters long`)
    } else {
      setError1('')
    }

    if (testimonialText === '') {
      setError('')
    } else if (testimonialText?.length < 6) {
      setError('Testimonial must be 6 characters long')
    } else if (testimonialText?.length > 472) {
      setError('Testimonial must be not more than 472 characters long')
    } else if (testimonialText === '') {
      setError('required')
    } else {
      setError('')
    }
  }, [testimonialBy, testimonialText])

  const OnCancel = () => {
    setShowCreateTestimonial(false)
  }

  const Onclose = (e: any) => {
    if (mode === 'desktop') {
      setShowCreateTestimonial(false)
    }

    OnCloseTestimonial()
  }

  return (
    <SidebarDetailContainer mode={mode}>
      <Form replace={true} action="add/testimonial" method="post" className="h-screen font-inter">
        {loaderData?.testimonial?.testimonialBy ? (
          <div className="mt-12 flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
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
                    onClick={Onclose}
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
            <ExistingTestimonial
              setShowCreateTestimonial={setShowCreateTestimonial}
              testimonialBy={testimonialBy}
              testimonialText={testimonialText}
              setTestimonialBy={setTestimonialBy}
              setTestimonialText={setTestimonialText}
              setShowTestimonial={setShowTestimonial}
              loaderData={loaderData}
              mode={mode}
              setmode={setmode}
            />
          </div>
        ) : (
          <div className="mt-12 flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
            <div className="bg-gray-50 py-6 px-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium leading-7 text-gray-900">
                  Add Testimonial to your profile
                </div>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                    onClick={Onclose}
                  >
                    <span className="sr-only">Close panel</span>
                    <XCircleIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="pt-1 pr-2">
                <p className="text-sm leading-5 font-normal text-gray-500">
                  Add, edit or delete testimonial from your profile
                </p>
              </div>
            </div>
            <div className="pl-2.5 pr-5 mt-6">
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  {' '}
                  Testimonial{' '}
                </label>
                <div className="mt-1">
                  <textarea
                    data-cy="testimonialText"
                    placeholder="Please enter testimonial"
                    id="description"
                    name="testimonialText"
                    rows={4}
                    onChange={(event) => {
                      setTestimonialText(event.target.value)
                    }}
                    className={`text-ellipsis w-full lg:w-[22rem] block rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                      error
                        ? 'border border-red-600 focus:border-red-500 focus:ring-red-500'
                        : 'focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                    value={testimonialText}
                  />
                  <div className="text-red-600 text-sm">{error}</div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                  {' '}
                  Name of the person who gave this testimonial{' '}
                </label>
                <div className="mt-1">
                  <input
                    data-cy="testimonialBy"
                    placeholder="Please enter a name"
                    type="text"
                    value={testimonialBy}
                    name="testimonialBy"
                    id="project-name"
                    onChange={(event) => {
                      setTestimonialBy(event.target.value)
                    }}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm ${
                      error1
                        ? 'border border-red-600 focus:border-red-500 focus:ring-red-500'
                        : 'focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                  />
                  <div className="text-red-600 text-sm">{error1}</div>
                </div>
              </div>

              <div className="flex flex-shrink-0 justify-end mt-7">
                <div>
                  <button
                    data-cy="cancelCreateTestimonial"
                    type="button"
                    className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5 disabled:cursor-pointer"
                    onClick={OnCancel}
                    disabled={navigation.state != 'idle'}
                  >
                    Cancel
                  </button>
                </div>

                <button
                  data-cy="createTestimonial"
                  type="submit"
                  className="ml-4 mb-4 leading-5 inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
                  disabled={
                    error ||
                    !testimonialText ||
                    error1 ||
                    !testimonialBy ||
                    navigation.state != 'idle'
                      ? true
                      : false
                  }
                >
                  {navigation.state != 'idle' ? (
                    <BeatLoader color="#ffffff" size={12} />
                  ) : (
                    'Add Testimonial'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </Form>
    </SidebarDetailContainer>
  )
}
