import { User } from "@prisma/client";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addUpdateTestimonial } from "~/services/testimonial.service.server";


export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()
    
    const testimonialText = form.get('testimonialText') as string
    const testimonialBy = form.get('testimonialBy') as string

    if(testimonialText){
        await addUpdateTestimonial({testimonialText, testimonialBy}, user);
    }

    return redirect('/account') 
};