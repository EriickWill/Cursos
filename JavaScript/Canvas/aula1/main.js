const canvas = document.querySelector("#desenho1");
//Ctx == contexto
const ctx = canvas.getContext("2d")


//Preenchimento do elemento
ctx.fillStyle = "rgb(0,0,255)"; 

//Desenhar, essa função permite desenhar um quadrado ou retangulo preenchido com o ultimo estilo setado
//Dentro do parenteses você vai indicar posição e tamanho
//fillRect(eixo x, eixo y, largura, altura)
ctx.fillRect(0,0,50,50)

