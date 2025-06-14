import { Before, After } from '@badeball/cypress-cucumber-preprocessor'

Before({ tags: '@deleteProductBefore' }, () => {
    cy.deleteProductFromCartApi()
})

After({ tags: '@deleteProductAfter' }, () => {
    cy.deleteProductFromCartApi()
})
