import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nuevoProyecto } from '../Redux/Acciones/proyectoAcciones';

export class NuevoProyecto extends Component {

    state = {
        nombreProyecto: "",
        descripcionProyecto: "",
        usuario: "",
        id: 0
    }

    onSubmit = (evento) =>{

        evento.preventDefault();

        const { nuevoProyecto, usuario } = this.props;

        const newProyecto = {
            ...this.state,
            id: Math.random(),
            usuario
        }

        nuevoProyecto(newProyecto);
    }

    onChange = (evento) =>{
        const name = evento.target.name;
        this.setState({
            [name] : evento.target.value
        });
    }

    render() {
        return (
                <div className="card container">
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

const mapDispatchToProps = (dispatch) =>{
    return {
        nuevoProyecto: (proyecto) => dispatch(nuevoProyecto(proyecto))
    }
}

const mapStateToProps = (state) =>{
    return {
        usuario: state.autenticacion.correo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoProyecto);
