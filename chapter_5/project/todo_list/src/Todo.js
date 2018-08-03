import React from 'react';

class Todo extends React.Component {

    render () {
   
        /* This IF/ELSE is a previous method I used for applying the strikethrough. I had Apurv's help with this, but I fully grasped it. However, later he ran into issues using this method. He helped me implement a new IF (no ELSE) that was much harder for me to follow. On Ben's suggestion, I tried a ternary operator directly below - and it works brilliantly :) 

        let labelJSX; 
        if (this.props.stat === true) {
            labelJSX = <label className="done">{this.props.desc}</label>;  
        } 
        else {
            labelJSX = <label>{this.props.desc}</label>
        }; */

        return (          
            <div className="color-checkbox">
            <li className="list-group-item">
                <input 
                    className="filled-in"
                    type="checkbox" 
                    checked={this.props.stat}
                    value="on" 
                    onChange={this.props.toggleHandler}
                />
                <label 
                    className={this.props.stat === true ? 'done' : ''}>
                    {this.props.desc}
                </label>
            </li>  
            </div> 
        )
    }
}

export default Todo; 