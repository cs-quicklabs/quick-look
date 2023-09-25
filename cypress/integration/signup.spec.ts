import { faker } from '@faker-js/faker'

describe('Signup test', function () {
  let signupDetails: {
    fname: string
    lname: string
    email: string
    profileId: string
    password: string
    confirmPassword: string
    verifyEmail: string
  }
  before(function () {
    const fname = faker.random.alpha(6)
    const lname = faker.random.alpha(7)
    const email = fname + lname + `@yopmail.com`
    const profileId = faker.random.alpha(8)
    const password = faker.random.alpha(8)
    const confirmPassword = password
    const verifyEmail = fname + lname

    signupDetails = {
      fname,
      lname,
      email,
      profileId,
      password,
      confirmPassword,
      verifyEmail,
    }
  })

  it('verifies all the elements in the sign up page', () => {
    cy.visit('/auth/signup')
    cy.contains('Create new Account')
    cy.contains('No credit card required. Starting with free plan.')
    cy.contains('First Name')
    cy.get('[data-cy="firstName"]').should('exist')
    cy.contains('Last Name')
    cy.get('[data-cy="lastName"]').should('exist')
    cy.contains('Choose your Profile ID')
    cy.get('[data-cy="profileId"]').should('exist')
    cy.contains('Email address')
    cy.get('[data-cy="email"]').should('exist')
    cy.contains('Password')
    cy.get('[data-cy="password"]').should('exist')
    cy.contains('Confirm Password')
    cy.get('[data-cy="confirmPassword"]').should('exist')
    cy.contains('Coupon Code (Optional)')
    cy.get('[data-cy="coupon_code"]')
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
    cy.get('button[type="submit"]')
      .contains('Create New Account')
      .should('exist')
      .should('be.enabled')
  })

  it('should not signup with invalid credentials ', () => {
    cy.visit('/auth/signup')
    cy.fixture('invalid-signup.json').then((user) => {
      cy.signup(
        user.firstName,
        user.lastName,
        user.profileId,
        user.email,
        user.password,
        user.confirmPassword,
        user.couponCode
      )
    })
    cy.contains('First Name must be less than 18 characters.').should(
      'be.visible'
    )
    cy.contains('Only alphabets allowed.').should('be.visible')
    cy.contains('Profile Id should be atleast 6 charcaters long.').should(
      'be.visible'
    )
    cy.contains('Invalid email address.').should('be.visible')
    cy.contains('Whitespaces are not allowed.').should('be.visible')
    cy.contains('Password does not match.')
      .scrollIntoView()
      .should('be.visible')
    cy.contains('This coupon code is invalid or has expired')
      .scrollIntoView()
      .should('be.visible')
  })

  it('should signup with valid credentials ', () => {
    cy.visit('/auth/signup')
    cy.fixture('valid-signup.json').then((user) => {
      cy.signup(
        user.firstName,
        user.lastName,
        user.profileId,
        user.email,
        user.password,
        user.confirmPassword,
        user.couponCode
      )
    })

    cy.xpath('//input[@name="firstName"]')
      .should('be.visible')
      .type(signupDetails.fname)
    cy.xpath('//input[@name="lastName"]')
      .should('be.visible')
      .clear()
      .type(signupDetails.lname)
    cy.xpath('//input[@name="profileId"]')
      .should('be.visible')
      .clear()
      .type(signupDetails.profileId)
    cy.xpath('//input[@name="email"]')
      .should('be.visible')
      .clear()
      .type(signupDetails.email)
    cy.xpath('//input[@name="password"]')
      .should('be.visible')
      .clear()
      .type(signupDetails.password)
    cy.xpath('//input[@name="confirmPassword"]')
      .should('be.visible')
      .clear()
      .type(signupDetails.confirmPassword)
    // will need to create a coupon code named - "TESTCODE" in database
    cy.xpath('//input[@name="coupon_code"]')
      .should('be.visible')
      .clear()
      .scrollIntoView()
      .type('CS100')
    cy.get('[data-cy="createNewAccountButton"]').click()

    cy.writeFile('cypress/fixtures/signUpDetails.json', {
      email: signupDetails.email,
    })
  })

  it('validate verify account', () => {
    //visiting yopmail to verify account.
    cy.visit('www.yopmail.com')
    cy.wait(4000)

    cy.readFile('cypress/fixtures/signUpDetails.json').then((data) => {
      // search for email
      cy.xpath('//input[@class="ycptinput"]')
        .should('be.visible')
        .type(data.email)
      cy.xpath('//i[contains(text(),"")]').click()

      //clicking on confirmation link
      cy.xpath('//iframe[@id="ifmail"]').then(($iframe) => {
        const doc = $iframe.contents()
        cy.wrap(doc.find('#mail > div > a')).click()
      })
    })
  })

  // it("should not sign up with already taken profile id", () => {
  //   cy.visit('/auth/signup');
  //   cy.fixture("valid-signup.json").then((user) => {
  //     cy.signup(
  //       user.firstName,
  //       user.lastName,
  //       user.profileId,
  //       user.email,
  //       user.password,
  //       user.confirmPassword
  //     );
  //   });
  //   cy.contains("This ID has already been taken. Please choose another.");
  // });

  // it("should not sign up with already taken email address", () => {
  //   cy.fixture("valid-signup.json").then((user) => {
  //     cy.signup(
  //       user.firstName,
  //       user.lastName,
  //       user.profileId,
  //       user.email,
  //       user.password,
  //       user.confirmPassword
  //     );
  //   });
  //   cy.contains("Email already exists.");
  // });
})
