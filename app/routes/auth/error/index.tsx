import tailwindcss from '../../../styles/tailwind.css'
import { Links } from '@remix-run/react'
import { ButtonLink } from '../../../components/Button'
import logo from '../../../../assets/images/logos/quicklook-icon.svg'

export function links() {
  return [{ rel: 'stylesheet', href: tailwindcss }]
}

export default function PublishAccount() {
  return (
    <>
      <Links />
      <div className="flex flex-col bg-white h-screen overflow-hidden justify-center items-center text-center content-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-center items-center">
          <img src={logo} alt="" className="h-20 w-20" />
        </div>
        <div className="text-center p-4">
          <h1 className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-3xl">
            The account you are looking for has either been unpublished or removed.
          </h1>
          <h3 className="mt-2 text-xl text-gray-900 tracking-tight sm:text-xl">
            If you are account owner, please login to your account and check your settings.
          </h3>
        </div>
        <ButtonLink href="/" color="blue" className="">
          Go to Home Page
        </ButtonLink>
      </div>
    </>
  )
}
