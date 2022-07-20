import { LoaderFunction, redirect } from "@remix-run/node";
import { getUser, logout } from "~/services/auth.service.server";
import { unpublishUserAccount } from "~/services/user.service.serevr";

export const loader: LoaderFunction = async ({request}) => {
    const user  = await getUser(request);
    await unpublishUserAccount(user)
    return redirect('/account/settings')
}