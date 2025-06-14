@auth
Feature: Login de usuário

    Background:
        Given a página de login é acessada

    Scenario: Login com credenciais inválidas
        When o email e senha inválidos são informados
        Then é exibida mensagem de erro de credenciais inválidas
        And o usuário permanece na página de login

    Scenario: Login com credenciais válidas
        When o email e senha válidos são informados
        Then não é exibida mensagem de erro ao logar
        And o usuário é redirecionado para a página inicial
        And "Loggen in as" é exibido na página inicial com o nome do usuário
