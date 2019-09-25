import React from 'react';
import { NavLink } from "react-router-dom";
import { cerrarSesion } from '../Redux/Acciones/sesionAcciones';
import { connect } from 'react-redux';

function EnlacesLoginAdministrador(props) {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/proyectos">Proyectos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" onClick={props.cerrarSesion} to="/">Cerrar Sesion</NavLink>
                </li> 
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        cerrarSesion: () => { dispatch(cerrarSesion()) }
    }

}

export default connect(null, mapDispatchToProps)(EnlacesLoginAdministrador);