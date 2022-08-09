import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'
import SelectedSocialLinks from '../Common/SelectedSocialLinks'

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

  var socialLinks = [
  { id: 1, name: 'Facebook' },
  { id: 2, name: 'Twitter' },
  { id: 3, name: 'Youtube' },
]


export default function EditSocialProfile({loaderData, setShowEditProfile, setshowSocialLinks, clickedLink,mode}:any) {
const [val, setVal] = useState<string>(clickedLink?.email)
const [query, setQuery] = useState('')
const [selectedEditSocialLinks, setSelectedEditSocialLinks] = useState(socialLinks?.filter((link) =>
    link.name === clickedLink.name  
    )[0]
  )
  
   const Onclose = () => {
   
    if(mode === 'desktop'){
   setShowEditProfile(false)
    }
    if(mode === 'mobile'){
   
    }
 
  }

  const filteredSelectedSocialLink =
    query === ''
      ? socialLinks
      : socialLinks.filter((links) => {
          return links.name.toLowerCase().includes(query.toLowerCase())
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
                  <form method="post">
                  <div className={`flex h-full flex-col bg-white border-r  border-gray-200 overflow-y-auto ${mode === 'mobile' ? 'w-[16rem] xl:w-full' :'w-full md:max-w-xs lg:max-w-md'}`}>
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
                      <p className={`text-sm leading-5 font-normal text-gray-500  ${mode==='mobile' ?"px-[1rem] xl:px-0" : 'px-12 lg:px-0'}`}>
                        Please add social links by clicking on button below
                      </p>
                      <button
                        // onClick={() => toggleSetting()}
                        type="button"
                        className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium leading-5 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Add Social Profile
                      </button>
                    </div>

                    <div className='mt-10'>
                      <SelectedSocialLinks setshowSocialLinks={setshowSocialLinks} clickedLink={clickedLink} />
                    </div>

                    <div className='pl-3 pr-3.5 mt-6'>
                      <div>
                        <Combobox as="div" value={selectedEditSocialLinks} onChange={setSelectedEditSocialLinks}>
                          <form action="/account/update/socialProfile" method="post">
                          <Combobox.Label className="block text-sm font-medium text-gray-700">
                            Edit Social Profile
                          </Combobox.Label>
                          <div className="relative mt-1">
                            <Combobox.Input
                              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                              onChange={() => {} }
                              value={clickedLink.name}
                              disabled
                              name="edit_social_links"
                              displayValue={() => clickedLink?.name}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                              <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {/* {filteredSelectedSocialLink.length > 0 && (
                              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredSelectedSocialLink.map((links) => (
                                  <Combobox.Option
                                    key={links.id}
                                    value={links}
                                    disabled
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
                            )} */}
                          </div>
                          </form>
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
                            // placeholder={clickedLink.email}
                            value={val}
                            onChange={(e:any) => setVal(e.target.value)}
                            name="editlink"
                            id="editlink"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-500"
                          />
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
                        type="submit"
                        className="ml-4 mr-2 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Update
                      </button>
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
