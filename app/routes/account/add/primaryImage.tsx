import { User } from "@prisma/client";
import { ActionFunction, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addPrimaryImage, restorePrimaryImage, restoreSecondaryImage } from "~/services/user.service.serevr";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User
    
    const form = await unstable_parseMultipartFormData(request, digitalOceanUploadHandler)

    const url = form.get('photo') as string
    const restore = form.get('restoreImage')
console.log(url);

    if(restore === 'restoreprimaryImage'){
        await restorePrimaryImage(user)
    }
    if(restore === 'restoresecondaryImage'){
        await restoreSecondaryImage(user)
    }

    if(url){
        await addPrimaryImage(url, user);
    }

    return redirect('/account') 
};