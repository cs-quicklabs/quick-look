describe('Upload Image Test Cases', () => {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Profile Pictures"]').click()
  })
  it('Should be able to upload an image using Upload Image button for Primary Image', () => {
    cy.get('#primaryDeleteButton').click()
    cy.get('#deleteModalButton').click()

    cy.get('#primaryUploadImage').selectFile('cypress/fixtures/primary.jpg')
    cy.wait(2000)
  })
  it('Should be able to upload an image using Upload Image button for Secondary Image', () => {
    cy.get('#secondaryDeleteButton').click()
    cy.get('#deleteModalButton').click()

    cy.get('#secondaryUploadImage').selectFile('cypress/fixtures/secondary.jpg')
    cy.get('#secondaryDeleteButton').click()
    cy.get('#deleteModalButton').click()

    cy.get('[data-cy="restoreSecondaryImage"]').click()
  })

//    it('Should be able to upload an image using Edit Button for Primary Image', () => {
//     cy.get('#primaryEditImage').selectFile('cypress/fixtures/repic.jpg ',{force:true});
// });
  

// //   it('Should be able to upload an image using Edit Button for Secondary Image', () => {
// //     cy.get('#secondaryEditImage').selectFile('cypress/fixtures/secondary.jpg');
// //   });

  it('Should be able to delete and restore an image using Delete Button and Restore Default Image button respectively for Primary Image', () => {
    cy.get('#primaryDeleteButton').click()
    cy.get('#deleteModalButton').click()

    cy.get('[data-cy="restorePrimaryImage"]').click()
  })

  it('Should be able to delete and restore an image using Delete Button and Restore Default Image button respectively for Secondary Image', () => {
    cy.get('#secondaryDeleteButton').click()
    cy.get('#deleteModalButton').click()

    cy.get('[data-cy="restoreSecondaryImage"]').click()
  })

 

  
})
