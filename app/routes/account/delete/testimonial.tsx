import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { commitSession, getSession } from "~/services/session.service.server";
import { deleteTestimonial } from "~/services/testimonial.service.server";

export const action: ActionFunction = async ({request}) => {
    const user = await getUser(request) || undefined
    const formData = await request.formData()
    const toDelteTestimonial = formData.get('deleteTestimonial')
    
    const session = await getSession(
        request.headers.get("Cookie")
    );

    if(toDelteTestimonial){
        await deleteTestimonial(user)
    }
    session.flash(
        "DeleteTestimonialMessage",
        `Testimonial has been deleted successfully.`
    );
    return redirect('/account', {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }) 
}