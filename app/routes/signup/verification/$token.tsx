import { LoaderFunction, redirect } from "@remix-run/node";
import { createUserSession, getUser } from "~/services/auth.service.server";
import { verifyEmail } from "~/services/mail.service.server";
import { deleteUserVerificationToken } from "~/services/userVerification.service.server";


export const loader: LoaderFunction = async ({ request, params }) => {
    const user = await getUser(request)
    const verified = await verifyEmail(params.token as string, user?.id as string)

    if (verified) {
        await deleteUserVerificationToken(user?.id as string)
        return await createUserSession(user?.id as string, '/successlogin')
    }

    // redirect to error page 
}

