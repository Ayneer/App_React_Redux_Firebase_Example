import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nuevoProyecto } from '../Redux/Acciones/proyectoAcciones';

export class NuevoProyecto extends Component {

    state = {
        nombreProyecto: "",
        descripcionProyecto: "",
        correoCliente: ""
    }

    onSubmit = (evento) => {

        evento.preventDefault();

        const { nuevoProyecto, usuario } = this.props;

        const newProyecto = {
            ...this.state,
            correoCliente: usuario
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
        const {error} = this.props;
        console.log(error);
        return (
            <div className="card container">
                {(error !== undefined && error !== false) ? <div>Error al crear nuevo Proyecto</div> : <div>Nuevo Proyecto guardado con exito!</div>}
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
    console.log("mapStateToProps Nuevo proyecto");
    return {
        usuario: state.autenticacion.correo,
        error: state.proyectos.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoProyecto);
