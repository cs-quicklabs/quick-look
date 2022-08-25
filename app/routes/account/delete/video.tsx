import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { deleteSocialLink } from "~/services/user.service.serevr";
import { deleteVideo } from "~/services/userVideo.service.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()
    
    const session = await getSession(
        request.headers.get("Cookie")
    );
    
    const videoUrl = formData.get('videoUrl') as string

    if(videoUrl){
        await deleteVideo(user)
    }

    session.flash(
        "UpdateVideoMessage",
        `Video has been deleted successfully.`
    );
    return redirect('/account', {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }) 
}   