import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

    render () {

        let todoJSX = this.props.todos.map((todoObject, index) => {
            return <Todo 
                key={index} 
                desc={todoObject.desc} 
                stat={todoObject.stat} 
                toggleHandler={() => this.props.toggleTodoStatusAt(index)} 
                removeTodos={this.props.removeTodos}
                />
        })

        return (
            <ul className="list-group">
              {todoJSX}
            </ul>    
        )
    }
}

export default TodoList; 