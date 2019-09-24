import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

export class Proyecto extends Component {

    onChage = (evento) =>{
        
    }

    render() {

        const { proyecto, id } = this.props;

        if (proyecto) {
            return (
                <div className="card container">
                    <div className="card-body">
                        <h5 className="card-title">Proyecto #{id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Informacion del proyecto</h6>
                        <div className="form-group">
                            <input type="text" name="nombreProyecto" value={proyecto.nombreProyecto} className="form-control" placeholder="Ingrese el nombre del proyecto" onChange={this.onChange} />
                        </div>
                        <p className="card-text"> {proyecto.descripcionProyecto} </p>
                        <p className="card-text"> {proyecto.correoCliente} </p>
                    </div>
                </div>
            )
        } else {
            return(
                <div>Cargando Proyecto...</div>
            )
        }

    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id;
    let proyecto = null;
    if (state.firestore.data.proyectos) {
        proyecto = state.firestore.data.proyectos[id];
    }
    return {
        proyecto,
        id
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'proyectos' }]))(Proyecto);
