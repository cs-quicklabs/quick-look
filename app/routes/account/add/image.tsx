import { User } from "@prisma/client";
import { ActionFunction, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addPrimaryImage, addSecondaryImage, restorePrimaryImage, restoreSecondaryImage } from "~/services/user.service.serevr";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await unstable_parseMultipartFormData(request, digitalOceanUploadHandler)
    
    const primaryimageurl = form.get('primaryImageUpload') as string
    const secondaryImageurl = form.get('secondaryImageUpload') as string

    if(primaryimageurl){
        await addPrimaryImage(primaryimageurl, user);
    } else if(secondaryImageurl){
        await addSecondaryImage(secondaryImageurl, user)
    }

    return redirect('/account') 
};