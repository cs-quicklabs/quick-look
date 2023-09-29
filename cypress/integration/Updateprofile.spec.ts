describe('Update profile Test Cases', () => {
    beforeEach(() => {
      cy.commonLogin()
      cy.get('[data-cy="profile-menu"]').click()
    })

    it('CLick and Update on Profile',()=>{
        cy.contains('Profile Settings').click()
        cy.get('#lastname').clear().type('Singh')
        cy.get('#profileId').clear().type(`${Cypress.env('renameuser')}`)
        cy.get('.mb-8 > .inline-flex').click()
        
    })

    it('change Password',()=>{
        cy.contains('Profile Settings').click()
        cy.get('input[name=oldpassword]').type(Cypress.env('password'))
        cy.get('input[name=newpassword]').type(`${Cypress.env('newpassowrd')}`)
        cy.get('input[name=confirmnewpassword]').type(`${Cypress.env('newpassowrd')}`)
        cy.get('.py-9 > .inline-flex').click()
        

    })
})