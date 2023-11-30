function interactWithChart(testId) {
  cy.get(`[data-testid="${testId}"]`).should('be.visible');
  cy.get(`[data-testid="${testId}"]`).trigger('mousedown', { button: 0 });
  cy.get(`[data-testid="${testId}"]`).trigger('mousemove', { clientX: 100, clientY: 100 });
  cy.get(`[data-testid="${testId}"]`).trigger('mouseup');
}
describe('dashboard test', () => {
  before(() => {
    cy.login();
  });
  it('performs a and checks components', () => {
    cy.visit('');
    // check Dashboard/ecommerce
    cy.contains('Congratulations', { timeout: 4000 }).should('be.visible');

    cy.contains('Statistic').should('be.visible');
    //check categories Statistic
    const categories = ['Sales', 'Customers', 'Products', 'Revenue'];
    categories.forEach(($category) => {
      cy.contains($category).should('be.visible');
    });

    cy.contains('Orders').should('be.visible');
    interactWithChart('order-chart');

    cy.contains('Profit').should('be.visible');
    interactWithChart('profit-chart');

    cy.contains('Earnings').should('be.visible');
    interactWithChart('earnings-chart');

    cy.contains('Revenue Report').should('be.visible');
    interactWithChart('revenue-report-chart');

    cy.contains('Budget').should('be.visible');
    interactWithChart('budget-chart');

    //check categories company
    const companyCategories = ['COMPANY', 'CATEGORY', 'VIEWS', 'REVENUE', 'SALES'];
    companyCategories.forEach(($category) => {
      cy.contains($category).should('be.visible');
    });

    cy.contains('Goal Overview').should('be.visible');
    cy.contains('Transaction').should('be.visible');

    // check Dashboard/analytiscs
    cy.get('nav').contains('Dashboard').click();
    cy.get('nav').contains('Analytics').click();
    cy.url().should('include', '/dashboard/analitics');
    cy.contains('Congratulations').should('be.visible');
    cy.contains('Support Tracker').should('be.visible');
    interactWithChart('support-tracker-chart');

    cy.contains('Orders Received').should('be.visible');
    interactWithChart('orders-chart');

    cy.contains('Subscribers Gained').should('be.visible');
    interactWithChart('subscribers-chart');

    cy.contains('Sales').should('be.visible');
    interactWithChart('sales-chart');

    const components = ['User Timeline', 'App design'];
    components.forEach(($component) => {
      cy.contains($component).should('be.visible');
    });

  });
});
