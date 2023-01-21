import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1024,
    viewportHeight: 768,
    // "experimentalSessionAndOrigin": true,
    env: {
      commandDelay: 1000,
    },
    specPattern: [
      "cypress/integration/*.spec.ts",
    ],
    chromeWebSecurity: false,
  },
});
