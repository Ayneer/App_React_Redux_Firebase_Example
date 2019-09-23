import React, { Component } from 'react';
import {connect} from 'react-redux';
import {nuevoCliente} from '../Redux/Acciones/clienteAcciones';

export class Registrarse extends Component {

    state = {
        nombre: "",
        correo: "",
        contraseña: ""
    }

    onSubmit = (event) =>{
        event.preventDefault();
        //console.log(this.state);
        this.props.nuevoCliente(this.state);
    }

    onChange = (evento) => {
        const name = evento.target.name;
        this.setState({
            [name] : evento.target.value
        });
    }

    cancelar = () =>{
        this.setState({
            nombre: "",
        correo: "",
        contraseña: ""
        });
    }


    render() {
        const { nombre, correo, contraseña } = this.state;
        return (
            <div className="card container">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input value={correo} type="email" name="correo" className="form-control" aria-describedby="aydaEmail" placeholder="Ingrese su correo" onChange={this.onChange} />
                            <small id="aydaEmail" className="form-text text-muted">No compartiremos su correo con nadie.</small>
                        </div>
                        <div className="form-group">
                            <input value={nombre}  type="text" name="nombre" className="form-control" placeholder="Nombre completo" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <input value={contraseña} type="password" name="contraseña" className="form-control" placeholder="Contraseña" onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarme</button>
                    </form>
                    <button className="btn btn-danger" onClick={this.cancelar}>Cancelar</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        nuevoCliente: (cliente) => dispatch(nuevoCliente(cliente))
    }
} 

export default connect(null, mapDispatchToProps)(Registrarse);
