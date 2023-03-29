import type { LoaderFunction } from '@remix-run/node'
import { getUser, logout } from '~/services/auth.service.server'
import { deleteUser } from '~/services/user.service.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  await deleteUser(user)
  return await logout(request)
}
