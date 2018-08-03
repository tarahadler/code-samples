import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoodBoard from './MoodBoard'; 

class App extends Component {
  // If a component has state, then it MUST have a constructor method to initialize it. 
  constructor(){
    // If we have state, then in the constructor(), we must call super()

    // We must call super before we use 'this' in the constructor. 
    super();
    // In a constructor, 'this' will pooint to the new bobj being constructed. 

    //In this reace case, the new object represent a new copy of this component. It's inside the new object that state will live. 
    this.state = {
      timesClicked: 0
    };
  
  //Here, we are creating another version of the clickHandler method where we force 'this' to point to the component object (which is what we want). Then we assign that bound version to this.clickHandler TL:DR this ensure that when clickHandler runs, it knows that 'this' point to the instance object. 

  this.clickHandler = this.clickHandler.bind(this);
    
  }

  clickHandler(){
    console.log("Click handler ran.");

    /* We MUST use this.setState() to change state. This is how React knows that state changed. 
    
    We provide to setState, an object that specifies the new values for any state properties that are changing. If you never call setState, then the component shouldn't be in state (changing). */
    this.setState( {
      timesClicked: this.state.timesClicked + 1
    });
  }


  render() {
    return (
      <div className="App">
        <h2> I have been clicked { this.state.timesClicked } times. </h2>
        <button onClick={ this.clickHandler }> Click me if you dare! 
        </button>
        <MoodBoard />
        
      </div>
    );
  }
}

export default App;
