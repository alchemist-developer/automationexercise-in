Cypress.Commands.add('navigateTo', (path) => {
    cy.visit(path)
        .url().should('include', path)
})
