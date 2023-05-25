const axios = require("axios")
let dados

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((response)=>{

    // Quando recebemos o response ele retorna os dados dentro de um obj com um array de obj dentro
    // Usando o reponse.data vc pega somente o array ou seja o dado em si
    dados = response.data
    let min = Infinity,pessoa

    dados.forEach(element => {
     
            if(element.pais == "China" && element.genero == "F" && element.salario < min){
                min = element.salario
                pessoa = element
            }

    });

    console.log(pessoa)
})

console.log("pessoa")