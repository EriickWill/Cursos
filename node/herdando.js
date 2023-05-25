const { inherits } = require('util') //Aqui você está importando do core do node o módulo, que o mesmo é capaz de fazer algo herdar outro recebedo como parametro inherits(oQueVaiReceberAHerança, oQueVaiMandarAHerança )

const { EventEmitter } = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")
chapolin.on("help",()=>console.log(`Eu ! o ${chapolin.name} Colorado !`))

console.log("oh! E agora, quem poderá me defender?")
chapolin.emit("help");