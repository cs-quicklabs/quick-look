describe('Add SpotLight button test cases', function () {
  beforeEach(() => {
    cy.commonLogin()
    cy.get('[data-cy="Spotlight Button"]').click()
  })

  it('validate SpotLight button', () => {
    cy.contains('Add Spotlight Button to your profile')
    cy.contains('What do you want your spotlight button to say?')
    cy.contains('Select Color For Button')
    cy.get('[data-cy="bg-blue-500"]').click()
    cy.contains('Or enter Hex Code')
    cy.get('[data-cy="addSpotlightHex"]').type('#59ba9d')
    cy.contains('Select an icon for spotlight button (optional)')
    cy.get('[data-cy="addSpotlightIcon"]').type('chevron-double-up')
    cy.contains(
      'Please provide download path of file which you want visiter to download'
    )
    cy.contains('Show spotlight button')
    cy.get('[data-cy="ToggleSpotlight"]').click()
    cy.get('[data-cy="addSpotlightButton"]').click()
    cy.contains('Required')
    cy.contains('Hexcode will be given priority')
  })

  it('Should be able to add SpotLight button', () => {
    cy.contains('Add Spotlight Button to your profile')
    cy.contains('What do you want your spotlight button to say?')
    cy.get('[data-cy="addSpotlightText"]').type('SpotLight')
    cy.contains('Or enter Hex Code')
    cy.get('[data-cy="addSpotlightHex"]').type('#59ba9d')
    cy.contains('Select an icon for spotlight button (optional)')
    cy.get('[data-cy="addSpotlightIcon"]').type('chevron-double-up')
    cy.contains(
      'Please provide download path of file which you want visiter to download'
    )
    cy.get('[data-cy="addSpotlightLink"]').type('https://www.youtube.com/results?search_query=testqa')
    cy.contains('Show spotlight button')
    cy.get('[data-cy="ToggleSpotlight"]').click()
    cy.get('[data-cy="addSpotlightButton"]').click()
 
    // cy.url().should('include',`${Cypress.env('baseUrl')}/account`)
    // cy.contains('Add Spotlight Button to your profile')
    // cy.contains('What do you want your spotlight button to say?')
    // cy.get('[data-cy="addSpotlightText"]').type('SpotLight')
    // cy.contains('Or enter Hex Code')
    // cy.get('[data-cy="addSpotlightHex"]').type('#59ba9d')
    // cy.contains('Select an icon for spotlight button (optional)')
    // cy.get('[data-cy="addSpotlightIcon"]').type('chevron-double-up')
    // cy.contains(
    //   'Please provide download path of file which you want visiter to download'
    // )
    // cy.get('[data-cy="addSpotlightLink"]').type('www.template.com')
    // cy.contains('Show spotlight button')
    // cy.get('[data-cy="ToggleSpotlight"]').click()
    // cy.get('[data-cy="addSpotlightButton"]').click()
    //edit
    
  })

  it('Should be able to edit SpotLight button', () => {
    cy.contains('Add Additional Links to your profile')
    cy.get('[data-cy="editExistingSpotlight"]').click()
    cy.contains('Edit Spotlight Button on your profile')
    cy.contains('What do you want your spotlight button to say?')
    cy.get('[data-cy="addSpotlightText"]').clear().type('EditSpotLight')
    cy.contains('Select Color For Button')
    cy.get('[data-cy="bg-blue-500"]').click()
    cy.contains('Or enter Hex Code')
    cy.get('[data-cy="addSpotlightHex"]').clear()
    cy.contains('Select an icon for spotlight button (optional)')
    cy.get('[data-cy="addSpotlightIcon"]').clear().type('bell')
    cy.get('[data-cy="SelectAction"]').click()
    cy.get('[data-cy="Let people email me"]').click()
    cy.contains('Please Enter your Email Id')
    cy.get('[data-cy="addSpotlightLink"]')
      .clear()
      .type('Another Link Goes here')
    cy.contains('Show spotlight button')
    cy.get('[data-cy="ToggleSpotlight"]').click()
    cy.get('[data-cy="addSpotlightButton"]').click()
  })
  it('Should be able to delete spotlight button', () => {
    cy.get('[data-cy="deleteSpotlightButton"]').click()
    cy.contains('Delete Spotlight')
    cy.get('[data-cy="deleteSpotlightModalButton"]').click()
  })
})
