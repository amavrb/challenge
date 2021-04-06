beforeEach(() => {
  cy.visit(Cypress.env('baseUrl'));
});

describe('List Employees', () => {
  describe('Filter function', () => {
    it('Filters by name', function () {
      cy.get(`[data-test=filterSearchForm]`).should('be.visible');
      cy.get(`[data-test=filterSearchInput]`).type('Agron');
      cy.get(`[data-test=filterSearchForm]`).submit();
      cy.get(`[data-test^=employeeCard]`).first().should('contain', 'Agron');
    });
    it('Filters by office', function () {
      cy.get(`[data-test=filterSearchForm]`).should('be.visible');
      cy.get(`[data-test=filterSearchInput]`)
        .should('be.visible')
        .type('Stockholm');
      cy.get(`[data-test=filterSearchForm]`).submit();
      cy.get(`[data-test^=employeeCard]`).each(($el) => {
        expect($el).to.contain('Stockholm');
      });
    });
  });
});
