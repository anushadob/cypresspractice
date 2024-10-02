//import { defineConfig } from "cypress";


const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter');


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    "baseUrl":"https://the-internet.herokuapp.com",
    //"watchForFileChanges": false,
    //"defaultCommandTimeout": 20000,
    //"pageLoadTimeout": 10000,
    //viewportWidth: 1920,
    //viewportHeight: 1080,
     setupNodeEvents(on, config) {
      // implement node event listeners here
     require('cypress-mochawesome-reporter/plugin')(on); 
     allureCypress(on, config);

      return config;
  
   },
  },
});
