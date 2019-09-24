import React from "react";
import { NavLink } from "react-router-dom";
import EnlacesLogin from './EnlacesLogin';
import EnlacesLogout from './EnlacesLogout';
import EnlacesLoginAdministrador from './EnlacesLoginAdministrador';
import { connect } from 'react-redux';

function Navbar(props) {
  console.log("navbar");
  console.log(props.uid)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <NavLink className="navbar-brand" to="/">Navbar</NavLink>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {!props.uid ?
        <div className="collapse navbar-collapse" id="navbarNav">
          <EnlacesLogout />
        </div>
        :
        <div className="collapse navbar-collapse" id="navbarNav">
          <EnlacesLogin />
          <EnlacesLoginAdministrador />
        </div>
      }

    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state.firebase.auth)
  return {
    uid: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(Navbar);
