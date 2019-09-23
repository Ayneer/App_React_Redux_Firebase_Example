import React from 'react';
import { NavLink } from "react-router-dom";

function EnlacesLogout() {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registrarme">Registrarme</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Iniciar Sesion</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default EnlacesLogout
