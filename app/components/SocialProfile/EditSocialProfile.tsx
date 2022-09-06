import { Fragment, useState,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'
import SelectedSocialLinks from '../Common/SelectedSocialLinks'
import { Form, useSubmit } from '@remix-run/react'

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

var socialLinks = [
  { id: 1, name: 'Facebook' },
  { id: 2, name: 'Twitter' },
  { id: 3, name: 'Youtube' },
]



export default function EditSocialProfile({successUpdateMessage, loaderData, setShowEditProfile, setshowSocialLinks, clickedLink, mode }: any) {

const linkName = localStorage.getItem("LinkName")
  const linkEmail = localStorage.getItem("LinkEmail")

useEffect(() => {
   
    localStorage.setItem("LinkName",clickedLink?.name)
    localStorage.setItem("LinkEmail",clickedLink?.email)
    clickedLink?.email

  }, [clickedLink?.email])

const [error, setError] = useState('')




  const [val, setVal] = useState<string>(clickedLink?.name === 'Facebook' ? loaderData?.socialMedia?.facebookLink :clickedLink?.name === 'Twitter' ? loaderData?.socialMedia?.twitterLink :  clickedLink?.name === 'Youtube' ? loaderData?.socialMedia?.youtubeLink : '')
  // console.log(val);
  
  // const [text, setText] = useState(successUpdateMessage)

  // const [query, setQuery] = useState('')
  const [selectedEditSocialLinks, setSelectedEditSocialLinks] = useState(socialLinks?.filter((link) =>
    link?.name === (clickedLink?.name !== null ? clickedLink?.name : linkName)
  )[0] 
  )
  
const [selectedSocialLinks] = useState(selectedEditSocialLinks)
  const sociallink = selectedSocialLinks?.name?.toLowerCase()


let fbRegEx:any = sociallink === 'facebook' ? /^(https?:\/\/)?((w{3}\.)?)facebook.com\/./gm : sociallink === 'twitter' ? /^(https?:\/\/)?((w{3}\.)?)twitter.com\/./gm :  sociallink === 'youtube' ? /^(https?:\/\/)?((w{3}\.)?)youtube.com\/./gm :''
let whiteSpaceRegex = /^\S*$/

const regexCheck = (fbRegEx:any,val:any,whiteSpaceRegex:any)=>{
  
  
 if(!whiteSpaceRegex.test(val)){
  if(val === ''){
 return setError('Link is Required.')}
  return setError('White space not allowed.')
 }else if(!fbRegEx.test(val)){
  return setError('Please enter a valid link.')
 }
 else {
 return setError('')
}}
// const regexCheck = (fbRegEx:any,value:any,whiteSpaceRegex:any)=>{
//   if(value === ''){
//  return setError('')}
// if(!fbRegEx.test(value)){
//   return setError('Please enter a valid link.')
//  } if(!whiteSpaceRegex.test(value)){
//   return setError('White space not allowed.')
//  }
//  else {
//  return setError('')
// }}
const handleChange = (e:any)=>{
 setVal(e.target.value)
regexCheck(fbRegEx,e.target.value,whiteSpaceRegex)
}


  useEffect(() => {
    loaderData;
    regexCheck(fbRegEx,val,whiteSpaceRegex)
    
  }, [loaderData,selectedSocialLinks])

  // const [query, setQuery] = useState('')
  const Onclose = () => {
    if (mode === 'desktop') {
      setShowEditProfile(false)
    }
    if (mode === 'mobile') {
      setShowEditProfile(false)
    }
  }



  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className={`pointer-events-none fixed inset-y-0 left-0 flex  mt-[3rem]  ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'lg:w-96'}`}>
              <Transition.Child
                as={Fragment}
                enter=""
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave=""
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md overflow-y-auto">
                  <Form replace={true} action="update/socialProfile" method="post">
                    <div className={`flex h-[50rem] flex-col bg-white border-r  border-gray-200 overflow-y-auto ${mode === 'mobile' ? 'w-[16rem] xl:w-full' : 'w-full md:max-w-xs lg:max-w-md'}`}>
                      <div className="bg-gray-50 py-6 px-4">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                            Add Social Profile Links
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                              onClick={() => setShowEditProfile(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon onClick={() => setShowEditProfile(false)} className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className={`pt-1 pr-2 `}>
                          <p className={`text-sm leading-5 font-normal text-gray-500 `}>
                            Select social profile links which you want to share on your profile
                          </p>
                        </div>
                      </div>
                      <div className='font-inter mt-7 flex flex-col items-center'>
                        <p className='text-xs leading-4 font-semibold tracking-wide'>
                          ADD MORE PROFILE LINKS
                        </p>
                        <p className={`text-sm leading-5 font-normal text-gray-500  ${mode === 'mobile' ? "px-[1rem] xl:px-0" : 'px-12 lg:px-0'}`}>
                          Please add social links by clicking on button below
                        </p>
                        <button

                          type="button"
                          className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Add Social Profile
                        </button>
                      </div>

                      <div className='mt-10'>
                        <SelectedSocialLinks loaderData={loaderData} setshowSocialLinks={setshowSocialLinks} clickedLink={clickedLink} />
                      </div>
                      {successUpdateMessage &&
                          <div className="rounded-md bg-green-50 p-4 mb-4">
      <div className="flex  items-start justify-start">
        <div className="flex-shrink-0 pt-1">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{successUpdateMessage}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5 pt-1">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md py-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true"  />
            </button>
          </div>
        </div>
      </div>
    </div>}
                      <div className='pl-3 pr-3.5 mt-6'>
                        <div>
                         <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                            Edit Social Profile
                          </label>
                          <div className="mt-1">
                            <input disabled
                              type="text"
                              data-cy={selectedEditSocialLinks.name+'-link'}
                              value={clickedLink.name}
                              name="edit_social_links"
                              
                              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900  `}
                            />
                        </div>
                        </div>
                        <div className='mt-5'>
                          <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                            {' '}
                            Add Link{' '}
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              data-cy={selectedEditSocialLinks.name+'-link'}
                              value={val}
                              onChange={handleChange}
                              name="editlink"
                              id="editlink"
                              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900 ${error ? 'border border-red-600 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                            />
                           <div className={`text-red-600 text-sm`}>{error}</div>

                          </div>
                        </div>
                      </div>

                      <div className="flex flex-shrink-0 justify-end px-4 pb-2 mt-7">
                        <span>
                          <button
                            type="button"
                            className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5"
                            onClick={() => {
                              setShowEditProfile(false);
                              setshowSocialLinks(true);
                            }}
                          >
                            Cancel
                          </button>
                        </span>
                        <button
                          id="updateSocialLink"
                          type="submit"
                          className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-75"
                          disabled={!val  ? true : !error ? false : true }
                        >
                          Update
                        </button>
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