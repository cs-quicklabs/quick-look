import { LinksFunction } from '@remix-run/node'
import { Outlet, LiveReload, Link, Scripts, Links } from '@remix-run/react'
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
    </Document>
  )
}
function Document({ children, title }: any) {
  return (
    <html lang='en'>
      <head>
        <title>'QuickLook'</title>
        <Links />
      </head>
      <body>
        {process.env.Node_ENV === 'development' ? <LiveReload /> : null}

        {children}
      </body>
    </html>
  )
}
function Layout({ children }: any) {
  return (
    <div>
      <nav className='flex p-4 justify-between from-blue-300 via-teal-300 to-purple-300 bg-gradient-to-r'>
      </nav>
      <div>{children}</div>
    </div>
  )
}
export function ErrorBoundary({ error }: any) {
  console.log(error)
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
