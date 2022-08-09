import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { addUpdateSocialLink } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()

    const session = await getSession(
        request.headers.get("Cookie")
    );

    const link = formData.get('editlink') as string
    const socialProfile = formData.get('edit_social_links') as string

    await addUpdateSocialLink(socialProfile, link, user)

    session.flash(
        "updateProfileMessage",
        `Your profile has been updated successfully.`
    );

    return redirect('/account', {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }) 
    

}   