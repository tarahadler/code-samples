import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NumberGenerator from './may-1-lab.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberGenerator />
      </div>
    );
  }
}

export default App;
