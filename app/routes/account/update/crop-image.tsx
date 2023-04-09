import type { User } from '@prisma/client'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { uploadBlob } from '~/services/do.service.server'
import {
  addPrimaryImage,
  addSecondaryImage,
  removePrimaryImage,
  removeSecondaryImage,
} from '~/services/profileImage.service.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) as User
  const form = await request.formData()

  const primaryImageEdit = form.get('editPrimaryImage') as string
  const secondaryImageEdit = form.get('editSecondaryImage') as string

  if (primaryImageEdit) {
    const url = await uploadBlob(primaryImageEdit)
    if (!url) {
      return false
    }
    await removePrimaryImage(user)
    await addPrimaryImage(url, user)
  } else {
    const url = await uploadBlob(secondaryImageEdit)
    if (!url) {
      return false
    }
    await removeSecondaryImage(user)
    await addSecondaryImage(url, user)
  }

  return redirect('/account')
}
