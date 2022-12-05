import tailwindStylesheetUrl from '../../../styles/tailwind.css'
import { Links } from '@remix-run/react'
import logo from '../../../../assets/images/logos/quicklook-icon.svg'
export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function PublishAccount() {
  return (
    <>
      <Links />
      <div className='flex flex-col bg-white h-screen overflow-hidden justify-center items-center text-center content-center'>
        <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-center items-center">
        <img src={logo} alt='' className='h-20 w-20' />
        </div>
      <div className='text-center py-2'>
        <h1 className='mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-4xl'>
          The account you are looking for is not yet published.
        </h1>
      </div>

      <a href="/" className="text-base text-indigo-500 hover:text-indigo-700 hover:underline" >
        Quicklook.me
      </a>
        
      </div>
    </>
  )
}
