import React, { Component } from 'react';
import ClienteVista from './ClienteVista';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import {eliminarCliente} from '../Redux/Acciones/clienteAcciones';

class ListaClientes extends Component {
    render() {
        const { clientes } = this.props;

        if(!isLoaded(clientes)){
            return (<div>Cargando informacion de clientes...</div>);
        }
        
        if (clientes.length > 0) {
            return (
                clientes.map((cliente, index) =>
                    <div key={index}>
                        <ClienteVista cliente={cliente} index={index} eliminarCliente={this.props.eliminarCliente} />
                    </div>
                )
            )
        }else{
            console.log(clientes);
            return (<div>No hay clientes!</div>);
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.clientes);
    return {
        clientes: state.firestore.ordered.clientes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        eliminarCliente: (correo) => dispatch(eliminarCliente(correo))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{collection: 'clientes', orderBy: ['nombre', 'desc']}])) (ListaClientes);