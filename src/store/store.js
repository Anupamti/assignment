import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../Redux/reducer';

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, reducer) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    // add any middlewares here
)

const persistor = persistStore(store);


export { store, persistor }


