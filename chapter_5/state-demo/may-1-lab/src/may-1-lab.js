import React from 'react';

class NumberGenerator extends React.Component{
    constructor() {
        super(); 
        this.state = {
            randoNum: 5
        }
        //binding section here (not necessary w/ arrow functions)
        //this.setMood = this.setMood.bind(this);
    }
    setNumber = () => {
        this.setState({
            randoNum: Math.floor(Math.random()* 999)
        });
    }

    //render
    render(){
       

        return (
            <div> 
            <button onClick= { () => {this.setNumber()} }> Generate </button>
            <h2> {this.state.randoNum} </h2>
            </div>
        );
    }
}

export default NumberGenerator; 