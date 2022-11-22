import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import data from './data';
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App props={data}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);