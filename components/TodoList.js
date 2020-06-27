import React from 'react';

// components
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {
  constructor() {
    super();

    this.todoList = [
      {
        id: 1,
        title: 'Item 1',
        completed: false
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        {this.todoList.map(todoItem => {
          return (
            <TodoItem todo={todoItem}/>
          )
        })}
      </React.Fragment>
    )
  }
}

export default TodoList;