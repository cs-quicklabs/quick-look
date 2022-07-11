import { LoaderFunction, redirect } from '@remix-run/node'
import { json } from '@remix-run/node'
import { createUserSession, getUser } from '~/services/auth.service.server'
import {
  deletePasswordResetLink,
  verifyResetPasswordLink,
} from '~/services/password.service.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await getUser(request)
  const verified = await verifyResetPasswordLink(params.token as string, user?.id as string)

  if (verified) {
    return await createUserSession(user?.id as string, ' /password')
  }
  return redirect('tokenerror')
}
