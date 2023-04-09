import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'

import { deleteSupportBanner } from '~/services/supportbanner.service.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) || undefined
  await deleteSupportBanner(user)

  return redirect('/account')
}
