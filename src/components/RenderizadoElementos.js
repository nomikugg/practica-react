import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.data.url} target={`_blank`}>
        {props.data.name}
      </a>
      {/* Al hacer un llamado a las propiedades y sus atributos, valor, no es necesario
      No es necesario poner el    THIS.
       */}
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["primavera", "otonio", "verano", "invierno"],
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del anio</h3>

        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>

        <h3>Frameworks Frontend de JavaScript</h3>
        <ul>
          {/* LLamar al data.framework y no solamente a data.map
        Hacer la llamada de manera correcta
        */}
          {data.frameworks.map(el => (
            <ElementoLista key={el.id} data={el} />
          ))}{" "}
          {/* data es la propiedad que se pasa y no el */}
        </ul>
      </div>
    );
  }
}
