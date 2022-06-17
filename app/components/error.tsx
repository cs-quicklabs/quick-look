import { customError } from "~/types/error";
import tailwindStylesheetUrl from '../styles/tailwind.css';
import {
  Link,
  Links
} from '@remix-run/react'
import Footer from "~/Footer";

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function ErrorHandler({ name, status }: customError) {

  return (
    <> 
      <Links />
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white mb-72 mt-28">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="inline-flex">
              <span className="sr-only">QuickLook</span>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-900 hover:text-gray-600 uppercase tracking-wide">{status} error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link to="/" className="text-base font-bold text-blue-900 hover:text-gray-600">Try Again<span aria-hidden="true" onClick={() => window.location.reload()}> &rarr;</span></Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}