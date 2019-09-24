import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function Myperfil(props) {
    if (props.clientes && props.id) {
        const cliente = props.clientes[props.id];
        if (cliente) {
            return (
                <div className="card container">
                    <div className="card-body">
                        <h5 className="card-title">My perfil</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Informacion de la sesion</h6>
                        <p className="card-text"> {cliente.nombre} </p>
                        <p className="card-text"> {cliente.correo} </p>
                    </div>
                </div>
            )
        } else {
            return (<div className="card container">
                <div className="card-body">
                    <h5 className="card-title">My perfil</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Informacion de la sesion</h6>
                    <p className="card-text"> Informacion no disponible. </p>
                    <p className="card-text"> Informacion no disponible. </p>
                </div>
            </div>)

        }
    } else {
        return (<div>Cargando informacion del cliente...</div>)
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        clientes: state.firestore.data.clientes,
        id: state.firebase.auth.uid
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'clientes' }]))(Myperfil);
