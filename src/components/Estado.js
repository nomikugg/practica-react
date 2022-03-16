import React, { Component } from "react";

function EstadoHijo(props) {
  return <div>{props.contadorHijo}</div>;
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // importante
      contador: 0,
    };
    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El estado</h2>
        <p>El valor: {this.state.contador}</p>
        <EstadoHijo contadorHijo={this.state.contador}></EstadoHijo>
      </div>
    );
  }
}
