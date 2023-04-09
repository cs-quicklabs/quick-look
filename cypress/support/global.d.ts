/// <reference types="cypress" />

/// <reference types="cypress-xpath" />

declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): void

    commonLogin(): void

    commonLogout(): void

    signup(
      firstName: string,
      lastName: string,
      profileId: string,
      email: string,
      password: string,
      confirmPassword: string,
      couponCode: string
    ): void
  }
}
