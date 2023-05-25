function soma(){
    let soma = 0
    for(i in arguments){// O argument é um array interno das funções onde se guarda todos os argumentos dados nas funções
        soma += arguments[i]
    }
    return soma
}
console.log(soma(1,2,3,4,5,6,7,8,9))