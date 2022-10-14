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
    testFiles: [
      "signup.spec.ts",
      "login.spec.ts",
      "mobileDesktopView.spec.ts",
      "socialLinks.spec.ts",
      "uploadImage.spec.ts",
      "addTestimonial.spec.ts",
      "addVideo.spec.ts",
      "addSpotlight.spec.ts",
      "addSupportBanner.spec.ts",
      "addAdditionalLinks.spec.ts",
      "addPortfolio.spec.ts"
      //...
    ],
    "chromeWebSecurity": false,
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
