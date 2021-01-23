import React from 'react';
import { Link } from "react-router-dom";

export default function Pokemon({ p }) {
  console.log(p);
  console.log("-----");
  return (
    <div className="box-pokemon">
      <ul>
        <img src={p.sprites != null ?
          p.sprites.back_default
          : " "} className="imagem-pokemon" />
        <li className="inf-pokemon">Número: {p.id}  </li>
        <li className="inf-pokemon">Nome do pokemon: {p.name} </li>
      </ul>
      <Link to="/minhaLista"> <button type="button" >Capturar</button> </Link>
    </div>
  );
}

{/* {
      types != null ?
        <li className="inf-pokemon">Tipos do pokemon:
       {types.map(t => " " + t.type.name + "; ")}
        </li>
        : ''
    } */}