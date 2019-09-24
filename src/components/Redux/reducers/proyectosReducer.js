const iniState = {
    error: null,
    listaProyectos: [
        { id: 1, nombreProyecto: "App en Angular", descripcionProyecto: "Aplicacion realizada en Angular", correoCliente: "ayneer12@gmail.com" },
        { id: 2, nombreProyecto: "API REST en Node", descripcionProyecto: "Servidor creado en Node", correoCliente: "luis@gmail.com" },
        { id: 3, nombreProyecto: "App en React y Firebase", descripcionProyecto: "Aplicacion realizada bajo React y Firebase", correoCliente: "ayneer12@gmail.com" }
    ]
}

const proyectosReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'NUEVO_PROYECTO':
            console.log(action.proyecto);
            return {
                ...state,
                error: false
            }

        case 'NUEVO_PROYECTO_ERROR':
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}

export default proyectosReducer;