import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Form, useNavigation } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'
import SidebarDetailContainer from '../Sidebar/SidebarDetailContainer'

export default function DashboardBio({
  initialInput,
  bioMessage,
  setBioMessage,
  setshowBio,
  input,
  setinput,
  mode,
  setmode,
}: any) {
  const navigation = useNavigation()

  const OnCancel = () => {
    setinput(initialInput)
    setshowBio(false)
    setmode('desktop')
  }
  return (
    <SidebarDetailContainer mode={mode}>
      <Form replace={true} action="update/bio" method="post" className="h-screen">
        <div
          className={`font-inter mt-12 flex h-[95%] flex-col divide-y divide-gray-200 border-r border-gray-200 bg-white w-96`}
        >
          <div className="h-0 flex-1 overflow-y-auto">
            <div className="bg-gray-50 py-6 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium leading-7 text-gray-900"> Update Your Bio </div>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-white text-sm leading-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => {
                      setshowBio(false)
                      setinput(initialInput)
                    }}
                  >
                    <span className="sr-only">Close panel</span>

                    <XCircleIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-1">
                <p className="text-sm font-normal leading-5 text-gray-500">
                  Get started by filling in the information below to update your profile
                </p>
              </div>
            </div>
            {/* <div>{bioMessage}</div> */}
            {bioMessage && (
              <div className="mb-4 rounded-md bg-green-50 p-4">
                <div className="flex  items-start justify-start">
                  <div className="flex-shrink-0 pt-1">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{bioMessage}</p>
                  </div>
                  <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5 pt-1">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-green-50 py-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                      >
                        <span className="sr-only">Dismiss</span>
                        <XCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                          onClick={() => setBioMessage('')}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-1 flex-col justify-between">
              <div className="divide-y divide-gray-200 px-4 sm:px-6">
                <div className="space-y-6 pt-6 pb-5">
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {' '}
                      Tell us about yourself{' '}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        onChange={(event) => {
                          setinput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={input.description}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {' '}
                      Location{' '}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={input.location}
                        name="location"
                        id="project-name"
                        onChange={(event) => {
                          setinput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {' '}
                      Occupation{' '}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="occupation"
                        value={input.occupation}
                        id="occupation"
                        onChange={(event) => {
                          setinput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {' '}
                      Company{' '}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        value={input.company}
                        onChange={(event) => {
                          setinput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        id="project-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {' '}
                      Education{' '}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="education"
                        value={input.education}
                        onChange={(event) => {
                          setinput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        id="project-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 justify-end px-4 pt-4 pb-2">
            <button
              type="button"
              className="mb-4 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-pointer"
              onClick={OnCancel}
              disabled={navigation.state != 'idle'}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-4 mr-2 mb-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
              disabled={navigation.state != 'idle' ? true : false}
            >
              {navigation.state != 'idle' ? <BeatLoader color="#ffffff" size={10} /> : 'Update'}
            </button>
          </div>
        </div>
      </Form>
    </SidebarDetailContainer>
  )
}
