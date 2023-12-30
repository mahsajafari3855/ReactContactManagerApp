//cypress/integration/contactList.spec.js

describe("ContactList Component", () => {
  it("Loads contacts and displays them correctly", () => {
    cy.visit("http://localhost:3002"); // Replace with your app's URL

    cy.get('input[type="text"]').type("Kaspar", { delay: 1000 }); // search by first_name
    cy.get('input[type="text"]').clear().type("sallan", { delay: 1000 }); //search by last_name
    cy.get('input[type="text"]').clear().type("9472537313", { delay: 1000 }); //search by phone
    cy.get('input[type="text"]').clear().type("DataNotFound", { delay: 1000 }); //test data not found

    cy.get('input[type="text"]').clear();
  });
});
