import {
  Outlet,
  LiveReload,
  Scripts,
  Links,
  useCatch,
  useLocation,
} from '@remix-run/react'
import ErrorHandler from './components/error'
import tailwindStylesheetUrl from './styles/tailwind.css'
import HeaderSecondary from './components/Common/Header'

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
      <Scripts />
    </Document>
  )
}
function Document({ children }: any) {
  return (
    <html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang='en'
    >
      <head>
        <title>QuickLook.me</title>
        <meta
          name='description'
          content='Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.'
        />

        <Links />
      </head>
      <body className='flex h-full flex-col'>
        {children}
        <LiveReload />
      </body>
    </html>
  )
}
function Layout({ children }: any) {
  const Location = useLocation()

  return (
    <>
      {Location.pathname.includes('/login') ||
      Location.pathname.includes('/signup') ||
      Location.pathname.includes('/terms') ||
      Location.pathname.includes('/privacy') ||
      Location.pathname.includes('/forgot-password') ||
      Location.pathname.includes('/refund-policy') ||
      Location.pathname.includes('/successlogin') ? (
        <HeaderSecondary />
      ) : (
        <></>
      )}
      <div>{children}</div>
    </>
  )
}

export function CatchBoundary() {
  const caughtError = useCatch()

  if (caughtError.status) {
    return (
      <div>
        <ErrorHandler
          name={caughtError.statusText}
          status={caughtError.status}
        />
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
