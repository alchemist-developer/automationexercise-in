import { Before } from '@badeball/cypress-cucumber-preprocessor'

Before({ tags: '@authenticated' }, () => {
    cy.login()
})
