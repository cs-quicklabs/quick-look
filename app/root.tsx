import { Outlet, LiveReload, Scripts, Links, useCatch } from '@remix-run/react'
import ErrorHandler from './components/error'

import tailwindStylesheetUrl from './styles/tailwind.css'
import { useLocation } from 'react-router-dom'

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function App() {
  const Location = useLocation()
  console.log(Location)

  return (
    <Document>
      <Outlet />

      <Scripts />
    </Document>
  )
}
function Document({ children }: any) {
  return (
    <html
      lang='en'
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    >
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
      <div className='bg-red-200'>
        <h1 className='text-5xl'>Error</h1>
        <p className='font-sans text-xl'>{error.message}</p>
      </div>
    </Document>
  )
}
