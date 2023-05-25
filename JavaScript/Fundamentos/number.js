const peso1 = 1.5;
const peso2 = Number("2.0");//Numeber() serve pra converter o que esta dentro do parenteses em um numero 

console.log(peso1 , peso2);
console.log(Number.isInteger(peso1));//Number.isInteger meio que verifica se o que esta dentro do parenteses é um numero inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));// O toFixed() serve para fazer com que o programa exiba somente o numero de casas apos a virgula que esta dentro do parenteses 
console.log(media.toString())//Serve para transformar em uma stirng
console.log(media.toString(2))//Colocando um parametro dentro do parentese vc pode alterar a forma que ele vai ser escrito nesse exemplo ele converte para binario