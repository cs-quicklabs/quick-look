import { ActionFunction, redirect } from "@remix-run/node";
import { updateAdditionalLink } from "~/services/additionalLinks.service.server";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()

    const session = await getSession(
        request.headers.get("Cookie")
    );

    const user = await getUser(request)
    
    const linkText = await formData.get('linkText') as string
    const linkUrl = await formData.get('linkUrl') as string
    const linkId = await formData.get('editAdditionalSpotlight') as string
    let linkColor = await formData.get('linkColor') as string
    let linkHex = await formData.get('linkHex') as string
    console.log('@#@#@#@#@',linkHex)
    if(linkText.length == 0 || linkUrl.length == 0){
        return false;
    }

    if (linkHex?.length == 0 && linkColor?.length == 0) {
        return false;
      }
      if (linkColor?.length! > 0 && linkHex?.length! > 0) {
        linkColor = ''
        if (!linkHex?.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
          return false;
        }
    }
    const isUpdated = await updateAdditionalLink({ linkText, linkUrl, user,linkColor,linkHex }, linkId )
    if(linkText.length == 0 || linkUrl.length == 0){
        return false;
    }


    session.flash(
        "successUpdateAdditionalLinkMessage",
        `Your additional Link has been updated successfully.`
    );

    if(isUpdated){ 
        return redirect('/account', {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          }) 
    } 
    return null 
}   