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

// Captura todas las excepciones no atrapadas durante la ejecución de las pruebas
Cypress.on('uncaught:exception', (e) => {
    // Si el mensaje de error incluye "Cannot redefine property: cookie", lo ignoramos
    if (e.message.includes('Cannot redefine property: cookie')) {
        // Retornar false evita que Cypress falle el test
        return false;
    }
    // Si no es el error esperado, lanzamos la excepción
    return true;
});


Cypress.Commands.add('ignoreScreenError', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Cannot read properties of undefined (reading 'screen')")) {
            console.log('Error ignorado:', err.message);
            return false; // Evita que Cypress falle la prueba
        }
        return true;
    });
});