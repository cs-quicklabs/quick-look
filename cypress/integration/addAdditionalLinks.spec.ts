describe("Add SpotLight button test cases", function () {

  beforeEach(() => {
    cy.commonLogin();
    cy.get('[data-cy="Spotlight Button"]').click();
  });

  it("SpotLight button should be there", () => {
    cy.contains("Add Spotlight Button to your profile");
    cy.contains("What do you want your spotlight button to say?")
    cy.get('[data-cy="addSpotlightText"]').type("SpotLight");
    cy.contains("Or enter Hex Code")
    cy.get('[data-cy="addSpotlightHex"]').type("#59ba9d");
    cy.contains("Select an icon for spotlight button (optional)")
    cy.get('[data-cy="addSpotlightIcon"]').type("chevron-double-up");
    cy.contains("Please provide download path of file which you want visiter to download")
    cy.get('[data-cy="addSpotlightLink"]').type("www.template.com");
    cy.contains("Show spotlight button")
    cy.get('[data-cy="ToggleSpotlight"]').click();
    cy.get('[data-cy="addSpotlightButton"]').click();
  });

  it("validate additional link", () => {
    cy.contains("Add Additional Links to your profile");
    cy.contains("ADD MORE ADDITIONAL LINKS");
    cy.get('[data-cy="addAdditionalLinkButton"]').click();
    cy.contains('Select Color For Button');
    cy.contains("Or enter Hex Code");
    cy.get('[data-cy="bg-blue-500"]').click();
    cy.get('[data-cy="linkHex"]').type("#59ba9d");
    cy.contains("Hexcode will be given priority");
    cy.contains("What do you want link to say");
    cy.contains("Add Button link")
    cy.get('[data-cy="addAdditionalLink"]').click();
    cy.contains("Required");
  });

  it("Should be able to add additional link", () => {
    cy.get('[data-cy="addAdditionalLinkButton"]').click();
    cy.contains("Select Color For Button");
    cy.get('.bg-gray-600').click();
    cy.contains("What do you want link to say")
    cy.get('[data-cy="linkText"]').type("My Portfolio");
    cy.contains("Add Button link")
    cy.get('[data-cy="linkUrl"]').type("www.portfolio.com");
    cy.get('[data-cy="addAdditionalLink"]').click();
  });

  it("Should be able to edit additional link", () => {
    cy.get('[data-cy="editExistingAdditionalLink"]').click();
    cy.contains("Edit Link Text")
    cy.get('[data-cy="linkEditText"]').clear().type("My Website");
    cy.contains("Edit Link URL")
    cy.get('[data-cy="linkEditUrl"]').clear().type("www.website.com");
    cy.get('[data-cy="editLinkButton"]').click();
  });

it("Should be able to delete Additional Link", () => {
    cy.get('[data-cy="deleteAdditionalLinkButton"]').click();
    cy.contains("Delete Additional Spotlight Link");
    cy.get('[data-cy="deleteAdditionalLink"]').click();
  });

});