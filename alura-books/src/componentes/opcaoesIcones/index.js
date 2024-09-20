import './estilos.css'

function OpcoesIcones() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            ))}
        </ul>
    )

}

export default OpcoesIcones
