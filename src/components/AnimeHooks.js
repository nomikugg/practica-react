import React, { useState, useEffect } from "react";
function Anime({ portada, nombre }) {
  return (
    <figure>
      <img src={portada} alt={nombre} />
      <figcaption>{nombre}</figcaption>
    </figure>
  );
}
export default function AnimeHooks() {
  const [animes, setAnimes] = useState([]);

  // fetch(`https://jikan1.p.rapidapi.com/top/anime/${page}/upcoming`, options);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": "b1d31fa624msh004900f1423c9ccp144d78jsn92a3e6846e62",
      },
    };
    let url = "https://jikan1.p.rapidapi.com/top/anime/1/upcoming";
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        // console.log(json.results);
        json.top.forEach(element => {
          // console.log(dataJson);
          let anime = {
            id: element.mal_id,
            nombre: element.title,
            imagen: element.image_url,
          };
          setAnimes(animes => [...animes, anime]);
        });
      });
    //onsole.log(animes);
  }, []);
  return (
    <>
      <h2>Peticiones asincronas en Componentes de clase</h2>
      {animes.length === 0 ? (
        <h3>Cargando</h3>
      ) : (
        animes.map(el => (
          <Anime key={el.id} nombre={el.nombre} portada={el.imagen} />
        ))
      )}
    </>
  );
}
