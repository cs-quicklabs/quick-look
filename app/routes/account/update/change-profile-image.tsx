import type { User } from '@prisma/client'
import type { ActionFunction } from '@remix-run/node'
import { redirect, unstable_parseMultipartFormData } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import {
  addSecondaryImage,
  removeSecondaryImage,
} from '~/services/profileImage.service.server'
import { digitalOceanUploadHandler } from '~/utils/uploadHandler.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) as User

  const form = await unstable_parseMultipartFormData(
    request,
    digitalOceanUploadHandler
  )

  const changeSecondaryImage = form.get('changeSecondaryImage') as string

  if (changeSecondaryImage) {
    await removeSecondaryImage(user)
    await addSecondaryImage(changeSecondaryImage, user)
  }

  return redirect('/account')
}
