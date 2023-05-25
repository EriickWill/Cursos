export default function Form(){

    function enviar(e){
        e.preventDefault();
        console.log("enviou")
        
    }

    return (

        <div>
            <h1>Meu cadastro</h1>
            <form action="" onSubmit={enviar}>
                <div>
                    <input type="email" placeholder="digite seu nome" name="" id="" />
                </div>
                <div>
                    <input type="submit" value={"Enviar"} />
                </div>
            </form>
        </div>

    )
}