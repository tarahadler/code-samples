import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Poetry from './Poetry';
import About from './About';

ReactDOM.render(
    <Router>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
                <Switch>
                    {/* If we want to pass Props, use the 'render' prop as shown below. It takes a fn that returns what you want to render. */}
                    <Route exact path="/" render={ (props) => {return <Poetry mood="meh" match={props.match}/>} } />
                    <Route path="/about" component={About} />
                </Switch>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
