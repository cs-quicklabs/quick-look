import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { addUpdateSocialLink } from "~/services/socialProfile.service.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()

    const session = await getSession(
        request.headers.get("Cookie")
    );
    let index = -1;
    
    let link = formData.get('editlink') as string
    const socialProfile = formData.get('edit_social_links') as string
console.log('23123123123',socialProfile);

    if(socialProfile == 'Facebook'){
      index = link.search('facebook')
      link = link?.slice(index)
    }
    if(socialProfile == 'Twitter'){
      index = link.search('twitter')
      link = link?.slice(index)
    }
    if(socialProfile == 'Youtube'){
      index = link.search('youtube')
      link = link?.slice(index)
    }

    await addUpdateSocialLink(socialProfile, link, user)

    session.flash(
        "successUpdateProfileMessage",
        `Your profile has been updated successfully.`
    );

    return redirect('/account', {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }) 
    
}   