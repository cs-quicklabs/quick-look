import { ActionFunction, unstable_parseMultipartFormData } from "@remix-run/node";
import { uploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const form = await unstable_parseMultipartFormData(request, uploadHandler)
    const url = form.get('photo')
    return url 
    };