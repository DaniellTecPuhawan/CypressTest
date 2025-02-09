
describe('Checking access and response 200', () => {

  const urls = [

    'https://clubcliente.aena.es/AenaClub/es/sessionFinished',

    'https://serviciosvip-empresas.aena.es/empresas/es',

    'https://serviciosvip.aena.es/vip/es/sessionFinished',

    'https://foodtofly.aena.es/es/',

    'https://shoptofly.aena.es/shop/es/',

    'https://aenatravel.aena.es/es/',

    'https://yaparcoyo.com/valet/es'

  ];

  urls.forEach((url) => {

    it(`Visit and check each ${url}`, () => {

      cy.wait(4000)

      cy.visit(url, { timeout: 10000 }); //Add timeout of 10 sec

      cy.wait(4000)

      cy.request(url).its('status').should('eq', 200); //Check HTTP status

      cy.wait(4000)

    });
  });
});
