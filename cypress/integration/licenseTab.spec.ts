// this test case tests License tab UI and use cases for users..
// who used coupon code or has been given free access by admin

// local dbs should have a user with this cred, having free access or coupon code
const email = 'demo_user@yopmail.com'
const password = 'rUDCd9K8kRFr7A4'

describe('License Tab Test Cases', () => {
  before(() => {
    cy.visit('/')
  })

  it('User Login case', () => {
    cy.intercept('GET', '/account?_data=routes**').as('userData')
    cy.login(email, password)

    cy.wait('@userData').then((val) => {
      const data = val?.response?.body?.user

      cy.visit(`${Cypress.env('baseUrl')}/account/license`)

      if (data?.couponId) {
        cy.get('[data-cy="license-header"]')
          .should('exist')
          .should('be.visible')
        cy.get('[data-cy="license-text"]').should('exist').should('be.visible')
        cy.contains(
          `You have signed up with coupon code ${data?.coupon_code?.code} which allowed you free access and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me`
        )
      } else if (data?.allowed_free_access) {
        cy.get('[data-cy="license-header"]')
          .should('exist')
          .should('be.visible')
        cy.get('[data-cy="license-text"]').should('exist').should('be.visible')
        cy.contains(
          'You have been given free access and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me'
        )
      }
    })
  })
})
