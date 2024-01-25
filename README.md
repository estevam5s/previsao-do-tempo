# Documentação do Projeto de Previsão do Tempo
## Propósito

Este projeto é uma API de previsão do tempo que utiliza a API HG Brasil Weather para fornecer informações meteorológicas. Ele foi desenvolvido utilizando Node.js e Express e segue os princípios do SOLID para uma arquitetura de software limpa e eficiente.
## Sumário 
- [Baixando Pacotes](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#baixando-pacotes) 
- [Executando](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#executando) 
- [Conceitos do SOLID](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#conceitos-do-solid) 
- [Arquitetura de Pasta e Arquivos](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#arquitetura-de-pasta-e-arquivos) 
- [API REST](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#api-rest) 
- [Implementação do Serviço](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#implementa%C3%A7%C3%A3o-do-servi%C3%A7o) 
- [Prisma](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#prisma) 
- [Logger](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#logger) 
- [Test TDD com Jest](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#test-tdd-com-jest) 
- [Package.json](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#packagejson) 
- [Debugging](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#debugging) 
- [CRUD](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#crud) 
- [Arquitetura Usada](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#arquitetura-usada) 
- [Nodemon](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#nodemon) 
- [Variáveis de Ambiente](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#vari%C3%A1veis-de-ambiente) 
- [Express](https://chat.openai.com/c/54096b34-34d9-41ca-8b9e-3792c642c592#express)
## Baixando Pacotes

Execute `npm install` para baixar e instalar todas as dependências necessárias listadas no `package.json`.
## Executando

Para iniciar o servidor, use `npm start`. Para desenvolvimento, você pode usar `npm run dev` para iniciar o servidor com o Nodemon, que reinicia automaticamente o servidor após as mudanças no código.
## Conceitos do SOLID

O projeto segue os princípios SOLID para design orientado a objetos: 
- **S** ingle Responsibility: Cada módulo ou classe tem responsabilidade única. 
- **O** pen/Closed: Módulos ou classes são abertas para extensão, mas fechadas para modificação. 
- **L** iskov Substitution: Objetos podem ser substituídos por suas subclasses. 
- **I** nterface Segregation: Muitas interfaces específicas são melhores que uma única interface. 
- **D** ependency Inversion: Dependa de abstrações, não de implementações concretas.
## Arquitetura de Pasta e Arquivos

A estrutura do projeto é organizada da seguinte forma:

```bash
weather-app/
│
├── src/
│   ├── prisma/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── utils/
│   └── app.js
│
├── tests/
├── logs/
├── node_modules/
├── .env
├── package.json
└── README.md
```


## API REST

A API é estruturada seguindo os princípios REST, utilizando métodos HTTP para realizar operações CRUD.
## Implementação do Serviço

Serviços são implementados em `src/services`, responsáveis pela lógica de negócios e interação com APIs externas.
## Prisma

O Prisma é utilizado como ORM para interagir com o banco de dados SQLite. Ele facilita operações de banco de dados com uma abstração de alto nível.
## Logger

Utilizamos o Winston para logging, configurado em `src/utils/logger.js`. Logs são salvos em arquivos e exibidos no console em ambientes de desenvolvimento.
## Test TDD com Jest

Testes são escritos e executados usando Jest, seguindo a metodologia TDD. Os testes estão localizados em `tests/`.
## Package.json

`package.json` contém metadados do projeto e lista de dependências. Scripts para iniciar o servidor, testes e debugging também são definidos aqui.
## Debugging

Debugging é configurado para ser executado com `npm run debug`, utilizando a flag `--inspect` do Node.js.
## CRUD

A API suporta operações CRUD (Create, Read, Update, Delete) para entidades como cidades e previsões do tempo.
## Arquitetura Usada

A arquitetura do projeto é baseada no modelo MVC (Model, View, Controller), onde: 
- **Model** : Define a estrutura de dados e a lógica de negócios. 
- **Service** : Contém a lógica de negócios específica. 
- **Controller** : Gerencia a comunicação entre o Model/Service e as rotas.
## Nodemon

O Nodemon é usado em ambiente de desenvolvimento para reiniciar automaticamente o servidor após alterações no código.
## Variáveis de Ambiente

Variáveis de ambiente são usadas para armazenar informações sensíveis e configurações. Elas são definidas no arquivo `.env`.
## Express

O Express é o framework web usado para criar a API. Ele simplifica a criação de rotas e o gerenciamento de requisições e respostas HTTP.