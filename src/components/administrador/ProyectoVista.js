import React from 'react';

function ProyectoVista({proyecto}) {
    return (
        <div className="card container">
            <div className="card-body">
                <h5 className="card-title">Proyecto #{proyecto.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Informacion del proyecto</h6>
                <p className="card-text">{proyecto.nombreProyecto}</p>
                <p className="card-text"> {proyecto.descripcionProyecto} </p>
                <p className="card-text"> {proyecto.correoCliente} </p>
            </div>
        </div>
    )
}

export default ProyectoVista;
