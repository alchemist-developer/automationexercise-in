@api
Feature: Validação de resposta da API Trello

    Scenario: Verificar status e exibir campo list.name
        When o usuário envia uma requisição GET para a API do Trello
        Then o status code da resposta deve ser 200
        And deve ser exibido o valor do campo list.name no log
