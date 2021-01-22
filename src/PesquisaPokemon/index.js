import React, { useEffect, useState } from 'react';
import pokemon from './pokemon.jpg';

export default function PesquisaPokemon() {

  const [searchPokemon, setSearchPokemon] = useState([]);

  useEffect(() => {
    let pokemonName = localStorage.getItem('pokemonName');
    pokemonName = JSON.parse(pokemonName);
    setSearchPokemon(pokemonName);

  }, []);

  return (
    <>
      <h1>Informações do Pokemon</h1>
      <div className="container">
        <img src={pokemon} alt="Imagem do pokemon" />
        <ul>
          {searchPokemon.map(pesquisa => {
            return (
              <li>{pesquisa}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}