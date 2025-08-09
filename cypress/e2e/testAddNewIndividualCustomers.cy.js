// dashboard.cy.js
import userData from '../fixtures/userData.json';
import { dashboardPage } from '../support/pages/dashboardPage';
import { loginPage } from '../support/pages/loginPage';
import { customerPage } from '../support/pages/customerPage';

describe('Navigate to Customers via Contacts menu', () => {

    let user;

    // Load user credentials from fixture before tests run
    before(() => {
        cy.fixture('userData').then((data) => {
            user = data;
        });
    });

    beforeEach(() => {
        loginPage.visit();
    });

    it('Clicks Contacts > Customers link', () => {
        loginPage.login(user.username, user.password);
        dashboardPage.clickCustomerMenu();

        cy.origin(Cypress.env('baseUrl'), () => {
            cy.url().should('include', '/contacts/customers');
            cy.contains('New Customer');
        });
        customerPage.addNewCustomer('Kalanione', 'Amaone', '0211557077', '09111111', 'kalani.amara@gmail.com');

        cy.origin(Cypress.env('baseUrl'), () => {
            cy.contains('Customer created successfully.');
        });
        dashboardPage.logout();

    });
});

