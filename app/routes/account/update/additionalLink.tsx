import { ActionFunction, redirect } from "@remix-run/node";
import { updateAdditionalLink, updatecolorForAllAdditionalLink, updateHexColorForAllAdditionalLink } from "~/services/additionalLinks.service.server";
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
    if(linkText.length == 0 || linkUrl.length == 0){
        return false;
    }
    
    const isUpdated = await updateAdditionalLink({ linkText, linkUrl, user }, linkId )

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