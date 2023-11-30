
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in user.
     * @example cy.login()
     */
    login(): Chainable<Element>;
  }
}
