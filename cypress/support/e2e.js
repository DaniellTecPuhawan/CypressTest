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
import './commands'

// cypress/support/e2e.js

cy.on('uncaught:exception', (err, runnable) => {
    // Si el error es el que estamos buscando, lo ignoramos
    if (err.message.includes("Cannot read properties of undefined (reading 'screen')")) {
        console.log('Error ignorado:', err.message);
        return false; // Evita que Cypress falle la prueba
    }
    // Si es otro error, lo lanzamos
    return true;
});