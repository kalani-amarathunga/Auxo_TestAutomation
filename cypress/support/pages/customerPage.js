class CustomerPage {

  addNewCustomer(firstName, lastName, mobileNumber, phoneNumber, email) {
    cy.origin(
      Cypress.env('baseUrl'),
      {
        args: [firstName, lastName, mobileNumber, phoneNumber, email]
      },
      ([firstName, lastName, mobileNumber, phoneNumber, email]) => {
        // use the args here
        cy.get('#ut-list-add-entity-button').click();
        cy.get('input[name="customer.firstName"]').type(firstName);
        cy.get('input[name="customer.lastName"]').type(lastName);
        cy.get('input[name="customer.mobileNumber"]').type(mobileNumber);
        cy.get('input[name="customer.phoneNumber"]').type(phoneNumber);
        cy.get('input[name="customer.email"]').type(email);
        cy.get('#ut-create-customer').click();
      }
    );
  }
}

export const customerPage = new CustomerPage();