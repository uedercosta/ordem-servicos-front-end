import React from 'react';
import ReactDOM from 'react-dom';

import "bootswatch/dist/sandstone/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/index';
import ListaClientes from './views/Clientes/ListaClientes';
import FormClientes from './views/Clientes/FormClientes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/clientes" component={ListaClientes}/>
            <Route  exact path="/clientes/form" component={FormClientes}/>
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);