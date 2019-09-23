import React, { Component } from 'react';
import ClienteVista from './ClienteVista';
import { connect } from 'react-redux';

class ListaClientes extends Component {
    render() {

        const { clientes } = this.props;
        if (clientes.length > 0) {
            return (
                clientes.map(cliente =>
                    <div key={cliente.id}>
                        <ClienteVista cliente={cliente} />
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

export default connect(mapStateToProps)(ListaClientes);