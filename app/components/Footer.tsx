import { Link } from '@remix-run/react'
// import { Container } from '../components/Container'
import logo from '../../assets/images/logos/quicklook-icon.svg'

export function Footer() {
  return (
    <footer className='bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <div className='flex items-center justify-center gap-2'>
            <a href='/' className='flex items-center'>
              <img src={logo} alt='' className='mx-auto h-16 w-auto'></img>
            </a>
            <a href='/' className='text-lg font-medium'>
              QuickLook
            </a>
          </div>

          <nav className='mt-10 text-sm' aria-label='quick links'>
            <ul className='-my-1 flex justify-center space-x-6'>
              <li>
                {/* <Link to='#features'> */}
                <a
                  href='/#features'
                  className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                >
                  Features
                </a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to='#testimonials'> */}
                <a
                  href='/#testimonials'
                  className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                >
                  Testimonials
                </a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to='#pricing'> */}
                <a
                  href='/#pricing'
                  className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                >
                  Pricing
                </a>
                {/* </Link> */}
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
          <div className='flex space-x-6'>
            <a href='/terms'>
              <p className='group'>
                <span> Terms & Conditions</span>
              </p>
            </a>
            <a href='/privacy'>
              <p className='group'>
                <span> Privacy Policy</span>
              </p>
            </a>
            <a href='/refund-policy'>
              <p className='group'>
                <span> Refund Policy </span>
              </p>
            </a>
          </div>
          <p className='mt-6 text-sm text-slate-500 sm:mt-0'>
            Copyright @2022 Crownstack Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
