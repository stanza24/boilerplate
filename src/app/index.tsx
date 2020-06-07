import React from 'react';
import Routes from './routes';

import { BrowserRouter } from 'react-router-dom';

import './styles/style.less';

const App = (): React.ReactElement => (
    <BrowserRouter>
         <Routes />
    </BrowserRouter>
);

export default App;