import React from "react";

// class Footer extends Component{
//     render(){
//         return <>
//             <p>Este es un componente</p>
//         </>
//     }
// }

//Otra manera
// function Footer(props){
//     return <>
//         <p>Mensaje: {props.message}</p>
//     </>
// }

//Otra forma de tambien hacer es directo
const Footer = props => <p>Funcion Flecha: {props.message}</p>; //Con arrow function
//return implicito

export default Footer;
