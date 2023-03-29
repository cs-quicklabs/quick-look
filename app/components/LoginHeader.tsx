import { Link } from '@remix-run/react'
import { useState } from 'react'
import Modal from '~/components/Common/ConfirmModal'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'

import logo from '../../assets/images/logos/quicklook-icon.svg'

export function LoginHeader() {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="h-[3rem] bg-gray-800">
        <nav className="flex items-center justify-between px-8" aria-label="Global">
          <div className="flex w-full items-center justify-between md:w-auto ">
            <Link to="/" className="flex items-center justify-center gap-4 -mt-[12px]">
              <img className="w-auto h-9 mt-[8px]" src={logo} alt="" />

              <span className="text-xl pt-5 pb-3 font-extrabold text-white">
                QuickLook.me/username
              </span>
            </Link>
          </div>

          <div className="flex gap-6 items-center justify-center text-center">
            <BellIcon className="text-gray-400 h-6 w-auto mb-1" />

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                <img src={logo} alt="" className="h-8 w-auto" />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Profile Settings
                        </span>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                          )}
                          onClick={() => setIsOpen(true)}
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
        </nav>
      </header>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </>
  )
}
