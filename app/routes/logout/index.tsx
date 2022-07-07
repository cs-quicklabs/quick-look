import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node'
import { logout } from '~/services/auth.service.server'

export const action: ActionFunction = async ({ request }) => {
  console.log('FOrmdata', request)

  return logout(request)
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}
