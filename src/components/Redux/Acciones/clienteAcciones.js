export const nuevoCliente = (cliente) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //funcion o acciones asincronas con la base de datos
        //const firebase = getFirebase();
        const firestore = getFirestore();

        // firebase.auth().createUserWithEmailAndPassword(cliente.correo, cliente.contraseña).then((respuesta) => {
        //     return firestore.collection('clientes').doc(respuesta.user.uid).set({
        //         correo: cliente.correo,
        //         nombre: cliente.nombre,
        //         tipo: cliente.tipo
        //     })
        // }).then(() => {
        //     dispatch({ type: "NUEVO_CLIENTE", cliente });
        // }).catch((error) => {
        //     dispatch({ type: "NUEVO_CLIENTE_ERROR", error });
        // })

        firestore.collection('clientes').add(
            {
                ...cliente
            }
        ).then(()=>{
            dispatch({ type: "NUEVO_CLIENTE", cliente });
        }).catch((error)=>{
            dispatch({ type: "NUEVO_CLIENTE_ERROR", error });
        });
    }
}
export const eliminarCliente = (correo) => {
    return (dispatch, getState) => {
        //funcion o acciones asincronas con la base de datos
        dispatch({ type: "ELIMINAR_CLIENTE", correo });
    }
}