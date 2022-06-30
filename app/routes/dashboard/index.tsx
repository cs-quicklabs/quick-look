import { Link } from "react-router-dom";
import logo from '../../images/logos/quicklook-icon.svg';

export default function Dashboard() {
  
  return (
    <>
      <header className='relative'>
        <div className='bg-gray-800 pt-2 pb-2'>
          <nav
            className='relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6'
            aria-label='Global'
          >
            <div className='flex flex-1 items-center'>
              <div className='flex w-full items-center justify-between md:w-auto'>
                <Link
                  to='/'
                  className='flex items-center justify-center space-x-2'
                >
                  <img className="h-8 w-auto sm:h-10" src={logo} alt=""/>
                  <span className='text-2xl font-bold text-white'>
                    QuickLook.me
                  </span>
                </Link>
              </div>
            </div>
            <div className='hidden md:flex md:items-center md:space-x-2'>
              <Link
                to='/login'
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center'
              >
                Sign out
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}