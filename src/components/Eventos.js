import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar() {
    // console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
    // console.log("sumando");
  }
  restar() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Eventos de Clase - ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  // this.sumar = this.sumar.bind(this);
  // this.restar = this.restar.bind(this);

  //METODOS
  //Property Inicializer
  //Arrow functions
  // Ya no es necesario el Binding
  //
  //
  //
  //Si desea utilizar los métodos al definir el estado, debe inicializar los métodos antes de inicializar el estado.

  // Llamar a un método mientras se inicializa el estado no funcionará si inicializa el método después del estado.
  sumar = () => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
    // console.log("sumando");
  };
  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Eventos de Clase - ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}> Boton hecho componente</button>;
// }

// const Boton = props => (
//   <button onClick={props.myOnClick}> Boton hecho componente</button>
// );

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}> Boton hecho componente</button>
);

// Tres maneras de hacer este componente

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={e =>
            this.handleClick(
              e,
              "Hola, Pasando mensaje desde un parametro, arrow function"
            )
          }
        >
          Saludar
        </button>
        {/* //El evento onClick es un evento de JSX,
        //Pero no asi de un componente
        Personalizado
        //Evento personalizado
        */}
        {/* <Boton
          onClick={e =>
            this.handleClick(
              e,
              "Hola, Pasando mensaje desde un parametro, arrow function"
            )
          }
        ></Boton> */}

        <Boton
          myOnClick={e =>
            this.handleClick(
              e,
              "Hola, Pasando mensaje desde un parametro, arrow function"
            )
          }
        ></Boton>
      </div>
    );
  }
}
