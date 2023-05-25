const img = document.querySelector("#img")

const nome = document.querySelector("#nome")


fetch(`https://pokeapi.co/api/v2/pokemon/1`)
// Esse then vai pegar o obj de response que vai retornar todos os dados que serão usados do response e transformar em json
// pois esse response vai retornar não apenas os dados mas todas as informações do response 
// Como o status do response, headers entre outros dados de response
.then(response => {

    console.log(response)

    // Aqui ele vai retornar o response.json() que é uma função que vai analisar a requisição em formato de json e retornar um obj em javascript
    // ele vai retornar e passar para o proximo then que seria o data
    return response.json() 
})
.then(data =>{
    nome.innerText = data.name

    console.log(data)
})
