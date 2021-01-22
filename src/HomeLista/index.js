import React, { useState, useEffect } from 'react';
import lista from './lista.css'
import api from '../service/api';

function HomeList() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get("/pokemon/1")
      setPokemon(response.data);
      setTypes(response.data.types);
    }
    loadPokemon();
  }, []);

  function salveType(data) {
    const typeName = [];
    data.types.map(element => {
      typeName.push(element.type.name);
    });
    return typeName;
  }

  return (
    <>
      <h1 className="titulo">Pokedex-Gama</h1>
      <div className="box-pokemon">
        {pokemon != null ?
          <ul>
            <img src={pokemon.sprites != null ?
              pokemon.sprites.back_default
              : " "} className="imagem-pokemon" />
            <li className="inf-pokemon">Número: {pokemon.id}  </li>
            <li className="inf-pokemon">Nome do pokemon: {pokemon.name} </li>
            {types != null ?
              <li className="inf-pokemon">Tipos do pokemon:
            {types.map(t => " " + t.type.name + "; ")}
              </li>
              : ''}

          </ul>
          : (<div> className="empty" Loading... </div>)}

        <button type="button" >Capturar</button>
      </div>
    </>
  );
}

export default HomeList;