import React from 'react';
import ReactDOM from 'react-dom';

//Root component
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

//Redux
//applyMiddleware para trabajar de acciones de forma asincrona
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

//thunk para trabajar de acciones de forma asincrona
import thunk from 'redux-thunk';

import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import configFireBase from '../src/configuracion/configFireBase';
import rootReducer from './components/Redux/reducers/rootReducer';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(configFireBase),
        reactReduxFirebase(configFireBase)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
