import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import IniciarSesion from './components/sesion/IniciarSesion';
import Registrarse from './components/sesion/Registrarse';
import MyPerfil from './components/cliente/Myperfil';
import NuevoProyecto from './components/cliente/NuevoProyecto';
import ListaClientes from './components/administrador/ListaClientes';
import ListaProyectos from './components/administrador/ListaProyectos';

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
            <Route path="/myPerfil" component={MyPerfil} />
            <Route path="/nuevoProyecto" component={NuevoProyecto} />
            <Route path="/clientes" component={ListaClientes} />
            <Route path="/proyectos" component={ListaProyectos} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
