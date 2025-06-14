export const cartPage = {
    elements: {
        cartTable: () => cy.get('#cart_info td'),
        productName: () => cy.get('#cart_info .cart_description > h4'),
        productDescription: () => cy.get('#cart_info .cart_description > p'),
        productImage: () => cy.get('#cart_info .product_image'),
        productPrice: () => cy.get('#cart_info .cart_price'),
        productQuantity: () => cy.get('#cart_info .cart_quantity'),
        productTotal: () => cy.get('#cart_info .cart_total'),
    },

    checkTableHeadersAreVisible() {
        this.elements.cartTable()
        cy.contains('Item').should('be.visible')
        cy.contains('Description').should('be.visible')
        cy.contains('Price').should('be.visible')
        cy.contains('Quantity').should('be.visible')
        cy.contains('Total').should('be.visible')
        cy.log('Cabeçalhos da tabela do carrinho visíveis.')
    },

    checkProductNameIsVisible(alias = 'existingProduct') {
        cy.fixture('products').then(({ [alias]: { name } }) => {
            this.elements.productName()
                .should('contain.text', name)
                .and('have.length', 1)
            cy.log(`Descrição do produto visível: "${name}".`)
        })
    },

    checkProductCategoryAndGenderAreVisible(alias = 'existingProduct') {
        cy.fixture('products').then(({ [alias]: { gender, category } }) => {
            const expectedText = `${gender} > ${category}`
            this.elements.productDescription()
                .should('contain.text', expectedText)
                .and('have.length', 1)
            cy.log(`Categoria e gênero do produto visíveis: "${expectedText}"`)
        })
    },

    checkProductImageIsVisible() {
        this.elements.productImage()
            .should('be.visible')
            .and('have.length', 1)
        cy.log('Imagem do produto visível no carrinho.')
    },

    checkProductPriceIsVisible(alias = 'existingProduct') {
        cy.fixture('products').then(({ [alias]: { price } }) => {
            this.elements.productPrice()
                .contains(price)
                .should('be.visible')
                .and('have.length', 1)
            cy.log(`Preço do produto visível: "${price}".`)
        })
    },

    checkProductQuantityIsVisible(alias = 'existingProduct') {
        cy.fixture('products').then(({ [alias]: { quantity } }) => {
            this.elements.productQuantity()
                .contains(quantity)
                .should('be.visible')
                .and('have.length', 1)
            cy.log(`Quantidade visível: "${quantity}".`)
        })
    },

    checkProductTotalIsVisible(alias = 'existingProduct') {
        cy.fixture('products').then(({ [alias]: { price, quantity } }) => {
            const total = price * quantity
            this.elements.productTotal()
                .contains(`Rs. ${total}`)
                .should('be.visible')
                .and('have.length', 1)
            cy.log(`Total do carrinho visível: "${total}".`)
        })
    }
}
