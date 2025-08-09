class DashboardPage {

  clickCustomerMenu() {
    cy.origin(Cypress.env('baseUrl'), () => {
      cy.get('#ut-side-menu-group-contacts').click();
      cy.contains('Customers').click();
    });
  }

  logout() {
    cy.origin(Cypress.env('baseUrl'), () => {
      cy.get('#ut-top-menu-user-avatar .anticon-caret-down').click();
      cy.get('a#ut-top-menu-logout.logout').first().should('be.visible').click();
    });
  }
}//#ut-top-menu-user-avatar > div:nth-child(2) > span > svg

export const dashboardPage = new DashboardPage();