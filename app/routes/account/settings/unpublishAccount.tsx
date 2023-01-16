import { LoaderFunction, redirect } from "@remix-run/node";
import { URL } from "url";
import { getUser, logout } from "~/services/auth.service.server";
import { publishToggle } from "~/services/user.service.serevr";

export const loader: LoaderFunction = async ({request}) => {
    const user  = await getUser(request);
    await publishToggle(user)
    const referer = request.headers.get('referer') ?? '';
    const url = new URL(referer);
    return redirect(url.pathname ?? '/account/settings')
}