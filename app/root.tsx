import {
  Outlet,
  LiveReload,
  Scripts,
  Links,
  useCatch,
  useLocation,
  useLoaderData,
} from '@remix-run/react'
import ErrorHandler from './components/error'
import tailwindStylesheetUrl from './styles/tailwind.css'
import LightGallery from './styles/lightgallery.css'
import HeaderSecondary from './components/Common/Header'
import { json } from '@remix-run/node'
export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl },
  { rel: 'stylesheet', href: LightGallery }]
}

export async function loader() {
  return json({
    ENV: {
      REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY,
    },
  });
}

export default function App() {
  const data = useLoaderData();


  return (
    <Document>
      <Layout >
        <Outlet />
      </Layout>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(
            data.ENV
          )}`,
        }}
      />
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
        <script defer data-domain="quicklook.me" src="https://plausible.io/js/script.js"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Introduction made simple with just one link."/>
        <meta name="description" content="Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.quicklook.me/"/>
        <meta property="og:title" content="Introduction made simple with just one link."/>
        <meta property="og:description" content="Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together."/>
        <meta property="og:image" content="https://www.quicklook.me/build/_assets/Menus-NEYOTUUT.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.quicklook.me/"/>
        <meta property="twitter:title" content="Introduction made simple with just one link."/>
        <meta property="twitter:description" content="Introduction made simple with just one link. Describe yourself with just one link which connects all your social profiles together."/>
        <meta property="twitter:image" content="https://www.quicklook.me/build/_assets/Menus-NEYOTUUT.png"/>

        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
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
        Location.pathname.includes('/auth/forgot-password') ||
        Location.pathname.includes('successlogin') ||
        Location.pathname.includes('/auth/password') ||
        Location.pathname.includes('/confirm/password') ||
        Location.pathname.includes('/auth/receive-email') ||
        Location.pathname.includes('/confirm/email') ? (
        <HeaderSecondary />
      ) : (
        <></>
      )}
      <div className={`${
        Location.pathname.includes('/forgot-password') ||
        Location.pathname.includes('/successlogin') ||
        Location.pathname.includes('/auth/password') ||
        Location.pathname.includes('/auth/tokenerror') ||
        Location.pathname.includes('/confirm/password') ||
        Location.pathname.includes('/auth/receive-email') ||
        Location.pathname.includes('/confirm/email') ? 'overflow-hidden' : 'overflow-x-hidden'} `}>{children}</div>
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
