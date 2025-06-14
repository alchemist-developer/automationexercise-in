import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('o usuário está autenticado na página de produtos', () => {
    cy.navigateTo('/products')
})

When('o usuário digita o nome de um produto inexistente no campo de busca', () => {
    cy.searchInvalidProduct()
})

When('o usuário digita o nome de um produto existente no campo de busca', () => {
    cy.searchValidProduct()
})

When('clica no botão de busca', () => {
    cy.clickSearchButton()
})

Then('nenhum card com produto é exibido', () => {
    cy.assertNoProductIsDisplayed()
})

Then('o resultado da busca é exibido contendo o produto esperado', () => {
    cy.assertValidProductIsDisplayed()
})
