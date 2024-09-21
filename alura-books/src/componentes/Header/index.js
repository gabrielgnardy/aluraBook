import Logo from '../logo';
import OpcoesHeader from '../OpcoesHeader';
import OpcaoesIcones from '../IconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

    function Herder() {
        return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <OpcaoesIcones />
        </HeaderContainer>
    )
}

export default Herder