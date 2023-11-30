describe('eCommerce test', () => {
  before(() => {
    cy.login();
  });
  it('performs a and checks components', () => {
    cy.visit('');
    cy.get('nav').contains('eCommerce').click();
    cy.get('nav').contains('Shop').click();
    cy.get('input[placeholder="Search"]').type('backpack');
    cy.get('[data-testid="item-title"]').each(($el) => {
      expect($el.text().toLowerCase()).to.include('backpack');
    });
    cy.get('input[placeholder="Search"]').clear();
    cy.get('button').contains('Add to Cart').first().click();
    cy.get('button').contains('Add to Cart').last().click();
    cy.get('[data-testid="cart-icon"]').click({ force: true });
    cy.get('[data-testid="my-cart"] > div').should('have.length.at.least', 2);
    cy.get('[data-testid="cart-item-0"]').trigger('mouseover');
    cy.get('[data-testid="delete-item-0-from-cart"]').click({ force: true });
    cy.get('button').contains('Checkout').click();
    cy.get('[data-testid="checkout-items"]').should('have.length.at.least', 1);
    cy.url().should('include', '/ecommerce/checkout');
    cy.get('button').contains('Place Order').click();
    cy.get('input[id="fullName"]').type('Test Test');
    cy.get('input[id="address"]').type('testtest');
    cy.get('input[id="city"]').type('testtest');
    cy.get('input[id="state"]').type('testtest');
    cy.get('input[id="zipCode"]').type('12345');
    cy.get('input[id="phone"]').type('123456789');
    cy.get('button').contains('Save and Deliver here').click();
    cy.get('button').contains('Deliver to this Adress').click();
  });
});
