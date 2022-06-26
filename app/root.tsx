import { Outlet, LiveReload, Scripts, Links, useCatch } from '@remix-run/react'
import ErrorHandler from './components/error'
import tailwindStylesheetUrl from './styles/tailwind.css'

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
        <title>TaxPal - Accounting made simple for small businesses</title>
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
  return <div>{children}</div>
}

export function CatchBoundary() {
  const caughtError = useCatch()

  if (caughtError.status === 404) {
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
