const nome = "Erick";

console.log(nome.charAt(4)); // O método charAt() retorna o caractere especificado a partir de uma string colocando entre parentese a posição da letra.

console.log(nome.indexOf("E")); //Caso vc queira saber qual posição se encontra uma letra basta usar o .indexOf() e no parenteses colocar o que vc deseja procurar

console.log(nome.substring(1)); // O metodo substring() serve para mostrar a palavra a partir da posição colocada no parenteses no caso a contagem de letras começa apartir do 0 ou seja a string vai ser mostrada apartir do "r" que seria a posição 1

console.log("Nome: ".concat(nome)); // Concat serve para concatenar as coisas bem simples de entender

console.log(nome.replace("E", "e")); //serve para trocar coisas dentro da variavel

console.log("Ana,maria,pedro".split(","));
