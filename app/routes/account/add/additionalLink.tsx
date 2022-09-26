import { ActionFunction, redirect } from "@remix-run/node";
import { addAdditionalLink } from "~/services/additionalLinks.service.server";
import { getUser } from "~/services/auth.service.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const linkText = await formData.get('linkText') as string
  const linkUrl = await formData.get('linkUrl') as string
  let linkColor = await formData.get('linkColor') as string
  let linkHex = await formData.get('linkHex') as string

  const user = await getUser(request) || undefined

  if (linkColor?.length! > 0 && linkHex?.length! > 0) {
    linkColor = ''
  }

  if(linkHex?.length! > 0){
    linkColor = ''
    if (!linkHex?.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      return ;
    }
  }

  if(linkText.length == 0 || linkUrl.length == 0){
    return false;
  }

  await addAdditionalLink({ user, linkUrl, linkText, linkColor, linkHex })

  return redirect('/account')
}
