const iniState = {
    listaClientes: [
        { correo: "ayneer12@gmail.com", nombre: "Ayneer Luis Gonzalez Geles" },
        { correo: "luis@gmail.com", nombre: "Luis Perez Castro" }
    ]
}

const clientesReducer = (state = iniState, action) => {
    switch (action.type) {
        
        case 'NUEVO_CLIENTE':
            console.log(action.cliente);
            break;

        case 'ELIMINAR_CLIENTE':
            console.log(action.correo);
            break;

        default:
            break;
    }
    return state;
}

export default clientesReducer;