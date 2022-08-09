import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { addUpdateSocialLink, updateUserBioDetails } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const selectedSocial = formData.get('select_social') as string
    const selectedSocialLink = formData.get('addlink') as string

    const session = await getSession(
        request.headers.get("Cookie")
      );

    const user = await getUser(request) || undefined
    await addUpdateSocialLink(selectedSocial, selectedSocialLink, user)
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