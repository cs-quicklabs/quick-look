import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { commitSession, getSession } from '~/services/session.service.server'
import { addUpdateSocialLink } from '~/services/socialProfile.service.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const selectedSocial = formData.get('select_social') as string
  let selectedSocialLink = formData.get('addlink') as string
  let index = -1

  const session = await getSession(request.headers.get('Cookie'))

  if (selectedSocial == 'Facebook') {
    index = selectedSocialLink.search('facebook')
    selectedSocialLink = selectedSocialLink?.slice(index)
  }
  if (selectedSocial == 'Twitter') {
    index = selectedSocialLink.search('twitter')
    selectedSocialLink = selectedSocialLink?.slice(index)
  }
  if (selectedSocial == 'Youtube') {
    index = selectedSocialLink.search('youtube')
    selectedSocialLink = selectedSocialLink?.slice(index)
  }

  const user = (await getUser(request)) || undefined
  await addUpdateSocialLink(selectedSocial, selectedSocialLink, user)

  session.flash('successUpdateSocialMedia', `Your Profile has been updated successfully.`)
  return redirect('/account', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}
