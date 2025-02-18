// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js o cypress/support/index.js



Cypress.Commands.add('ignoreScreenError', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Cannot read properties of undefined (reading 'screen')")) {
            console.log('Error ignorado:', err.message);
            return false; // Evita que Cypress falle la prueba
        }
        return true;
    });
});