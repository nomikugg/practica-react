import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setscrollY] = useState(0);
  useEffect(() => {
    console.log("Fase de montaje");

    const detectarScroll = () => {
      setscrollY(window.scrollY);
    };
    window.addEventListener("scroll", detectarScroll);
  });
  return (
    <>
      <h2>Hooks, useEffect y el ciclo de vida</h2>
      <p>ScrollY del Navegador {scrollY}px</p>
    </>
  );
}
