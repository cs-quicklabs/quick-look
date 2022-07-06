import { LoaderFunction } from "@remix-run/node";
import { logout } from "~/services/auth.service.server";

export const loader: LoaderFunction = async ({request}) => {
    await logout(request)
} 