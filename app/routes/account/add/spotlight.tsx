import type { User } from '@prisma/client'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { addUpdateSpotlight } from '~/services/spotlight.service.server'

export const action: ActionFunction = async ({ request }) => {
  const user = (await getUser(request)) as User

  const form = await request.formData()

  const buttonText = form.get('buttonText') as string
  const buttonColor = form.get('buttonColor') as string
  const buttonhex = form.get('hexcode') as string
  const spotlightIcon = form.get('spotlightIcon') as string
  const buttonAction = form.get('buttonAction') as string
  const buttonActionlink = form.get('buttonActionlink') as string
  const toggleSpotlight = form.get('toggleSpotlight') as unknown as Boolean

  await addUpdateSpotlight(
    {
      buttonText,
      buttonColor,
      buttonhex,
      spotlightIcon,
      buttonAction,
      buttonActionlink,
      toggleSpotlight,
    },
    user
  )

  return redirect('/account')
}
