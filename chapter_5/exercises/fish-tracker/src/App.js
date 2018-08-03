import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//You can delete this below, bc FishList includes Fish
//import Fish from './Fish.js';
import FishList from './FishList.js';
import FishForm from './FishForm.js';

class App extends Component {
  //any app that has state has a constructor
  //this below is initializing state
  constructor() {
    super();

    this.state = {
      fish: [
        {
          name: "minnow",
          weight: 0
        },
        {
          name: "goldfish",
          weight: 1
        }
      ]
    };

    //binding event handlers
    this.addFish = this.addFish.bind(this);
    this.releaseFish = this.releaseFish.bind(this);

  }

  releaseFish(index){
    //create a copy of array

    let copy = Array.from(this.state.fish);
    //modify copy
    copy.splice(index, 1);
    //use setState to set that copy as the new array
    this.setState({
      fish: copy
    });
  }

  addFish(name, weight){
    //take the name and weight, use them to construct fish object
    let newFish = {
      name: name, 
      weight: weight
    };
 console.log('adding fish')

    //then using the special React way, add the fish object to the
    //array in state

    //here's how to modify an array in state
    // 1. make a copy of the array in state

    let copy = Array.from(this.state.fish);

    // 2. modify the copy in the way you want
    copy.push(newFish);

    // 3. use setState to set the modified copy, as the new array in state 
    this.setState({
      fish: copy
    });

  }

  render() {
    return (
      <div className="App">
      {/* FishList needs the array, the array lives in app (state), for its fish input, pass the array of fish 
      
      This is what it looks like to pass a fn into a prop (directly below):
      */}
      
      <FishForm submitCallback={this.addFish} />
      <FishList fish={this.state.fish} releaseFish={ this.releaseFish } />
      
      {/* // 
      - we click button, 
      - onClick calls anon fn, 
      - anon calls addfish fn, 
      - addFish calls... 
      - when we setState (we i just modified the state, so re-render) 
      */}
      <button onClick={()=> {this.addFish('jaws', 100)} }>add jaws</button>
        
      </div>
    );
  }
}

export default App;
