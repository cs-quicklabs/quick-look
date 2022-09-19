import { User } from "@prisma/client";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addUpdateSpotlight } from "~/services/spotlight.service.server";
import { addUpdateSupportBanner } from "~/services/supportbanner.service.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()
        
    const bannerText = form.get('bannerText') as string
    const bannerColor = form.get('bannerColor') as string
    const bannerHex = form.get('bannerHex') as string
    const bannerIcon = form.get('bannerIcon') as string
    const bannerLink = form.get('bannerLink') as string
    const toggleBanner = form.get('toggleBanner') as unknown as Boolean

    await addUpdateSupportBanner({
        bannerText,
        bannerColor,
        bannerHex,
        bannerIcon,
        bannerLink,
        toggleBanner
    }, user)

    return redirect('/account') 
};


