export default function Botao(){

    function escrever(){
        console.log("cliquei")
    }

    return <button onClick={escrever}>Clique em mim</button>
}

