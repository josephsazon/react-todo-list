import React from 'react';

// components
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.todos.map(todo => {
          return (
            <TodoItem 
              todo={todo} 
              onMarkTodo={this.props.onMarkTodo}
              onRemoveTodo={this.props.onRemoveTodo}
            />
          )
        })}
      </React.Fragment>
    )
  }
}

export default TodoList;