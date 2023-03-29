import type { User } from '@prisma/client'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { addUpdateVideo } from '~/services/userVideo.service.server'
import { getVideoSource } from '~/utils/url.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) as User

  const form = await request.formData()

  let sourceKey
  const videoUrl = (await form.get('videoLink')) as string
  const videoSource = await getVideoSource(videoUrl)

  if (videoSource) {
    sourceKey = 'youtube'
  } else {
    sourceKey = 'facebook'
  }
  if (videoUrl) {
    await addUpdateVideo(videoUrl, sourceKey, user)
  }

  return redirect('/account')
}
