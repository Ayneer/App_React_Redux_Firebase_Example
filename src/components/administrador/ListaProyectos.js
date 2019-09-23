import React, { Component } from 'react';
import ProyectoVista from './ProyectoVista';
import { connect } from 'react-redux'

class ListaProyectos extends Component {
    
    render() {
        const { proyectos } = this.props;
        return (
            proyectos.map(proyecto =>
                <div key={proyecto.id}>
                    <ProyectoVista proyecto={proyecto} />
                </div>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        proyectos: state.proyectos.listaProyectos
    }
}

export default connect(mapStateToProps)(ListaProyectos);