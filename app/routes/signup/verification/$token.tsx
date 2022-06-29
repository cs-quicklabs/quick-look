import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, useLoaderData, useParams } from "@remix-run/react";
import { verifyEmail } from "~/services/userVerification.service";
import { getUser } from "~/services/auth.service.server";

export const action: ActionFunction = ({request, params}) => {

}

export const loader: LoaderFunction = async ({request, params}) => {
    const user = await getUser(request)
    const res = await verifyEmail(params.token as string, user?.id as string)
    return res;
}

export default function VerifyToken(){
    let actionData = useActionData();
    return (
        <div>
            {actionData}
        </div>
    )
}

// delete user after verification 