import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { updateUserBioDetails } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()

    const user = await getUser(request)
    
    let description = formData.get('description') as string
    let location = formData.get('location') as string 
    let occupation =formData.get('occupation') as string
    let company = formData.get('company') as string
    let education  = formData.get('education') as string

    const isUpdated = await updateUserBioDetails({
        about: description ?? user?.bio,
        location : location ?? user?.location,
        occupation: occupation ?? user?.occupation,
        education: education ?? user?.education,
        company : company ?? user?.company, 
        user
    })

}   