import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setscrollY] = useState(0);

  //Podemos usar useEffect cuantas veces queramos
  useEffect(() => {
    console.log("Moviendo el scroll");

    const detectarScroll = () => {
      setscrollY(window.scrollY);
    };
    window.addEventListener("scroll", detectarScroll);
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);
  //Poner la variable como segundo parametro. update

  useEffect(() => {
    console.log("Fase de montaje");
  }, []); //Se ejecuta una sola vez, el montaje

  useEffect(() => {
    console.log("Fase de actualizacion");
  });
  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    };
  });
  //solamente cuando se hace cambio, es el equivalente a COMPONENTDIDUPDATE()
  return (
    <>
      <h2>Hooks, useEffect y el ciclo de vida</h2>
      <p>ScrollY del Navegador {scrollY}px</p>
    </>
  );
}
