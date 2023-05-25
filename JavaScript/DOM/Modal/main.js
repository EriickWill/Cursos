const body = document.querySelector("body")
const botao = body.querySelector("#openModal")
const modal = body.querySelector(".modal")
botao.addEventListener("click", abrirModal)

function abrirModal(){
    modal.classList.remove("invisible")
    modal.classList.add("visible")

}
body.addEventListener("keydown", function(event){
    const isEscKey = event.key === "Escape" //Escape se refere tecla esc

    if(isEscKey){
        modal.classList.add("invisible")
        modal.classList.remove("visible")
    }
})

