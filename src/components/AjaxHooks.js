import React, { useState, useEffect } from "react";
function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
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
              // console.log(dataJson);
              let pokemon = {
                id: dataJson.id,
                name: dataJson.name,
                img: dataJson.sprites.front_default,
              };
              setPokemons(pokemons => [...pokemons, pokemon]);
            });
        });
      });
  }, []);
  return (
    <>
      <h2>Peticiones asincronas en Componentes de clase</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando</h3>
      ) : (
        pokemons.map(el => (
          <Pokemon key={el.id} name={el.name} avatar={el.img} />
        ))
      )}
    </>
  );
}
