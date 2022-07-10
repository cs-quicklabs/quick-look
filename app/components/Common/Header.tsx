import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { ButtonLink } from '../Button'

export default function HeaderSecondary({ children }: any) {
  const Location = useLocation()

  return (
    <header>
      <div className='bg-gray-800 font-inter h-[3rem]'>
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
                <img className='w-10 h-10' src={logo} alt='' />
                <span className='text-[1.25rem] pt-5 pb-5 font-extrabold text-white'>
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
                className='mr-0 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center  -mt-[12px] h-[2.3rem]'
              >
                Sign in to your Account
              </Link>
              
            ) : (
              <Link
                to='/signup'
                className='mr-0 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center -mt-[12px] h-[2.3rem]'
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
