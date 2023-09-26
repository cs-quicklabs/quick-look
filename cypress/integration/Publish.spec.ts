describe('Add SpotLight button test cases', function () {
    beforeEach(() => {
      cy.commonLogin()
      cy.get('[data-cy="profile-menu"]').click()
      })
    it('publish',()=>{
      cy.contains('Profile Settings').click()
      cy.contains('Settings').click()
      cy.contains('Publish my account').click()
      cy.get('form > .inline-flex').click()
    })
})