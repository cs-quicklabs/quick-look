import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { updateUserBioDetails } from "~/services/user.service.serevr";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()

    const user = await getUser(request)
    
    let value = formData.get('template')
    console.log(value )
  


    return null;
}   