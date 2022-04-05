import React, { useEffect, useState } from "react";

const Reloj = ({ hour }) => {
  return <h3>{hour}</h3>;
};

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  // let temporizador = null;

  // const tictac = () => {
  //   temporizador = setInterval(() => {
  //     setHour(new Date().toLocaleTimeString());
  //   }, 1000);
  // };
  // const iniciar = () => {
  //   setVisible(true);
  //   tictac();
  // };
  // const detener = () => {
  //   clearInterval(temporizador);
  //   setVisible(false);
  // };
  // O tambien se puede de otra manera usando el useEffect()
  useEffect(() => {
    let temp = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    if (visible) {
      setHour(new Date().toLocaleTimeString());
    }
    return () => {
      clearInterval(temp); // desmontaje del setInterval
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj hour={hour}></Reloj>}
      {/* <button onClick={iniciar}>Iniciar</button>
      <button onClick={detener}>Detener</button> */}
      {/* sin useEffect */}

      {/* con useEffect */}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
}
