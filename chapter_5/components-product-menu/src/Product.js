//bring react into our file
import React from 'react';

function buttonClickHandler() {
    window.alert('button was clicked! XD');
} 

function h2ClickHandler(){
    console.log("h2 was clicked"); 
}

//create a component defn, which will be a class
class Product extends React.Component{
    //the one essential ingredient all component classes must have is this render method below
    render(){
        //the rend MUST return some JSX html that expresses how it should look
        //for now, just accept that if you want to access a prop whose name is x, then you will access it by doing "this.props.x"
        return (
        <div>
            <h2 onClick={h2ClickHandler}> {this.props.name} </h2>
            <h3 onClick={ ()=>{window.alert("price clicked!") } }> ${this.props.price} </h3>
            <p> {this.props.description} </p>
            <button onClick={buttonClickHandler}> Buy Product </button> 
        </div>
        )

    }
}

//use 'export default' to export the Product
export default Product; 

