import { Listbox,Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
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

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

export default function CreateSpotlight({showEditSpotlight,setShowEditSpotlight,showSpotlight, setShowSpotlight, loaderData, mode, setmode}:any) {
  const transition = useTransition()
  
  const [selectedColor, setSelectedColor] = useState(loaderData?.spotlightButton?.buttonColor || '')
  
  let isValid = false
  var _ = require('lodash');
let selectedAction: { id: number; name: string }[] = []

const getSelectedAction = ()=>{
 selectedAction = people.filter(action => action.name === loaderData?.spotlightButton?.buttonAction)}

  const [enabled, setEnabled] = useState(loaderData?.spotlightButton?.toggleSpotlight)
  const [selected, setSelected] = useState(people[3])
  const [val,setVal]=useState({buttonText: loaderData?.spotlightButton?.buttonText || '',buttonActionlink: loaderData?.spotlightButton?.buttonActionlink || '', hexcode: loaderData?.spotlightButton?.buttonhex || '', spotlightIcon: loaderData?.spotlightButton?.spotlightIcon || '', buttonAction: loaderData?.spotlightButton?.buttonAction || '', toggleSpotlight: loaderData?.spotlightButton?.toggleSpotlight || '' })

  const iconName = _.startCase(_.camelCase(val.spotlightIcon)) + 'Icon'
  const Name = _.replace(iconName, ' ', '');
  const Final = Name.split(" ").join('')
  const {...icons} = HIcons
  //@ts-ignore
  const TheIcon: any = React.useMemo(() => icons[Final] || null,[Final])
  
//  Object.keys(icons).forEach(function(key){
//   //@ts-ignore
//   icons[key]?.render?.name == Final ? isValid = true : null
// });

useEffect(() => {
    getSelectedAction();
   selectedAction.length ? setSelected(selectedAction[0]) : null
  }, [loaderData?.spotlightButton?.buttonAction])





   const [error,setError]=useState('')
   const [errorLink,setErrorLink]=useState('')
   const [errorHex,setErrorHex]=useState('')
   const [errorColor,setErrorColor]=useState('')
   const [errorNoColor, setErrorNoColor] = useState('')
const[errorIcon,setErrorIcon]= useState('')

  const validRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
useEffect(() => {

  if(val.hexcode.length && !validRegex.test(val.hexcode)){
    setErrorHex("Invalid Hexcode")
  }

  else if(!val.hexcode && selectedColor){
setErrorHex("")
  } else{
setErrorHex("")

  }

}, [val.hexcode,selectedColor])

useEffect(() => {
  if(transition.state === 'loading' && !error && !errorLink && !errorHex && !errorColor ){
   showEditSpotlight && setShowEditSpotlight(false);
  }
}, [transition])

const [click,setClicked]=useState(false)
 
useEffect(() => {
 if(val.buttonText.length === 0){
  setError('Required')
 }else{
  setError('')
 }
}, [val])

useEffect(() => {
 if( val.buttonActionlink.length ===0){
  setErrorLink('Required')
 }else{
  setErrorLink('')
 }
}, [val])


useEffect(() => {
 if(TheIcon){
  setErrorIcon('')
 }else if(val.spotlightIcon === ''){
  setErrorIcon('')
 }
 else if(!TheIcon){
  setErrorIcon('Icon not available')
 }
}, [val])

useEffect(() => {
  if(!selectedColor && !val.hexcode){
    setErrorNoColor('Please select color or hexcode.')
 }else {
  setErrorNoColor('')
 }
 
}, [val, selectedColor])

 useEffect(() => {
  if(selectedColor && val.hexcode){
  setErrorColor('Hexcode will be given priority')
 }else {
  setErrorColor('')
 }
 
}, [val,selectedColor])

  const Onclose = (e:any) => {
    
    if(mode === 'desktop'){
      setShowSpotlight(false)
    }
    if(mode === 'mobile'){
     
    }
  };

const handleChange = ()=>{
  setSelected
}

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
                  <Form replace={true}  action="add/spotlight" method='post' className='h-screen'>
                    
                    <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
                    
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="py-6 px-4 sm:px-6 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7">
                            {`${loaderData?.spotlightButton?.buttonText  ? 'Edit': 'Add'} Spotlight Button to your profile`} 
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
                              A spotlight button is an action button on your public profile
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pt-6 pb-5">

                            <div >
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                What do you want your spotlight button to say?{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  data-cy="addSpotlightText"
                                  type="text"
                                  value={val.buttonText}
                                  name="buttonText"
                                  id="project-name"
                                  onChange={(event) => {
                                    setVal({
                                      ...val,
                                      [event.target.name]: event.target.value,
                                    })
                                  }}
                                  className={`block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${click && error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                />
                                {click && <div className='text-sm text-red-500'>{error}</div>}
                              </div>
                            </div>

                            <div className='flex flex-col'>
                              <div className={`flex ${mode === 'mobile' ? 'flex-col xl:flex-row xl:justify-between' : 'flex-col lg:flex-row lg:justify-between'}`} >
                                <div className="">
                                <RadioGroup value={selectedColor} onChange={setSelectedColor}  name='buttonColor'>
                                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                    Select Color For Button
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
                                    data-cy="addSpotlightHex"
                                    type="text"
                                    value={val.hexcode}
                                    name='hexcode'
                                    id="project-name"
                                    onChange={(event) => {
                                      setVal({
                                        ...val,
                                        [event.target.name]: event.target.value,
                                      })
                                    }}
                                    className={`block w-full rounded-md shadow-sm sm:text-sm ${click && errorHex ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} `}
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
                                Select an icon for spotlight button (optional){' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  data-cy="addSpotlightIcon"
                                  type="text"
                                  value={val.spotlightIcon}
                                  name="spotlightIcon"
                                  id="project-name"
                                  onChange={(event) => {
                                    setVal({
                                      ...val,
                                      [event.target.name]: event.target.value,
                                    })
                                  }}
                                  className={`block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm focus:border-indigo-500 focus:ring-indigo-500`}
                                />{<div className='text-sm text-indigo-500'>{errorIcon}</div>}
                                <p className='text-xs leading-5 font-normal text-gray-500 mt-1'>You can select any Hero icon to add to your button.  Please go <a target='_blank' className='text-blue-800 underline' href='https://heroicons.com/'>here</a> to find name of icon</p>
                              </div>
                            </div>

                            <div>
                            <Listbox value={selected.name}
                              //ts-ignore 
                             onChange={setSelected}
                              name='buttonAction'>
                              {({ open }) => (
                                <>
                                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                                    What do you want button to do?
                                  </Listbox.Label>
                                  <div className="relative mt-1">
                                    <Listbox.Button 
                                    data-cy="SelectAction" className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                      <span className="block truncate">{selected.name}</span>
                                      <span className="cursor-pointer  absolute inset-y-0 right-0 flex items-center pr-2">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person) => (
                                          <Listbox.Option
                                          data-cy={person.name}
                                            key={person.id}
                                            className={({ active }) =>
                                              classNames(
                                                active ? 'text-white bg-indigo-600 cursor-pointer' : 'text-gray-900',
                                                'relative select-none py-2 pl-3 pr-9'
                                              )
                                            }
                                            value={person}
                                            // onChange={(event:any) => {setAction(event.target.value)}}
                                          >
                                            

                                            {({ selected, active }) => (
                                              <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                  {person.name}
                                                </span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active ? 'text-white' : 'text-indigo-600',
                                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                  >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Listbox>
                            </div>
                            
                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                {selected.name === 'Download a File' ?'Please provide download path of file which you want visiter to download': selected.name === 'Accept Payments' ?'Please enter your Payment Gateway link' :selected.name === 'Let people email me'?'Please Enter your Email Id' :selected.name === 'Redirect to another URL'? 'Enter the link you want visitors to visit':selected.name === 'Let People call me'?'Enter your Phone number / Telephone number':selected.name === 'Capture lead in google sheet'?'Enter link of your Google sheet':selected.name === 'Allow people to book an appointment' ? ' Enter link for your Appointment':null}
                              </label>
                              <div className="mt-1">
                                <input
                                  data-cy="addSpotlightLink"
                                  type="text"
                                  value={val.buttonActionlink}
                                  name="buttonActionlink"
                                  id="project-name"
                                  
                                  onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                                  className={`block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm ${click && errorLink ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                                />{click &&<div className='text-sm text-red-500'>{errorLink}</div>}
                              </div>
                            </div>

                            <div className=''>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                  {' '}
                                  Show spotlight button{' '}
                              </label>

                              <div className='flex'>
                                <p className='text-sm leading-5 font-normal text-gray-500'>
                                Switching it off will not show spotlight button to visitor.
                                Although all settings of button will be saved.
                                </p>
                                
                                <Switch 
                                data-cy="ToggleSpotlight" name='toggleSpotlight'
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
                                data-cy="addSpotlightButton"
                                type="submit"
                                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
                                onClick={()=>{setClicked(true);
                                }}
                                disabled={transition?.state != "idle" ? true : false}
                              >
                                {transition?.state != "idle" && !error && !errorLink && !errorHex && !errorColor  ? <BeatLoader color="#ffffff" /> :
                                loaderData?.spotlightButton?.buttonText  ? 'Edit Spotlight Button': 'Add Spotlight Button' }
                                
                              </button>
                            </div>
    
                            </div>
                          </div>
                        </div> 
                      
                        
                      </div>
{/* 
                      <AddMoreSpotlightLink showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} loaderData={loaderData} mode={mode} setmode={setmode} /> */}
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
