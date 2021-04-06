describe('API tests', () => {
  describe('smoke test api.1337co', () => {
    it('tests the connection', function () {
      cy.request({
        url: `${Cypress.env('apiServer')}${Cypress.env('endpoints').employees}`,
        headers: {
          Authorization: `api-key ${Cypress.env('apiKey')}`,
        },
      })
        .its('status')
        .should('eq', 200);
    });
  });
});
