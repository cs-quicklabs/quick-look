import {  useState,useEffect } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'

import { Form, useSubmit, useTransition } from '@remix-run/react'
import BeatLoader from 'react-spinners/BeatLoader'

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
const transition = useTransition()

useEffect(() => {
  transition.state === "loading" && setShowEditProfile(false)
}, [transition])

useEffect(() => {
localStorage.setItem("LinkName",clickedLink?.name)
}, [clickedLink?.email])

const [error, setError] = useState('')

  const [val, setVal] = useState<string>(clickedLink?.name === 'Facebook' ? loaderData?.socialMedia?.facebookLink :clickedLink?.name === 'Twitter' ? loaderData?.socialMedia?.twitterLink :  clickedLink?.name === 'Youtube' ? loaderData?.socialMedia?.youtubeLink : '')
  
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

const handleChange = (e:any)=>{
 setVal(e.target.value)
regexCheck(fbRegEx,e.target.value,whiteSpaceRegex)
}


  useEffect(() => {
    loaderData;
    // regexCheck(fbRegEx,val,whiteSpaceRegex)
    
  }, [loaderData,selectedSocialLinks])

  const Onclose = () => {
    if (mode === 'desktop') {
      setShowEditProfile(false)
    }
    if (mode === 'mobile') {
      setShowEditProfile(false)
    }
  }



  return (
    <Form replace={true} action="/account/update/socialProfile" method= "post">
      <div className={`flex flex-col ml-[-1rem] divide-y divide-gray-200 bg-white font-inter ${mode === 'mobile' ? 'lg:ml-[-1rem] w-[16rem] lg:w-max xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>

        
        {/* {successUpdateMessage &&
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
            </div>} */}


            <div className="flex flex-1 flex-col justify-between">
              <div className="divide-y divide-gray-200 px-4 sm:px-6 mt-[-1rem]">
                  <div className="space-y-6 pb-1 border-b border-gray-200">

                  <div className='mt-5'>
                    <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                    {' '}
                    Edit Link{' '}
                    </label>
                    <div className="">
                      <input value={clickedLink.name} name="edit_social_links" hidden/>
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

                  <div className="flex flex-shrink-0 justify-end px-4 pb-2 mt-7">
                    <span>
                      <button
                      type="button"
                      className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5 disabled:cursor-pointer"
                      onClick={() => {
                      setShowEditProfile(false);
                      setshowSocialLinks(true);
                      }}
                      disabled={transition?.state != "idle"}
                      >
                      Cancel
                      </button>
                    </span>
                    <button
                    id="updateSocialLink"
                    type="submit"
                    className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
                    disabled={!val || transition?.state != "idle"  ? true : !error ? false : true }
                    >
                      {transition?.state != "idle"  ? <BeatLoader color="#ffffff" className='px-0 py-0' /> :
                        "Update"}
                    </button>
                  </div>
                </div>

              </div>
            </div>
      </div>
    </Form>
                       
  )
}