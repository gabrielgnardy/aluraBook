import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'
import CardRecomendado from '../CardRecomendado'
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    cursor: pointer;

`
const ImgLivrosContainer = styled.img `
    display: flex;
    width: 15%;
`

function UltimosLacamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor={"#EB9B00"} tamanhoFonte={"36px"}>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <ImgLivrosContainer key={livro.id} src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomendado
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLacamentos