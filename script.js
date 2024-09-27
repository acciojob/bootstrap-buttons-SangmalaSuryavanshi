//your code here
cy.get('#button-5')
  .should('have.class', 'btn')
  .and('have.class', 'btn-warning')
  .and('have.class', 'btn-lg')
  .and('have.class', 'vw-100');