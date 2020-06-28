import React, { Component } from 'react';
import Axios from 'axios';

// components
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';

// styles
import './App.css';

class App extends Component {
  state = {
    todos: [],
  }

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
          markComplete={this.markComplete}
        />
      </React.Fragment>
    )
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    })
  }
}

export default App;