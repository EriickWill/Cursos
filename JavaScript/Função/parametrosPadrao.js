//Estrategia 1 para gerar valor padrao

function soma1(a, b, c){
    a = a || 1
    b = b || 1 // Usando o operador ou( || ) você pode criar  uma forma de escolha do que sera atribuido a variavel por exemplo se o b for falso ou seja 0 ou qualquer outro valor falso ele irá receber 1
    c = c || 1
}


// Estratégia 2, 3 e 4 para gerar valores padrão

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
}

// valor padrão es2015

function soma3(a = 1, b = 2, c = 3){
    return a + b + c
}