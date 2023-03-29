import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { deletePortfolioImage } from '~/services/portfolioImage.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const toDeleteId = formData.get('portfolioImage')

  await deletePortfolioImage(toDeleteId as string)
  return redirect('/account')
}
