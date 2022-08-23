import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import thumbnail1 from '../../../assets/images/screenshots/thumbnail1.png'
import thumbnail2 from '../../../assets/images/screenshots/thumbnail2.png'



export default function AccountTemplate({setshowTemplate,setshow,showTemplate,mode,setmode}:any) {
 
  const templateHandle = 'account/update/choose-template'
  const OnCancel = ()=>{
 setshowTemplate(false);
  setmode('desktop')
}
const Onclose = () => {
   
    if(mode === 'desktop'){
   setshowTemplate(false)
    }
    if(mode === 'mobile'){
     
    }
 
  }
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-12 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'lg:w-96'}`}>
              <Transition.Child
                as={Fragment}
                enter=""
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave=""
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel data-cy="accountTemplate" className="pointer-events-auto w-full md:max-w-xs lg:max-w-md">
                  <div className="flex h-full flex-col bg-white border-r border-gray-200">
                    <div className="bg-gray-50 py-6 px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">Select Template </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                            onClick={OnCancel}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="pt-1 pr-2">
                        <p className="text-sm leading-5 font-normal text-gray-500">
                        Select how you want your profile to look like. Click on Toggle button to view in mobile and Desktop mode
                        </p>
                      </div>
                    </div>
                    <div className='grid grid-cols-1 gap-0'>
                      <form action= {templateHandle} method='POST'>

                      <div  className='mb-[-1rem]'>
                      <input type="hidden" name='template' value='0' />
                      <button type='submit'>
                      <img src={thumbnail1} alt="" className={` w-[27.5rem] cursor-pointer border-8 border-black ${mode === 'mobile' ? 'h-auto' :'h-[14rem]'}`} />
                      </button>
                      </div>
                      </form>

                      <form action= {templateHandle} method='POST'>
                      <div >
                      <input type="hidden" name='template' value='1' />
                      <button type='submit'>
                      <img src={thumbnail2} alt="" className={` w-[27.5rem] cursor-pointer border-8 border-black ${mode === 'mobile' ? 'h-auto' :'h-[14rem]'}`} />
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
