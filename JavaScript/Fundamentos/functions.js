//Fuação sem retorno 
function soma(a, b){
    console.log(a + b);
}
soma(1, 2);



//Função com retorno
function soma1(a, b = 0){
    return a + b;

}
console.log(soma1(1, 2));

//Armazenando uma função em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);


//Aramazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));


//Retorno implicito

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));
