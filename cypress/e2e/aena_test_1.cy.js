
describe('Checking 200 response', () => {

    it('Visit', () => {
        
      cy.wait(2500)

      cy.visit('https://clubcliente.aena.es/AenaClub/es/sessionFinished', { timeout: 10000 }); //Access to the web

      cy.wait(2500)

      cy.request('https://clubcliente.aena.es/AenaClub/es/sessionFinished') // Check HTTP status

        .its('status') // If the status

        .should('eq', 200); //If is 200

    });
  });
  