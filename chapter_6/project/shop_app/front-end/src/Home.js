import React from 'react'

//import {Route, Switch, Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <h1> Home </h1>
                <form onSubmit={this.props.addUsername}>
                    <div className="input-group">
                        <input 
                                className="form-control" 
                                placeholder="Hi, what's your name?"
                                onChange={this.props.writeUsername}
                                value={this.props.pendingName}
                                type="text"
                                required
                        />
                        <span className="input-group-btn">
                            <button 
                                className="btn btn-default" 
                                type="submit">Add
                            </button>
                        </span>
                       
                    </div>
                </form>  
            </div>
        )
    }
}

export default Home; 