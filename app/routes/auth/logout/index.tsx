import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { logout } from '~/services/auth.service.server'

export const action: ActionFunction = async ({ request }) => {
  return logout(request)
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}
