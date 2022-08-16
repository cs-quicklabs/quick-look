import { getUser } from "~/services/auth.service.server";
import { restorePrimaryImage, restoreSecondaryImage } from "~/services/user.service.serevr";
import { User } from "@prisma/client";
import { ActionFunction, redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User
    
    const formData = await request.formData()
    const restore = formData.get('restoreImage')

    if(restore === 'restoreprimaryImage'){
        await restorePrimaryImage(user)
    }
    if(restore === 'restoresecondaryImage'){
        await restoreSecondaryImage(user)
    }
    return redirect('/account') 
};