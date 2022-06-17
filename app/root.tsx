import {
  Outlet,
  LiveReload,
  Link,
  Scripts,
  Links,
  useCatch,
} from '@remix-run/react'
import ErrorHandler from './components/error'
import Footer from './Footer'
import tailwindStylesheetUrl from './styles/tailwind.css'

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
        <Footer />
      </Layout>
      <Scripts />
    </Document>
  )
}
function Document({ children }: any) {
  return (
    <html lang='en'>
      <head>
        <title>QuickLook</title>
        <Links />
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  )
}
function Layout({ children }: any) {
  return (
    <>
      <header className='relative'>
        <div className='bg-gray-800 pt-6'>
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
                  <span className='text-2xl font-semibold text-white'>
                    QuickLook.me
                  </span>
                </Link>
              </div>
            </div>
            <div className='hidden md:flex md:items-center md:space-x-2'>
              <Link
                to='/signup'
                className='inline-block py-3 px-4 text-xl text-center font-medium text-white'
              >
                Get your free page
              </Link>
              <Link
                to='/feature'
                className='inline-block py-3 px-4 text-xl text-center font-medium text-white'
              >
                Features
              </Link>
              <Link
                to='/pricing'
                className='inline-block py-3 px-4 text-xl text-center font-medium text-white'
              >
                Pricing
              </Link>
              <Link
                to='/login'
                className='inline-block py-3 px-4 text-xl text-center font-medium text-white'
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div>{children}</div>
    </>
  )
}

export function CatchBoundary() {
  const caughtError = useCatch()

  if (caughtError.status === 404) {
    return (
      <div>
        <p>
          <ErrorHandler status= {caughtError.status} name= {caughtError.statusText} />
        </p>
      </div>
    )
  }
  throw new Error('Not Found!')
}

export function ErrorBoundary({ error }: any) {
  return (
    <Document>
      <Layout>
        <div className='bg-red-200'>
          <h1 className='text-5xl'>Error</h1>
          <p className='font-sans text-xl'>{error.message}</p>
        </div>
      </Layout>
    </Document>
  )
}
