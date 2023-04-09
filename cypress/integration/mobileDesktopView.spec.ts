describe('Mobile and Desktop View', () => {
  beforeEach(() => {
    cy.commonLogin()
  })

  it('Should be able to toggle between mobile and desktop view in Sidebar', () => {
    cy.get('#desktopButton').click()
    cy.get('[data-cy="accountTemplate"]').should('not.exist')

    cy.get('#mobileButton').click()
    cy.get('[data-cy="accountTemplate"]').should('be.visible')
    cy.contains('Select Template')
    cy.contains(
      'Select how you want your profile to look like. Click on Toggle button to view in mobile and Desktop mode'
    )
  })

  it('Should be able to toggle between mobile and desktop view in Design Templates', () => {
    cy.get('#desktopButton').click()
    cy.get('[data-cy="Design Templates"]').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible')

    cy.get('#mobileButton').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible')
  })

  it('Should be able to toggle between mobile and desktop view in Bio', () => {
    cy.get('#desktopButton').click()
    cy.get('[data-cy="Bio"]').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible')

    cy.get('#mobileButton').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible')
  })

  it('Should be able to toggle between mobile and desktop view in Social Links', () => {
    cy.get('#desktopButton').click()
    cy.get('[data-cy="Social Links"]').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible')

    cy.get('#mobileButton').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible')
  })

  it('Should be able to toggle between mobile and desktop view in Images', () => {
    cy.get('#desktopButton').click()
    cy.get('[data-cy="Images"]').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible')

    cy.get('#mobileButton').click()
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible')
  })
})
