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

import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, reactReduxFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import configFireBase from '../src/configuracion/configFireBase';
import rootReducer from './components/Redux/reducers/rootReducer';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(configFireBase)
));

const rrfProps = { firebase: configFireBase, config: configFireBase, dispatch: store.dispatch, createFirestoreInstance }

ReactDOM.render(<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
