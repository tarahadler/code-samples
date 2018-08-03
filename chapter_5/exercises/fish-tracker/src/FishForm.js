import React from 'react'; 

class FishForm extends React.Component {
    constructor(){
        //anytime we want to use 'this' in the constructor we must call super(); 
        super();

        //write our method bindings
        //* interpretation: 
        // on right hand side, we are taking our method and creating a bound version of it, where this ALWAYS points to the correct, 
        //then, on the left, we assign it back to itself
        this.collectData = this.collectData.bind(this);
    }
    collectData(event){
        //anytime a form gets submitted, the page refreshes by default. The line below prevents this from happening. 
        event.preventDefault(); 

        console.log('collectData ran');
        console.log(this.refs);


        //first grab the dom nodes for each input via our special ref names
        let textDOMNode = this.refs.nameInput;
        let selectDOMNode = this.refs.weightInput; 

        let name = textDOMNode.value;
        let weight = selectDOMNode.value;

        //below is same thing on 1 line
        // let name = this.refs.weightInput.value

        this.props.submitCallback(name, weight);



        // now we need to collect our data from the inputs



    }

    render () {
        return (
        <form onSubmit={this.collectData} >
            <span>
                <label>name</label>
                <input type="text" ref="nameInput" />
            </span>
            <span>
                <label>weight (lbs) </label>
                <select ref="weightInput">
                    <option value="0">0</option>
                    <option value="0">1</option>
                    <option value="0">2</option>
                    <option value="0">3</option>
                    <option value="0">4</option>
                </select>
            </span>
            <input type="submit" />
        </form>
        )    
    }

}

export default FishForm;