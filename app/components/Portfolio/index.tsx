import { Fragment, useCallback, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PencilIcon, TrashIcon, XIcon } from '@heroicons/react/outline';
import { Form, useTransition } from '@remix-run/react';
import { useEffect } from 'react';
import Portfolioimage from './portfolioimage';
import BeatLoader from 'react-spinners/BeatLoader';
import DropzonePortfolio from './DragandDrop';

export default function Portfolio({ setShowPortfolio, mode, setmode,loaderData }: any) {
const [upload,setUpload] = useState(false)
const [image, setimage] = useState(null);
const [image1, setimage1] = useState(null);
const transition = useTransition();
const[edit,setEdit]=useState(false)
const[del,setDel]=useState(false)
 const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file:any) => {
      const reader = new FileReader();

      reader.onload = function (e:any) {
        setimage1(
          e.target.result
        );
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

const ref = useRef(null);
useEffect(() => {
  if(image){
    //@ts-ignore
    ref?.current?.click()
  }
}, [image])

const handleChange = (e: any) => {
  setimage(e.target.files[0]) 
  }

  const Onclose = (e: any) => {

    if (mode === 'desktop') {
      setShowPortfolio(false)
    }
    if (mode === 'mobile') {

    }
  };

  const OnCancel = () => {
    setShowPortfolio(false)
    setmode('desktop')
  }

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
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

                    <div className='h-screen'>
                      <div className={`flex h-[95%] flex-col mt-12  bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'w-[100vw] md:w-[20rem] lg:w-96'} `}>
                        <div className="">
                          <div className="py-6 px-4 sm:px-6 bg-gray-50">
                            <div className="flex items-center justify-between">
                              <Dialog.Title className="text-lg font-medium text-gray-900 leading-7">    Add Portfolio Pictures
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">

                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm "
                                  onClick={Onclose}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <button>
                                    <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                                  </button>
                                </button>
                              </div>
                            </div>
                            <div className="mt-1">
                              <p className="text-sm text-gray-500 leading-5 font-normal">
                              Add or delete portfolio picture on your profile
                              </p>
                            </div>
                          </div>
                        </div>
                          <div className="sm:col-span-6 mt-3.5 px-4 sm:px-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                              Portfoilio Images
                            </label>
{loaderData.portfolioImage.length <= 19 ? 

                            <div className="mt-3.5 flex justify-center px-auto md:pt-6 lg:pt-10 pb-2.5 border border-gray-300 border-dashed rounded-md">
                              <div className="text-center">
                                <p className='text-xs leading-4 font-semibold tracking-wide'>
                                  NO IMAGE ADDED YET
                                </p>
                  <Form replace={true} action="/account/add/portfolioImage" encType="multipart/form-data" method='post'>

                                <div className="flex text-sm">
                                  <DropzonePortfolio onDrop={onDrop} image1={image1} setimage1={setimage1} accept={"image/*"}/>
                                </div>

                                <div className='flex flex-col justify-center items-center md:mx-12 lg:mx-20'>
                              
{transition.state != 'idle' && upload ? 
<BeatLoader color="#184fad" /> :

                                  <label htmlFor="photo" id="primaryUploadImage" className='cursor-pointer inline-flex justify-center rounded-md bord~er border-transparent shadow-sm mx-4 px-4 py-3 mt-4 bg-indigo-600 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 w-max' 
                                  onClick={()=>{setUpload(true) ;setEdit(false) ; setDel(false)}}>
                                    Upload Image

                                    <input
                                      type="file"
                                      className="hidden"
                                      id="photo"
                                      name="portfolioImage"
                                      accept="image/*"
                                      onChange={handleChange}
                                    />
                            <button type="submit" ref={ref} className="hidden">upload</button>

                                    {/* <input type="file" name="photo" /> */}
                                    
                                  </label> }

                                </div>
                                </Form>
                              </div>
                            </div>:null}
                          </div>
                          <div className={`relative ${transition.state != 'idle' && edit || transition.state != 'idle' && del ? 'opacity-30' : null}`}>
<ul className='grid hover:mb-4 grid-cols-4 col-span-2 gap-4 gap-y-4 items-center mx-6 mt-8' >
   {loaderData.portfolioImage.map((img:any)=>(
 <Portfolioimage setUpload={setUpload} img={img} setEdit={setEdit}
setDel={setDel} edit={edit}
del={del} />
))}
</ul></div>
{transition.state != 'idle' && edit || transition.state != 'idle' && del ?
<div className='absolute bottom-[18rem] left-[11rem]'><BeatLoader color="#184fad" /></div> : null}
    
                      </div>

                    </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <div>
      
        </div>
        </div>
        
      </Dialog>
    </Transition.Root>
  )
}

