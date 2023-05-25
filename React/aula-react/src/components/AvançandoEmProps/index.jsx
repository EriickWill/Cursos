
// Aqui você esta importando uma biblioteca que permite dar o tipo de dado para uma prop
import  PropTypes  from "prop-types"

export default function AvanProps({marca, lan}){
    return <p>Carro:</p>
}


// Aqui usando o .propTypes recebendo um objeto que vai o nome da prop como key
// do objeto e como valor o tipo de dado que ela vai receber
// com isso o tipo de dado deve ser respeitado
AvanProps.propTypes = {
    // colocando como value o PropTypes.(tipo do dado)
    marca: PropTypes.string,
    // colocando o isRequired você faz com que seja de extrema importancia aquela prop
    // com isso o componente não funciona sem
    lan: PropTypes.number.isRequired,
}

// Aqui é para deixar valores pré definidos nas props caso elas não seja passadas
AvanProps.defaultProps = {
    marca: "Faltou a marca",
    lan:0,
}