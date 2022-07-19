import { Fragment, useState } from 'react'
import { Popover,Dialog, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'
import DashboardBio from './DashboardBio'

const navigationFirst = [
  { name: 'Design Templates', subheading: 'Pick your design Template', href: '#' },
  { name: 'Bio', subheading: 'Introduction, Work and Education Details', href: '#' },
  { name: 'Social Links', subheading: 'Links to Social Profile', href: '#' },
  { name: 'Images', subheading: 'Update Images in your templates', href: '#' },
]

const navigationSecond = [
  { name: 'Spotlight Button', subheading: 'Add a call to action button on profile', href: '#' },
  { name: 'Add Video', subheading: 'Add a video link to your profile', href: '#' },
  { name: 'Add Testimonials ', subheading: 'Add testimonials to your profile', href: '#' },
  { name: 'Add Portfolio ', subheading: 'Add Portfolio to your Profile ', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDashboard, setshowDashboard] = useState(false);
  const Location = useLocation();

  return (
    <>
      <div className=''>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto mt-12">
                    <div className="flex-shrink-0 flex p-4">
                    <a href="#" className="flex-shrink-0 group block">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                        </div>
                      </div>
                    </a>
                  </div>
                    <nav className="mt-5 px-2 space-y-1">
                      {navigationFirst.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            Location.pathname.includes(item.href)
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            ''
                          )}
                        >
                          <p className='group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
                            {item.name}
                          </p>
                          
                          <p className='px-2 py-2 text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                          {item.subheading}
                          </p>
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-96 md:flex-col md:fixed md:inset-y-0 mt-12 font-inter">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-3 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex py-1 px-4">
                <a href="#" className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
            </div>
            <div>
              <div className='text-xs mt-2 font-medium text-gray-500 group-hover:text-gray-700 pl-4 border-t border-gray-200 bg-gray-50 w-full leading-5'>
                Basic Profile
              </div>
              {/* <Popover className=""> */}
                {/* <Popover.Button className=""> */}
                  <nav className="flex-1 bg-white ">
                    {navigationFirst.map((item) => (
                      <div
                        key={item.name}
                        // href={item.href}
                        onClick={() =>{
                          item.name==='Bio' &&
                          setshowDashboard(true) }}
                        className={classNames(
                          Location.pathname.includes(item.href) ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-600 ',
                          ''
                        )}
                      >
                        <div className='flex justify-between border-t border-gray-200 px-5 py-4'>
                          <div className=''>
                            <p className='group flex bg-white items-center leading-5 px-2 text-sm font-medium rounded-md'>
                              {item.name}
                            </p>
                            
                            <p className='px-2 text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                            {item.subheading}
                            </p>
                          </div> 
                          <div className='text-gray-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </nav>
                {/* </Popover.Button> */}
                {/* <Popover.Panel className="mt-20">
                  {<DashboardBio />}
                </Popover.Panel> */}
              {/* </Popover> */}
              {showDashboard?
              <DashboardBio setshowDashboard={setshowDashboard} />:
              null
              }
              
              </div>

              <div>
              <div className='text-xs font-medium text-gray-500 group-hover:text-gray-700 pl-4 border-t border-gray-200 bg-gray-50 w-full leading-5 mt-0'>
              Advanced Features
            </div>
              
            <nav className="flex-1 bg-white ">
                {navigationSecond.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      Location.pathname.includes(item.href) ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-600',
                      ''
                    )}
                  >
                    <div className='flex justify-between border-t border-gray-200 px-5 py-4'>
                      <div className=''>
                        <p className='group flex bg-white items-center px-2 text-sm font-medium rounded-md'>
                          {item.name}
                        </p>
                        
                        <p className='px-2 text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                        {item.subheading}
                        </p>
                      </div> 
                      <div className='text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
