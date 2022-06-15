import {
  InboxIcon,
  AtSymbolIcon,
  LightBulbIcon,
  LinkIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline'
import * as React from 'react'
// import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Feature() {
  return (
    <div className='flex flex-col gap-12 -mt-10'>
      <div>
        <h1 className='text-xl text-center'>
          Create a portfolio of images and videos to showcase
          <br />
          you or your products or services.
        </h1>
      </div>
      <div className='flex justify-center  items-center'>
        <img
          src='https://miro.medium.com/max/1400/1*zBmPieDd4eXM2ZYlNm2sXg.png'
          alt=''
          className='lg:w-3/5 ml-10'
        />
      </div>
    </div>
  )
}

export function SideBar({ children }: any) {
  const Location = useLocation()

  type NavItem = {
    name: string
    icon?: any
    to: string
    img?: any
    selected?: boolean
    list?: boolean
    class?: any
  }[]

  const navigation: NavItem = [
    {
      name: 'QuickLook.Me',
      icon: AtSymbolIcon,
      to: '/feature',
      list: true,
      class: 'ml-9',
    },
    {
      name: 'Email Signature',
      icon: AtSymbolIcon,
      to: '/feature/signature',
    },
    {
      name: 'Spot Light Button',
      icon: LightBulbIcon,
      to: '/feature/spotlight',
    },
    {
      name: 'Visit my Website',
      icon: LightBulbIcon,
      to: '/feature/visitmywebsite',
      list: true,
      class: 'ml-16',
    },
    {
      name: 'Lead Capture',
      icon: LightBulbIcon,
      to: '/feature/leadcapture',
      list: true,

      class: 'ml-16',
    },
    {
      name: 'Appointment Scheduling',
      icon: LightBulbIcon,
      to: '/feature/scheduling',

      list: true,

      class: 'ml-16',
    },
    {
      name: 'Connect a Domain',
      icon: LinkIcon,
      to: '/feature/domain',
    },
    {
      name: 'Custom Search Result',
      icon: LightBulbIcon,
      to: '/feature/customsearchresults',

      list: true,

      class: 'ml-16',
    },

    {
      name: 'Testimonials',
      img: 'https://cdn-icons-png.flaticon.com/512/2438/2438002.png',

      to: '/feature/testimonials',
    },
    {
      name: 'Contact Me',
      icon: InboxIcon,

      to: '/feature/contactme',
    },
    {
      name: 'Portfolio',
      icon: BriefcaseIcon,

      to: '/feature/portfolio',
    },
  ]

  return (
    <div className=''>
      <div className=' text-4xl text-center mt-12 '>Features</div>
      <div className='flex flex-col px-32 pt-6'>
        <div className='flex border  '>
          <div className='flex flex-col pt-5 pb-4 bg-neutral-100 w-max'>
            <div className='flex flex-col pr-5'>
              <nav className='px-2 space-y-1 pl-6'>
                {navigation.map((item) => (
                  <Link
                    id={item.name}
                    key={item.name}
                    to={`${item.to}`}
                    className={classNames(
                      `flex items-center px-2 py-6 text-sm font-semibold rounded-md transition ease-in-out  hover:translate-x-4 hover:scale-110 hover:bg-sky-600 duration-300 h-2 hover:text-white w-44 ${
                        item.class
                      }  ${
                        Location.pathname === item.to
                          ? 'bg-sky-600 text-white'
                          : ''
                      }`
                    )}
                  >
                    {item.list === true ? (
                      <span
                        className='flex-1 text-sm gap-4'
                        // style={{ marginLeft: 60 }}
                      >
                        {item.name}
                      </span>
                    ) : item.name !== 'Testimonials' ? (
                      <>
                        <item.icon
                          className='h-6 w-6 mr-3 flex-shrink-0'
                          aria-hidden='true'
                        />
                        <span className='flex-1 text-sm gap-4'>
                          {item.name}
                        </span>
                      </>
                    ) : (
                      <>
                        <img
                          className={classNames(
                            'text-black',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden='true'
                          src={item.img}
                          alt='img'
                        />
                        <span className='flex-1 text-sm gap-4'>
                          {item.name}
                        </span>
                      </>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className='w-max flex justify-center items-center border-l'>
            {children}
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center mb-16'>
          <h1 className='text-2xl mt-12'>Ready to unlock more features?</h1>
          <button className='text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-4 text-white p-2 rounded-md font-medium gap-4 w-40'>
            Compare Plans
          </button>
        </div>
      </div>
    </div>
  )
}
