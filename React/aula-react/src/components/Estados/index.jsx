import { useState } from "react"

export default function Estados(){
    let [cont , aumentar] = useState(1);

    function aumentarValor(){
        aumentar(cont+1);
    }
    return (
        <>
            <button onClick={aumentarValor}>Clique</button>

            <p>{cont}</p>
        </>
    )
}