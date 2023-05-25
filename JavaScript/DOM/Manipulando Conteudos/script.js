
// textContent

const element = document.querySelector("h1")
element.textContent = "Olá devs"


//innerText

const text =  document.querySelector("p")
text.innerText = "Esse texto foi adicionado com o innerText"


// innerHTML

element.innerHTML = "Olá devs! <button>innerHTML</button>"

//value

const input = document.querySelector("input")

input.value = "Valor que eu quiser"


// Atributos
// setAttribute
const header = document.querySelector("header")
header.setAttribute("id", "header")

const headerID = document.querySelector("#header")

console.log(headerID.getAttribute("id"))
header.removeAttribute("id")