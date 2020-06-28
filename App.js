import React, { Component } from 'react';

// components
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';

// styles
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Item 1',
        completed: false
      },
      {
        id: 2,
        title: 'Item 2',
        completed: false
      }
    ]
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