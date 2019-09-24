export const iniciarSesion = (credenciales) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //funcion o acciones asincronas con la base de datos
        const fireBase = getFirebase();
        fireBase.auth().signInWithEmailAndPassword(
            credenciales.correo,
            credenciales.contraseña
        ).then(() => {
            dispatch({ type: "INICIAR_SESION", credenciales });
        }).catch((error) => {
            dispatch({ type: "INICIAR_SESION_ERROR", error });
        })
    }
}

export const cerrarSesion = () => {
    return (dispatch, getState, { getFirebase }) => {
        //funcion o acciones asincronas con la base de datos
        const fireBase = getFirebase();
        fireBase.auth().signOut().then(() => {
            dispatch({ type: "CERRAR_SESION", estado: true });
        }).catch((error) => {
            dispatch({ type: "CERRAR_SESION_ERROR", error });
        })
    }
}