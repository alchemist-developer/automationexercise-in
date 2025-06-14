export const productsPage = {
    elements: {
        searchInput: () => cy.get('#search_product'),
        searchButton: () => cy.get('#submit_search'),
        productCards: () => cy.get('.product-image-wrapper'),
        addToCartButton: () => cy.get('.productinfo > .btn'),
        productAddedModal: () => cy.get('.modal-content'),
        productAddedModalContinueButton: () => cy.get('.modal-footer > .btn'),
        viewCartLink: () => cy.get('a > u').contains('View Cart').parent('a')
    },

    fillSearchInput(productName) {
        this.elements.searchInput()
            .clear()
            .type(productName)
    },

    clickSearchButton() {
        this.elements.searchButton().click()
    },

    assertProductCardsVisible(productName) {
        this.elements.productCards()
            .should('have.length', 1)
            .should('contain.text', productName)
    },

    assertNoProductCardsExists() {
        this.elements.productCards()
            .should('have.length', 0)
    },

    clickAddToCartForFirstProductButton() {
        this.elements.addToCartButton()
            .first()
            .click()
    },

    assertProductAddedModalContent() {
        this.elements.productAddedModal()
            .should('be.visible')
            .and('contain.text', 'Added!')
            .and('contain.text', 'View Cart')
            .and('contain.text', 'Your product has been added to cart.')
            .and('contain.text', 'Continue Shopping')

        this.elements.viewCartLink()
            .should('have.attr', 'href')
            .and('include', '/view_cart')
    },

    viewCartLink() {
        this.elements.viewCartLink().click()
    },
}
