const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "f53bnr",
    baseUrl: "https://petstore.swagger.io/v2/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
