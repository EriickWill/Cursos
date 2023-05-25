// O operador destructuring serve para desestruturar um item, ou de forma mais simples, extrair elementos de um objeto ou array

const pessosa = {
    nome: "Ana",
    idade: 22,
    endereco:{
        logradouro: "Rua abc"
    }
}


// Essa linha se le assim extraia nome e idade do objeto pessoa 
const {nome, idade} = pessoa//depois de extraido esses itens viram variaveis com o mesmo valor que estavam dentro do objeto
console.log(nome, idade)

// Você não precisa ficar preso nos nomes da variaveis vc pode dar outros nomes
const{nome:n, idade:i} = pessoa//colocando os dois pontos na frente da variavel pode mudar o nome dala
console.log(n, i)