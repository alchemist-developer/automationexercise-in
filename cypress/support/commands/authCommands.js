import { loginPage } from '../pages/loginPage'

Cypress.Commands.add('login', () => {
    cy.session('user-session', () => {
        cy.navigateTo('/login')
            .fillValidCredentialsAndSubmit()
            .url().should('not.include', '/login')
    })
})

Cypress.Commands.add('fillValidCredentialsAndSubmit', () => {
    const { email, password } = Cypress.env('credentials').validUser
    loginPage.login(email, password)
})

Cypress.Commands.add('fillInvalidCredentialsAndSubmit', () => {
    const { email, password } = Cypress.env('credentials').invalidUser
    loginPage.login(email, password)
})

Cypress.Commands.add('assertUserNameIsDisplayed', () => {
    const { name } = Cypress.env('credentials').validUser
    loginPage.checkUserNameDisplayed(name)
})

Cypress.Commands.add('assertInvalidCredentialsMessageIsVisible', () => {
    loginPage
        .checkLoginErrorVisible()
})

Cypress.Commands.add('assertNoInvalidLoginMessageIsVisible', () => {
    loginPage
        .checkLoginErrorNotVisible()
})

Cypress.Commands.add('assertUserIsOnHomePage', () => {
    loginPage
        .checkUrlIsNotLoginPage()
})

Cypress.Commands.add('assertUserRemainsOnLoginPage', () => {
    loginPage
        .checkUrlIsLoginPage()
})
