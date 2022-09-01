import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";


import { deleteSpotlightButton } from "~/services/spotlight.service.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) || undefined
    await deleteSpotlightButton(user)

    return redirect('/account') 
}   