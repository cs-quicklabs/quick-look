import { User } from "@prisma/client";
import { ActionFunction, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addSecondaryImage } from "~/services/user.service.serevr";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User
    const form = await unstable_parseMultipartFormData(request, digitalOceanUploadHandler)
    const url = form.get('photo') as string

    await addSecondaryImage(url, user);

    return redirect('/account') 
};