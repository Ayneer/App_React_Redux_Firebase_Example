import React from 'react';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

function Myperfil(props) {

    if(!isLoaded(props.profile)){
        return (<div>Cargando informacion del cliente...</div>);
    }

    return (
        <div className="card container">
            <div className="card-body">
                <h5 className="card-title">My perfil</h5>
                <h6 className="card-subtitle mb-2 text-muted">Informacion de la sesion</h6>
                <p className="card-text"> {props.profile.nombre} </p>
                <p className="card-text"> {props.profile.correo} </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Myperfil);
