import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import IniciarSesion from './components/sesion/IniciarSesion';
import Registrarse from './components/sesion/Registrarse';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />

          <Switch>
            <Route exact path="/" component={IniciarSesion} />
            <Route path="/registrarme" component={Registrarse} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
