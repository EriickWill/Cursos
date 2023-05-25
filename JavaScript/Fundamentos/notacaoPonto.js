console.log(Math.ceil(6.1));//Ceil serve para arredondar o numero para cima

const obj1 = {

}
obj1.nome = "bola";


function Obj(nome){
    this.nome = nome;
}
const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)