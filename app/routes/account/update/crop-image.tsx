import { User } from "@prisma/client";
import { ActionFunction, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { uploadBlob, uploadStreamToSpaces } from "~/services/do.service.server";
import { addPrimaryImage, addSecondaryImage} from "~/services/profileImage.service.server";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User
    const form = await request.formData();

    const primaryImageEdit =  form.get('editPrimaryImage') as string
    const secondaryImageEdit = form.get('editSecondaryImage') as string
console.log(primaryImageEdit);

    //blob

    // convert into file
    if(primaryImageEdit){
        const url = await uploadBlob(primaryImageEdit)
        await addPrimaryImage(url, user);
    } else{
        const url = await uploadBlob(secondaryImageEdit)
        await addSecondaryImage(url, user);
    }

    return redirect('/account') 
};