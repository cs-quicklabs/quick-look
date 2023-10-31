describe('Social Links Test Cases', () => {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Social Links"]').click()
  })

  it('Add social media link', () => {
    cy.contains('Add Social Profile Links')
    cy.contains(
      'Select social profile links which you want to share on your profile'
    )
    cy.contains('NO LINKS ADDED YET')
    cy.contains('Please add social links by clicking on button below')
    cy.get('[data-cy="addSocialProfileButton"]').click()

    cy.contains('Add Social Profile Links')
    cy.contains(
      'Select social profile links which you want to share on your profile'
    )
    cy.contains('Select Social Profile')
    cy.get('#addlink').click({force:true}).type(`facebook.com/,${Cypress.env('user')}`)
    cy.get('[data-cy="addProfileButton"]').click()
    cy.get('[data-cy="editSocialButton"]').click()
    cy.get('[data-cy="Facebook-link"]').should('have.value',`facebook.com/,${Cypress.env('user')}`)
    cy.get('[data-cy="Facebook-link"]').clear().type('facebook.com/Raj')
    cy.get('[data-cy="updateSocialLink"]').click()
      
    cy.get('[data-cy="deleteSocialButton"]').click()
    cy.get('[data-cy="deleteSocialLink"]').click()
    
    // cy.get('#headlessui-combobox-input-\:r3\:').click()
    // cy.get('[data-cy="socialProfile-Facebook"]').click()
    // cy.contains('Add Link')
    // cy.get('[data-cy="addLink"]').type('facebook.com/fb-username')
    // cy.get('[data-cy="addProfileButton"]').click()
  })

  // it('Edit social link', () => {
  //   cy.get('[data-cy="editSocialButton"]').click()
  //   cy.get('#editlink').should('have.value', 'facebook.com/fb-username')
  //   cy.contains('Edit Link')
  //   cy.get('[data-cy="Facebook-link"]')
  //     .type('{backspace}')
  //     .type('{backspace}')
  //     .type('{backspace}')
  //     .type('{backspace}')
  //   cy.get('[data-cy="updateSocialLink"]').click()
  // })
})
