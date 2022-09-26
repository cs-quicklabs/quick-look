import { Dialog, Transition  } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  Fragment, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import ExistingSpotlightLink from './ExistingSpotlightLink';
import { Form, useTransition } from '@remix-run/react'
import ExistingAdditionalSpotlightLink from './ExistingAdditionalLinks';
import { BeatLoader } from 'react-spinners';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { addAdditionalLink } from '~/services/additionalLinks.service.server';

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

export default function AddMoreSpotlightLink({ setAdditionalLinkUpdateMessage, additionalLinkUpdateMessage, setShowSpotlight, loaderData, mode, setmode}:any) {
  console.log(loaderData)
  const transition = useTransition();
  const [openAdditionalLinkForm, setOpenAdditionalLinkForm] = useState(false);
  const [selectedColor, setSelectedColor] = useState('')
  const [click, setClick] = useState(false)
  const [input, setInput] = useState({ linkHex: loaderData?.profile?.additionalLinksHexCode
, linkText: '', linkUrl: ''})
  const [errorColor,setErrorColor]=useState('')
  const [errorNoColor, setErrorNoColor] = useState('')
   const [errorHex,setErrorHex]=useState('')
   const [errorLinkText,setErrorLinktext]=useState('')
   const [errorUrl, setErrorUrl] = useState('')
   const [text, setText] = useState('')
console.log(input,'@@')
   useEffect(() => {
    if(additionalLinkUpdateMessage){
      setText(additionalLinkUpdateMessage)
    }
    setOpenAdditionalLinkForm(false)
  
    setTimeout(() => {
      if(additionalLinkUpdateMessage)
     { setText('')}
    }, 2000);
    
  }, [additionalLinkUpdateMessage])

   useEffect(() => {
    if(transition.state === 'loading'){
      if(loaderData?.profile?.additionalLinksHexCode){
     setInput({linkHex:loaderData?.profile?.additionalLinksHexCode, linkText: '', linkUrl: ''});
      } else{
        setInput({linkHex:'', linkText: '', linkUrl: ''});
      }
      if(loaderData?.profile?.additionalLinksColor){
       setSelectedColor(loaderData?.profile?.additionalLinksColor);
       setInput({linkHex:'', linkText: '', linkUrl: ''});
      }else{
        setSelectedColor('');
      }
if(loaderData?.profile?.additionalLinksColor && loaderData?.profile?.additionalLinksHexCode){
       setInput({...input, linkText: '', linkUrl: ''});
 setSelectedColor('');
}
      setClick(false);
    }
  }, [transition,loaderData])

  

  useEffect(() =>{
    setSelectedColor(loaderData?.profile?.additionalLinksColor);
    setInput({...input, linkHex: loaderData?.profile?.additionalLinksHexCode});
   
  },[loaderData])
  
  

   const validRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/


   useEffect(() => {
    if(input?.linkHex?.length && !validRegex.test(input.linkHex)){
      setErrorHex("Invalid Hexcode")
    }
    else if(!input.linkHex && selectedColor){
  setErrorHex("")
    } else{
  setErrorHex("")
    }
  }, [input.linkHex,selectedColor])

  const Onclose = (e:any) => {
    if(mode === 'desktop'){
      setShowSpotlight(false)
    }
    if(mode === 'mobile'){
     
    }
  };

  useEffect(() => {
    if(input?.linkText?.length === 0){
      setErrorLinktext('Required')
    }else{
      setErrorLinktext('')
    }
   }, [input])
   
   useEffect(() => {
    if( input?.linkUrl?.length ===0){
      setErrorUrl('Required')
    }else{
      setErrorUrl('')
    }
   }, [input])

   useEffect(() => {
    if(!selectedColor && !input.linkHex){
      setErrorNoColor('Please select color or hexcode.')
   }else {
    setErrorNoColor('')
   }
   
  }, [input, selectedColor])
  
   useEffect(() => {
    if(selectedColor && input.linkHex){
    setErrorColor('Hexcode will be given priority')
   }else {
    setErrorColor('')
   }
   
  }, [input,selectedColor])
   

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
      <div className={`flex h-screen pb-12 flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
      <div className="h-0 flex-1 overflow-y-auto">
              <Form replace={true} action="/account/add/additionalLink" method='post'>

        <div className="py-6 px-4 sm:px-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> 
              {loaderData?.additionalLinks?.length < 7 ? ' Add Additional Links to your profile' : 'Additional Links to your profile' }
            </Dialog.Title>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                onClick={Onclose}
              >
                <span className="sr-only">Close panel</span>
              
                <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                
              </button>
            </div>
          </div>
          <div className="mt-1">
            <p className="text-sm text-gray-500 leading-5 font-normal">
             {loaderData?.additionalLinks?.length < 7 ? 'You can add more than one link to your profile' :null }  
            </p>
          </div>
        </div>

        {openAdditionalLinkForm && loaderData?.additionalLinks?.length < 7 &&
         <div className="flex flex-1 flex-col justify-between">
         <div className="divide-y divide-gray-200 px-4 sm:px-6">
           <div className="space-y-6 pt-6 pb-5">
          
           <div className='flex flex-col'>
           <div className={`flex ${mode === 'mobile' ? 'flex-col xl:flex-row xl:justify-between' : 'flex-col lg:flex-row lg:justify-between'}`}>
           <div className="">
           <RadioGroup name="linkColor" value={selectedColor} onChange={setSelectedColor}>
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
               name="linkHex"
               value={input.linkHex}
               onChange={(event) => {
                 setInput({
                   ...input,
                   [event.target.name]: event.target.value,
                 })
               }}
               id="linkHex"
               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
               What do you want link to say{' '}
             </label>
             <div className="mt-1">
               <input
                 data-cy="linkText"
                 type="text"
                 name="linkText"
                 id="linkText"
                 value={input.linkText}
                 onChange={(event) => {
                   setInput({
                     ...input,
                     [event.target.name]: event.target.value,
                   })
                 }}
                 className={`block w-full rounded-md border-gray-300 shadow-sm sm:text-sm  ${click && errorLinkText ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
               />
               {click &&<div className='text-sm text-red-500'>{errorLinkText}</div>}
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
                 name="linkUrl"
                 id="linkUrl"
                 value={input.linkUrl}
                 onChange={(event) => {
                   setInput({
                     ...input,
                     [event.target.name]: event.target.value,
                   })
                 }}
                 className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${click && errorUrl ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
               />
               {click &&<div className='text-sm text-red-500'>{errorUrl}</div>}
             </div>
           </div>
           

           <div className="flex flex-shrink-0 justify-end mt-7">
   
             <button
               data-cy="addTestimonialButton"
               type="submit"
               className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer" 
               onClick={(e:any)=>{setClick(true);  (!input?.linkHex?.length && !selectedColor?.length) || input.linkText === '' || input.linkUrl === '' ? e.preventDefault() : null}}
               disabled={transition?.state != "idle" ? true : false}
             >
               {transition?.submission?.action === "/account/add/additionalLink" ? <BeatLoader color="#ffffff" /> : 'Add Link' }
             </button>
           </div>

           </div>
         </div>
       </div>}

       </Form>

        

        {loaderData?.additionalLinks?.length < 7 && !openAdditionalLinkForm ? 
        <>
         <div className='font-inter mt-7 flex flex-col items-center'>
        <p className='text-xs leading-4 font-semibold tracking-wide'>
          ADD MORE ADDITIONAL LINKS
        </p>
        <p className={`text-sm leading-5 font-normal text-gray-500 px-12 text-center  ${mode === 'mobile' ? 'lg:px-4' : 'lg:px-0'}`}>
        You can add more than one link to your profile
        </p>
        <button
          data-cy="addTestimonialButton"
          onClick={() => {
            setOpenAdditionalLinkForm(true)}}
          type="button"
          className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Add Additional Link
         
        </button>

       
      </div>
      </>
       
         : 
        null
         }
          { (text) &&
      <div className={`rounded-md bg-green-50 p-4 ${loaderData?.additionalLinks?.length === 7 ? 'mt-0' :'mt-4'}`}>
      <div className="flex  items-start justify-start">
        <div className="flex-shrink-0 pt-1">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{text}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5 pt-1">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md py-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" onClick={()=>{setText('');}} />
            </button>
          </div>
        </div>
      </div>
    </div>}
         <div>
          <div className={`text-xs font-medium text-gray-500 group-hover:text-gray-700 pl-4 border-t border-gray-200 bg-gray-50 w-full leading-5 ${loaderData?.additionalLinks?.length === 7 ? 'mt-0' : 'mt-4'}`}>
            Spotlight Button
          </div>
          <div className='inset-0'>
          <ExistingSpotlightLink loaderData={loaderData} mode={mode} setmode={setmode} setShowSpotlight={setShowSpotlight} />
          </div>
         </div>
         

         <div>
          {loaderData?.additionalLinks[0]?.linkText ? 
          <div className='text-xs mt-2 font-medium text-gray-500 group-hover:text-gray-700 pl-4 border-t border-gray-200 bg-gray-50 w-full leading-5'>
          Additional Links
          </div> : null}
          
  
          <div className='inset-0'>
          <ExistingAdditionalSpotlightLink setOpenAdditionalLinkForm={setOpenAdditionalLinkForm} setAdditionalLinkUpdateMessage={setAdditionalLinkUpdateMessage} additionalLinkUpdateMessage={additionalLinkUpdateMessage} loaderData={loaderData} mode={mode} setmode={setmode} setShowSpotlight={setShowSpotlight} />
          </div>
         </div>
         
      
      
        
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
