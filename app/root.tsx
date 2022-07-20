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
      <Layout >
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
       
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap'
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet"></link>
        <Links />
      </head>
      <body className='flex h-screen w-screen flex-col antialiased min-h-full'>
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
      {Location.pathname.includes('/auth/login') ||
      Location.pathname.includes('/auth/signup') ||
      Location.pathname.includes('/general/terms') ||
      Location.pathname.includes('/general/privacy') ||
      Location.pathname.includes('/auth/forgot-password') ||
      Location.pathname.includes('/general/refund-policy') ||
      Location.pathname.includes('successlogin') ||
      Location.pathname.includes('/auth/password') ||
      Location.pathname.includes('/confirm/password') ||
      Location.pathname.includes('/auth/receive-email') ||
      Location.pathname.includes('/confirm/email') ? (
        <HeaderSecondary />
      ) : (
        <></>
      )}
      <div className={`${Location.pathname.includes('/auth/login') ||
      
      Location.pathname.includes('/forgot-password')  ||
      Location.pathname.includes('/successlogin') ||
      Location.pathname.includes('/auth/password') ||
      Location.pathname.includes('/auth/tokenerror') || 
      Location.pathname.includes('/confirm/password') ||
      Location.pathname.includes('/auth/receive-email') ||
      Location.pathname.includes('/confirm/email')? 'overflow-hidden' : ''} `}>{children}</div>
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
