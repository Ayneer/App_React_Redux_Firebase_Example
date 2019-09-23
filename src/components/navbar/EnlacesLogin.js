import React from 'react';
import { NavLink } from "react-router-dom";

function EnlacesLogin() {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registrarme">My perfil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registrarme">Crear nuevo proyecto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registrarme">Cerrar Sesion</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default EnlacesLogin;