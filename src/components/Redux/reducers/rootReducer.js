import { combineReducers } from 'redux';
import autenticacionReducer from './autenticacionReducer';
import proyectosReducer from './proyectosReducer';
import clientesReducer from './clientesReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    autenticacion: autenticacionReducer,
    proyectos: proyectosReducer,
    clientes: clientesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;