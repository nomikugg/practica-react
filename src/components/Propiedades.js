import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"Verdadero": "Falso"}</li>
                <li>[{props.arreglo.join(',')}]</li>
                <li>{props.objeto.nombre + ' - ' + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.mifuncion).join(',')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}//Tambien se puede exportar de esta forma directamente

Propiedades.defaultProps ={ //Propiedades por defecto ya tiene, podemos pasar
    name: "Soy Luis desde Props"
}