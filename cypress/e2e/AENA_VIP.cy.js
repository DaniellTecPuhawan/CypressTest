const LoginPage = require('./pages/AENA_VIP_Test'); 

describe('Login Tests', () => { 
    it('Should login successfully with valid credentials', () => { 
      LoginPage.navigate(); 
      LoginPage.clickLogin(); 
      //LoginPage.screenLogin
      //LoginPage.enterUsername(Cypress.env('USERNAME')); 
      ////LoginPage.enterPassword(Cypress.env('PASSWORD')); 
      //LoginPage.submitButton(); 

    }); 
});
