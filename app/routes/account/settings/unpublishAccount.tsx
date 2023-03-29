import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { publishToggle } from '~/services/user.service.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  await publishToggle(user)
  return redirect('/account/settings')
}
