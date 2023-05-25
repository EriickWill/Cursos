let body = document.querySelector("body")
let contador = body.querySelector("p")
let diminuir = body.querySelector("#diminuir")
let aumentar = body.querySelector("#aumentar")


aumentar.addEventListener("click", aumentador)
diminuir.addEventListener("click", diminuidor)

let contadorJS = 0

function update(val){
    contador.innerText = val
}

function diminuidor(){
    update(--contadorJS)
}

function aumentador(){
   update(++contadorJS)
}
