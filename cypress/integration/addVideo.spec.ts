describe('Add testimonial test cases', function () {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Add Video"]').click()
  })

  it('Validate Video', () => {
    cy.contains('NO LINK ADDED YET')
    cy.contains('Please add video link by clicking on button below')
    cy.get('[data-cy="addVideoLinkButton"]').click()
    cy.contains('Add Link')
    cy.get('#videoLink').type('Hello')
    cy.contains('Please enter a valid link')
    cy.get('[data-cy="cancelButton"]').click()
  })

  it('Should be able to add Video Link', () => {
    cy.contains('NO LINK ADDED YET')
    cy.contains(
      'Please provide link of video you would like to show on profile'
    )
    cy.get('[data-cy="addVideoLinkButton"]').click()

    cy.contains('Add Video Link to your profile')
    cy.contains(
      'Please provide link of video you would like to show on profile'
    )
    cy.contains('Add Link')
    cy.get('[data-cy="addVideoLink"]').type(
      'https://www.youtube.com/watch?v=leo1FZ6vu1I'
    )
    cy.get('[data-cy="addVideoURL"]').click()
  })

  it('Should be able to edit Video Link', () => {
    cy.contains('Edit Video Link to your profile')
    cy.contains(
      'Please provide link of video you would like to show on profile'
    )
    cy.get('[data-cy="editVideoButton"]').click()

    cy.contains('Edit Link')
    cy.get('[data-cy="editVideoLink"]')
      .clear()
      .type('https://www.youtube.com/watch?v=fmIiDLbLc_s')
    cy.get('[data-cy="editVideoLinkButton"]').click()
  })

  it('Should be able to delete Video Link', () => {
    cy.contains('Edit Video Link to your profile')
    cy.contains(
      'Please provide link of video you would like to show on profile'
    )
    cy.get('[data-cy="deleteVideoButton"]').click()
    cy.get('[data-cy="deleteVideoModalButton"]').click()
  })
})
