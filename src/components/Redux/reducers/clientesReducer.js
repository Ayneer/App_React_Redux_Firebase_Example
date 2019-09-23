const iniState = {
    listaClientes: [
        {id: 1, correo: "ayneer12@gmail.com", nombre: "Ayneer Luis Gonzalez Geles"},
        {id: 2, correo: "luis@gmail.com", nombre: "Luis Perez Castro"}
    ]
}

const clientesReducer = (state = iniState, action) => {
    return state;
}

export default clientesReducer;