describe('First test', () => {

    it('Visit Google And Checks The Title', () => {

      cy.visit('https://www.google.com');
      cy.log('Cargando Google');
      cy.wait(2000)

      cy.title().should('include', 'Google');
      cy.log('Confirmamos que accedimos a la web correcta');
      cy.wait(2000)

      cy.get('#L2AGLb > div').click();
      cy.log('Aceptamos las cookies');
      cy.wait(2000)

      cy.get('#gbwa > div').click();
      cy.wait(2000)

      cy.get('#APjFqb').type('cypressJS');

      cy.wait(2000)

       

    });
  });
  


  