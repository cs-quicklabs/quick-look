import { useState } from 'react'
import Modal from '~/components/Common/ConfirmModal'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import DefaultProfileIcon from '../../../assets/images/profile.png'
import DropDown from '../DropDown/DropDown'

export default function DashboardHeader({ username, loaderData }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="h-[3rem] bg-gray-800 sticky top-0 z-50">
        <nav className="flex items-center justify-between px-3 md:px-8" aria-label="Global">
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center md:w-auto">
              <a href="/account" className="flex items-center justify-center gap-4">
                <img
                  className="hidden lg:block pb-0 lg:w-auto lg:h-9 md:mt-0 lg:pt-0 sm:pb-0"
                  src={logo}
                  alt=""
                />
                <span className="w-max block font-base md:ml-3 lg:ml-0 sm:text-xl pt-2 pl-9 md:pl-0 sm:pt-2 sm:pb-1.5 sm:font-extrabold text-white">
                  Quicklook.me/{username}
                </span>
              </a>
              <a className="cursor-pointer" href={`/${username}`} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="block h-6 w-6 text-white ml-4 mb-2 mt-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:mr-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <div>
            <div>
              <button
                type="button"
                className="bg-gray-800 flex flex-col justify-center items-center text-sm rounded-full focus:outline-none"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                {/* mt-2 pb-1 w-auto h-9 md:mt-0 sm:pt-0 sm:pb-0 */}

                <DropDown
                  setIsOpen={setIsOpen}
                  loaderData={loaderData}
                  DefaultProfileIcon={DefaultProfileIcon}
                />
                <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
