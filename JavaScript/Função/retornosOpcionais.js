function area(){
   this.nome ="Erick"
}

area.prototype.soma = function(){
    console.log("ola")
}

let somar = new area;


somar.soma()