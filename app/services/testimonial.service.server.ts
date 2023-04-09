import { db } from '~/database/connection.server'

export async function addUpdateTestimonial(testimonial: any, user: any) {
  const { testimonialText, testimonialBy } = testimonial

  await db.testimonial.upsert({
    where: {
      userId: user.id,
    },
    update: {
      testimonialText: testimonialText,
      testimonialBy: testimonialBy,
    },
    create: {
      userId: user.id,
      testimonialText: testimonialText,
      testimonialBy: testimonialBy,
    },
  })
}

export async function deleteTestimonial(user: any) {
  await db.testimonial.update({
    where: {
      userId: user.id,
    },
    data: {
      testimonialText: '',
      testimonialBy: '',
    },
  })
}

export async function editTestimonial(testimonial: any, user: any) {
  const { testimonialText, testimonialBy } = testimonial
  await db.testimonial.update({
    where: {
      userId: user.id,
    },
    data: {
      testimonialText: testimonialText,
      testimonialBy: testimonialBy,
    },
  })
}
