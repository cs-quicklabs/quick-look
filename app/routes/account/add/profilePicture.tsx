import { ActionFunction, unstable_parseMultipartFormData } from "@remix-run/node";
import { digitalOceanUploadHandler } from "~/utils/uploadHandler.server";

export const action: ActionFunction = async ({ request }) => {
    const form = await unstable_parseMultipartFormData(request, digitalOceanUploadHandler)
    const url = form.get('photo')
    return url 
    };