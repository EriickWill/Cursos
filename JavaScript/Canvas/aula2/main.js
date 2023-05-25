
function desenha(){
const canvas = document.querySelector("#desenho1");
const ctx = canvas.getContext("2d")

ctx.fillStyle = "rgb(0,0,255)"; 

//O rect so desenha não preenche
ctx.rect(0,0,100,100)
// O fill serve para prencher todo elemento do conava cvom a ultimo estilo dito
ctx.fill()

//serve para limpar certa parte do canva serve como uma borracha apenas indicando onde ele irá apagar e o tamanho dentro dos parenteses
ctx.clearRect(0,0,50,50)
}
