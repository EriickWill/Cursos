# React

- Uma biblioteca JS para ciração de interfaces
- Uilizado para construir SPAs (Single page application);
- Baseado em componentes
- Utiliza o JSX para renderizar o HTML
- E aplica o Virtual DOM para realizar as alteracões de Dom
- Podemos adicionar a um projeto ou criar um projeto com ele

## Como instalar o React ?

- Para instalar o React vamos utiliazar uama ferramaenta chamada Create React App
- Recebemos todos os arquivos da biblioteca e temos como executá-la
- Para utilizar precisamos do Node e também npm
- Esta ferramenta também otimiza o app gerado para produção
- é possivel inciar a aplicação com `npm start`

## Entendendo o JSX

- O `JSX` é como um HTML, porem dentro do código JavaScript
- É a principal maneira de esvrever HTML com React
- Podemos `Interpolar variáveis`, inserindo ela entre {}
- É possível também executar funções em JSX
- Inserir valores em atributos de tags também é valido em JSX

```js
// Para poder mecher no html do site vai no arquivo App.js na pasta src
function App() {
  // Lembrando você precisa fazer tudo dentro dessa função
  // Fora dela fica somente as importações e exportações
  // Você pode declarar variaveis  dentro
  const nome = "Erick";

  // lembrando que no return deve somente retornar uma unica tag que estará englobando todas as outras
  //
  return (
    // Para declarar classes em JSX
    <div className="App">
      <p>Olá {nome}</p>
    </div>
  );
}

export default App;
```

## Componentes

- Permite dividir a aplicação em partes
- Os componentes renderizam JSX, assim como App.js (Que é um componente)
- Precisamos criar um arquivo de componente
- E importálo onde precisamos utilizar
- Normalmente fiam em uma pasta chamada components

```js
// Exportando co default

function Ola() {
  return <p>Olá Mundo !!</p>;
}
// Para caso você queira mandar somente isso
export default Ola;
```

```js
// Importando
// É de extrema importancia que o nome do arquivo que ta o componente tenha o nome de index
// Pois na hora de importar basta somente colocar o nome da pasta
import Ola from "./components";

function App() {
  const nome = "Erick";

  return (
    <div>
      <p>
        <Ola />
      </p>
    </div>
  );
}

export default App;
```

- Importando e exportando com object destruturing

```js
// Exportando co default

function Ola() {
  return <p>Olá Mundo !!</p>;
}
// Para caso você queira mandar mais de uma coisa
// Você precisa mandar eles em formato de objeto
export { Ola };
```

```js
// Importando
// E na hora de importar você precisa usar uma desestruturação para tirar o que você quer do objeto
import { Ola } from "./components";

function App() {
  const nome = "Erick";

  return (
    <div>
      <p>
        <Ola />
      </p>
    </div>
  );
}

export default App;
```

## Props

- As `props` são valores passados para componentes
- Podemos deixá-los `dinâmicos`
- Ou seja, `mudando a execução` por causa do valor da prop
- O valor é passado como um atributo na chamada do componente
- E precisa ser resgatado dentro de uma prorpiedade / argumento chamada props na função de definição do componente
- As props são somente de leitura

```js
//As props vão ser enviadas para ca em formato de objeto contendo todas as props
function Propriedades(props) {
  console.log(props);

  return <p>{props.text}</p>;
}
export default Propriedades;
```

```js
import Propriedades from "./components/Propriedade";

function App() {
  return (
    // Assim voce passa uma prop
    // Dando qualquer nome para ela e atribuindo um valor
    <div>
      <Propriedades text="Sou uma prop" />
    </div>
  );
}
```

```js
//Mas caso tenha muitas props
// Uma boa prática é usar a desestruturação para tirar os valores desejados
function Propriedades({ text }) {
  console.log(text);

  return <p>{text}</p>;
}
export default Propriedades;
```

## Adicionando CSS

- O css pode ser adiiconado de forma global na aplicação, por meio do arquivo index.css por exemplo
- Porem é possível estilizar a nível de componentes
- Utiliazamos o CSS modules para isso
- Basta criar um arquivo como: Componente.module.css
- e chamar este css no componente

## Fragmentos

- Os React Fragments permite a criação de um componente sem elemento pai
- O propósito é descomplicar os nós do DOM
- A sintaxe é <> e </>, não ha nome para a tag
- Criamos no próprio jsx

## Avançando em props

- Podemos definir tipos para as props, realizando uma espécie de validação
- Definimos em um objetochamado propTypes no próprio componente
- E ainda há possibilidade de definir um valor padrão
- Neste caso utilizamos o objeto defaultProps

```js
// Aqui você esta importando uma biblioteca que permite dar o tipo de dado para uma prop
import PropTypes from "prop-types";

export default function AvanProps({ marca, lan }) {
  return <p>Carro:</p>;
}

// Aqui usando o .propTypes recebendo um objeto que vai o nome da prop como key
// do objeto e como valor o tipo de dado que ela vai receber
// com isso o tipo de dado deve ser respeitado
AvanProps.propTypes = {
  // colocando como value o PropTypes.(tipo do dado)
  marca: PropTypes.string,
  // colocando o isRequired você faz com que seja de extrema importancia aquela prop
  // com isso o componente não funciona sem
  lan: PropTypes.number.isRequired,
};

// Aqui é para deixar valores pré definidos nas props caso elas não seja passadas
AvanProps.defaultProps = {
  marca: "Faltou a marca",
  lan: 0,
};
```

## Eventos

- Os eventos de React são os mesmos eventos do DOM
- Ou seja, temos eventos para responder a um click
- O evento atrelado a uma tag que irá executá-lo
- Geralmente um método é atribuido ao evento
- Esse m´rtodo deve ser criado no componente

# Hooks
- O que são Hooks? São meios de gerenciar o ciclo de vida dos componentes em componentes funcionais 
- Estados: São os dados que o componente utiliza e toda vez que o estado mudar ele vai renderizar novamente o componente
## useState

- O `useState` é um hook do React
- Com ele conseguimos manusear o estado de um componente de forma simples
- Este hook funciona muito bem com eventos
- Podemos atrelar um evento a mudança de state
- O hooks useState funciona da segui nte forma você vai fazer a seguinte linha `let  [cont , aumentar] = useState(1);` onde você vai fazer uma atribuição por desestruturação onde a primeira vai ser a variavel que vai ter o valor e a segunda é uma função que vai atualizar a variavel
- O react vai ficar de olho na função quando ela atualizar a variavel, e quando isso acontecer o react vai atualizar na interface(se a variavel estiver sendo usada na interface)

```js
import { useState } from "react";

export default function Estados() {
  let [cont, aumentar] = useState(1);

  function aumentarValor() {
    // Eu posso aumetar dessa forma
    //aumentar(cont+1);

    // mas é mais recomendavel eu fazer assim
    aumentar((valorAnterior) => valorAnterior + 1);
  }
  return (
    <>
      <button onClick={aumentarValor}>Clique</button>

      <p>{cont}</p>
    </>
  );
}
```

## useEffect

- É usado quando queremos executar alguma coisa quando, quando alguma coisa mudar
- Ele vai trabalhar com o ciclo de vida de um componente 

```js
// esse hook vai exigir uma função que vai ser executada sempre que algo for mudado
// Que no caso vai ser o componente todo, como assim?
// Caso algo do componente tenha mudado ele vai executar a função
// Era chamado e componentDidUpdate
useEffect(() => {});

// Mas supondo que você queira colocar um observador em uma variavel
// Como segundo parametro ele pede um array de variaveis que quando somente elas forem
// mudadas a função será executada

useEffect(() => {}, [variavel]);

//Usando um array vazio ele so vai executar 1 vez so quando o componente for montado
// Era chamado de componentDidMount
useEffect(() => {}, []);

// Usando um return dentro você faz que quando o componente deixar o DOM (for desmontado) ele execute a função do return
useEffect(() => {
  return () => {
    console.log("olá");
  };
}, []);



```

## useRef()

- Ele guarda variavel mas quando ele é atualizado o componente não é renderizdo novamente, por exemplo usando o useState ele vai atualizar o componente em si, ja usando o useRef ele não vai atualizar o componente todo
- Outra funcionalidade do useRef() é poder referenciar uma tag html
- E tambem podemos guardar valores anteriores de States

```js
const renders = useRef();

useEffect(() => {
  renders.current = renders.current + 1;
});

// ======================================
```

```js

const inputRef = useRef()
// Ele é bastante usado para pegar uma referencia de uma tag html
return(
  <input ref={inputRef} value="Name">
)



```

```js
const [name, setName] = useState("");

const previousName = useRef();

useEffect(() => {
  previousName.current = name;
}, [name]);
```

## useReducer()

- é usado também para gerenciar estados dentro do componente

```js
const {useReducer} from "react"

const reducer = (state,action) =>{
    switch(action.type){
      case 'increment':
        return{
          counter: state.counter + 1
        }
    }
}

const App = () => {
  // na desestruturação primeiro fica o state depois o dispatch "que é uma função que vai chamar outra para alterar o state" ela vai chamar a função que foi passada na chamada do reduce que no caso é a função reducer
  // o Primeiro parametro que será passado para o Reducer é uma função e o outro é o state inicial
    const [state,dispatch] = useReducer(reducer,{ couter: 0 })

    return (
      <div>
          <p>{state.couter}</p>
          <button onClick={() => dispatch({type:"increment"})/*Aqui voê stá passando dados para o param action da função reducer*/}>Increment</button>
          <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
      </div>
    )
}

```
## useMemo
- É um hook bem especifico que faz a memorização de um calculo, uma ação que de certa forma vai gastar muita memoria quando o componente for renderizado novamente 
```js 
import {useMemo,useState} from 'react'

const Teste = () => {
  const [age,setAge] = useState[0]
  // O useMemo vai guardar o valor retornado na função para que não renderize ou execute de novo toda vez que o componente for atualizado
  const calculo = useMemo(()=>{
    console.log('Calculou')
    return 10 * 26589
  },[])


  //Caso o dado que você "memorizou" necessite de um dado que vem de um state
  // Você pode passar no array de dependencias ai ele vai executar o useMemo toda vez que a variavel for atualizada
  // Fora isso ele não vai mais renderizar
  const calculo = useMemo(()=>{
    console.log('Calculou')
    return 10 * age
  },[age])
}


```

## UseCallback
- Em resumo, o useCallback é usado para otimizar o desempenho de componentes funcionais, memorizando funções e reutilizando-as em renderizações futuras, desde que suas dependências não sejam alteradas.

```js
import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // A função increment é memorizada usando useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
}
``` 

## useContext
- é uma especie de estado global, por exemplo ele é usado para resolver o problema de passar props em forma de cascata tipo do pai para o filho e assim por diante ate chegar no ultimo filho
- Ele meio que vai guardar todos os estados

```js
import React,{useContext} from "react"
// Aqui é meio que o state que vai guardar as props que vão ser passadas
const globalState = {
  title: "Olá Mundo",
  contador:0
}
// Aqui você precisa indicar o contexto para iniciar, e criar um
const GlobalContext = React.createContext()


function App(){
  return(
    //ja aqui dentro você precisa envolver todo conteudo jsx que vai receber as props dentro do GlobalContext.Provider que vai "prover" o state global atravez do param Value

    <GlobalContext.Provider value={globalState}>
        <H1 />
    </GlobalContext.Provider>
  )
}
const H1 = ()=>{
  // Criando a constante e atribuindo um useContext e dentro dos parentes você coloca o contexto que voce quer usar que no caso é o nome da taga que você envolveu todos os elementos
  const theContext = useContext(GlobalContext)

  return <h1>{theContext.title}</h1>
}
```
## Métodos por props

- Os métodos tembém podem ser acessados por props
- Ou seja, um componente filho pode ativar o métodos do seu ancestral
- Vamos acessar o método por meio de um evento
- A sintaxe é a mesma de uma porps de dados.meuEvento

## State Lift

- É uma técnica utilizada para compartilhar o state;
- é normal vários componentes dependerem do mesmo estado
- Então precisamos elevar o nível do mesmo a um componente pai
- Então centralizamos o state no pai, e definimos quem usa e quem define (setState)

## React Router

- O React Router é um pacote para mudança de URLs da aplicação
- Podemos assim acessar outras views, sem page reload
- Trocando apeas uma parte do layout da aplicação, ou seja, o que muda de view para view
- Para instalar basta ir no terminal e digitar `npm install react-router-dom`

```js

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App(){
  return(
    // O router é um provedor d rotas para a aplicação
      <Router>
      // Aqui você pode colocar um componente que vai ser igual para todas as rotas
          <ul>
            <li>
              // A tag link serve como uma tag `a` do html mas ao inves de usar href você usa o to="" para indicar uma rota
                <Link to="/">Home</Link>
            </li>
            <li>
                  <Link to="/empresa">Home</Link>
              </li>
              <li>
                  <Link to="/contato">Home</Link>
              </li>
          </ul>
        <Switch>
            <Route path="/" element={<Home/>}>

        </Switch>
      </Router>
  )
}

export default App
```

## React Icons

- O React Icons é um pacote de ícones externo
- Precisamos adicionar ao projeto através do npm
- ele nos permite adicionar ícones ao projeto com uma sintaxe parecida a de componentes
- Além disso há uma grande quantidade de ícones disponiveis
- Para instalar: `npm install react-icons`
