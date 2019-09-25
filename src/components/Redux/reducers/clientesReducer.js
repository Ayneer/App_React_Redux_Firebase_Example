const iniState = {
    errorNuevoCliente: null,
    listaClientes: [
        { correo: "ayneer12@gmail.com", nombre: "Ayneer Luis Gonzalez Geles" },
        { correo: "luis@gmail.com", nombre: "Luis Perez Castro" }
    ]
}

const clientesReducer = (state = iniState, action) => {
    switch (action.type) {

        case 'NUEVO_CLIENTE':
            return {
                ...state,
                errorNuevoCliente: false
            }
        case 'NUEVO_CLIENTE_ERROR':
            return {
                ...state,
                errorNuevoCliente: action.error.message
            }

        case 'ELIMINAR_CLIENTE':
            console.log(action.correo);
            return state;

        default:
            return state;
    }
}

export default clientesReducer;