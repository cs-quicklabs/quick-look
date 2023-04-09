import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { publishToggle } from '~/services/user.service.server'

export const loader: LoaderFunction = async ({ request }) => {  
  await publishToggle(request)
  return redirect('/account/settings')
}
