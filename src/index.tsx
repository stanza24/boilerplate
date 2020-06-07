import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './app/store';

import App from './app';
import Loader from './app/components/Loader';

const SSR = process.env.RENDER_TYPE === 'ssr';

ReactDOM[`${SSR ? 'hydrate' : 'render'}`](
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);