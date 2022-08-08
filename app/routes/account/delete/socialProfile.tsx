import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { deleteSocialLink, updateUserBioDetails } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()
    
    const session = await getSession(
        request.headers.get("Cookie")
      );
    const fbProfile = formData.get('facebook') as string
    const ytProfile = formData.get('youtube') as string
    const twitterProfile = formData.get('twitter') as string

    const socialProfile = fbProfile ?? ytProfile ?? twitterProfile
    await deleteSocialLink(socialProfile, user)
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