describe('Login Test Cases', () => {
  let userDetails: {
    invalid_credentials: { email: string; password: string }
    email: string
    password: string
    baseUrl: any
  }
  before(function () {
    cy.fixture('Data').then((user) => {
      userDetails = user
    })
  })

  before(() => {
    cy.visit('/')
  })

  it("verifies all the elements in the login page", () => {
    // cy.get('[data-cy="signInHeader"]').should("exist");
    cy.contains("Sign in").click()
    cy.contains("Sign in to your account");
    cy.contains("Email address");
    // cy.get('[data-cy="loginEmail"]').should("exist");
    cy.contains('Password');
    // cy.get('[data-cy="loginPassword"]').should("exist");
    cy.get('button[type="submit"]')
      .contains("Sign in")
      .should("exist")
      .should("be.enabled");
  });

  it('User login case - invalid credentials', () => {
    cy.login(
      userDetails.invalid_credentials.email,
      userDetails.invalid_credentials.password,
    )
    cy.get("input[name='email']").clear()
    cy.get("input[name='password']").clear()
    cy.contains(
      'Either email or password you entered was not correct. Please try again.'
    )
  })

  it('User Login case', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.url().should('include',`${Cypress.env('baseUrl')}/account`)
     
    
  })

  
})

