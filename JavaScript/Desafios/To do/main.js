
const form = document.getElementById('some-form')
const inputText = form.querySelector("input")
const button = form.querySelector("button")
const list = document.querySelector("itemList")


form.addEventListener('submit', e => {
    e.preventDefault()//o preventDefault() seve para impedir a execução de um evento

})

button.addEventListener("click" ,adicionar)

function adicionar(){

}
