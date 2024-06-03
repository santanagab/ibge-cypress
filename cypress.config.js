const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
    projectId: "52h3e3",
    e2e: {
        specPattern: "cypress/e2e/features",
        setupNodeEvents(on, config) {
            on("file:preprocessor", cucumber());
        },
    },
});