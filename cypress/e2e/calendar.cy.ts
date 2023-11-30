describe('calendar test', () => {
  before(() => {
    cy.login();
  });
  it('performs a and checks components', () => {
    cy.visit('/calendar');
    cy.url().should('include', '/calendar');
    cy.get('button').contains('Add Event').click();
    cy.get('input[id="title"]').type('testtest');
    cy.get('button[role="combobox"]').eq(0).click();
    cy.get('[role="option"]').contains('Business').click();
    cy.get('input[id="event"]').type('www.testtest.pl');
    cy.get('input[id="place"]').type('testtest');
    cy.get('textarea[id="message"]').type('testtest');
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.reload();
    cy.get('[class="fc-daygrid-event-harness"]').should('have.length.at.least', 1);
    cy.get('button').contains('testtest').click();
    cy.get('button[role="combobox"]').eq(0).click();
    cy.get('[role="option"]').contains('ETC').click();
    cy.get('[class="fc-daygrid-event-harness"]').should('have.length.at.least', 1);
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.reload();
    cy.get('button').contains('testtest').click();
    cy.get('button').contains('Delete').click();
  });
});
