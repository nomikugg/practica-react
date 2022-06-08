import React, { Component } from "react";

class Reloj extends Component {
  // constructor(props) {
  //   super(props);
  // }
  //Ya no es necesario cuando no se usa estados directamente a props

  //componentWillUnmount
  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }
  render() {
    return <h3>{this.props.horaLocal}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aun no esta en el DOM");
    this.state = {
      horaLocal: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(2, "El estado o las props del componentes han cambiado ");
  //   console.log(prevProps);
  //   console.log(prevState);
  // }
  // Modificacion

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        horaLocal: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };
  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };
  render() {
    console.log(
      4,
      "El componente se dibuja, o redibuja por algun cambio en el DOM, state, etc"
    );
    return (
      <>
        <h2>Ciclo de vida de los Componentes</h2>
        {this.state.visible && <Reloj horaLocal={this.state.horaLocal}></Reloj>}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
