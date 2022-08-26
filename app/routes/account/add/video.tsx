import { User } from "@prisma/client";
import { ActionFunction, json, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addPrimaryImage, addSecondaryImage, restorePrimaryImage, restoreSecondaryImage } from "~/services/user.service.serevr";
import { addUpdateVideo } from "~/services/userVideo.service.server";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";
import { validateVideo } from "~/utils/validator.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()
    
    const videoUrl = await form.get('videoLink') as string
    
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
        await addUpdateVideo(videoUrl, user);
    }

    return redirect('/account') 
};