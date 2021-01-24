import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";
import { Button, Card, Row, Col } from 'react-materialize';

export default function Pokemon({ p }) {
  return (

    <div className="col s6 card ">
      <ul>
        <img src={p.sprites != null ?
          p.sprites.back_default
          : " "} className="imagem-pokemon" />
        <li className="inf-pokemon">Número: {p.id}  </li>
        <li className="inf-pokemon">Nome do pokémon: {p.name} </li>
      </ul>
      <Link to="/minhaLista"> <button type="button" >Capturar</button> </Link>

    </div>

  );
}

{/* {
      types != null ?
        <li className="inf-pokemon">Tipo do pokémon:
       {types.map(t => " " + t.type.name + "; ")}
        </li>
        : ''
    } */}