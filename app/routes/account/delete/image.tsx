import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { deleteImage } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({request}) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()
    const primaryPhoto = formData.get('primary')
    const secondaryPhoto = formData.get('secondary')

    const toDelete = primaryPhoto ?? secondaryPhoto 
    await deleteImage(toDelete as string , user)
    return redirect('/account')
}