export const nuevoCliente = (cliente) =>{
    return (dispatch, getState) =>{
        //funcion o acciones asincronas con la base de datos
        dispatch({type: "NUEVO_CLIENTE", cliente});
    }
}
export const eliminarCliente = (correo) =>{
    return (dispatch, getState) =>{
        //funcion o acciones asincronas con la base de datos
        dispatch({type: "ELIMINAR_CLIENTE", correo});
    }
}