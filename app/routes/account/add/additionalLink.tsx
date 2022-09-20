import { ActionFunction, redirect } from "@remix-run/node";
import { addAdditionalLink } from "~/services/additionalLinks.service.server";
import { getUser } from "~/services/auth.service.server";



export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const linkText = await formData.get('linkText') as string
    const linkUrl = await formData.get('linkUrl') as string
    const linkColor = await formData.get('linkColor') as string
    const linkHex = await formData.get('linkHex') as string

    const user = await getUser(request) || undefined
    await addAdditionalLink({ user, linkColor , linkUrl, linkText, linkHex })
    return redirect('/account') 
  }

