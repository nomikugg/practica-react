import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setscrollY] = useState(0);

  //Podemos usar useEffect cuantas veces queramos
  useEffect(() => {
    console.log("Fase de montaje");

    const detectarScroll = () => {
      setscrollY(window.scrollY);
    };
    window.addEventListener("scroll", detectarScroll);
  }, []);

  useEffect(() => {
    console.log("Fase de actualizacion");
  });
  //Poner un array vacio para no se ejecute el useEffect infinitamente
  return (
    <>
      <h2>Hooks, useEffect y el ciclo de vida</h2>
      <p>ScrollY del Navegador {scrollY}px</p>
    </>
  );
}
