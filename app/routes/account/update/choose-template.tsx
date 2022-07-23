import { ActionFunction, redirect } from "@remix-run/node";
import { getUser, requireUserId } from "~/services/auth.service.server";
import { updateUserBioDetails, updateUserTemplate } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    await requireUserId(request)
    const formData = await request.formData()

    const user = await getUser(request)
    let templateId = formData.get('template') as string

    await updateUserTemplate(templateId, user);

    return redirect('/account')
}   