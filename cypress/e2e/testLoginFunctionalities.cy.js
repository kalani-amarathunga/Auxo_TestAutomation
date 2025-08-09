import { dashboardPage } from '../support/pages/dashboardPage';
import { loginPage } from '../support/pages/loginPage';


// Main test suite for Auxo software login
describe('Login to Auxo software', function () {

  let user;

  // Load user credentials from fixture before tests run
  before(() => {
    cy.fixture('userData').then((data) => {
      user = data;
    });
  });

  // Visit login page before each test
  beforeEach(() => {
    loginPage.visit();
  });

  // Test: Should log in with valid credentials and redirect to dashboard
  it('should log in with valid credentials and redirect to dashboard', () => {
    loginPage.login(user.username, user.password);
    // Verify that the user is redirected to the dashboard after login
    cy.origin(Cypress.env('baseUrl'), () => {
      cy.url().should('include', 'dashboard');
    });
    dashboardPage.logout();
  });

  // Test: Should show error message with invalid credentials
  it('should display error message when logging in with invalid credentials', () => {
    cy.generateRandomString(12).then((randomUsername) => {
      loginPage.login(randomUsername, 'invalidPassword');
      // Verify that an error message is displayed
      cy.contains('Wrong email or password').should('be.visible');
    });
  });

});