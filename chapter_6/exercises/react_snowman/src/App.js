import React, { Component } from 'react';
import Snowman from './Snowman'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="navBar">
          <h1>SNOWMAN</h1>
        </div>
        <Snowman />
      </div>
    );
  }
}

export default App;
