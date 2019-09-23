import React, { Component } from 'react';
import ClienteVista from './ClienteVista';
import { connect } from 'react-redux';
import {eliminarCliente} from '../Redux/Acciones/clienteAcciones';

class ListaClientes extends Component {
    render() {

        const { clientes } = this.props;
        if (clientes.length > 0) {
            return (
                clientes.map((cliente, index) =>
                    <div key={index}>
                        <ClienteVista cliente={cliente} index={index} eliminarCliente={this.props.eliminarCliente} />
                    </div>
                )

            )
        } else {
            return (
                <div> <h6>No hay clientes</h6> </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        clientes: state.clientes.listaClientes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        eliminarCliente: (correo) => dispatch(eliminarCliente(correo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaClientes);