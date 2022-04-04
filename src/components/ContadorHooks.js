import React, { useState } from "react";

export default function ContadorHooks(props) {
  // console.log(useState());
  const [contador, setContador] = useState(0);
  //useState(aqui puede recibiar cualquier tipo de dato, numero, valor inicial, string)

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
    </>
  );
}
ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
