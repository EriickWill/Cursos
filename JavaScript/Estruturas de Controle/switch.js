function notaAluno(nota){
    switch(Math.floor(nota)){//switch não aceita numeros com virgula e nem testes lógicos ou seja o parametro que ele vai receber é sempre um valor
       case 10:
       case 9:
        console.log("Quadro de honra")
        break;
      case 8:
      case 7:
        console.log("Aprovado")
        break;
      case 6:
      case 5:
      case 4:
        console.log("Recuperação")
        break;
      case 3:
      case 2:
      case 1:
      case 0:
        console.log("Reprovado")
    }
    
}
 notaAluno(10);