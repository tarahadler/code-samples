//Step 1
import React from 'react'; 

//Step 2
class MoodBoard extends React.Component{
    constructor() {
        super();
        this.state = {
            mood: 'medium'
        }

        //binding section
        this.setMood = this.setMood.bind(this);
    }

    setMood(moodToSet){
        this.setState({
            mood: moodToSet
        });
    }

    render(){

        let msg; 
        if (this.state.mood === "sad") {
            msg = "don't no worry, be happy";
        } 
        else if (this.state.mood === "medium") {
            msg = "existentialism, amiright?";
        } 
        else {
            msg = "keep it up";
        }

        return (
            <div>
                <h2> {msg}  </h2>
                <button onClick={ ()=> { this.setMood('sad') }} > :( </button>
                <button onClick={ ()=> { this.setMood('medium') }} > :/ </button>
                <button onClick={ ()=> { this.setMood('happy') }} > :) </button>
            </div>
        );
    }
}

export default MoodBoard; 

