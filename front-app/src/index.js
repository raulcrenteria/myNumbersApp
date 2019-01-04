import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//para que Antd funcione
import 'antd/dist/antd.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
//PAra las rutas
import { BrowserRouter } from 'react-router-dom';
const WithRouter = () => (
    <BrowserRouter>
            <App/>
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
