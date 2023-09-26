describe('Add SpotLight button test cases', function () {
    beforeEach(() => {
      cy.commonLogin()
      cy.get('[data-cy="profile-menu"]').click()
      })
//     it('publish',()=>{
//       cy.contains('Profile Settings').click()
//       cy.contains('Settings').click()
//         cy.contains('Publish my account').click()

        

//       cy.get('form > .inline-flex').click()
//     })
// })



  it('should toggle the profile publish state', () => {
    // Visit the profile page
    cy.contains('Profile Settings').click()
    cy.contains('Settings').click()
   

    // Check the current state of the profile (assuming there's an indicator)
    cy.get('.py-6 > .text-lg').then(($status) => {
      const currentState =$status.text();

      // Determine whether to publish or unpublish based on the current state
      if (currentState === 'Unpublish your Account') {
        // Click the "Unpublish" button
        cy.contains('Unpublish my account').click()
        cy.get('form > .inline-flex').click()
      } else if (currentState === 'Unpublished') {
        // Click the "Publish" button
        cy.get('.publish-button').click();
      } else {
      cy.contains('Settings').click()
        cy.contains('Publish my account').click()
        cy.get('form > .inline-flex').click()
      }
    });

    // Optionally, add assertions or validation to confirm the state change
  })
})
