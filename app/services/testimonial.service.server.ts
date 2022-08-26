import { db } from "~/database/connection.server";

export async function addUpdateTestimonial(testimonial: string, user: any){
    await db.profile.upsert({
        where: {
            userId: user.id
        },
        update: {
            testimonial: testimonial
        },
        create: {
            userId: user.id,
            testimonial
        }
    })
}

export async function deleteTestimonial(user: any){
    await db.profile.update({
        where: {
            userId: user.id
        },
        data: {
            testimonial: ''
        }
    })
}

export async function editTestimonial(testimonial: string, user: any){
    await db.profile.update({
        where: {
            userId: user.id
        },
        data: {
            testimonial: testimonial
        }
    })
}