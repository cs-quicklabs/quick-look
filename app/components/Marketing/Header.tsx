import logo from '../../../assets/images/logos/quicklook-icon.svg'

import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { ButtonLink } from '../Atoms/Button'
import { Container } from '../Atoms/Container'
import { Link } from '@remix-run/react'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link to="#features">
                    <span className="block w-full" onClick={() => close()}>
                      Features
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#testimonials">
                    <span className="block w-full" onClick={() => close()}>
                      Testimonials
                    </span>
                  </Link>
                </li>
                <li className="border-t border-slate-300/40 pt-4">
                  <Link to="/">
                    <span className="block w-full">Sign in</span>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header({ isloggedin }: any) {
  return (
    <header className="py-10">
      <Container className={undefined}>
        <nav className="relative z-50 text-sm font-inter">
          <ul className="flex items-center">
            <li>
              {' '}
              <a href="/#" className="flex items-center gap-2">
                <img src={logo} alt="hello" className="h-10 w-auto" />{' '}
                <span className="text-lg font-bold ">
                  Quick<span className="text-indigo-600">Bio</span>{' '}
                </span>{' '}
              </a>{' '}
            </li>
            <li className="ml-12 hidden md:block">
              <a
                href="#features"
                className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Features
              </a>
            </li>

            <li className="ml-auto hidden md:block">
              <a href="/">
                {isloggedin ? (
                  <span></span>
                ) : (
                  <p className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
                    Sign in
                  </p>
                )}
              </a>
            </li>
            <li className="ml-auto md:ml-8">
              <ButtonLink href="/auth/signup" color="blue" className={undefined}>
                <span>
                  Get Started<span className="hidden lg:inline"> For Free</span>
                </span>
              </ButtonLink>
            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
