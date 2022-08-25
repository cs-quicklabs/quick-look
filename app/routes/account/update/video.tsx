import { ActionFunction, redirect } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import { addUpdateVideo } from "~/services/userVideo.service.server";

export const action: ActionFunction = async ({ request }) => {
    await requireUserId(request)
    const formData = await request.formData()

    const user = await getUser(request)
    let videoUrl = formData.get('videoUrl') as string

    await addUpdateVideo(videoUrl, user);

    return redirect('/account')
}   