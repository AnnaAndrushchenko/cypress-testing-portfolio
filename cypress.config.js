const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'h37bpz',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

