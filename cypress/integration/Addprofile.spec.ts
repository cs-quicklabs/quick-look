describe('Add Profile test cases', function () {
    beforeEach(() => {
      cy.commonLogin()
      cy.get('[data-cy="Bio"]').click({force:true})
    })
    it('Validate Content on Bio Page ',()=>{
      cy.contains('Update Your')
      cy.contains('Tell us about yourself')
      cy.contains('Location')
      cy.contains('Occupation')
      cy.contains('Company')
      cy.contains('Education')

    })
    it('Add Bio',()=>{
        cy.get('#description').type('I am Divanshu Gupta . Currently living in Noida . I have 1.9 years of Expereince. I have done BCA from HIMT')
        cy.get(':nth-child(2) > .mt-1 > #project-name').type('Noida')
        cy.get('#occupation').type("QA")
        cy.get(':nth-child(4) > .mt-1 > #project-name').type('Crownstack')
        cy.get(':nth-child(5) > .mt-1 > #project-name').type('BCA')
        cy.get('.flex-shrink-0 > .ml-4').click()
        cy.get('.justify-between > .ml-3').click()

    })
})