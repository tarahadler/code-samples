import React from 'react';

class Fish extends React.Component {
    render () {
        return (
            <li>
                <h2> name: {this.props.name} </h2> 
                <p> {this.props.weight} lbs </p> 
                <button 
                    onClick={this.props.releaseFish(this.props.position)}>
                    release {this.props.name} </button>
            </li>
        )
    }

}

export default Fish; 

//Component Design
//we will create fish like this:
// <Fish name="rhut" weigh={0} />