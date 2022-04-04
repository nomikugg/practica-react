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

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        // console.log(json.results);
        json.results.forEach(element => {
          fetch(element.url)
            .then(dataPoke => dataPoke.json())
            .then(dataJson => {
              console.log(dataJson);
              let pokemon = {
                id: dataJson.id,
                name: dataJson.name,
                img: dataJson.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      });
  }
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
