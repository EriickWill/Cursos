const porta = 3003
const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDados")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// Vamos colocar um exemplo
// Supondo que você precise fazer os produtos de uma loja
// o app.get ele funciona para você criar uma forma de quando outra pessoa use sua API ele use o nome do teu site/produtos
// Isso é usado quando uma pessoa faz uma requisição get na sua api
// Os parametros são o req = request , res = response, next = função que irá executar 
app.get('/produtos',(req,res,next) =>{
    // Aqui caso a requisição de sucesso ela vai enviar um response 
    // que é feita o res.send para enviar, e nisso você pode enviar um json
    res.send(bancoDeDados.getProdutos())
})
app.get("/produtos/:id",(req,res)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})
app.delete('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.excluirPdodutos(req.params.id)
})
app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})