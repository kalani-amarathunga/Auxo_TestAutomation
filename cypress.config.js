import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 20000, // 20 seconds
    pageLoadTimeout: 20000,       // 20 seconds

    // ✅ Enable video recording
    video: true,

    // ✅ Enable screenshot capture on failure
    screenshotOnRunFailure: true,

    // ✅ Add environment variable for base URL
    env: {
      baseUrl: 'https://dev.workshop.auxosoftware.com/',
      authOrigin: 'https://dev.auth.auxosoftware.com',

    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // Optional: Customize where videos and screenshots are saved
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
});