describe('Button Tests', () => {
    it('should check the disabled info button', () => {
        cy.visit(baseUrl + "/main.html");

        // Check that button has the expected classes and is disabled
        cy.get("#button-6")
            .should("have.class", "btn")        // Check for 'btn' class
            .and("have.class", "btn-info")      // Check for 'btn-info' class
            .and("be.disabled");                 // Check for disabled state
    });
});
describe('Button Tests', () => {
    it('should check the disabled info button', () => {
        cy.visit(baseUrl + "/main.html");

        // Check that button has the expected classes and is disabled
        cy.get("#button-6")
            .should("have.class", "btn")        // Check for 'btn' class
            .and("have.class", "btn-info")      // Check for 'btn-info' class
            .and("be.disabled");                 // Check for disabled state
    });
});
