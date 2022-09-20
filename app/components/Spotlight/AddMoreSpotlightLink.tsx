import { Dialog, Transition  } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  Fragment, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import ExistingSpotlightLink from './ExistingSpotlightLink';
import { Form, useTransition } from '@remix-run/react'
import ExistingAdditionalSpotlightLink from './ExistingAdditionalLinks';
import { BeatLoader } from 'react-spinners';

const colors = [
  { name: 'Red', bgColor: 'bg-red-600', selectedColor: 'ring-red-600' },
  { name: 'Yellow', bgColor: 'bg-yellow-300', selectedColor: 'ring-yellow-300' },
  { name: 'Orange', bgColor: 'bg-orange-500', selectedColor: 'ring-orange-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Gray', bgColor: 'bg-gray-600', selectedColor: 'ring-gray-600' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AddMoreSpotlightLink({ setShowSpotlight, loaderData, mode, setmode}:any) {
  const transition = useTransition();
  const [selectedColor, setSelectedColor] = useState(colors[1])
  console.log("ghghjgj",loaderData)

  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [clickedAddLink, setClickedAddLink] = useState(false);

useEffect(() => {
  if(transition?.state === "idle") {
    setClickedAddLink(false);
  }
},[transition?.state])

  // const [val, setVal] = useState({linkColor:loaderData?.additionalLinks?.linkColor, linkHex:loaderData?.additionalLinks?.linkHex, linkText:loaderData?.additionalLinks?.linkText, linkUrl:loaderData?.additionalLinks?.linkUrl})

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
              <Form replace={true} action="add/additionalLink" method='post'>
      <div className={`flex h-screen pb-12 flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
      <div className="h-0 flex-1 overflow-y-auto">
        <div className="py-6 px-4 sm:px-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> 
              Add Additional Links to your profile
            </Dialog.Title>
            <div className="ml-3 flex h-7 items-center">
              {/* <Form replace={true} action=""> */}
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                onClick={Onclose}
              >
                <span className="sr-only">Close panel</span>
              
                <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                
              </button>
              {/* </Form> */}
            </div>
          </div>
          <div className="mt-1">
            <p className="text-sm text-gray-500 leading-5 font-normal">
              You can add more than one link to your profile
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="divide-y divide-gray-200 px-4 sm:px-6">
            <div className="space-y-6 pt-6 pb-5">

            <div className={`flex ${mode === 'mobile' ? 'flex-col xl:flex-row xl:justify-between' : 'flex-col lg:flex-row lg:justify-between'}`}>
              <div className="">
              <RadioGroup name="linkColor" value={selectedColor} onChange={ () => {setSelectedColor; console.log("selectedColor",selectedColor)}}>
                <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                  Select Color For Button
                </RadioGroup.Label>
                <div className="mt-4 flex items-center space-x-2">
                  {colors.map((color) => (
                    <RadioGroup.Option
                      key={color.name}
                      value={color}
                      className={({ active, checked }) =>
                        classNames(
                          color.selectedColor,
                          active && checked ? 'ring ring-offset-1' : '',
                          !active && checked ? 'ring-2' : '',
                          '-m-0.5 relative  rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      <RadioGroup.Label as="span" className="sr-only">
                        {color.name}
                      </RadioGroup.Label>
                      <span
                        aria-hidden="true"
                        className={classNames(color.bgColor, 'h-5 w-5 border border-black border-opacity-10 rounded-full')}
                      />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              </div>

              <div className={`w-[7.813rem] ${mode === 'mobile' ? 'mt-6 xl:mt-auto' : 'mt-6 lg:mt-auto'}`}>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                {' '}
                Or enter Hex Code{' '}
              </label>
              <div className="mt-1 p-1">
                <input
                  type="text"
                  // value={val2}
                  name="linkHex"
                  id="linkHex"
                  // onChange={(event:any) => {
                  //   setVal2(event.target.value);
                  //   console.log('val2',val2)
                  // }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            </div>

            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                {' '}
                What do you want link to say{' '}
              </label>
              <div className="mt-1">
                <input
                  data-cy="linkText"
                  type="text"
                  // value={val3}
                  name="linkText"
                  id="linkText"
                  // onChange={(event:any) => {
                  //   setVal3(event.target.value);
                  //   console.log("val3", val3)
                  // }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                {' '}
                Add Button link{' '}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={val4}
                  name="linkUrl"
                  id="linkUrl"
                  // onChange={(event:any) => {
                  //   setVal4(event.target.value);
                  //   console.log("val4", val4)
                  // }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            

            <div className="flex flex-shrink-0 justify-end mt-7">
    
              <button
                data-cy="addTestimonialButton"
                type="submit"
                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
                disabled={transition?.state != "idle" ? true : false}
                onClick={() => {
                  setClickedAddLink(true)
                }}
              >
                {transition?.state != "idle"  ? <BeatLoader color="#ffffff" /> : 'Add Link' }
              </button>
            </div>

            </div>
          </div>
        </div> 
        <div className='inset-0'>
        <ExistingSpotlightLink loaderData={loaderData} mode={mode} setmode={setmode} setShowSpotlight={setShowSpotlight} />
        </div>

        <div className='inset-0'>
        <ExistingAdditionalSpotlightLink loaderData={loaderData} mode={mode} setmode={setmode} setShowSpotlight={setShowSpotlight} />
        </div>
      
      
        
      </div>
            
      </div>
    </Form>
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  
    
    
  )
}
