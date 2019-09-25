import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

let proyecto = null;

export class Proyecto extends Component {

    state = {
        descripcionProyecto: "",
        correoCliente: "",
        nombreProyecto: "",
        id: "",
        editar: false
    }

    onChange = (evento) =>{
        const name = evento.target.name;
        this.setState({
            [name]: evento.target.value
        })
    }

    guardarProyecto = (evento) => {
        console.log(this.state);
    }

    canelarActualizacion = (evento) => {
        evento.preventDefault();
        this.setState({
            editar: false
        })
    }

    editarProyecto = (evento) =>{
        evento.preventDefault();
        this.setState({
            editar: true,
            descripcionProyecto: proyecto.descripcionProyecto,
        correoCliente: proyecto.correoCliente,
        nombreProyecto: proyecto.nombreProyecto,
        id: this.props.id,
        })
    }

    render() {

        const { id, proyectos } = this.props;
        const {editar, nombreProyecto, descripcionProyecto, correoCliente} = this.state;

        if(!isLoaded(proyectos)){
            return (<div>Cargando...</div>);
        }

        let myProyecto = null ;

        if (proyectos) {
            myProyecto = proyectos[id];
            proyecto = myProyecto;
        }else{
            return (<div>No existe el proyecto!!</div>);
        }

        if (myProyecto) {
            if(editar){
                return (
                    <div className="card container">
                        <div className="card-body">
                            <h5 className="card-title">Proyecto #{id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Informacion del proyecto</h6>
                            <div className="form-group">
                                <input type="text" name="nombreProyecto" value={nombreProyecto} className="form-control" placeholder="Ingrese el nombre del proyecto" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="descripcionProyecto" value={descripcionProyecto} className="form-control" placeholder="Ingrese la descripcion del proyecto" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="correoCliente" value={correoCliente} className="form-control" placeholder="Ingrese la descripcion del proyecto" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary" onClick={this.guardarProyecto}>Guardar</button>
                                <button type="button" className="btn btn-danger" onClick={this.canelarActualizacion}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="card container">
                    <div className="card-body">
                        <h5 className="card-title">Proyecto #{id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Informacion del proyecto</h6>
                        <p className="card-text"> {proyecto.nombreProyecto} </p>
                        <p className="card-text"> {proyecto.descripcionProyecto} </p>
                        <p className="card-text"> {proyecto.correoCliente} </p>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.editarProyecto}>Editar</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>No existe el proyecto!</div>
            )
        }

    }
}

const mapStateToProps = (state, props) => {
    return {
        id : props.match.params.id,
        proyectos : state.firestore.data.proyectos
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'proyectos' }]))(Proyecto);
