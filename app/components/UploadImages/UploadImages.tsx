import { Fragment, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import bg from '../../../assets/images/bg.png';
import avatar6 from '../../../assets/images/avatars/avatar-6.png'
import DeleteImage from '../Common/DeleteImage';

export default function NoImages({setshowImages,mode,setmode}:any) {
  const [bgimageAlreadyuploaded, showbgimageAlreadyuploaded] = useState(true);
  const [profileimageAlreadyuploaded, showprofileimageAlreadyuploaded] = useState(true);
  const [open, setopen] = useState(false);

 
   const Onclose = (e:any) => {
    
    if(mode === 'desktop'){
    setshowImages(false)
    }
    if(mode === 'mobile'){
     
    }
  };

const OnCancel = ()=>{
 setshowImages(false)
  setmode('desktop')
}

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={Onclose}>
        <div className="fixed inset-0 overflow-hidden">
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
                  <form  action="account/update/bio" method='POST' className='h-screen'>

                    <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'lg:w-96'} `}>
                      <div className="">
                        <div className="py-6 px-4 sm:px-6 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> Update Profile Pictures </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <form action="">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={OnCancel}
                              >
                                <span className="sr-only">Close panel</span>
                                <button>
                                  <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </button></form>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-gray-500 leading-5 font-normal">
                            Please update pictures shown in template
                            </p>
                          </div>
                        </div>
                      
                      
                      </div>


                      {bgimageAlreadyuploaded?
                        <div className="sm:col-span-6 mt-3.5 px-4 sm:px-6">
                          <label className="block text-sm font-medium leading-5 text-gray-700"> 
                            Primary Image 
                          </label>

                          <div>
                            <div className="flex justify-center border border-gray-300 border-dashed rounded-md mt-3.5 h-44">
                              <img src={bg} alt="" className='h-full w-full object-cover' />
                            </div>

                            <div className='flex justify-center items-center mt-3'>
                              <button className='cursor-pointer text-sm leading-5 font-normal text-gray-400 hover:text-gray-600'>
                                Edit
                              </button>

                              <span
                                onClick={()=>{setopen(true)}}
                                className='cursor-pointer ml-2 text-sm leading-5 font-normal text-gray-400 hover:text-red-600'>
                                  Delete
                              </span>
                            </div>

                          </div>

                        </div>:
                        <div className="sm:col-span-6 mt-3.5 px-4 sm:px-6">
                        <label className="block text-sm font-medium leading-5 text-gray-700"> 
                          Primary Image 
                        </label>
                        <div className="mt-3.5 flex justify-center px-auto md:pt-6 lg:pt-10 pb-2.5 border border-gray-300 border-dashed rounded-md">
                          <div className="text-center">
                            <p className='text-xs leading-4 font-semibold tracking-wide'>
                              NO IMAGE ADDED YET
                            </p>
                            <div className="flex text-sm">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium">
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="text-gray-500 text-sm leading-5 font-normal">Drag and Drop an Image or click on button to upload</p>
                            </div>

                            <div className='flex flex-col md:mx-12 lg:mx-20'>
                              <span
                                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm mx-4 px-4 py-3 mt-4 bg-indigo-600 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                              >
                                Upload Image
                              </span>
                              <span className="cursor-pointer text-sm leading-5 mt-2.5 font-normal text-gray-400 hover:text-gray-600">
                                Restore Default Image
                              </span>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                  }
                      
                    {profileimageAlreadyuploaded?                  
                        <div className=''>

                          <div className="sm:col-span-6 mt-6 px-4 sm:px-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700"> 
                              Secondary Image 
                            </label>

                            <div className="flex justify-center h-[7rem] w-[7rem] border border-gray-300 border-dashed rounded-full mt-3.5">
                              <img src={avatar6} alt="" className='rounded-full h-full w-full object-cover' />
                            </div>
  
                          </div>

                          <div className='flex justify-center items-center w-[7rem] ml-6 mt-3'>
                            <button className='text-sm leading-5 font-normal text-gray-400 hover:text-gray-600'>
                              Edit
                            </button>

                            <span
                              onClick={()=>{setopen(true)}}
                              className='cursor-pointer ml-3 text-sm leading-5 font-normal text-gray-400 hover:text-red-600'>
                              Delete
                            </span>
                          </div>

                        </div>:
                        <div className="sm:col-span-6 md:mt-6 lg:mt-16 px-4 sm:px-6 md:mb-7 lg:mb-0">
                        <label className="block text-sm font-medium leading-5 text-gray-700">         Secondary Image 
                        </label>
                        <div className="mt-3.5 flex justify-center px-[1px] md:pt-6 lg:pt-10 pb-2.5 border border-gray-300 border-dashed rounded-md">
                          <div className="text-center">
                            <p className=' text-xs leading-4 font-semibold tracking-wide'>
                              NO IMAGE ADDED YET
                            </p>
                            <div className="flex text-sm">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium">
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="text-gray-500 text-sm leading-5 font-normal">Drag and Drop an Image or click on button to upload</p>
                            </div>

                            <div className='flex flex-col md:mx-12 lg:mx-20 '>
                              <span
                                onClick={() => {}}
                                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm mx-4 px-4 py-3 mt-4 bg-indigo-600 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                              >
                                Upload Image
                              </span>
                              <span className="cursor-pointer text-sm leading-5 mt-2.5 font-normal text-gray-400 hover:text-gray-600">
                                Restore Default Image
                              </span>
                              </div>
                            
                          </div>

                        </div>
                      </div>
                  
                  }

                    <DeleteImage open={open} onClose={() => setopen(false)} />    
                      
                     

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
