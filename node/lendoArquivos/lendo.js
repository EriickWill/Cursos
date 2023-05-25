const fs = require("fs")
const caminho =  __dirname + "/arquivo.json"
fs.readFile(caminho,"utf-8", (err, content)=>{
    const obj = JSON.parse(content)

    console.log(obj)
})
console.log(__dirname)


const config = require("../arquivo.json")



//Para caso você precise saber o conteudo das pastas

fs.readdir(__dirname,(err,arquivos)=>{
    console.log(arquivos)
})
