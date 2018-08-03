import './App.css';
import Home from './Home'
import Shop from './Shop'

import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pendingName: "",
    };
    //Binding goes here if necessary...
}


  writeUsername = event => 
    this.setState({ pendingName: event.target.value })

  addUsername = event => {
      event.preventDefault();
      this.setState({ 
        userName: this.state.pendingName, 
        pendingName: ""
      }); 
      let storedName = this.state.pendingName;
      localStorage.setItem("name", (storedName))
    };

  componentDidMount() {
    let storedName = this.state.pendingName;
    console.log(localStorage.name);
    localStorage.getItem("name", JSON.stringify(storedName))
  }
 

  render() {
    return (
      <div className="App">
            <header className="App-header">
              <h1 className="App-title"><span>product</span><b>Station</b></h1>
            </header>
       
            <nav className="main-nav">
            <Link to="/"> Home </Link>
            <Link to="/shop"> Shop </Link>
            </nav>

            <Switch>
            {/* To pass Props, use the 'render' prop as shown below. It takes a fn that returns what you want to render. */}
              <Route 
                exact path="/" 
                render={ (props) => { return <Home 
                  pendingName={this.state.pendingName} 
                  writeUsername={this.writeUsername} 
                  addUsername={this.addUsername} 
                  match={props.match}/> } } 
                  />
              <Route 
                path="/shop" 
                render={ (props) => { return <Shop 
                  match={props.match}/> } } 
                  />
            </Switch>
      </div>
    );
  }
}

export default App;
