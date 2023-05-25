//Funçao em JS é First-Class Object (citizens)
//Higher-order function

//Criar de forma literal

function fun1(){

}

//Armazenar em uma variavel

const fun2 = function(){

}

//Armazenar em um Array

const array = [ function(a,b){return a +b }, fun1, fun2]


// Armazenar em atributi de objeto

const obj = {}
obj.falar = function(){return "opa"}//apenas colocar ponto a frente do objeto e o nome do atributo vc consegue criar dinamicamento o atributo
console.log(obj.falar())

// Passar função como parametro de outra função
function run(fun){
    fun()
}


// Uma função pode retornar/ conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)