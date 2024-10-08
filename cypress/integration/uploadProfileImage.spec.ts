describe('Upload Image Test Cases', () => {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Profile Pictures"]').click()
  })
  it('Should be able to upload an image using Upload Image button for Primary Image', () => {
    cy.get('#primaryDeleteButton').click()
    cy.get('#deleteModalButton').click()

    cy.get('#primaryUploadImage').selectFile('cypress/fixtures/primary.jpg')
    cy.get('#primaryEditImage').click()
    cy.wait(2000)
  })
  it('Should be able to upload an image using Upload Image button for Secondary Image', () => {
    cy.get('#secondaryDeleteButton').click()
    cy.get('#deleteModalButton').click()


    cy.get('#secondaryUploadImage').selectFile('cypress/fixtures/secondary.jpg')
    cy.get('#secondaryEditImage').click()
   cy.wait(2000)
   
  })



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
