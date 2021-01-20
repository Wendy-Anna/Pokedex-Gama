import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeList from './HomeLista';
import MinhaListaPokemon from './MinhaListaPokemon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={HomeList} />
        <Route path="/minhaLista" component={MinhaListaPokemon} />
      </Switch>
    </BrowserRouter>
  )
}