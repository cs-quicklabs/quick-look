import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { ButtonLink } from '../Button'

export default function HeaderSecondary({ children }: any) {
  const Location = useLocation()

  return (
    <header className='h-12 font-inter'>
      <div className='bg-gray-800'>
        <nav
          className='flex items-center justify-between px-8'
          aria-label='Global'
        >
          <div className='flex flex-1 items-center '>
            <div className='flex w-full items-center justify-between md:w-auto '>
              <Link
                to='/'
                className='flex items-center justify-center gap-6 -mt-[12px]'
              >
                <img className='w-8 h-8 mt-2.5 ml-3' src={logo} alt='' />
                <span className='text-2xl pt-5 pb-3 font-extrabold text-white'>
                  QuickLook.me
                </span>
              </Link>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-2 mr-6 '>
            {Location.pathname.includes('/signup') ||
            Location.pathname.includes('/forgot-password') ? (
              <Link
                to='/login'
                className='h-8 mb-1 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded shadow-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center group py-2.5 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  hover:text-slate-100  active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'
              >
                Sign in to your Account
              </Link>
              
            ) : (
              <Link
                to='/signup'
                className='h-8 mb-1 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded shadow-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center group py-2.5 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  hover:text-slate-100  active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'
              >
                Get Started For Free
              </Link>
              
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
