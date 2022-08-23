import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    "viewportWidth": 1024,
    "viewportHeight": 768,
    // "experimentalSessionAndOrigin": true,
    env: {
      commandDelay: 1000,
    },
    // "chromeWebSecurity": false,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },

  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "webpack",
  //   },
  // },
});
