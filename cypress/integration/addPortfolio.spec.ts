describe('Add Porfolio', () => {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Add Portfolio"]').click()
  })

  // it('Should be able to upload an image using Edit Button for Primary Image', () => {
  //   cy.get('#primaryEditImage').selectFile('cypress/fixtures/primary.png');
  // });

  // it('Should be able to upload an image using Edit Button for Secondary Image', () => {
  //   cy.get('#secondaryEditImage').selectFile('cypress/fixtures/secondary.png');
  // });

  it('Should be able to upload an image using Upload Image button for Portfolio', () => {
    cy.get('[data-cy="portfolioImage"]').click()
    cy.get('#primaryUploadImage').selectFile('cypress/fixtures/primary.jpg')
    cy.wait(2000)
  })
   it('Should be able to upload an image using Edit Button for Primary Image', () => {
    cy.get('[data-cy="Image"]').trigger('mouseover')
    cy.get('[data-cy="Edit-portfolio"]').click()

    cy.get('[style="min-width: 120px; justify-content: flex-end; white-space: nowrap;"] > :nth-child(1) > .__cropro__0_toolbar_button').click()
  });

  it('Should be able to delete Portfolio image', () => {
    cy.get('[data-cy="Image"]').trigger('mouseover')
    cy.get('[data-cy="Delete"]').click()
    cy.get('#deleteModalButton').click()
  })
})
