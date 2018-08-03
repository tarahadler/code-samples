import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import App from './App';


ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
