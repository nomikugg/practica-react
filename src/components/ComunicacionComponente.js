import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = e => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <>
        <h2>Comunicacion entre componentes</h2>
        <p>Contador: {this.state.contador}</p>
        <Hijo
          message="Mensaje para el hijo numero 1"
          method={this.incrementarContador}
        ></Hijo>
        <Hijo message="Mensaje para el hijo numero 2"></Hijo>
        {/* Primera comunicacion */}
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.message}</h3>
      <button onClick={props.method}>+</button>
    </>
  );
}
