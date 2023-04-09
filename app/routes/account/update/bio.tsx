import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { commitSession, getSession } from '~/services/session.service.server'
import { updateUserBioDetails } from '~/services/user.service.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const session = await getSession(request.headers.get('Cookie'))

  const user = await getUser(request)

  let description = formData.get('description') as string
  let location = formData.get('location') as string
  let occupation = formData.get('occupation') as string
  let company = formData.get('company') as string
  let education = formData.get('education') as string

  const isUpdated = await updateUserBioDetails({
    about: description ?? user?.profileInfo?.bio,
    location: location ?? user?.profileInfo?.location,
    occupation: occupation ?? user?.profileInfo?.occupation,
    education: education ?? user?.profileInfo?.education,
    company: company ?? user?.profileInfo?.company,
    user,
  })

  session.flash('successUpdateBioMessage', `Your bio has been updated successfully.`)

  if (isUpdated) {
    return redirect('/account', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  }
}
