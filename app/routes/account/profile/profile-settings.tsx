import { ActionFunction, json, LoaderFunction } from "@remix-run/node";

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const a = formData.get('firstname')
    console.log(a)
    return json({
        success: true
    })
}
