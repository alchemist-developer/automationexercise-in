export const loginPage = {
    elements: {
        emailInput: () => cy.get('[data-qa="login-email"]'),
        passwordInput: () => cy.get('[data-qa="login-password"]'),
        loginButton: () => cy.get('[data-qa="login-button"]'),
    },

    typeEmail(email) {
        this.elements.emailInput().type(email)
    },

    typePassword(password) {
        this.elements.passwordInput().type(password)
    },

    clickLoginButton() {
        this.elements.loginButton().click()
    },

    login(email, password) {
        this.typeEmail(email)
        this.typePassword(password)
        this.clickLoginButton()
    },

    checkUserNameDisplayed(name) {
        cy.contains(`Logged in as ${name}`).should('be.visible')
    },

    checkUrlIsNotLoginPage() {
        cy.url().should('not.include', '/login')
    },

    checkLoginErrorNotVisible() {
        cy.contains('Your email or password is incorrect!').should('not.exist')
    },

    checkLoginErrorVisible() {
        cy.contains('Your email or password is incorrect!')
    },

    checkUrlIsLoginPage() {
        cy.url().should('include', '/login')
    }
}
