import React, { Component } from 'react';
import ProyectoVista from './ProyectoVista';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ListaProyectos extends Component {
    
    render() {
        console.log(this.props);
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'proyectos'}])
)(ListaProyectos);