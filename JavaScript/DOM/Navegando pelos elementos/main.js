// Navegando pelos elementos
// .parentNode e parentElement
//Serve para selecionar o elemento "pai" do elemento entre parenteses
const body = document.querySelector("body")

console.log(body.parentNode)
//Saída: HTML


//// Pegando elementos filhos
// childNodes e children

const el = document.querySelector("body")
console.log(el.childNodes)//Retorna o valor como um Node list(ele conta os espaços vazios)
console.log(el.children)//Retorna o valor como um html collection


//firstChild e firstElementChild
console.log(el.firstChild)//Ele pega o primeiro filho do (contando os espaços vazios)
console.log(el.firstElementChild)//Ele pega o primeiro elemento filho(sem contar espaços)


//lastChild e lastElementChild
console.log(el.lastChild)//Ele pega o ultimo filho do (contando os espaços vazios)
console.log(el.lastElementChild)//Ele pega o ultimo elemento filho(sem contar espaços)

// nextSibling e nextElementSibling
const header = document.querySelector("header")
console.log(header.nextSibling)//Ele pega proximo irmao do elemento(contando os espaços vazios)
console.log(header.nextElementSibling)//Ele pega proximo irmao do elemento(sem contar espaços)

// previousSibling e previuosElementSibling
const script = document.querySelector("body script")
console.log(header.previousSibling)//Ele pega o irmao anterior do elemento(contando os espaços vazios)
console.log(header.previuosElementSibling)//Ele pega o irmao anterior do elemento(sem contar espaços)