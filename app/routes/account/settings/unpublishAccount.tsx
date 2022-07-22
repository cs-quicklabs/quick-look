import { LoaderFunction, redirect } from "@remix-run/node";
import { getUser, logout } from "~/services/auth.service.server";
import { publishToggle } from "~/services/user.service.serevr";

export const loader: LoaderFunction = async ({request}) => {
    const user  = await getUser(request);
    await publishToggle(user)
    return redirect('/account/settings')
}