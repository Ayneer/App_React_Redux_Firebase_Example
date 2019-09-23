import React from 'react'

function ClienteVista({cliente, index, eliminarCliente}) {

    const onClick = (evento) =>{
        eliminarCliente(evento.target.value);
    }

    return (
        <div className="card container">
            <div className="card-body">
                <h5 className="card-title">Cliente #{index+1}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Informacion del cliente</h6>
                <p className="card-text"> {cliente.nombre} </p>
                <p className="card-text"> {cliente.correo} </p>
                <button type="button" value={cliente.correo} onClick={onClick} className="btn btn-primary">Eliminar</button>
            </div>
        </div>
    )
}

export default ClienteVista;
