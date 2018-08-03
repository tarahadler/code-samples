import React from 'react';

class TodoForm extends React.Component {

    render () {

        return (
            <div>
                <form onSubmit={this.props.addNewTodo}>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button 
                                className="btn btn-primary" type="submit">Add
                            </button>
                        </span>
                        <input 
                            className="form-control" 
                            placeholder="add a todo"
                            onChange={this.props.writeNewTodo}
                            value={this.props.pendingTodo} 
                            required
                        />
                    </div>
                </form>  
            </div>  
        )
    }
}

export default TodoForm; 