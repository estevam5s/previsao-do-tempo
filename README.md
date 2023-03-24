# Previsão do Tempo
=================

Este é um projeto básico para consumir uma API de previsão do tempo e exibir as informações em formato JSON.
A aplicação permite que o usuário consulte a previsão do tempo para uma cidade específica usando uma rota simples.


## Sumário

*   [Tecnologias usadas](#tecnologias-usadas)
*   [Como instalar e executar](#como-instalar-e-executar)
*   [Estrutura do projeto](#estrutura-do-projeto)
    *  [Controllers](#controllers)
    *  [Middlewares](#middlewares)
    *  [Routes](#routes)
    *  [Services](#services)
    *  [Utils](#utils)
*   [Variáveis de ambiente](#variáveis-de-ambiente)
*   [Testes](#testes)
*   [Linting](#linting)
*   [Conclusão](#conclusão)


## Tecnologias usadas
------------------

*   Node.js
*   Express
*   Axios
*   dotenv
*   Cors
*   Jest
*   Eslint
*   Prettier


## Como instalar e executar
------------------------

1.  Clone o repositório em sua máquina local:

```php
git clone <url-do-repositorio>
```

2.  Entre na pasta do projeto:

```arduino
cd previsao-do-tempo
```

3.  Instale as dependências do projeto:

```bash
npm install
```

4.  Crie um arquivo `.env` com as informações de configuração. Você pode usar o arquivo `.env.example` como base para as variáveis de ambiente.
    
5.  Execute a aplicação:
    

```sql
npm start
```

Agora a aplicação estará rodando localmente na porta definida nas variáveis de ambiente, por padrão na porta 3000. Você pode acessar a rota `http://localhost:3000/api/weather?city=<nome-da-cidade>` para obter informações sobre a previsão do tempo da cidade especificada. Substitua `<nome-da-cidade>` pelo nome da cidade que você deseja pesquisar.

Para executar os testes, execute o seguinte comando:

```bash
npm test
```

Para executar o linting, execute o seguinte comando:

```arduino
npm run lint
```


## Estrutura do projeto
--------------------

```java
previsao-do-tempo/
├── src/
│   ├── controllers/
│   │   └── weatherController.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── services/
│   │   └── weatherService.js
│   ├── utils/
│   │   └── apiClient.js
│   └── app.js
├── test/
│   └── weatherService.test.js
├── .env.example
├── .gitignore
├── .prettierrc
├── package-lock.json
└── package.json
```

A pasta `src` contém o código da aplicação, dividido em controladores, rotas, serviços, middlewares e utilitários. A pasta `test` contém os testes unitários para o serviço de previsão do tempo. Os arquivos `.env.example`, `.gitignore`, `.prettierrc`, `package-lock.json` e `package.json` são arquivos de configuração para o projeto.

### Controllers

O controlador `weatherController` é responsável por processar as requisições HTTP e enviar uma resposta ao cliente.

### Middlewares

O middleware `errorHandler` é responsável por capturar e tratar erros que possam ocorrer durante a execução da aplicação.

### Routes

A rota `/api/weather` é responsável por processar requisições GET para a previsão do tempo.

### Services

O serviço `weatherService` é responsável por fazer a chamada à API de previsão do tempo e retornar os dados para o controlador.

### Utils

O utilitário `apiClient` é responsável por fazer a requisição HTTP para a API de previsão do tempo usando a biblioteca Axios.


## Variáveis de ambiente
---------------------

As seguintes variáveis de ambiente devem ser definidas para executar a aplicação:

*   `WEATHER_API_KEY`: A chave de API para a API de previsão do tempo que você está usando.
*   `PORT`: A porta na qual a aplicação será executada. Por padrão, é 3000.


## Testes
------

Os testes unitários do serviço de previsão do tempo estão localizados na pasta `test`. Eles usam a biblioteca Jest para executar os testes.


## Linting
-------

O linting do projeto usa o Eslint e o Prettier. O arquivo de configuração `.eslintrc.json` define as regras de linting para o projeto.


## Conclusão
---------

Este projeto básico de previsão do tempo com Node.js no backend está completo. Ele inclui a implementação de rotas, consumo de API de previsão do tempo, tratamento de erros, testes unitários e documentação. Você pode continuar melhorando o projeto conforme suas necessidades, como adicionar novos recursos, melhorar a documentação, ou implementar um frontend para exibir os dados de forma mais amigável ao usuário.