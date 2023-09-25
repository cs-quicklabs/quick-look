# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:
From your terminal:

```sh
npm install
```

After installing all dependencies, make sure all required env variables are locally setup, like -

```sh
Local postgres database setup
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## Running Cypress Tests

`→` To run Cypress tests, you can use the following commands:

To open the Cypress Test Runner for interactive test execution:
This will open the Cypress Test Runner GUI, allowing you to select and run individual tests interactively.

```sh
npx cypress:open
```

`→` To run Cypress tests headlessly in the terminal:

```sh
npx cypress:run
```

## Writing Cypress Test Cases

`→` Here are some instructions and best practices for writing effective Cypress test cases:
Plan Your Tests:

Identify Scenarios: Start by identifying the user scenarios and interactions you want to test. Consider both positive and negative scenarios.

Prioritize Critical Paths: Prioritize testing critical paths and features that are essential for your application's functionality and user experience.

`→` Organize Your Tests:

Create Separate Test Files: Organize your tests into separate files based on features or functionality. Cypress tests are typically placed in the cypress/integration directory.

Use Descriptive Test Names: Give your test cases clear and descriptive names that reflect the behavior being tested.

Interact with Elements:
Use Cypress Commands: Utilize Cypress commands like cy.get(), cy.click(), cy.type(), and cy.select() to interact with elements on the page.

Avoid Using Fixed Wait Times: Minimize the use of fixed cy.wait() times in your tests. Instead, use assertions to ensure that the elements or conditions you are waiting for are present or meet specific criteria.
