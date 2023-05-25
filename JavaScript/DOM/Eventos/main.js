// Eventos
function print(){
    console.log("Você clicou em mim")
}


// Eventos de teclado
const input = document.querySelector("input")
input.onkeypress = function(){
    console.log("rodei")
}
//Adicionando eventos via JS
const h1 = document.querySelector("h1")
// .addEventListener É como um ovidor de eventos ele fica de olho no html esperando que o evento aconteça
// addEventListener(Primeiro vem o tipo do evento,   depois qual função ele vai executar caso esse evento aconteça)
h1.addEventListener("click", print)

input.onkeydown = function(event){
    console.log(event.key)// Mostra as teclas digitadas
    console.log(event.currentTarget.value)//Usado para pegar o valor dentro do input
}