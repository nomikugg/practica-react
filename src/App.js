import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponente from "./components/ComunicacionComponente";
import CicloVida from "./components/CicloVida.js";

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
          <hr />
          <Propiedades
            cadena="Esto es una cadena"
            numero={25}
            booleano={true}
            arreglo={[1, 2, 3, 4]}
            objeto={{ nombre: "Luis", correo: "fernando@gmail.com" }}
            elementoReact={<i>Esto es un elemento React</i>}
            mifuncion={num => num * num}
            componenteReact={
              <Footer message="Soy un componente de Propiedades"></Footer>
            }
          ></Propiedades>
          <hr />
          <Estado></Estado>
          {/* Usar emmet para los elementos HTML normales
            // Pero no usar para llamar a los componentes, porque no hace la
            //importacion del componente
           */}

          <hr />

          <RenderizadoCondicional></RenderizadoCondicional>

          <hr />

          <RenderizadoElementos />

          <hr />

          <EventosES6></EventosES6>
          <hr />
          <EventosES7></EventosES7>

          <hr />

          <MasSobreEventos></MasSobreEventos>
          <hr />

          <ComunicacionComponente></ComunicacionComponente>

          <hr />
          <CicloVida />
        </section>
      </header>
    </div>
  );
}

export default App;
