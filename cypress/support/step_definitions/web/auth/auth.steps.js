import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('a página de login é acessada', () => {
    cy.navigateTo('/login')
})

When('o email e senha inválidos são informados', () => {
    cy.fillInvalidCredentialsAndSubmit()
})

When('o email e senha válidos são informados', () => {
    cy.fillValidCredentialsAndSubmit()
})

Then('é exibida mensagem de erro de credenciais inválidas', () => {
    cy.assertInvalidCredentialsMessageIsVisible()
})

Then('o usuário permanece na página de login', () => {
    cy.assertUserRemainsOnLoginPage()
})

Then('não é exibida mensagem de erro ao logar', () => {
    cy.assertNoInvalidLoginMessageIsVisible()
})

Then('o usuário é redirecionado para a página inicial', () => {
    cy.assertUserIsOnHomePage()
})

Then('"Loggen in as" é exibido na página inicial com o nome do usuário', () => {
    cy.assertUserNameIsDisplayed()
})
