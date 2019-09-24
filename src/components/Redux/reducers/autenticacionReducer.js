const iniState = {
    correo: "",
    contraseña: "",
    errorSesion: null,
    errorCerrarSesion: null
}

const autenticacionReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            console.log("sesion iniciada correctamente");
            return {
                ...state,
                errorSesion: null
            }

        case 'INICIAR_SESION_ERROR':
            console.log("fallo al iniciar sesion");
            return {
                ...state,
                errorSesion: true
            }

        case 'CERRAR_SESION_ERROR':
            console.log("fallo al cerrar sesion");
            return {
                ...state,
                errorCerrarSesion: true
            }

        case 'CERRAR_SESION':
            console.log("sesion cerrada exitosamente!");
            return {
                ...state,
                errorCerrarSesion: null
            }

        default:
            return state;
    }
}

export default autenticacionReducer;