import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from './reducers/index';
import storage from 'redux-persist/lib/storage';

// Make persistent
const config = { key: 'root', storage };
const persistedReducer = persistReducer(config, reducers);

// Redux dev tool
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(persistedReducer, devTools);
export const persistor = persistStore(store);