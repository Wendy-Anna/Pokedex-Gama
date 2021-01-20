import React, { useState } from 'react';
import axios from 'axios';

function HomeList() {
  const [pokemon, setPokemon] = useState('');

  function handlePesquisaPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => console.log(response.data.name));
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => console.log(response.data.species));
  }

  return (
    <>
      <input className="pesquisapokemon" placeholder="Pesquise seu Pokemon" value={pokemon} onChange={e => setPokemon(e.target.value)} />
      <button type="button" onClick={handlePesquisaPokemon}>Pesquisar</button>
    </>
  );

}

export default HomeList;