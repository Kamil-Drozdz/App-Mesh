describe('todo test', () => {
  before(() => {
    cy.login();
  });
  it('performs a and checks components', () => {
    //Check todo
    cy.visit('/todo/all');
    cy.url().should('include', '/todo/all');
    cy.get('button').contains('Add Event').click();
    cy.get('input[id="title"]').type('testtest');
    cy.get('button[role="combobox"]').eq(0).click();
    cy.get('[role="option"]').contains('Team').click();
    // cy.get('div').contains('Due Date').click();
    // cy.get('button[tabindex=0]').click();
    cy.get('textarea[id="message"]').type('testtest');
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.reload();
    cy.contains('li', 'Testtest').within(() => {
      cy.get('input[type="checkbox"]').check();
      cy.get('[data-testid="edit-todo"]').click();
    });
    cy.get('input[id="title"]').clear().type('test');
    cy.get('button[role="combobox"]').eq(0).click();
    cy.get('[role="option"]').contains('Low').click();
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.get('input[placeholder="Search todo"]').type('Test');
    cy.get('[data-rbd-droppable-id="todolist"]').should('have.length.at.least', 1);
    cy.get('input[placeholder="Search todo"]').clear();
    cy.get('button').contains('Low').click();
    cy.get('[data-rbd-droppable-id="todolist"]').should('have.length.at.least', 1);
    cy.get('button').contains('Low').click();
    cy.contains('li', 'Test').within(() => {
      cy.get('[data-testid="delete-todo"]').click();
    });
  });
});
