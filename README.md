# Star Wars Challenge

## Visão Geral

A B2W gostaria de fazer uma brincadeira com seus associados, que são aficionados por Star Wars. O jogo consiste em, dado um planeta aleatório da franquia, exibir como seria o clima, o terreno e em quantos filmes da franquia ele apareceu.

Para auxiliar quem for apresentar a brincadeira, queremos desenvolver uma aplicação que pegue aleatoriamente um planeta da franquia e exiba seus dados para servir como cola.

Uma equipe de UX especializada desenvolveu a proposta de interface disponível nesse [link](https://lh3.googleusercontent.com/tubJ22pBao1DQy3o0VfBjcmrN4epO7Q04KVk3D1JeVSIuJwvoDru-XqtxDnHsX7yeZz-qdkXpb2HZNrc5FFV9XKezGuzERTa2jagCy5Ht3sEl8JBHzJrCxn_8SkjYqmfGfJcN_Rb)

### Tecnologias

- HTML5
- CSS

  - [Styled Components](https://www.styled-components.com/)
  - [Reset css](https://github.com/zacanger/styled-reset)

- JavaScript
- Reactjs

  - [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
  - Jest

- Outros pacotes e ferramentas
  - [Axios](https://github.com/axios/axios)
  - [Eslint](https://eslint.org/)
  - [EditorConfig](https://editorconfig.org/)

### API

A API utilizada para obter os dados está disponível em: [SWAPI](https://swapi.co/).

## Rodando o projeto

Primeiro você deve fazer um fork e depois clonar o projeto para que seja possível instalar as dependências e efetuar alterações no código em seu computador.

Para executá-lo, basta instalar as dependências do projeto usando seu gerenciador de dependências.

Ex:

`yarn`

ou

`yarn install`

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app) e recomendo o uso do [Yarn](https://yarnpkg.com/en/) para o fluxo de desenvolvimento.

### Scripts Disponíveis

#### start

Este comando inicia o projeto em ambiente de desenvolvimento, você pode acessá-lo pela URL [http://localhost:3000](http://localhost:3000) em seu browser de preferência.

Ex:

`yarn start`

A página será recarregada sempre que uma alteração for salva.

#### test

O comando test usa o [Jest](https://jestjs.io/) para validar os testes definidos em arquivos \*.test.js.

Ex:

`yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### build

O comando build cria o bundle com o código compilado para que seja feito o deploy da aplicação.

Ex:

`yarn build`

## Observações

- Durante o desenvolvimento do projeto optei por utilizar o Axios para auxiliar na criação de requisições a API;
- No arquivo `routes.js` podem ser definidas as rotas para cada página que possa existir no futuro;
- Removi as configurações do Eslint que vem por padrão, é possível verificar no arquivo `.eslintrc.js`;
