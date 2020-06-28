import React, { Component } from 'react';
import Axios from 'axios';

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
    Axios
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
          markComplete={this._markComplete}
          onRemoveTodo={this._onRemoveTodo}
        />
      </React.Fragment>
    )
  }

  // private methods
  _markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    })
  }

  _onRemoveTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)})
  }
}

export default App;