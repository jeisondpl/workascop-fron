import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Servicios from '../page/Servicios'
import Liquidacion from '../page/liquidacion/Liquidacion'
import Home from '../page/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/servicios'>
          <Servicios />
        </Route>
        <Route exact path='/liquidacion'>
          <Liquidacion />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
