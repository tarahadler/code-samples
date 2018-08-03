import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';


ReactDOM.render(<Router>
                    <App />
                </Router>, document.getElementById('root'));
registerServiceWorker();
