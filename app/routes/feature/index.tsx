import {
  InboxIcon,
  AtSymbolIcon,
  LightBulbIcon,
  LinkIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline'
import { Children, ReactChildren } from 'react'
import { Link, Outlet } from 'react-router-dom'

const navigation = [
  {
    name: 'Email Signture',
    icon: AtSymbolIcon,
    to: 'signture',
    current: true,
  },
  {
    name: 'Spot Light Button',
    icon: LightBulbIcon,
    to: 'spotlight',

    current: false,
  },
  {
    name: 'Connect a Domain',
    icon: LinkIcon,
    to: 'domain',

    current: false,
  },
  {
    name: 'Testimonials',
    img: 'https://cdn-icons-png.flaticon.com/512/2438/2438002.png',
    to: 'testimonials',
    current: false,
  },
  {
    name: 'Contact Me',
    icon: InboxIcon,
    to: 'contactme',
    current: false,
  },
  { name: 'Portfolio', icon: BriefcaseIcon, to: 'portfolio', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Feature() {
  return (
    <SideBar>
      <div className='flex flex-col gap-12'>
        <div>
          <h1 className='text-xl text-center'>
            Create a portfolio of images and videos to showcase
            <br />
            you or your products or services.
          </h1>
        </div>

        <img
          src='https://miro.medium.com/max/1400/1*zBmPieDd4eXM2ZYlNm2sXg.png'
          alt=''
          className='lg:w-3/5 lg:ml-52'
        />
      </div>
    </SideBar>
  )
}

function SideBar({ children }: any) {
  return (
    <>
      <div className=' text-4xl text-center mt-10 mb-9 lg:ml-96 md:ml-48'>
        Features
      </div>
      <div className='flex'>
        <div className='flex flex-col flex-grow pt-5 pb-4 bg-white overflow-y-auto '>
          <div className='  flex-grow flex flex-col w-48 lg:ml-48 md:ml-0 '>
            <nav
              className='flex-1 px-2 bg-white space-y-1 border-gray-300 border-r'
              aria-label='Sidebar'
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`${item.to}`}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-8 text-sm font-medium rounded-md '
                  )}
                >
                  {item.name !== 'Testimonials' ? (
                    <item.icon
                      className={classNames(
                        'text-black',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                  ) : (
                    <img
                      className={classNames(
                        'text-black',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                      src={item.img}
                    />
                  )}
                  <span className='flex-1 text-sm'>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className='w-3/4 px-0'>{children}</div>
      </div>
    </>
  )
}
