function getNumeroAleatorioEntre(min, max){
    valor = Math.random() * (max - min) + min;
    return Math.floor(valor)


}

opcao = 0;

do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(valor);
}while(opcao != -1)