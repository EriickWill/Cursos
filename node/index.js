const questions = [
    "O que eu aprendi hoje ?",
    "O que eu poderia fazer para melhorar ? "
]

const ask = (index = 0) =>{
    process.stdout.write(questions[index] + "\n")
}
ask()

process.stdin.on("data", data =>{
    process.stdout.write("Salvo")
    let frase = data;
    process.stdout.write(frase)

    process.exit()
})