 function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
 }

 let opcao = 0;

 while(opcao != 0){// O laço While pode receber qualquer tipo de de teste lógico
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(opcao)
 }