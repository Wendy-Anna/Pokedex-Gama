import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Pesquisa() {
  const history = useHistory();
  const [pokemon, setPokemon] = useState('');

  function handlePesquisaPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
      const pesquisaPokemon = response.data;
      const pesquisaPokemonName = [];


      //Pegando o id do pokemon
      const numeroPokemon = pesquisaPokemon.id;
      console.log("O número do pokemon é: " + numeroPokemon);


      //Pegando a imagem
      //const imagemPokemon = pesquisaPokemon.sprites;



      //Pegando o nome do pokemon
      const namePokemon = pesquisaPokemon.name;
      console.log("O nome do pokemon é: " + namePokemon);

      //Pegando o tipo do pokemon
      //const typesPokemon = pesquisaPokemon.types;

      //typesPokemon.map((tipoPokemon) => {
      //typesPokemon.push(tipoPokemon.type);
      // console.log(typesPokemon);
      //const especie = tipoPokemon.type.name;
      //tipoPokemon = especie;
      //console.log(tipoPokemon);


      // })

      localStorage.setItem('namePokemon', JSON.stringify(namePokemon));
      history.push('/pesquisa');
      localStorage.setItem('numeroPokemon', JSON.stringify(numeroPokemon));
      //history.push('/pesquisa');

    });

  }

  return (
    <>
      <input className="pesquisapokemon" placeholder="Pesquise seu Pokemon" value={pokemon} onChange={e => setPokemon(e.target.value)} />
      <button type="button" onClick={handlePesquisaPokemon}>Pesquisar</button>
    </>
  );

}

export default Pesquisa;