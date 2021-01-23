import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './lista.css';
import api from '../service/api';
import { AiOutlineSearch } from "react-icons/ai";
import Pokemon from '../component';

function HomeList() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get("/pokemon")
      await buscaPokemon(response.data.results)
      // setTypes(result.types);
    }
    loadPokemon();
  }, []);

  async function buscaPokemon(data) {
    const pok = []
    const promises = data.map(async response =>
      pok.push(await fetch(response.url).then(res => res.json().then(data => data)))
    );
    await Promise.all(promises);

    setPokemon(pok);
  }

  function salveType(data) {
    const typeName = [];
    data.types.map(element => {
      typeName.push(element.type.name);
    });
    return typeName;
  }

  return (
    <>
      <div className="container">
        <h1 className="titulo">Pokedex-Gama</h1>
        <div className="pesquisa">
          <input type="text" className="pesquisaPokemon" placeholder="Pesquise aqui seu pokemon" />
          <Link to="/pesquisa" > <button className="botaoPesquisaPokemon"><AiOutlineSearch size={25} /></button> </Link>
        </div>
      </div>



      {
        pokemon ?
          <>
            {
              pokemon.map(element => <Pokemon p={element}> </Pokemon>)
            }
          </>
          : (<div className="empty"> Loading... </div>)
      }

    </>
  );
}

export default HomeList;