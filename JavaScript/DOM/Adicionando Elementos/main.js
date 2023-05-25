// Criando adicionando elementos

// createElement
// Serve para criar um elemento HTML
const div = document.createElement("div")
div.innerText = "Olá Devs !"

// append prepend
const body = document.querySelector("body")


// o append serve para adicionar um elemento criado
// Coloca após o script no html
body.append(div)


// o prepend serve tambem para adicionar
// Coloca o elemento antes de qualquer outra 
// ou seja coloca como primeiro filho 
body.prepend(div)

// insertBefore
// Serve para inserir um elemento antes de algo 
// .insertBefore(elemento que será adicionado, antes de qual tag ele deve ser adicionado )
const script = body.querySelector("script")
body.insertBefore(div, script)