import {
  FaceSmileIcon,
  CogIcon,
  CreditCardIcon,
  Bars2Icon,
  XCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { useLocation } from '@remix-run/react'
import { Dialog, Transition } from '@headlessui/react'

import { QUICKLABS_DOMAIN } from '~/utils/constants'

const navigation = [
  { name: 'Profile', icon: FaceSmileIcon, href: '/account/profile' },
  { name: 'License', icon: CreditCardIcon, href: '/account/license' },
  { name: 'Settings', icon: CogIcon, href: '/account/settings' },
  { name: 'Connect Apps', icon: ArrowPathIcon, href: '/account/connect-apps' },
]
const secondaryNavigation = [
  { name: 'Know More', href: `${QUICKLABS_DOMAIN}`, target: '_blank' },
  { name: 'Help Center', href: `${QUICKLABS_DOMAIN}/#faqs`, target: '_blank' },
  { name: 'Terms of Use', href: `${QUICKLABS_DOMAIN}/terms-of-use`, target: '_blank' },
  { name: 'Privacy Policy', href: `${QUICKLABS_DOMAIN}/privacy-policy`, target: '_blank' },
  { name: 'Refund Policy', href: `${QUICKLABS_DOMAIN}/refund-policy`, target: '_blank' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileSetting() {
  const Location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
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
              <div className="fixed inset-0" />
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
                <Dialog.Panel className="relative flex-1 flex flex-col pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-12 right-0 mt-7 px-4">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-8 w-8 focus:ring-inset rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="mt-8 flex-1 h-0 overflow-y-auto bg-white">
                    <div className="flex items-center flex-shrink-0 px-4 mt-12">
                      <h2 className="text-lg leading-6 font-medium text-gray-900">Account</h2>
                    </div>
                    <nav className="px-2 mt-3">
                      <div className="space-y-1 ml-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              Location.pathname.includes(item.href)
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 pr-9',
                              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                Location.pathname.includes(item.href)
                                  ? 'text-gray-500'
                                  : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6">
                        <div className="space-y-1 ml-2">
                          <h3
                            className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                            id="projects-headline"
                          >
                            SUPPORT
                          </h3>
                          <div
                            className="space-y-1"
                            role="group"
                            aria-labelledby="projects-headline"
                          >
                            {secondaryNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target={item.target}
                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                              >
                                <span className="truncate">{item.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* static sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col md:inset-y-0">
          <div className="md:w-[11rem] lg:w-64 flex flex-col flex-grow border-r font-inter border-white mt-8 bg-white overflow-y-auto ml-0 lg:ml-10">
            <div className="flex items-center flex-shrink-0 px-4">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Account</h2>
            </div>
            <div className="mt-3 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
                <div className="space-y-1 ml-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        Location.pathname.includes(item.href)
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          Location.pathname.includes(item.href)
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-1 ml-2">
                  <h3
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="projects-headline"
                  >
                    SUPPORT
                  </h3>
                  <div className="space-y-1" role="group" aria-labelledby="projects-headline">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="absolute z-50 top-0 flex-shrink-0 flex h-12">
          <button
            type="button"
            className="px-2 text-white focus:outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  )
}
