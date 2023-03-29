import logo from '../../assets/images/logos/quicklook-icon.svg'

import { Container } from '../components/Container'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className={undefined}>
        <div className="py-16">
          <div className="flex items-center justify-center gap-2">
            <a href="/" className="flex items-center">
              <img src={logo} alt="" className="mx-auto h-10 w-auto"></img>
            </a>
            <a href="/" className="text-lg font-bold">
              Quick<span className="text-indigo-600">Look</span>
            </a>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                href="/#features"
                className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Features
              </a>
              {/* <a href="/#testimonials" className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Testimonials</a> */}
              <a
                href="/#pricing"
                className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Pricing
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex md:space-x-6 space-x-0 text-sm ">
            <a
              href="/general/terms"
              className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              Terms & Conditions
            </a>
            <a
              href="/general/privacy"
              className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              Privacy Policy
            </a>
            <a
              href="/general/refund-policy"
              className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              Refund Policy
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright @2023 Crownstack Technologies. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
