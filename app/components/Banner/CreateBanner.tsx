import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Switch } from '@headlessui/react'
import { Form, useTransition } from '@remix-run/react'
import * as HIcons from '@heroicons/react/outline'
import BeatLoader from 'react-spinners/BeatLoader'

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

const people = [
  { id: 1, name: 'Accept Payments' },
  { id: 2, name: 'Redirect to another URL' },
  { id: 3, name: 'Let people email me' },
  { id: 4, name: 'Download a File' },
  { id: 5, name: 'Let People call me' },
  { id: 6, name: 'Capture lead in google sheet' },
  { id: 7, name: 'Allow people to book an appointment' },
]

export default function CreateBanner({ setOpenDeleteBanner, OncloseBanner, setShowBanner, setShowCreatebanner, showCreatebanner, loaderData, mode, setmode}:any) {
  const transition = useTransition()
  
  const [selectedColor, setSelectedColor] = useState(loaderData?.supportBanner?.bannerColor)
  const [enabled, setEnabled] = useState(loaderData?.supportBanner?.toggleBanner)
  const [click,setClicked]=useState(false)

  const [value, setValue] = useState({bannerText:loaderData?.supportBanner?.bannerText, bannerColor:loaderData?.supportBanner?.bannerColor, bannerHex:loaderData?.supportBanner?.bannerHex , bannerIcon:loaderData?.supportBanner?.bannerIcon , bannerLink:loaderData?.supportBanner?.bannerlink, toggleBanner:loaderData?.supportBanner?.toggleBanner })

  var _ = require('lodash');
  const iconName = _.startCase(_.camelCase(value.bannerIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '');
  const Final = Name.split(" ").join('')
  const {...icons} = HIcons
  //@ts-ignore
  const TheIcon: any = React.useMemo(() => icons[Final] || null,[Final])


  const Onclose = (e:any) => {
    
    if(mode === 'desktop'){
      setShowCreatebanner(false)
    }
    if(mode === 'mobile'){
    }
    OncloseBanner()
  };

const OnCancel = ()=>{
  setShowBanner(false);
  setmode('desktop')
}

  const [error,setError]=useState('')
  const [errorHex,setErrorHex]=useState('')
  const [errorColor,setErrorColor]=useState('')
  const [errorNoColor, setErrorNoColor] = useState('')
  const[errorIcon,setErrorIcon]= useState('')
  const [errorLink,setErrorLink]=useState('')

  const validRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  useEffect(() => {
    if(transition.state === 'loading' && !error && !errorLink && !errorHex && !errorColor ){
      setShowCreatebanner(false);
    }
  }, [transition, error, errorLink, errorHex, errorColor])

useEffect(() => {
  if(value?.bannerHex?.length && !validRegex.test(value.bannerHex)){
    setErrorHex("Invalid Hexcode")
  }
  else if(!value.bannerHex && selectedColor){
setErrorHex("")
  } else{
setErrorHex("")
  }

}, [value?.bannerHex,selectedColor])

useEffect(() => {
  if(value?.bannerText){
   setError('')
  }else{
   setError('Required')
  }
 }, [value])

 useEffect(() => {
  if(TheIcon){
   setErrorIcon('')
  }else if(value.bannerIcon === ''){
   setErrorIcon('')
  }
  else if(!TheIcon && value.bannerIcon){
   setErrorIcon('Icon not available')
  }
  else {
    setErrorIcon('')
  }
 }, [value, TheIcon])
 
 useEffect(() => {
   if(!selectedColor && !value.bannerHex){
     setErrorNoColor('Please select color or hexcode.')
  }else {
   setErrorNoColor('')
  }
  
 }, [value, selectedColor])
 
  useEffect(() => {
   if(selectedColor && value.bannerHex){
   setErrorColor('Hexcode will be given priority')
  }else {
   setErrorColor('')
  }
  
 }, [value,selectedColor])

 useEffect(() => {
  if(value?.bannerLink){
    setErrorLink('')
  }else{
    setErrorLink('Required')
  }
 }, [value])


  return (
    <Transition.Root show={true} as={Fragment}>
      <div className="relative z-20">
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
                  <Form replace={true}  action="add/supportBanner" method='post' className='h-screen'>
                    
                    <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
                    
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="py-6 px-4 sm:px-6 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7">
                             {loaderData?.supportBanner?.bannerText ? 'Edit' : 'Add'} support banner on your profile
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                                onClick={OnCancel}
                              >
                                <span className="sr-only">Close panel</span>
                              
                                <XIcon onClick={Onclose} className="h-6 w-6" aria-hidden="true" />
                                
                              </button>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-gray-500 leading-5 font-normal">
                              A support banner appears on top of your profile 
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pt-6 pb-5">

                            <div >
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                What do you want your support banner to say?{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  data-cy="bannerText"
                                  type="text"
                                  value={value.bannerText}
                                  name="bannerText"
                                  id="bannerText"
                                  onChange={(event) => {
                                    setValue({
                                      ...value,
                                      [event.target.name]: event.target.value,
                                    })
                                  }}
                                  className={`block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm text-gray-900 ${click && error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                />
                                {click && <div className='text-sm text-red-500'>{error}</div>}
                              </div>
                            </div>

                            <div className='flex flex-col'>
                              <div className={`flex ${mode === 'mobile' ? 'flex-col xl:flex-row xl:justify-between' : 'flex-col lg:flex-row lg:justify-between'}`} >
                                <div className="">
                                <RadioGroup value={selectedColor} onChange={setSelectedColor}  name='bannerColor'>
                                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                  Select Color For Banner
                                  </RadioGroup.Label>
                                  <div className="mt-4 flex items-center space-x-2">
                                    {colors.map((color) => (
                                      <RadioGroup.Option
                                        key={color.name}
                                        value={color.bgColor}
                                        
                                        className={({ active, checked }) =>
                                          classNames(
                                            color.selectedColor,
                                            active && checked ? 'ring ring-offset-1' : '',
                                            !active && checked ? 'ring ring-offset-1' : '',
                                            '-m-0.5 relative  rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                          )
                                        }
                                      >
                                        <RadioGroup.Label as="span" className="sr-only">
                                          {color.name}
                                        </RadioGroup.Label>
                                        <span
                                          data-cy={color.bgColor}
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
                                    data-cy="bannerHex"
                                    type="text"
                                    value={value.bannerHex}
                                    name='bannerHex'
                                    id="project-name"
                                    onChange={(event) => {
                                      setValue({
                                        ...value,
                                        [event.target.name]: event.target.value,
                                      })
                                    }}
                                    className={`block w-full rounded-md shadow-sm sm:text-sm text-gray-900 ${click && errorHex ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} `}
                                  />
                                  {selectedColor && !errorHex && <div className='text-[12px] text-indigo-500'>{errorColor}</div>}
                                  {click && <div className='text-[12px] text-red-500'>{errorHex}</div>}
                                </div>
                              </div>
                              </div>
                                
                              <div>
                              {click && !errorHex && <div className='text-sm text-red-500'>{errorNoColor}</div>}
                              </div>
                              
                            </div>

                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Select an icon for support banner (optional){' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  data-cy="bannerIcon"
                                  type="text"
                                  value={value.bannerIcon}
                                  name="bannerIcon"
                                  id="project-name"
                                  onChange={(event) => {
                                    setValue({
                                      ...value,
                                      [event.target.name]: event.target.value,
                                    })
                                  }}
                                  className={`block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900`}
                                />
                                {<div className='text-sm text-indigo-500'>{errorIcon}</div>}
                                <p className='text-xs leading-5 font-normal text-gray-500 mt-1'>You can select any font awesome icon to add to your button.  Please go  <a target='_blank' className='text-blue-800 underline' href='https://heroicons.com/'>here</a> to find name of icon</p>
                              </div>
                            </div>

                            <div >
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Add Link{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  data-cy="bannerLink"
                                  type="text"
                                  value={value.bannerLink}
                                  name="bannerLink"
                                  id="project-name"
                                  onChange={(event) => {
                                    setValue({
                                      ...value,
                                      [event.target.name]: event.target.value,
                                    })
                                  }}
                                  className={`block w-full rounded-md border-gray-300 text-gray-900 shadow-sm  sm:text-sm ${click && error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                />
                                {click && <div className='text-sm text-red-500'>{errorLink}</div>}
                               <p className='text-xs leading-5 font-normal text-gray-500 mt-1'>
                                Visitors will be redirected to this link if they click on your banner text
                                </p>
                              </div>
                            </div>
                            

                            <div className=''>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                  {' '}
                                  Show Support Banner{' '}
                              </label>

                              <div className='flex'>
                                <p className='text-sm leading-5 font-normal text-gray-500'>
                                Switching it off will not show support banner on top of your profile. Although all settings will be saved.
                                </p>
                                
                                <Switch 
                                data-cy="toggleBanner" name='toggleBanner'
                                  checked={enabled}
                                  value={enabled ? 'true' : 'false'}
                                  onChange={setEnabled}
                                  className={classNames(
                                    enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                  )}
                                >
                                  <span className="sr-only">Use setting</span>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      enabled ? 'translate-x-5' : 'translate-x-0',
                                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                  />
                                </Switch>
                              </div>
                              
                            </div>

                            <div className="flex flex-shrink-0 justify-end mt-7" >
                    
                              <button
                                data-cy="addeditBannerButton"
                                type="submit"
                                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
                                onClick={()=>{setClicked(true);
                                }}
                                disabled={transition?.state != "idle" ? true : false}
                              >
                                {transition?.state != "idle" && !error && !errorLink && !errorHex && !errorColor  ? <BeatLoader color="#ffffff" /> : loaderData?.supportBanner?.bannerText ? 'Edit Support Banner' :
                                 'Add Support Banner' }
                                
                              </button>
                            </div>
    
                            </div>
                          </div>
                        </div> 
                      
                        
                      </div>

                    </div>
                    
                    
                    
                  </Form>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </div>
    </Transition.Root>
  )
}
