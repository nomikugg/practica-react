import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
        <Footer message="Hola desde el componente padre"></Footer>
        <hr/>
        <Propiedades
          cadena="Esto es una cadena"
          numero={25}
          booleano={true}
          arreglo={[1,2,3,4]}
          objeto={{nombre:'Luis', correo: 'fernando@gmail.com'}}
          elementoReact={<i>Esto es un elemento React</i>}
          mifuncion={(num)=>num*num}
          componenteReact={<Footer message="Soy un componente de Propiedades"></Footer>}
        >
        </Propiedades>
        </section>
      </header>
    </div>
  );
}

export default App;
