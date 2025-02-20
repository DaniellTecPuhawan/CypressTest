const LoginPage = require('../e2e/pages/AENA_Travel_Test'); 

describe('Login Tests', () => { 
    it('Should login successfully with valid credentials', () => { 
      LoginPage.navigate(); 
      //LoginPage.interceptClicklogin(); // Activa el interceptor antes de enviar el login
      //LoginPage.interceptSSO();
      LoginPage.clickLogin(); 
      LoginPage.screenLogin
      LoginPage.enterUsername(Cypress.env('USERNAME')); 
      LoginPage.enterPassword(Cypress.env('PASSWORD')); 
      LoginPage.submitButton(); 

     // cy.url().should('include', 'clubcliente.aena'); // Validación final del login
    }); 
});
