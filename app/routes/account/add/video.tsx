import { User } from "@prisma/client";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addUpdateVideo } from "~/services/userVideo.service.server";
import { getVideoSource } from "~/utils/url.server";
import { validateVideo } from "~/utils/validator.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()
    
    let sourceKey;
    const videoUrl = await form.get('videoLink') as string
    const videoSource = await getVideoSource(videoUrl);

    if(videoSource){
      sourceKey = 'youtube'
    } else {
      sourceKey = 'facebook'
    }
    const errors = {
        videoUrl : await validateVideo(videoUrl)
    }
    if (Object.values(errors).some(Boolean)) {
        return json(
          {
            errors,
            form: action,
          },
          { status: 400 }
        )
      }
    if(videoUrl){
        await addUpdateVideo(videoUrl, sourceKey , user);
    }

    return redirect('/account') 
};