import { ActionFunction, json } from "@remix-run/node";
import { useRouteData } from "~/hooks/useRouteData";

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const a = formData.get('oldpassword')

    
    return json({
        success: true
    })
}
