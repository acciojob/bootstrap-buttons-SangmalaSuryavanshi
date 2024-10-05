//your code here
() => {
    cy.visit(baseUrl + "/main.html");
    cy.get("#button-6")
        .should("have.class", "btn")
        .and("have.class", "btn-info")
        .and("be.disabled"); // Check if the button is disabled
}

