import './App.css';
import Logo from './componentes/logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';
import OpcoesHeader from './componentes/opcoesHeader/index.js'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App