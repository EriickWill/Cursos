const sequence = {
    _id:1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProdutos(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto

    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}
function excluirPdodutos(id){
    const produto  = produtos[id]
    delete produtos[id]
}
module.exports = { salvarProdutos , getProdutos , getProduto,excluirPdodutos}