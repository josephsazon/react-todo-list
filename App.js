import React, { Component } from 'react';
import axios from 'axios';

// components
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';

// styles
import './App.css';

class App extends Component {
  // state
  state = {
    todos: [],
  }

  // lifecycle methods
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        this.setState({ todos: response.data })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Header 
          header="Todo List"
        />
        <TodoList 
          todos={this.state.todos}
          onMarkTodo={this._onMarkTodo}
          onRemoveTodo={this._onRemoveTodo}
        />
      </React.Fragment>
    )
  }

  // private methods
  _onMarkTodo = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  }

  _onRemoveTodo = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
}

export default App;