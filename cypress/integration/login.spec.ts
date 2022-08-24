describe('Login Test Cases', () => {

  let userDetails: { invalid_credentials: { email: string; password: string; }; email: string; password: string; baseUrl: any; };
  beforeEach(function () {
    cy.fixture("Data").then((user) => {
      userDetails = user;
    });
  });

  it('User login case - invalid credentials', () => {
    cy.login(userDetails.invalid_credentials.email, userDetails.invalid_credentials.password)
    cy.get("input[name='email']").clear();
    cy.get("input[name='password']").clear();
    cy.contains("Either email or password you entered was not correct. Please try again.");
  });

  it('User Login case', () => {
    cy.login(userDetails.email, userDetails.password);
    cy.url().should('include', `${userDetails.baseUrl}/account`);
  });

  // it('Logout', () => {
  //   cy.get('[data-cy="profile-menu"]').click();
  //   cy.get('[data-cy="sign-out"]').click();
  //   cy.wait(2000);
  //   cy.get('[data-cy="signOutModal"]').should('be.visible');
  //   cy.get('[data-cy="signOut"]').click();
  //   cy.url().should('include', `${userDetails.baseUrl}/`);
  // });

});
