import React from 'react';
import { connect } from 'react-redux';

function Myperfil(props) {
    console.log(props.auth)
    return (
        <div className="card container">
            <div className="card-body">
                <h5 className="card-title">My perfil</h5>
                <h6 className="card-subtitle mb-2 text-muted">Informacion de la sesion</h6>
                <p className="card-text"> Nombre cliente </p>
                <p className="card-text"> Correo de cliente </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Myperfil);
