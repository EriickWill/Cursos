const { EventEmitter } = require("events") // Aqui voce esta importando o EventEmitter do módulo que é do core do node (proprio dele)


const ev = new EventEmitter() //Aqui você está instanciando o eventEmitter na variavel ev


//Para iniciar um escutador de evento basta fazer isso:
ev.on("saySomething",()=>{
    console.log("eu ouvi")
})

// Para dispara somente uma vez mesmo que tenham varias emisoes
ev.once("saySomething",()=>{//Usando o once ao inves do on vc faz com que so aja SOMENTE uma execução
    console.log("eu ouvi")
})
ev.emit("saySomething")// Para emitir um evento você pega a variavel ev e usa o .emit aqui ele somente está emitindo ele precisa de um escutador para executar algo