import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import DefaultProfileIcon from '../../../assets/images/profile.png';



export default function DropDown({loaderData,setIsOpen}:any) {

 
  return (
    <div >
      <Menu as="div">
        
          <Menu.Button as='div'>
            <img
                  width={32}
                  height={32}
                  id="OpenProfile"
                  data-cy="profile-menu"
                  
                  title="Open Profile"
                  loading="eager"
                  className="w-8 h-8 rounded-full"
                   src={!loaderData?.profileImage?.secondaryImage ? DefaultProfileIcon : loaderData?.profileImage?.secondaryImage}
                  // onClick={() => toggleSetting()}
                />
            
          </Menu.Button>
        
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mr-8 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a 
                  href="/account/profile"

                    className={`${
                      active ? 'bg-gray-100 text-gray-700' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                  
                   Profile Settings
                  </a>
                )}
                 
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button  data-cy="sign-out"
                  onClick={() => setIsOpen(true)}

                     className={`${
                      active ? 'bg-gray-100 text-gray-700' : 'text-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Sign out
                  </button>
                )}
               
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

