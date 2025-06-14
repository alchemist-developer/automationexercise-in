Cypress.Commands.add('deleteProductFromCartApi', (alias = 'existingProduct') => {
    cy.fixture('products').then(({ [alias]: { id } }) => {
        cy.request({
            method: 'GET',
            url: `/delete_cart/${id}`,
            failOnStatusCode: false
        }).its('body').should('include', 'Cart removed')
            .then(() => {
                cy.log(`Carrinho resetado: Produto removido do carrinho`)
            })
    })
})

Cypress.Commands.add('validateProductAddedToCartApi', (alias = 'existingProduct') => {
    cy.fixture('products').then(({ [alias]: { id, name } }) => {
        cy.request({
            method: 'GET',
            url: '/view_cart',
        }).then(({ body }) => {
            const found = body.includes(id) && body.includes(name)

            expect(found, `${name}`).to.be.true
        })
    })
})

Cypress.Commands.add('getTrelloActionById', () => {
    const actionId = Cypress.env('trelloApi').trelloActionId
    const baseUrl = Cypress.env('trelloApi').trelloApiUrl
    return cy.request({
        method: 'GET',
        url: `${baseUrl}/1/actions/${actionId}`,
    })
})

Cypress.Commands.add('logTrelloListNameFromResponse', (response) => {
    const listName = response.body?.data?.list?.name
    cy.log(`Valor de list.name: ${listName}`)
})
