const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '62u9fc',
  e2e: {
    baseUrl: "https://katalon-demo-cura.herokuapp.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "62u9fc"
    }
    }
});
