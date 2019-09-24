import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from 'react-redux-firebase';

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
    console.log("render App")
    if (!isLoaded(this.props.auth)) {
      return <span>Cargando pagina...</span>
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {isEmpty(this.props.auth) ?
            <Switch>
              <Route exact path="/" component={IniciarSesion} />
              <Route path="/registrarme" component={Registrarse} />
              <Route path="/" render={() => <Redirect to="/" />} />
            </Switch>
            :
            <Switch>
              <Route exact path="/" component={MyPerfil} />
              <Route exact path="/myPerfil" component={MyPerfil} />
              <Route exact path="/nuevoProyecto" component={NuevoProyecto} />
              <Route exact path="/clientes" component={ListaClientes} />
              <Route exact path="/proyectos" component={ListaProyectos} />
              <Route exact path="/proyecto/:id" component={Proyecto} />
              <Route path="/" render={() => <Redirect to="/" />} />
            </Switch>
          }
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
