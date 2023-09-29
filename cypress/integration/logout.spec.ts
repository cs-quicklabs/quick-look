describe('Logout', function () {
    beforeEach(() => {
      cy.commonLogin()
      cy.get('[data-cy="Spotlight Button"]').click()
    })
    it('Logout', () => {
          
          cy.get('[data-cy="profile-menu"]').click();
          cy.get('[data-cy="sign-out"]').click();
          cy.wait(2000);
          cy.get('[data-cy="signOutModal"]').should('be.visible');
          cy.get('[data-cy="signOut"]').click();
        });
})