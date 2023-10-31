import { Link } from '@remix-run/react'
import logo from '../../../../assets/images/logos/quicklook-icon.svg'
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  if (user) {
    return redirect('/account')
  }
  return null
}

const tokenerror = () => {
  return (
    <>
      <div className="h-screen pt-16 pb-12 flex flex-col bg-gray-50">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="inline-flex">
              <span className="sr-only">Quick Bio</span>
            </Link>
          </div>
          <div className="py-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <a href="/" className="flex items-center">
                <img src={logo} alt="" className="mx-auto h-16 w-auto"></img>
              </a>
              <a href="/" className="text-lg font-[600]">
                Quick<span className="text-indigo-600">Bio</span>
              </a>
            </div>
            <div className="text-center">
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Invalid Token.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                The verification link seems invalid or it has expired. Please check the email for
                latest link and try again.
              </p>
              <div className="mt-6">
                <a href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default tokenerror
