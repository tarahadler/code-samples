import React, { Component } from 'react';
//import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  
  //Initializing state. 
  constructor(props) {
    super(props);
    this.state = {
        pendingTodo: "",
        todos: [
            {
                desc: "Walk puppy",
                stat: true 
            },
            {
                desc: "Play with puppy",
                stat: true 
            },
            {
                desc: "Feed puppy",
                stat: false 
            },
            {
                desc: "Playdate with puppy",
                stat: true 
            }
        ],
        selectedOption: ''
    };
  }

//This function takes index as argument. Using map, it finds the corresponding array in State and switches the Boolean corresponding to the Todo status. 
toggleTodoStatusAt = indexToChange => {
  this.setState({
    //Loop through Todos array (with map) and identify which Todo to change.
    todos: this.state.todos.map((todo, index) => {
      if (index === indexToChange) {
        return {
          desc: todo.desc,
          stat: !todo.stat
        };
      }
      return todo;
    })
  })
};

writeNewTodo = event => 
  this.setState({ pendingTodo: event.target.value})

addNewTodo = event => {
  event.preventDefault();
  this.setState({ 
    todos: [
      {
        desc: this.state.pendingTodo,
        stat: false
      },
      /* Using spread operator */
      ...this.state.todos
    ],
    pendingTodo: ""
  })
};


removeTodos = () => {

  let incompletes = this.state.todos.filter(element => element.stat===false)

  /*  Long hand of what's actually happening above.  
  filter(function(element) {
      element.stat===false
    });  */
    
  this.setState({
    todos: incompletes
  });
} 

/* removeTodos = () => {
  const todos = this.state.todos.filter()
  this.setState({
    todos: [
      ...this.state.todos.slice(0, index), 
      ...this.state.todos.slice(index + 1), 
    ]
  });
} */


/* changeSelectedOption(selectedOption){
  this.setState({
    selectedOption: selectedOption
  });
} */

  render() {
    return (
      <div className="container">
        <h1 className="text-center">todos</h1>

        <TodoForm  
          pendingTodo={this.state.pendingTodo}
          writeNewTodo={this.writeNewTodo}
          addNewTodo={this.addNewTodo}
        />
        

        <TodoList 
          /* Passing Todos array (State) into TodoList component as a Prop. */ 
          todos={this.state.todos}
          
          /* Passing toggle method into TodoList component also as a Prop. */
          toggleTodoStatusAt={this.toggleTodoStatusAt}

          /* Passing remove method into TodoList component also as a Prop. */
          removeTodos={ this.removeTodos }
          />

     
        <select className="special-dd">
            <option  value="all">all</option>
            <option value="active">active</option>
            <option value="complete">complete</option>
        </select>
          
        <button 
               className="pull-right btn btn-default"
               onClick={(event) => {this.removeTodos()}}
               >Clear Complete
        </button>
    </div>
    );
  }
}

export default App;
