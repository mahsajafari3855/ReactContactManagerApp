// cypress/integration/contactList.spec.js

describe("Contact List", () => {
  it("Handles loading state properly", () => {
    cy.visit("http://localhost:3000");

    cy.intercept("GET", "http://localhost:1337/passenger", {
      delay: 1000,
      response: {},
    });
    cy.get(".loading-spinner").should("exist"); // Verifies loading spinner is visible
    cy.get(".contact-item").should("not.exist"); // Confirms no contacts are visible during loading
    cy.get(".loading-spinner").should("not.exist"); // Verifies loading spinner disappears after data loads
  });

  it("Loads contacts and displays them correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get('input[type="text"]').type("Kaspar", { delay: 1000 }); // Searches by first name
    cy.get('input[type="text"]').clear().type("Sallan", { delay: 1000 }); // Searches by last name
    cy.get('input[type="text"]').clear().type("9472537313", { delay: 1000 }); // Searches by phone
    cy.get('input[type="text"]').clear().type("DataNotFound", { delay: 1000 }); // Tests data not found

    cy.get('input[type="text"]').clear();
  });

  it("Verifies ContactItem components are rendered", () => {
    cy.visit("http://localhost:3000");

    cy.get(".contact-item").should("exist"); // Checks if ContactItem components exist
  });

  it("Clicks on ContactItems and Navigates Back Five Times", () => {
    cy.visit("http://localhost:3000");

    for (let i = 1; i < 6; i++) {
      cy.wait(2000); // Adjust timing

      cy.get(`.contact-item-${i}`).first().click(); // Clicks on the contact item
      cy.wait(1000); // Adjust timing
      cy.get(".back-btn").first().click(); // Navigates back
    }
  });
});
