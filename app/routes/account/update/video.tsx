import { ActionFunction, redirect } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import { addUpdateVideo } from "~/services/userVideo.service.server";
import { getVideoSource } from "~/utils/url.server";

export const action: ActionFunction = async ({ request }) => {
    await requireUserId(request)
    const formData = await request.formData()

    const user = await getUser(request)
    let videoUrl = formData.get('videoUrl') as string;

    let sourceKey;
    const videoSource = await getVideoSource(videoUrl);
    if(videoSource){
      sourceKey = 'youtube'
    } else {
      sourceKey = 'facebook'
    }

    await addUpdateVideo(videoUrl, sourceKey, user);

    return redirect('/account')
}   