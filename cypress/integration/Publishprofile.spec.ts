describe('Add SpotLight button test cases', function () {
    beforeEach(() => {
      cy.commonLogin()
    })
    it('Publish',()=>{

        cy.get('.w-full > .flex-1').then(($status) => {
            const currentState =$status.text();

            if (currentState === 'Your profile is live') {
                // Click the "Unpublish" button
                cy.contains('Unpublish').click()
                cy.get('form > .inline-flex').click()
              
              } 
              else {
                cy.contains('Publish').click()
                cy.get('form > .inline-flex').click()
              }
              

            });

            })
            it('Account not publish should give error message',()=>{
               
                cy.contains("Your profile needs publishing")
                cy.visit("http://localhost:3000/auth/error")
           
                });
})