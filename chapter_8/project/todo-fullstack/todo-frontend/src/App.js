import React, { Component } from 'react';
//import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import axios from 'axios';

class App extends Component {
  
  //Initializing state. 
  constructor(props) {
    super(props);
    this.state = {
        pendingTodo: "",
        todos: [],
        selectedOption: ''
    };
  }


//WEEK 8 TO-DO APP ADDITIONS: 
//Before doing this, make sure you've dealt with CORS issues, which allows us to bypass port issues (i.e. share port numbers). 
componentDidMount = () => {
  axios.get('http://localhost:8080/gettodos')
       .then(function (response) {
        console.log(response.data);
        let returnedData = response.data
        return returnedData;
      })
      .then((whatever) => {
        this.setState({
          todos: whatever
        })
      })
      .catch(error => {
        console.log(error);
      });
    };

addNewTodo = event => {
  let newTodo = {
    desc: this.state.pendingTodo, 
    stat: false
  }
  axios.post('http://localhost:8080/gettodos', newTodo)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })
    
      }

//I have not completed this method: 
removeTodos = () => {
  let incompletes = this.state.todos.filter(element => element.stat===false)

  axios.delete('http://localhost:8080/gettodos/' + _id)

  this.setState({
    todos: incompletes
  });
} 


//FROM WEEK 5 TO-DO APP
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
