// Aqui eu estou importando do node os metodos do http
const http = require('https')


const getPokemon = (pokemon,callback) =>{
    //Aqui eu estou pegando a url da api de pokemons 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    // O http.get é uma forma de gerar uma requisição para a api passando como params
    // (a url, eu uma função onde os params dela é o response da requisição que será passado a ela)
    http.get(url, response =>{
        let resultado = ""

        //res.on é um escutador de eventos 
        // res.on("evento", função que pode ou não possuir parametros que serão reebidos)
        // Nesse caso o data são os dados que estão sendo recebidos pela requisição e são passados para o parametro
        response.on('data',dados => {
                resultado+=dados
            })

        // O end é quando todos os dados foram enviados
        response.on("end",()=>{
            callback(JSON.parse(resultado))
        })  

    })
}
getPokemon("pikachu",(pokemon)=>{
    console.log(pokemon)
})