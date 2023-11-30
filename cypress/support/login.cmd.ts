Cypress.Commands.add('login', () => {
  cy.session('userSession', () => {
    cy.visit('/');
    cy.url().should('include', '/unauthorized');
    cy.get('button').contains('Log In').click();
    cy.url().should('include', '/login');
    cy.get('input[type="email"]').clear().type('test@test.com');
    cy.get('input[type="password"]').clear().type('testtest');
    cy.get('button').contains('Log In').click();
    cy.url().should('include', '/dashboard');
  });
});
