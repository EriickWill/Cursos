// Par nome/valor , ou melhor, identificador e valor
const saudacao = "Opa" //Contexto léxico 1 ou seja a onde foi escrita essa declaração que no caso foi no contexto do arquivo fora de um escopo de bloco


function exec(){
    const saudacao = "falaaaa"//Contexo léxico 2 onde é escrita dentro de um escopo de bloco onde so será usado dentro do bloco
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente={
    nome:"Erick",
    idade:18,
    peso:70,
    endereco:{
        logradouro:"Rua Muito Legal",
        numero:123,
    }
}

console.log(saudacao);
console.log(exec())
console.log(cliente)