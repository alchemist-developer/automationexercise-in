import { productsPage } from '../pages/productsPage'

Cypress.Commands.add('searchValidProduct', () => {
    cy.fixture('products')
        .then(({ existingProduct }) => {
            productsPage
                .fillSearchInput(existingProduct.name)
        })
})

Cypress.Commands.add('searchInvalidProduct', () => {
    cy.fixture('products')
        .then(({ nonExistentProduct }) => {
            productsPage
                .fillSearchInput(nonExistentProduct.name)
        })
})

Cypress.Commands.add('clickSearchButton', () => {
    productsPage.clickSearchButton()
})

Cypress.Commands.add('assertValidProductIsDisplayed', () => {
    cy.fixture('products')
        .then(({ existingProduct }) => {
            productsPage
                .assertProductCardsVisible(existingProduct.name)
        })
})

Cypress.Commands.add('assertNoProductIsDisplayed', () => {
    productsPage.assertNoProductCardsExists()
})

Cypress.Commands.add('clickAddToCartForFirstProduct', () => {
    productsPage.clickAddToCartForFirstProductButton()
})

Cypress.Commands.add('assertAddToCartModalIsVisible', () => {
    productsPage.assertProductAddedModalContent()
})

Cypress.Commands.add('clickViewCartInModal', () => {
    productsPage.viewCartLink()
})
