import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import ExistingSocialLinks from '../Common/ExistingSocialLinks'

import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'



function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

  var socialLinks = [
  { id: 1, name: 'Facebook' },
  { id: 2, name: 'Twitter' },
  { id: 3, name: 'Youtube' },
]
   
export default function CreateProfile({setshowCreateProfile, setshowSocialLinks,mode, loaderData}:any) {

const [value, setValue] = useState('')

const [error, setError] = useState('')
const [selectedSocialLinks, setSelectedSocialLinks] = useState(socialLinks[0])
  const sociallink = selectedSocialLinks?.name?.toLowerCase()

let fbRegEx:any = sociallink === 'facebook' ? /^(https?:\/\/)?((w{3}\.)?)facebook.com\/./gm : sociallink === 'twitter' ? /^(https?:\/\/)?((w{3}\.)?)twitter.com\/./gm :  sociallink === 'youtube' ? /^(https?:\/\/)?((w{3}\.)?)youtube.com\/./gm :''
let whiteSpaceRegex = /^\S*$/
const regexCheck = (fbRegEx:any,value:any,whiteSpaceRegex:any)=>{
  if(value === ''){
 return setError('')}
if(!fbRegEx.test(value)){
  return setError('Please enter a valid link.')
 } if(!whiteSpaceRegex.test(value)){
  return setError('White space not allowed.')
 }
 else {
 return setError('')
}}

const handleChange = (e:any)=>{
 setValue(e.target.value)
regexCheck(fbRegEx,e.target.value,whiteSpaceRegex)
}


  useEffect(() => {
    loaderData;
    regexCheck(fbRegEx,value,whiteSpaceRegex)
  }, [loaderData,selectedSocialLinks])
  const [query, setQuery] = useState('')
 

  const Onclose = () => {
   
    if(mode === 'desktop'){
   setshowCreateProfile(false)
    }
    if(mode === 'mobile'){
   
    }
 
  }
  


  const filteredSelectedSocialLink =
    query === ''
      ? socialLinks
      : socialLinks.filter(links => {
          return links?.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={Onclose}>
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
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form action='account/add/socialProfile' method="post" className='h-screen' >
                    <div className="flex h-full flex-col bg-white border-r w-full md:max-w-xs lg:max-w-md border-gray-200 overflow-y-auto">
                      <div className="bg-gray-50 py-6 px-4">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium leading-7 text-gray-900">
                            Add Social Profile Links
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                              onClick={() => setshowCreateProfile(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon onClick={() => setshowCreateProfile(false)} className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="pt-1 pr-2">
                          <p className="text-sm leading-5 font-normal text-gray-500">
                          Select social profile links which you want to share on your profile
                          </p>
                        </div>
                      </div>
                      <div className='pl-2.5 pr-5 mt-6'>
                        <div>
                          
                       <Combobox as="div" value={selectedSocialLinks} onChange={setSelectedSocialLinks}>
                          <Combobox.Label className="block text-sm font-medium text-gray-700">Select Social Profile</Combobox.Label>
                          <div className="relative mt-1">
                            <Combobox.Input
                              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                              onChange={(event) => setQuery(event.target.value)}
                              displayValue={(links:any) => links?.name}
                              name='select_social'
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                              <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredSelectedSocialLink.length > 0 && (
                              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredSelectedSocialLink.map((links) => (
                                  <Combobox.Option
                                    key={links.id}
                                    value={links}
                                    className={({ active }) =>
                                      classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                      )
                                    }
                                  >
                                    {({ active, selected }) => (
                                      <>
                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{links.name}</span>
                                        
                                        

                                        {selected && (
                                          <span
                                            className={classNames(
                                              'absolute inset-y-0 right-0 flex items-center pr-4',
                                              active ? 'text-white' : 'text-indigo-600'
                                            )}
                                          >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </Combobox.Option>
                                ))}
                              </Combobox.Options>
                            )}
                          </div>
                        
                          
                        </Combobox>
                        </div>
                        <div className='mt-5'>
                          <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                            {' '}
                            Add Link{' '}
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                             placeholder={`${selectedSocialLinks.name}.com/username`}
                              name="addlink"
                              id="addlink"
                              value={value}
                              onChange={handleChange}
                              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-500 ${error ? 'border border-red-600 focus:border-red-500 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'}`}
                              
                            />
                          <div className={`text-red-600 text-sm`}>{error}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-shrink-0 justify-end px-4 pb-2 mt-7">
                        <div >
                          <button
                            type="button"
                            className="rounded-md mb-4 border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 leading-5"
                            onClick={() => {
                              setshowCreateProfile(false);
                              setshowSocialLinks(true);
                              
                            }}
                          >
                            
                            Cancel
                          </button>
                        </div>
                        
                        <button
                          type="submit"
                          className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700" 
                          disabled={!value  ? true : !error ? false : true }
                        >
                          Add Profile
                        </button>
                      </div>

                      <div className='mt-10'>
                        <ExistingSocialLinks  loaderData={loaderData} setshowSocialLinks={setshowSocialLinks} mode={mode}/>
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
