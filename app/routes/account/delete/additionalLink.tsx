import { ActionFunction, redirect } from "@remix-run/node";
import {  deleteAdditionalLink } from "~/services/additionalLinks.service.server";
import { getUser } from "~/services/auth.service.server";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()

    const deleteAdditionalLinkId = await formData.get('deleteAdditionalLink') as string

    await deleteAdditionalLink(deleteAdditionalLinkId)
    
    return redirect('/account') 
  }
