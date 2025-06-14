import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When('o usuário adiciona o produto ao carrinho', () => {
    cy.clickAddToCartForFirstProduct()
})

When('usuário acessa o carrinho de compras através do botão "view cart"', () => {
    cy.clickViewCartInModal()
})

Then('o carrinho deve conter as colunas "Item", "Product", "Price", "Quantity" e "Total"', () => {
    cy.assertCartTableHeaders()
})

Then('modal é aberto informando que o produto foi adicionado', () => {
    cy.assertAddToCartModalIsVisible()
})

Then('a API retorna que o produto está presente no carrinho', () => {
    cy.validateProductAddedToCartApi()
})

Then('a imagem do produto deve estar visível', () => {
    cy.assertProductImage()
})

Then('o nome do produto deve estar visível', () => {
    cy.assertProductName()
})

Then('a categoria e o gênero do produto devem estar visíveis', () => {
    cy.assertProductCategoryAndGender()
})

Then('o preço do produto deve estar visível', () => {
    cy.assertProductPrice()
})

Then('a quantidade do produto deve estar visível', () => {
    cy.assertProductQuantity()
})

Then('o valor total do produto deve estar visível', () => {
    cy.assertProductTotal()
})
