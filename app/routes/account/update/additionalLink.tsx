import { ActionFunction, redirect } from "@remix-run/node";
import { updateAdditionalLink } from "~/services/additionalLinks.service.server";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { updateUserBioDetails } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()

    const session = await getSession(
        request.headers.get("Cookie")
    );

    const user = await getUser(request)
    
    const linkText = await formData.get('linkText') as string
    const linkUrl = await formData.get('linkUrl') as string
    const linkColor = await formData.get('linkColor') as string
    const linkHex = await formData.get('linkHex') as string
    const linkId = await formData.get('editAdditionalSpotlight') as string
    console.log('@@@@@@22', linkId)
    const isUpdated = await updateAdditionalLink({ linkText, linkUrl, linkColor,  linkHex , user }, linkId )

    session.flash(
        "successUpdateAdditionalLinkMessage",
        `Your dditional Link has been updated successfully.`
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