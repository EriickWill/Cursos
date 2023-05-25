# Jest

## O que é?

- Uma biblioteca de testes
- Usado para testes Unitário - É quando pegamos uma parte pequena da aplicação (função ou classe) e testa somente a função ou a classe
- E nesse teste você vai checar quais parâmetros foram passados, qual foi o retorno 
- Vamos supor que essa função que você está testando ele esta ligada a uma base de dados, de certe forma você não vai querer testar usando a base de dados para um teste, então você precisa criar alguem que simule essa base de dados  //mock
- Caso você use o Vite como iniciador do react use esses comandos para colocar os testes
- Primeiro `npm i jest -D` para baixar as dependencias
- Segundo `npx jest --init` para iniciar 
- Terceiro (So se tiver typescript) `npm i ts-node -D` para o node usar as tipagens
- Quarto  (So se tiver typescript) `npm i @types/jest -D`

## Configurando o arquivo jest.config
```ts

// Você vai entrar no arquivo e procurar o transform e colocar isso como valor dele
 transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },

```
## Criando o arquivo
- Dentro da pasta src crie um arquivo App.spec.tsx ou App.spec.jsx

- Para que o jest entenda os componentes react você precisa instalar um pacote que consiga transformar 
- `npm i @swc/core @swc/jest`

- Para que você possa usar o JSX ou TSX dentro de um arquivo de teste você vai precisar baixar mais pacotes
- `npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D`




```js

// Describe é uma função que vai agrupar os testes
// o primeiro param: descrição grupo de teste
// segundo param: função do teste
describe('makePoniesPink', () => {
  beforeAll(() => {
    /* Isso vai executar antes de todos os testes */
  })
  afterAll(() => {
    /* Depois de todos*/
  })
  beforeEach(() => {
    /* Antes de cada teste */
  })
  afterEach(() => {
    /* Depois de cada teste */
  })


  // Aqui você inicia um teste
  // A função de teste pede dois params 
  // 1 - Nome do teste
  //2 - Função que vai fazer o teste
  test('make each pony pink', () => {
    const actual = fn(['Alice', 'Bob', 'Eve'])

    // esse expect é uma função que vai pedir um param, e vai guardar que vai ser o que é esperado que o param seja
    expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
  })
})


```