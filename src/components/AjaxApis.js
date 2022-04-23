import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}
export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {}
  render() {
    return (
      <>
        <h2>Peticiones asincronas en Componentes de clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando</h3>
        ) : (
          this.state.pokemons.map(el => (
            <Pokemon key={el.id} name={el.name} avatar={el.img} />
          ))
        )}
      </>
    );
  }
}
