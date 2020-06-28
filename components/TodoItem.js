import React from 'react';

// import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      borderBottom: "1px dotted black",
      padding: "5px 0",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <React.Fragment>
        <div className="todo-item" style={this.getStyle()}>
          <input 
            className="todo-item__checkbox"
            type="checkbox" 
            defaultChecked={completed} 
            onChange={this.props.onMarkTodo.bind(this, id)}
            >
          </input>
          <span className="todo-item__label">
            {title}
          </span>
          <button 
            className="todo-item__remove-btn"
            style={btnStyle}  
            onClick={this.props.onRemoveTodo.bind(this, id)}
          >
            x
          </button>
        </div>
      </React.Fragment>
    )
  }
}

const btnStyle = {
  background: "lightgray",
  border: "0px",
  borderRadius: "15px",
  float: "right"
}

export default TodoItem;