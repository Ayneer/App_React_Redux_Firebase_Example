import { combineReducers } from 'redux';
import autenticacionReducer from './autenticacionReducer';
import proyectosReducer from './proyectosReducer';
import clientesReducer from './clientesReducer';

const rootReducer = combineReducers({
    autenticacion: autenticacionReducer,
    proyectos: proyectosReducer,
    clientes: clientesReducer
});

export default rootReducer;