import React from "react";
import { NavLink } from "react-router-dom";
import EnlacesLogin from './EnlacesLogin';
import EnlacesLogout from './EnlacesLogout';
import EnlacesLoginAdministrador from './EnlacesLoginAdministrador';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

function Navbar(props) {

  if (!isLoaded(props.auth)) {
    return <span></span>
  }

  if (!isLoaded(props.profile)) {
    return <span></span>
  }

  //return <span>Not Authed, Please Login</span>
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {isEmpty(props.auth) ?
          <EnlacesLogout />
          :
          props.profile.tipo === 1 ?
            <EnlacesLoginAdministrador />
            :
            props.profile.tipo === 2 ?
              <EnlacesLogin />
              :
              null
        }

      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
