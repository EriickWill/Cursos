# Typescript

- Typescript é um **superset** para a linguagem JavaScript
- Ou seja , adiciona funções ao JavaScript, como declaração de tipos de variavel
- Pode ser utilizado com Frameworks / libs, como **Express e React** 
- Precisa ser compilado em Javacript, ou seja, não executamos TS
- Adiciona **confiabilidade** ao programa (tipos)
- Provê novas funcionalidades a JS, como **Interfaces**
- Com TS podemos verificar erros antes da execução do código ou seja, no esenvolvimento 
- Deixa o javascript mais explicito, diminuindo a quantidade de bugs 
- Por estes e outros motivos perdemos menos tempo com bugs


## Começando

> Instalação:

- Primeiro é preciso ter o node  depois no terminal
- Baixar ele globalmente `npm i -g typescript`
- Para que possa executar adequadamente você precisa inicar o arquivo de configuração assim:
    - `tsc --init`
    
- E para compilar basta digitar no terminal `tsc` e `tsc -w` para compilar automaticamente 
- Lembrando que para arrumar onde vai o arquivo conpilado você precisa ir no arquivo `tsconfig.json` 
    - Primeiro na parte de `MODULES` voce vai mudar o `rootDir` para o caminho de onde esta seu arquivo ts 
    ```json
        /* Modules */
        "module": "commonjs",                        
        "rootDir": "./src/script",  
    ```
    - Depois você precisa dizer onde ele vai mandar o arquivo conpilado de javascript na parte de `EMIT` mude o valor de `outDir` para a pasta que irá ficar o javascript compilado 

    ```json
         /* Emit */
        // "sourceMap": true,
        // "inlineSourceMap": true,  JavaScript. */
        // "outFile": "./",                                  
        "outDir": "./dist/script",   

    ```

## Tipagem

```ts
// Para tipar uma variavel basta colocar o seu tipo apos o nome

// Para tipos numericos:

// annotation quando você da o tipo do dado
const x :number = 10;

//inferencia quando você deixa o typescript dar o dado
let y = 21


// Para tipos de texto
let firstName: string = "Erick"


// Para tipos de boolean
let isAdmin: boolean = true

// Array
const myNumbers:number[] = [1,2,3]


// Tuplas 
// é um array de dados mas que deve ser seguido e deve ser exatamete assim
let myTuples:[number,string,string]


// Objects literals
const user: {name:string,age:number} ={
    name:"Erick",
    age:18,
};

//any = Qualquer tipo de dado

let a: any = 0


//union type forma de unir tipos para que uma variavel receba mais de um tipo de dado

let id: string | number = "10"

//type alias é uma forma de dar um nome ao um tipo de dado

type idType = string | number

const userId: idType = 10

//enum
// É um objeto de constantes
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}
const camisa = {
    name:"Camisa gola V",
    tamanho:Size.G,
}


//Literal types
// Usando isso você faz com que a variavel aceite somente o que está dado como tipo 
// Qualquer outra coisa que for atribuido sem ser o tipo literal irá dar erro
let teste:"algumvalor"

// Aqui ira dar erro
teste = "Ola"
```

## Funções

```ts
// Você precisa passar os tipos de dados dos params 
function soma(a: number,b: number){
    return a+b
}


// Caso você queira tambem pode passar o tipo de dado que será retornado na função 
function digaOi(name:string): string{

}

// Colocando void você deixa explicito que a função não irá retornar nada
function logger(msg: string): void{
    console.log(msg)
}



// Usando params opcionais 
// Usando o "?" você diz ao typescript que esse param é opcional 
function greeting(name: string, greet?: string){
    if(greet){
        console.log(`ola ${greet} ${name}`)
        return;
    }
    console.log(`ola ${name}`)
}
```

## Interfaces

```ts
//Padronizam algo para que possa ser usado como tipo
interface mathParams(){
    num1: number,
    num2: number,
}

function sumNumbers(nums:mathParams){
    return nums.num1 + nums.num2;

}

let numbers: mathParams = {
    num1:20,
    num2: 40,
}

console.log({num1: 10,num2: 20})
```

## Narrowing
- Checagem de tipos

```ts

function doSomething(info: number | boolean){
    if(typeof info === "number" ){
        console.log(`numero é ${info}`)
    }
}



```

## Generics

```ts
// é usado para quando eu quero que uma função possa receber qualquer tipo de valor
// Colocando <nome do tipo> antes do parenteses para indicar que é um tipo generico
// para dizer que o param vai ser qualquer um nomeDoParam: tipo que é o nome dado nas chaves
function mostrarArrays<T>(array: T[]){

}

```

## Classes 

```ts
class User{
    name
    role

    constructor(name: string , role: string){
        this.name = name
        this.role = role
    }
}

const erick = new User("Erick","admin")
```

## Interfaces em classes 

```ts

interface IVehicle{
    brand:string

}

// Quando você implementa uma interface você é obrigado a usar todos os seus atributos
class Car implements IVehicle{
    brand
    constructor(brand:string){
        this.brand = brand
    }
}


```
## Herança

```ts
// Continuando do exemplo de interfaces
// Já quando você herda isso deixa de ser obrigatorio
class SuperCar extends Car{

    constructor(brand:string){
        // Usado o super você pode pegar da classe pai um atributo
        super(brand)
    }
}

```

## Decorator
- Validação de dados 
- Observador de 

```ts
function BaseParameters(){
    return function<T extends {new (...args: any[]):{}}>(constructor: T){
        return class extends constuctor {
            id= Math.ramdom();
            createdAt = new Date
        }
    }
}


@BaseParameters()
class Person{
    name

    constructor(name:string){
        this.name = name
    }
}
const sam = new Person("Sam")



```