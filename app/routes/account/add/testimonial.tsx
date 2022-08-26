import { User } from "@prisma/client";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { getUser } from "~/services/auth.service.server";
import { addUpdateTestimonial } from "~/services/testimonial.service.server";
import { validateTestimonial, validateTestimonialBy } from "~/utils/validator.server";


export const action: ActionFunction = async ({ request }) => {
    const user = await getUser(request) as User

    const form = await request.formData()
    
    const testimonialText = form.get('testimonialText') as string
    const testimonialBy = form.get('testimonialBy') as string

    const errors = {
        videoUrl : await validateTestimonial(testimonialText),
        testimonialBy: await validateTestimonialBy(testimonialBy)
    }

    if (Object.values(errors).some(Boolean)) {
        return json(
          {
            errors,
            form: action,
          },
          { status: 400 }
        )
      }
    if(testimonialText){
        await addUpdateTestimonial({testimonialText, testimonialBy}, user);
    }

    return redirect('/account') 
};