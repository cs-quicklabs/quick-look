import { getUser } from "~/services/auth.service.server";
import { User } from "@prisma/client";
import { ActionFunction, redirect } from "@remix-run/node";
import { addUpdateTestimonial } from "~/services/testimonial.service.server";
import { commitSession, getSession } from "~/services/session.service.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User
    
    const session = await getSession(
        request.headers.get("Cookie")
    );
    
    const formData = await request.formData()
    const editTestimonial = formData.get('editTestimonial') as string

    if(editTestimonial){
        await addUpdateTestimonial(editTestimonial, user)
    }

    session.flash(
        "successUpdateProfileMessage",
        `Your profile has been updated successfully.`
    );

    return redirect('/account', {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }) 
};