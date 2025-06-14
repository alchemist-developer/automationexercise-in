@authenticated @deleteProductBefore @deleteProductAfter @cart
Feature: Adicionar produto ao carrinho

    Background:
        Given o usuário está autenticado na página de produtos

    Scenario: Incluir um produto no carrinho com sucesso
        When o usuário digita o nome de um produto existente no campo de busca
        And clica no botão de busca
        And o resultado da busca é exibido contendo o produto esperado
        And o usuário adiciona o produto ao carrinho
        Then modal é aberto informando que o produto foi adicionado
        And a API retorna que o produto está presente no carrinho
