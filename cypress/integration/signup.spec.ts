describe("Signup test", function () {

  beforeEach(() => {
    cy.visit('/auth/signup');
  });

  after(() => {
    cy.visit('/');
  });

  it("verifies all the elements in the sign up page", () => {
    cy.contains("Create new Account");
    cy.contains("No credit card required. Starting with free plan.");
    cy.contains('First Name');
    cy.get('[data-cy="firstName"]').should("exist");
    cy.contains('Last Name');
    cy.get('[data-cy="lastName"]').should("exist");
    cy.contains('Choose your Profile ID');
    cy.get('[data-cy="profileId"]').should("exist");
    cy.contains('Email address');
    cy.get('[data-cy="email"]').should("exist");
    cy.contains('Password');
    cy.get('[data-cy="password"]').should("exist");
    cy.contains('Confirm Password');
    cy.get('[data-cy="confirmPassword"]').should("exist");
    cy.get('button[type="submit"]')
      .contains("Create New Account")
      .should("exist")
      .should("be.enabled");
  });

  it("should not signup with invalid credentials ", () => {
    cy.fixture("invalid-signup.json").then((user) => {
      cy.signup(
        user.firstName,
        user.lastName,
        user.profileId,
        user.email,
        user.password,
        user.confirmPassword
      );
    });
    cy.contains("First Name must be less than 18 characters.").should(
      "be.visible"
    );
    cy.contains("Only alphabets allowed.").should("be.visible");
    cy.contains("Profile Id should be atleast 6 charcaters long.").should("be.visible");
    cy.contains("Invalid email address.").should("be.visible");
    cy.contains("Whitespaces are not allowed.").should(
      "be.visible"
    );
    cy.contains("Password does not match.").scrollIntoView().should("be.visible");
  });

  it("should signup with valid credentials ", () => {
    cy.fixture("valid-signup.json").then((user) => {
      cy.signup(
        user.firstName,
        user.lastName,
        user.profileId,
        user.email,
        user.password,
        user.confirmPassword
      );
    });
  });

  it("should not sign up with already taken profile id", () => {
    cy.fixture("valid-signup.json").then((user) => {
      cy.signup(
        user.firstName,
        user.lastName,
        user.profileId,
        user.email,
        user.password,
        user.confirmPassword
      );
    });
    cy.contains("This ID has already been taken. Please choose another.");
  });

  // it("should not sign up with already taken email address", () => {
  //   cy.fixture("valid-signup.json").then((user) => {
  //     cy.signup(
  //       user.firstName,
  //       user.lastName,
  //       user.profileId,
  //       user.email,
  //       user.password,
  //       user.confirmPassword
  //     );
  //   });
  //   cy.contains("Email already exists.");
  // });

});