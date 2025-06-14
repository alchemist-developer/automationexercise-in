@authenticated @search
Feature: Buscar por produto

    Background:
        Given o usuário está autenticado na página de produtos

    Scenario: Buscar um produto inexistente
        When o usuário digita o nome de um produto inexistente no campo de busca
        And clica no botão de busca
        Then nenhum card com produto é exibido

    Scenario: Buscar um produto existente
        When o usuário digita o nome de um produto existente no campo de busca
        And clica no botão de busca
        Then o resultado da busca é exibido contendo o produto esperado
