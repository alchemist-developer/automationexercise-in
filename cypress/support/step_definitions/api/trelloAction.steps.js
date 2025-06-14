import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let response

When('o usuário envia uma requisição GET para a API do Trello', () => {
    cy.getTrelloActionById().then((res) => {
        response = res
    })
})

Then('o status code da resposta deve ser {int}', (statusCode) => {
    expect(response.status).to.eq(statusCode)
})

Then('deve ser exibido o valor do campo list.name no log', () => {
    const listName = response.body.data?.list?.name
    cy.log(`Valor de list.name: ${listName}`)
})
