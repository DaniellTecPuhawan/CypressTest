describe('Checking 200 response', () => {

    it('Visit', () => {
        
      cy.wait(2500)

      cy.visit('https://clubcliente.aena.es/AenaClub/es/sessionFinished'); //Access to the web

      cy.wait(2500)

      cy.request('https://clubcliente.aena.es/AenaClub/es/sessionFinished') // Check HTTP status

        .its('status') // If the status

        .should('eq', 200); //If is 200

      cy.get('#slider-home > div.owl-stage-outer > div > div.owl-item.active > div > div > div > div > div.div-title > h2 > span').contains('Enjoy').should('be.visible'); 
      
      // Checks the span if contains 'Enjoy'

    });
  });
  