import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nuevoProyecto } from '../Redux/Acciones/proyectoAcciones';
import { isLoaded } from 'react-redux-firebase';

export class NuevoProyecto extends Component {

    state = {
        nombreProyecto: "",
        descripcionProyecto: "",
        correoCliente: ""
    }

    onSubmit = (evento) => {

        evento.preventDefault();

        const { nuevoProyecto, profile} = this.props;

        const newProyecto = {
            ...this.state,
            correoCliente: profile.correo
        }

        nuevoProyecto(newProyecto);
        console.log("Termine onSubmit NuevoProyecto");
    }

    onChange = (evento) => {
        const name = evento.target.name;
        this.setState({
            [name]: evento.target.value
        });
    }

    render() {
        const { error, profile } = this.props;

        if (!isLoaded(profile)) {
            return <span>Cargando...</span>
        }

        return (
            <div className="card container">
                {error === null ? null : error ? <div>Error al crear nuevo Proyecto</div> : <div>Nuevo Proyecto guardado con exito!</div>}
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" name="nombreProyecto" className="form-control" placeholder="Ingrese el nombre del proyecto" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="descripcionProyecto" className="form-control" placeholder="Ingrese la descripcion del proyecto" onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Crear Proyecto</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nuevoProyecto: (proyecto) => dispatch(nuevoProyecto(proyecto))
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.proyectos.error,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoProyecto);
