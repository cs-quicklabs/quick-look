import { Link } from '@remix-run/react'
import logo from '../../../assets/images/logos/quicklook-icon.svg'

 const tokenerror= () => {

 return (
    <>
      
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white mb-72 mt-28'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <Link to='/' className='inline-flex'>
              <span className='sr-only'>Quicklook</span>
            </Link>
          </div>
          <div className='py-16'>
           <div className='flex items-center justify-center gap-2 mb-8'>
            <a href='/' className='flex items-center'>
              <img src={logo} alt='' className='mx-auto h-16 w-auto'></img>
            </a>
            <a href='/' className='text-lg font-[600]'>
              Quick<span className='text-blue-600'>Look</span>
            </a>
          </div>
            <div className='text-center'>
              
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Invalid token.
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                Please try sending the verfication link again.
              </p>
              <div className='mt-6'>
                <a
                  href='/'
                  className='text-base font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default tokenerror
