import React from 'react'

function ClienteVista({cliente}) {
    return (
        <div className="card container">
            <div className="card-body">
                <h5 className="card-title">Cliente #{cliente.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Informacion del cliente</h6>
                <p className="card-text"> {cliente.nombre} </p>
                <p className="card-text"> {cliente.correo} </p>
            </div>
        </div>
    )
}

export default ClienteVista;
