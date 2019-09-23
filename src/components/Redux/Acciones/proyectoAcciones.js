export const nuevoProyecto = (proyecto) =>{
    return (dispatch, getState) =>{
        //funcion o acciones asincronas con la base de datos
        dispatch({type: "NUEVO_PROYECTO", proyecto});
    }
}