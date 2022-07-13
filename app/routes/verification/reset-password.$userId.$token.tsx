import { LoaderFunction, redirect } from "@remix-run/node";
import { verifyEmail } from "~/services/mail.service.server";
import { getUserById } from "~/services/user.service.serevr";
import { deleteUserVerificationToken } from "~/services/userVerification.service.server";

export const loader: LoaderFunction = async ({ request, params }) => {
    const token = params.token as string
    const user = await getUserById(params.userId as string)
    const verified = await verifyEmail(token, user?.id as string)
    
    if (verified) {
        await deleteUserVerificationToken(user?.id as string)
        return redirect(`/password/${user?.id}`)
    } else {
        return redirect('/tokenerror')
    }
  }