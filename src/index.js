import React from 'react';
import ReactDOM from 'react-dom';

import { store, persistor } from './utils/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);
