describe('Social Links Test Cases', () => {

  beforeEach(() => {
    cy.commonLogin();
    cy.get('[data-cy="Social Links"]').click();
  });

  after(() => {
    cy.commonLogout();
  });

  it('Add social media link', () => {
    cy.get('[data-cy="addSocialProfileButton"]').click();
    cy.get('#socialProfileBox').click();
    cy.get('[data-cy="socialProfile-Facebook"]').click();
    cy.get('#addlink').type('facebook.com/fb-username');
    cy.get('[data-cy="addProfileButton"]').click();
  });

  it('Edit social link', () => {
    cy.get('[data-cy="editSocialButton"]').click();
    cy.get('#editlink').should('have.value', 'facebook.com/fb-username');
    cy.contains('Edit Social Profile');
    cy.contains('Facebook');
    cy.contains('Add Link');
    cy.get('[data-cy="Facebook-link"]').type('{backspace}').type('{backspace}').type('{backspace}').type('{backspace}');
    cy.get('#updateSocialLink').click();

  });


  it('Delete Social Link', () => {
    cy.get('[data-cy="deleteSocialButton"]').click();
    cy.get('[data-cy="deleteSocialLink"]').click();
  });

});