import React from "react";
import { NavLink } from "react-router-dom";
import EnlacesLogin from './EnlacesLogin';
import EnlacesLogout from './EnlacesLogout';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <NavLink className="navbar-brand" to="/">Navbar</NavLink>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <EnlacesLogin />
        <EnlacesLogout />
      </div>
    </nav>
  );
}


export default Navbar;
