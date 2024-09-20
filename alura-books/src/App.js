import './App.css';
import Logo from './componentes/logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';
import OpcoesHeader from './componentes/opcoesHeader';
import OpcoesIcones from './componentes/opcaoesIcones'

const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader></OpcoesHeader>
        <OpcoesIcones></OpcoesIcones>
      </header>
    </div>
  );
}

export default App