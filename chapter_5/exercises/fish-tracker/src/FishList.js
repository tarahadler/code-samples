import React from 'react';
import Fish from './Fish';

class FishList extends React.Component {
    render() {

        //loop over the array of fish in this.props.fish
        //for each fish obj, we will create a <Fish /> component 
        //and push it into the array

        //HERE IS THE LOOP WAY
        let fishJSX = [];
        for (let i = 0; i < this.props.fish.length; i++){
            //each time we loop thru, we create a fish component
            let currentFish = this.props.fish[i];

            fishJSX.push(<Fish name={currentFish.name}
                weight={currentFish.weight} 
                releaseFish={this.props.releaseFish}
                position={i}
                />); 

        }
        
        //HERE IS THE MAP WAY (to translate fish data obj into component)
      /*   let fishJSX = this.props.fish.map((fishObject)=> {
            return <Fish name={fishObject.name}
                            weight={fishObject.weight}
                            releaseFish={this.props.releaseFish}
                            />
        }) */


        //by the time we get here, fishJSX holds an array of <Fish >
        return (
            <ul>
                {/* we want to put a bunch of <Fish /> components here  */}
                {fishJSX}
            </ul>
        )
    }
}

export default FishList; 

// we want to use FishList like so: 
// <FishList fish={arrayOfFish} />

