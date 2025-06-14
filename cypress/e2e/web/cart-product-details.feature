@authenticated @deleteProductBefore @deleteProductAfter @cart
Feature: Validar produto no carrinho

    Background:
        Given o usuário está autenticado na página de produtos

    Scenario: Visualizar corretamente os dados de um produto no carrinho
        When o usuário digita o nome de um produto existente no campo de busca
        And clica no botão de busca
        And o resultado da busca é exibido contendo o produto esperado
        And o usuário adiciona o produto ao carrinho
        And modal é aberto informando que o produto foi adicionado
        And a API retorna que o produto está presente no carrinho
        And usuário acessa o carrinho de compras através do botão "view cart"
        Then o carrinho deve conter as colunas "Item", "Product", "Price", "Quantity" e "Total"
        And a imagem do produto deve estar visível
        And o nome do produto deve estar visível
        And o preço do produto deve estar visível
        And a categoria e o gênero do produto devem estar visíveis
        And a quantidade do produto deve estar visível
        And o valor total do produto deve estar visível
