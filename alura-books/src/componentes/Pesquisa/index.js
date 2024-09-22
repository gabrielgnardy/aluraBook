import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Título = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;

`

function Pesquisa() {
    const[textoDigitado, setTextoDigitado] = useState('')

    return(
    <PesquisaContainer>
        <Título>Já sabe por onde começar?</Título>
        <Subtitulo>Encontr seu livro em nossa estande.</Subtitulo>
        <Input
            placeholder="Escreva sua próxima leitura"
            onBlur={evento => setTextoDigitado(evento.target.value)}
        />
     </PesquisaContainer>
    )
}

export default Pesquisa