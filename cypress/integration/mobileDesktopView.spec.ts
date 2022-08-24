describe('Mobile and Desktop View', () => {

  beforeEach(() => {
    cy.commonLogin();
  });

  after(() => {
    cy.commonLogout();
  });

  it('Should be able to toggle between mobile and desktop view in Sidebar', () => {
    cy.get('#desktopButton').click();
    cy.get('[data-cy="accountTemplate"]').should('not.exist');

    cy.get('#mobileButton').click();
    cy.get('[data-cy="accountTemplate"]').should('be.visible');
  });

  it('Should be able to toggle between mobile and desktop view in Design Templates', () => {
    cy.get('[data-cy="Design Templates"]').click();
    cy.get('#desktopButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible');

    cy.get('#mobileButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible');
  });

  it('Should be able to toggle between mobile and desktop view in Bio', () => {
    cy.get('[data-cy="Bio"]').click();
    cy.get('#desktopButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible');;

    cy.get('#mobileButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible');

  });

  it('Should be able to toggle between mobile and desktop view in Social Links', () => {
    cy.get('[data-cy="Social Links"]').click();
    cy.get('#desktopButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible');

    cy.get('#mobileButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible');

  });

  it('Should be able to toggle between mobile and desktop view in Images', () => {
    cy.get('[data-cy="Images"]').click();
    cy.get('#desktopButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('not.be.visible');

    cy.get('#mobileButton').click();
    cy.get('[data-cy="profileImage"]').scrollIntoView().should('be.visible');

  });

});