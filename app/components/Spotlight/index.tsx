import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function SpotlightButton({showSpotlight, setShowSpotlight, loaderData, mode, setmode}:any) {

  const Onclose = (e:any) => {
    
    if(mode === 'desktop'){
      setShowSpotlight(false)
    }
    if(mode === 'mobile'){
     
    }
  };

const OnCancel = ()=>{
  setShowSpotlight(false);
  setmode('desktop')
}
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className={`pointer-events-none fixed inset-y-0 left-0 flex `}>
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
                  <form  action="account/update/bio" method='POST' className='h-screen'>
                  <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="py-6 px-4 sm:px-6 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> 
                            Add Spotlight Button to your profile
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <form action="">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                              onClick={Onclose}
                            >
                              <span className="sr-only">Close panel</span>
                             
                              <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                              
                            </button></form>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-gray-500 leading-5 font-normal">
                            A spotlight button is an action button on your public profile
                          </p>
                        </div>
                      </div>
                     
                      
                    </div>
                    
                  </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
