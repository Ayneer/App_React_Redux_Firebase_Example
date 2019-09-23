export const nuevoProyecto = (proyecto) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //funcion o acciones asincronas con la base de datos
        const fireStore = getFirestore();
        fireStore.collection('proyectos').add(
            {
                ...proyecto
            }
        ).then(()=>{
            dispatch({ type: "NUEVO_PROYECTO", proyecto });
        }).catch((error)=>{
            dispatch({ type: "NUEVO_PROYECTO_ERROR", error });
        })
    }
}