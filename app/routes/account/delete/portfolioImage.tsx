import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { deleteImage } from "~/services/profileImage.service.server";

export const action: ActionFunction = async ({request}) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()
    const toDeleteId = formData.get('portfolioImage')

    await deleteImage(toDeleteId as string , user)
    return redirect('/account')
}