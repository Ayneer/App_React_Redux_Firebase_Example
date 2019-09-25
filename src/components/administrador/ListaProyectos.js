import React, { Component } from 'react';
import ProyectoVista from './ProyectoVista';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

class ListaProyectos extends Component {

    render() {

        const { proyectos } = this.props;

        if(!isLoaded(proyectos)){
            return (<div>Cargando informacion de proyectos...</div>);
        }

        if (proyectos.length > 0) {
            return (
                proyectos.map(proyecto =>

                    <div key={proyecto.id}>
                        <Link to={"/proyecto/" + proyecto.id}>
                            <ProyectoVista proyecto={proyecto} />
                        </Link>
                    </div>
                )
            )
        } else {
            return (
                <div>No hay proyectos!</div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        proyectos: state.firestore.ordered.proyectos
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'proyectos' }])
)(ListaProyectos);