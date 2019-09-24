import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import IniciarSesion from './components/sesion/IniciarSesion';
import Registrarse from './components/sesion/Registrarse';
import MyPerfil from './components/cliente/Myperfil';
import NuevoProyecto from './components/cliente/NuevoProyecto';
import ListaClientes from './components/administrador/ListaClientes';
import ListaProyectos from './components/administrador/ListaProyectos';
import Proyecto from './components/administrador/Proyecto';

import './App.css'

class App extends Component {
  render() {
    console.log("render app");
    console.log(this.props.uid);
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />

          {!this.props.uid ?
            <Switch>
              <Route exact path="/" component={IniciarSesion} />
              <Route path="/registrarme" component={Registrarse} />
            </Switch>
            :
            <Switch>
              <Route path="/myPerfil" component={MyPerfil} />
              <Route path="/" component={MyPerfil} />
              <Route path="/nuevoProyecto" component={NuevoProyecto} />
              <Route path="/clientes" component={ListaClientes} />
              <Route path="/proyectos" component={ListaProyectos} />
              <Route path="/proyecto/:id" component={Proyecto} />
            </Switch>
          }

        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    uid: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(App);
