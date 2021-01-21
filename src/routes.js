import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeList from './HomeLista';
import MinhaListaPokemon from './MinhaListaPokemon';
import PesquisaPokemon from './PesquisaPokemon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomeList} />
        <Route path="/minhaLista" component={MinhaListaPokemon} />
        <Route path="/pesquisa" component={PesquisaPokemon} />
      </Switch>
    </BrowserRouter>
  )
}