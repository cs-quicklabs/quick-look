import { useLocation } from '@remix-run/react'
import logo from '../../../assets/images/logos/quicklook-icon.svg'

export default function HeaderSecondary() {
  const Location = useLocation()

  return (
    <>
      <header className="h-[3rem] bg-gray-800">
        <nav
          className="flex items-center justify-between px-8"
          aria-label="Global"
        >
          <div className="flex w-full items-center justify-between md:w-auto ">
            <a
              href="/"
              className="flex items-center justify-center gap-4 -mt-[12px]"
            >
              <img className="w-auto h-9 mt-[8px]" src={logo} alt="" />

              <span className="text-xl pt-5 pb-3 font-extrabold text-white">
                QuickLook.me
              </span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2 mr-6 ">
            {Location.pathname.includes('/auth/signup') ||
            Location.pathname.includes('/forgot-password') ? (
              <a
                href="/auth/login"
                className="h-8 mb-1 font-[500] whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 text-center group py-2.5 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  hover:text-slate-100  active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
              >
                Sign in to your Account
              </a>
            ) : (
              <a
                href="/auth/signup"
                className="h-8 mb-1 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded shadow-sm font-[500] text-white bg-indigo-600 hover:bg-indigo-700 text-center group py-2.5 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  hover:text-slate-100  active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
              >
                Get Started For Free
              </a>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}
