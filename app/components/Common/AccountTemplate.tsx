import { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import bgimage from '../../../assets/images/background-template.jpg'

export default function AccountTemplate({setshowTemplate,setshow,showTemplate}:any) {
  // const [open, setOpen] = useState(true)
const Onclose = useCallback(() => {
   setshowTemplate(false)
  }, []);
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setshowTemplate}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full mt-12">
              <Transition.Child
                as={Fragment}
                enter=""
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave=""
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-96 max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="bg-gray-50 py-6 px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">Select Template </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setshowTemplate(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon onClick={() => setshowTemplate(false)} className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="pt-1 pr-2">
                        <p className="text-sm leading-5 font-normal text-gray-500">
                        Select how you want your profile to look like. Click on Toggle button to view in mobile and Desktop mode
                        </p>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <form action="update/template" method='POST'>

                      <div  >
                      <input type="hidden" name='template' value='0' />
                      <button type='submit'>
                      <img src={bgimage} alt="" className='h-[10rem] w-auto cursor-pointer' />
                      </button>
                      </div>
                      </form>

                      <form action="update/template" method='POST'>
                      <div >
                      <input type="hidden" name='template' value='1' />
                      <button type='submit'>
                      <img src={bgimage} alt="" className='h-[10rem] w-auto cursor-pointer' />
                      </button>
                      </div>

                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
