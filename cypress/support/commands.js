// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit('/auth/login');
  cy.get("input[name='email']").type(email);
  cy.get("input[name='password']").type(password);
  cy.get(':nth-child(4) > .w-full').click();
});

Cypress.Commands.add("commonLogout", () => {
  cy.url().should('include', '/account');
  cy.get('[data-cy="profile-menu"]').click();
  cy.get('[data-cy="sign-out"]').click();
  cy.get('form > .w-full').click();
  cy.url().should('include', '/');
});

Cypress.Commands.add("commonLogin", () => {
  cy.login(Cypress.env("email"), Cypress.env("password"));
  cy.url().should('include', '/account');
});

Cypress.Commands.add("signup", (firstName, lastName, profileId, email, password, confirmPassword) => {
  cy.get('[data-cy="firstName"]').type(firstName);
  cy.get('[data-cy="lastName"]').type(lastName);
  cy.get('[data-cy="profileId"]').type(profileId);
  cy.get('[data-cy="email"]').type(email);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="confirmPassword"]').type(confirmPassword);
  cy.get('[data-cy="createNewAccountButton"]').click();
}
);
