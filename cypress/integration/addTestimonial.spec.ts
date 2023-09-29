describe('Add testimonial test cases', function () {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Add Testimonials"]').click()
  })
  let description="Hi I am divanshu gupta. I have done BCA from HIMT, I Have 1.9 years of Expereince"

  it('Validate testimonial', () => {
    cy.get('[data-cy="addTestimonialButton"]').click()
    cy.contains('Add Testimonial to your profile')
    cy.contains('NO TESTIMONIAL ADDED YET')
    cy.contains('Please add testimonial by clicking on button below')
    // cy.get('[data-cy="testimonialText"]').type(description)
    // cy.contains('Testimonial must be 6 characters long')
    // cy.contains('Name of the person who gave this testimonial')
    // cy.get('[data-cy="testimonialBy"]').type('Bella')
    // cy.contains('Name must be 6 characters long')
    // cy.get('[data-cy="cancelCreateTestimonial"]').click()
  })

  it('Should be able to add testimonial', () => {
    cy.contains('NO TESTIMONIAL ADDED YET')
    cy.contains('Please add testimonial by clicking on button below')
    cy.get('[data-cy="addTestimonialButton"]').click()

    cy.contains('Add Testimonial to your profile')
    cy.contains('Add, edit or delete testimonial from your profile')
    cy.contains('Testimonial')
    cy.get('[data-cy="testimonialText"]').type(
      "Hello, everyone! I'm Bella Rodriguez and today's post is sponsored by Bold and Beautiful Cosmetics. This is a vegan cosmetics brand owned and operated by a woman of color! and I'm going to show them off to you. This first one is a cherry red."
    )
    cy.contains('Name of the person who gave this testimonial')
    cy.get('[data-cy="testimonialBy"]').type('Bella Rodriguez')
    cy.get('[data-cy="createTestimonial"]').click()
    cy.wait(2000)
  })

  it('Should be able to edit testimonial', () => {
    cy.contains('Edit Testimonial on your profile')
    // cy.contains(
    //   'Please provide link of video you would like to show on profile'
    // )
    cy.get('[data-cy="editTestimonialButton"]').click()

    cy.contains('Edit Testimonial on your profile')
    cy.contains('Edit or delete testimonial from your profile')
    cy.contains('Edit Testimonial')
    cy.get('[data-cy="testimonialEditText"]')
      .clear()
      .type(
        "Hello, everyone! I'm Bella Rodriguez and today's post is sponsored by Bold and Beautiful Cosmetics."
      )
    cy.contains('Name of the person who gave this testimonial')
    cy.get('[data-cy="testimonialEditBy"]')
      .type('{backspace}')
      .type('{backspace}')
      .type('{backspace}')
    cy.get('[data-cy="editTestimonial"]').click()
  })

  it('Should be able to delete testimonial', () => {
    cy.contains('Edit Testimonial on your profile')
    // cy.contains(
    //   'Please provide link of video you would like to show on profile'
    // )
    cy.get('[data-cy="deleteTestimonialButton"]').click()
    cy.get('[data-cy="deleteTestimonial"]').click()
  })
})
