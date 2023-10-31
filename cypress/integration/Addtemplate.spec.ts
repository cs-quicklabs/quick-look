import { invoke } from "cypress/types/lodash"

describe('Add template', () => {
    beforeEach(() => {
      cy.commonLogin()
      cy.get('[data-cy="Design Templates"]').click()
    })
    it('select template',()=>{
        cy.contains('Select Template')
        cy.contains('Select how you want your profile to look like. Click on Toggle button to view in mobile and Desktop mode')
        cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div/div/div/div/div[2]/div[2]/button/img').click()
       
        cy.contains('Change Template')
        cy.contains('Are you sure you want to change your profile template?')
        cy.get('[data-cy="confirmBtn"]').click()
        cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div/div[1]/div/div/div[2]/div[2]/div/div/div/div/div/div[2]/div[3]/button/img').click()
        cy.contains('Change Template')
        cy.contains('Are you sure you want to change your profile template?')
        cy.get('[data-cy="confirmBtn"]').click()
        cy.get('.justify-between > .ml-3').click()

    })
})