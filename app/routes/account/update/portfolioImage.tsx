import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { uploadBlob } from '~/services/do.service.server'
import { updatePortfolioImage } from '~/services/portfolioImage.server'

export const action: ActionFunction = async ({ request }) => {
  await getUser(request)
  const form = await request.formData()
  const imageIdData = form.get('updatePortfolioImage')
  const imageId = form.get('imageId') as string

  if (imageIdData) {
    const url = await uploadBlob(imageIdData)
    if (!url) {
      return false
    }
    await updatePortfolioImage(url, imageId)
  }

  return redirect('/account')
}
