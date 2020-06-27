import React, { Component } from 'react';

// components
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          header="Todo List"
        />
        <TodoList />
      </React.Fragment>
    )
  }
}

export default App;