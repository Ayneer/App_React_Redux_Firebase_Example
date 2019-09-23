import React from 'react';
import { NavLink } from "react-router-dom";

function EnlacesLoginAdministrador() {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/proyectos">Proyectos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default EnlacesLoginAdministrador;