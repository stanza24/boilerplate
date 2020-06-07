import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from '../sagas'
import rootReducer from '../reducers';
import middleware, { sagaMiddleware } from './middleware';

const persistConfig = {
    key: '',
    storage: storage,
    whitelist: [],
}

const pReducer = persistReducer(
    persistConfig,
    rootReducer
)

const configStore = (initialState = {}) => {
    const store = createStore(pReducer, 
        compose(applyMiddleware(...middleware),
        // DevTools
        ));
  
    sagaMiddleware.run(rootSaga);

    return {
      persistor: persistStore(store),
      store,
    };
};

const { store, persistor } = configStore();

export { store, persistor };