import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Me from './Me';
import MyDog from './MyDog';

export default class About extends React.Component{
    render(){
        return(
            <div>
                    <h1>About</h1>
                    <p>This is a page about me and my puppy. </p>
                    <nav>
                        <Link to="/about/me">ME</Link>
                        <Link to="/about/mydog">MyPUPPY</Link>
                    </nav>
                    <Switch>
                        <Route path='/about/me' component={Me} />
                        <Route path='/about/mydog' component={MyDog} />
                    </Switch>
            </div>
        );
    }
}