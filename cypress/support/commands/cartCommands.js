import { cartPage } from '../pages/cartPage'

Cypress.Commands.add('assertCartTableHeaders', () => {
    cartPage
        .checkTableHeadersAreVisible()
})

Cypress.Commands.add('assertProductImage', () => {
    cartPage
        .checkProductImageIsVisible()
})

Cypress.Commands.add('assertProductCategoryAndGender', (alias = 'existingProduct') => {
    cartPage
        .checkProductCategoryAndGenderAreVisible(alias)
})

Cypress.Commands.add('assertProductPrice', (price) => {
    cartPage
        .checkProductPriceIsVisible(price)
})

Cypress.Commands.add('assertProductQuantity', (quantity) => {
    cartPage
        .checkProductQuantityIsVisible(quantity)
})

Cypress.Commands.add('assertProductTotal', (total) => {
    cartPage
        .checkProductTotalIsVisible(total)
})

Cypress.Commands.add('assertProductName', (alias = 'existingProduct') => {
    cartPage
        .checkProductNameIsVisible(alias)
})
