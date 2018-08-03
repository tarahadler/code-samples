import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';

import request from 'request';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deal: {}
    };
  }

  componentWillMount(){
    //use request to hit the backend to get the dealData
    request.get('http://localhost:8080/dailydeals', (err, resp, body) => {
      if(err){
        window.alert('error!');
      }
      else{
        this.setState({
          deal: JSON.parse(body)
        })
      }
    })

    //once we get it, let's set it on state

  }

  render() {
    return (

      <div className="App">
        <Router>
            <div>
              <nav>
                <Link to="/">   Home  </Link>
                <Link to="/about">  About  </Link>
              </nav>
              {/* 
                show <Home /> on path '/'
                show <Menu /> on path '/menu'
              */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/menu" render={ ()=>{return <Menu deal={this.state.deal}/>}  } />
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
