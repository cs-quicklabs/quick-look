import type { User } from '@prisma/client'
import type { ActionFunction } from '@remix-run/node'
import { redirect, unstable_parseMultipartFormData } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { addPrimaryImage, removePrimaryImage } from '~/services/profileImage.service.server'
import { digitalOceanUploadHandler } from '~/utils/uploadHandler.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) as User

  const form = await unstable_parseMultipartFormData(request, digitalOceanUploadHandler)

  const changePrimaryImage = form.get('changePrimaryImage') as string

  if (changePrimaryImage) {
    await removePrimaryImage(user)
    await addPrimaryImage(changePrimaryImage, user)
  }

  return redirect('/account')
}
