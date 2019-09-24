import React, { Component } from 'react';
import {connect} from 'react-redux';
import {iniciarSesion} from '../Redux/Acciones/sesionAcciones';

export class IniciarSesion extends Component {
    state = {
        correo: "",
        contraseña: ""
    }

    onSubmit = (evento) =>{
        evento.preventDefault();
        this.props.iniciarSesion(this.state);
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
                {!this.props.errorSesion ? null : <div>Error al iniciar sesion</div>}
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="email" name="correo" className="form-control" aria-describedby="aydaEmail" placeholder="Ingrese su correo" onChange={this.onChange} />
                            <small id="aydaEmail" className="form-text text-muted">No compartiremos su correo con nadie.</small>
                        </div>
                        <div className="form-group">
                            <input type="password" name="contraseña" className="form-control" placeholder="Contraseña" onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{

    return{
        iniciarSesion: (credenciales) => {dispatch(iniciarSesion(credenciales))}
    }

}

const mapStateToProps = (state) =>{
    return {
        errorSesion: state.autenticacion.errorSesion
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniciarSesion);
