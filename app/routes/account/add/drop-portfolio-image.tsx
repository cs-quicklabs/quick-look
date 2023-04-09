import type { User } from '@prisma/client'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { uploadBlob } from '~/services/do.service.server'
import { addPortfolioImage } from '~/services/portfolioImage.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) as User
  const form = await request.formData()

  const fileUrl = form.get('addPortfolioImage')

  if (fileUrl) {
    const portfolioImageUrl = await uploadBlob(fileUrl)
    await addPortfolioImage(portfolioImageUrl, user)
  } else if (!fileUrl) {
    return false
  }
  return redirect('/account')
}
