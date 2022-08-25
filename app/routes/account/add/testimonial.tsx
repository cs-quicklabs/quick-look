import { User } from "@prisma/client";
import { ActionFunction, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addUpdateTestimonial } from "~/services/testimonial.service.server";


export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()
    
    const testimonial = form.get('testimonial') as string

    if(testimonial){
        await addUpdateTestimonial(testimonial, user);
    }

    return redirect('/account') 
};