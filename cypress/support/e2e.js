// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-mailosaur";
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('of undefined')
      done()
      return false
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on uncaught exceptions
  // You can add custom logic to ignore specific errors if needed
  if (err.message.includes('Failed to fetch cars')) {
    return false; // Return false to prevent Cypress from failing the test
  }
  return true; // If you want Cypress to still fail on other exceptions, return true
});