
# Projeto de Automação Web e API com Cypress + Cucumber

Framework de testes E2E automatizados, estruturado com **Cypress 14.4.1**, utilizando **Cucumber (BDD)** para cenários descritivos e executado via **GitHub Actions (CI)**.  

Foco em modularização, reuso, clareza e boas práticas.

---

## ✅ Funcionalidades Automatizadas

### 🌐 Web  
Site: [https://www.automationexercise.com/login](https://www.automationexercise.com/login)

- Login com credenciais válidas  
- Login com credenciais inválidas  
- Busca por produto  
- Inclusão de produto no carrinho  
- Validação de informações de produto no carrinho

### 🔗 API  
Requisição GET para:
```
https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
```

- Validação do campo `list.name`  
- Validação do status code

---

## 🧰 Tecnologias Utilizadas

- Cypress 14.4.1  
- Cypress Cucumber Preprocessor  
- JavaScript (ES6+)  
- GitHub Actions (CI/CD)

---

## 📁 Estrutura de Pastas

```
cypress/
├── e2e/                            # Features Web e API
│   ├── web/
│   └── api/
├── fixtures/                       # Dados mockados
├── support/
│   ├── commands/                   # Funções reutilizáveis
│   ├── pages/                      # Page Objects
│   └── step_definitions/           # Steps BDD
.github/
└── workflows/
    └── cypress-e2e.yml             # CI com GitHub Actions
```

---

## ⚙️ Instalação

### Requisitos

- Node.js >= 18  
- Git

### Passos

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd <nome_do_projeto>

# Instalar dependências
npm install
```

---

## ▶️ Execução dos Testes

### Modo Headless (todos os testes)

```bash
npx cypress run
```

### Modo Interativo (GUI)

```bash
npx cypress open
```

### Apenas Web

```bash
npx cypress run --spec "cypress/e2e/web/*.feature"
```

### Apenas API

```bash
npx cypress run --spec "cypress/e2e/api/*.feature"
```

---

## 🔄 Integração Contínua

Este projeto utiliza GitHub Actions para execução automática dos testes a cada `push` ou `pull request` na branch `master`.

Arquivo de configuração:  
`.github/workflows/cypress-e2e.yml`

---

## 🔐 Variáveis de Ambiente

As variáveis estão armazenadas em `cypress.env.json`.  
O arquivo não foi adicionado ao `.gitignore` para garantir o funcionamento imediato dos testes.
