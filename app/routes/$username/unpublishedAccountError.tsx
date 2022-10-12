import tailwindStylesheetUrl from '../styles/tailwind.css'
import { Link, Links } from '@remix-run/react'
import logo from '../../assets/images/logos/quicklook-icon.svg'

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function PublishAccount() {
  return (
    <>
      <Links />
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white mb-72 mt-28'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <Link to='/' className='inline-flex'>
              <span className='sr-only'>Quicklook</span>
            </Link>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Your account is not published yet. Please publish your account so that anyone can visit your profile.
              </h1>
              <div className='flex items-center justify-center'>
              <button
              // ref='/account/settings/'
                  type="submit"
                  className={`group relative w-[22rem] flex items-center justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white leading-5 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8`}
                >

                  <span className='absolute left-0 inset-y-0 flex items-center pl-[0.5rem] pt-auto'>
                  <img className='h-6 w-6 text-indigo-500 group-hover:text-indigo-400' src={logo}  aria-hidden='true' alt='' />
                  </span>
                  Publish account

                </button>
              </div>
             
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
